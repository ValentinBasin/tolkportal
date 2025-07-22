provider "aws" {
  region = var.aws_region
}

resource "aws_s3_bucket" "backup" {
  bucket = "${var.env}-${var.backup_bucket_name}"
  tags = {
    Environment = var.env
    Project     = var.project_name
  }
}

# --- Backup infrastructure ---
resource "aws_s3_bucket_lifecycle_configuration" "backup_rotation" {
  bucket = aws_s3_bucket.backup.id
  rule {
    id = "backup-rotation"

    filter {
      prefix = "backups/"
    }

    transition {
      days          = 5
      storage_class = "GLACIER"
    }

    expiration {
      days = 30
    }

    status = "Enabled"
  }
}

resource "aws_iam_policy" "s3_backup_policy" {
  name        = "S3BackupPolicy${var.env}"
  description = "Policy for server to upload backups to S3"
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = ["s3:PutObject", "s3:ListBucket"]
        Resource = [
          aws_s3_bucket.backup.arn,
          "${aws_s3_bucket.backup.arn}/backups/*"
        ]
      }
    ]
  })
  tags = {
    Environment = var.env
    Project     = var.project_name
  }
}

resource "aws_iam_user" "backup_user" {
  name = "${var.project_name}-${var.env}-backup_user"
  tags = {
    Environment = var.env
    Project     = var.project_name
  }
}

resource "aws_iam_user_policy_attachment" "backup_user_policy_attachment" {
  user       = aws_iam_user.backup_user.name
  policy_arn = aws_iam_policy.s3_backup_policy.arn
}

resource "aws_iam_access_key" "backup_user_key" {
  user = aws_iam_user.backup_user.name
}

# ---Media storage infrastucture---
resource "aws_s3_bucket" "media_files_bucket" {
  bucket = "${var.env}-${var.media_files_bucket_name}"
  tags = {
    Environment = var.env
    Project     = var.project_name
  }
}

resource "aws_s3_bucket_public_access_block" "media_files_block" {
  bucket                  = aws_s3_bucket.media_files_bucket
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_versioning" "media_files_versioning" {
  bucket = aws_s3_bucket.media_files_bucket
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "media_files_encryption" {
  bucket = aws_s3_bucket.media_files_bucket
  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_cors_configuration" "media_files_cors" {
  bucket = aws_s3_bucket.media_files_bucket

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "PUT", "POST", "DELETE", "HEAD"]
    allowed_origins = [
      "https://${var.api_subdomain_name}.${var.domain_name}",
      "https://${var.subdomain_name == "@" ? var.domain_name : "${var.subdomain_name}.${var.domain_name}"}"
    ]
    expose_headers  = []
    max_age_seconds = 3000
  }
}

# ---User and policy for mediafiles bucket---
resource "aws_iam_user" "media_files_user" {
  name = "${var.project_name}-${var.env}-mediafiles-user"
  tags = {
    Project     = var.project_name
    Environment = var.env
  }
}

resource "aws_iam_policy" "media_files_policy" {
  name        = "${var.project_name}-${var.env}-mediafiles-policy"
  description = "IAM policy for Klot backend to access to S3"
  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = [
          "s3:PutObject",
          "s3:PutObjectAcl",
          "s3:GetObject",
          "s3:ListBucket",
          "s3:DeleteObject"
        ],
        Resource = [
          aws_s3_bucket.media_files_bucket.arn,
          "${aws_s3_bucket.media_files_bucket.arn}/*"
        ]
      }
    ]
  })
  tags = {
    Project     = var.project_name
    Environment = var.env
  }
}

resource "aws_iam_user_policy_attachment" "media_files_policy_attachment" {
  user       = aws_iam_user.media_files_user.name
  policy_arn = aws_iam_policy.media_files_policy
}

resource "aws_iam_access_key" "media_files_access_key" {
  user = aws_iam_user.media_files_user
}
