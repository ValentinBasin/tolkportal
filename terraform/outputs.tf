output "ip_address" {
  value = hcloud_server.server.ipv4_address
}
output "aws_access_key" {
  value     = aws_iam_access_key.backup_user_key.id
  sensitive = true
}

output "aws_secret_key" {
  value     = aws_iam_access_key.backup_user_key.secret
  sensitive = true
}
