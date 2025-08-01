provider "hcloud" {
  token = var.hcloud_token
}

resource "hcloud_primary_ip" "ipv4" {
  name          = "primary_ipv4-${var.env}"
  datacenter    = var.datacenter
  type          = "ipv4"
  assignee_type = "server"
  auto_delete   = false
}

resource "hcloud_primary_ip" "ipv6" {
  name          = "primary_ipv6-${var.env}"
  datacenter    = var.datacenter
  type          = "ipv6"
  assignee_type = "server"
  auto_delete   = false
}

resource "hcloud_ssh_key" "github_actions" {
  name       = "github-actions-${var.env}"
  public_key = var.ssh_key
}

resource "hcloud_server" "server" {
  name        = "${var.project_name}-${var.env}"
  image       = var.image
  server_type = var.server_type
  datacenter  = var.datacenter
  public_net {
    ipv4_enabled = true
    ipv4         = hcloud_primary_ip.ipv4.id
    ipv6_enabled = true
    ipv6         = hcloud_primary_ip.ipv6.id
  }
  ssh_keys = [hcloud_ssh_key.github_actions.id]
}
