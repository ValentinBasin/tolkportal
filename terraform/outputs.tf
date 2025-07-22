output "ip_address" {
  value = hcloud_server.server.ipv4_address
}
output "aws_access_key_backup" {
  value     = aws_iam_access_key.backup_user_key.id
  sensitive = true
}

output "aws_secret_key_backup" {
  value     = aws_iam_access_key.backup_user_key.secret
  sensitive = true
}

output "aws_access_key_mediafiles" {
  value     = aws_iam_access_key.media_files_access_key.id
  sensitive = true
}

output "aws_secret_key_mediafiles" {
  value     = aws_iam_access_key.media_files_access_key.secret
  sensitive = true
}
