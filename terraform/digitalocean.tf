provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_vpc" "app_vpc" {
  region   = var.do_region
  name     = var.do_vpc_name
  ip_range = "10.0.0.0/16"
}

resource "digitalocean_ssh_key" "my_key" {
  name       = "github-actions"
  public_key = var.ssh_key
}

resource "digitalocean_droplet" "app_server" {
  name     = "tolkportal"
  region   = var.do_region
  image    = "ubuntu-24-04-x64"
  size     = "s-1vcpu-2gb"
  vpc_uuid = digitalocean_vpc.app_vpc.id
  ssh_keys = [digitalocean_ssh_key.my_key.id]
  ipv6     = true
}

resource "digitalocean_firewall" "app_firewall" {
  name        = "allow-ssh-http-https"
  droplet_ids = [digitalocean_droplet.app_server.id]
  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "80"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  outbound_rule {
    protocol              = "tcp"
    port_range            = "all"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}

output "ip_address" {
  value = digitalocean_droplet.app_server.ipv4_address
}

