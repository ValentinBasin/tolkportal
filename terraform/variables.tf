variable "hcloud_token" {
  sensitive = true
  type      = string
}

variable "cloudflare_api_token" {
  sensitive = true
  type      = string
}

variable "server_type" {
  type    = string
  default = "cx22"
}

variable "image" {
  type    = string
  default = "ubuntu-24.04"
}

variable "datacenter" {
  type    = string
  default = "fsn1-dc14"
}

# variable "zone_id" {
#   type = string
# }

variable "domain_name" {
  type = string
}

variable "subdomain_name" {
  type    = string
  default = "@"
}

variable "api_subdomain_name" {
  type    = string
  default = "api"
}

variable "server_name" {
  type    = string
  default = "klot"
}

# variable "aws_region" {
#   type = string
# }
#
# variable "backup_bucket_name" {
#   type = string
# }

variable "ssh_key" {
  type = string
}

# variable "do_token" {
#   type = string
# }
#
# variable "do_region" {
#   type    = string
#   default = "fra1"
# }
#
# variable "do_vpc_name" {
#   type    = string
#   default = "tolkportal-vpc"
# }
