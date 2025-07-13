provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

data "cloudflare_zone" "dns_zone" {
  filter = {
    name = var.domain_name
  }
}

resource "cloudflare_dns_record" "dns_a" {
  zone_id = data.cloudflare_zone.dns_zone.zone_id
  name    = var.subdomain_name
  type    = "A"
  content = hcloud_server.server.ipv4_address
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "dns_api_a" {
  zone_id = data.cloudflare_zone.dns_zone.zone_id
  name    = var.api_subdomain_name
  type    = "A"
  content = hcloud_server.server.ipv4_address
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "dns_aaaa" {
  zone_id = data.cloudflare_zone.dns_zone.zone_id
  name    = var.subdomain_name
  type    = "AAAA"
  content = hcloud_server.server.ipv6_address
  proxied = true
  ttl     = 1
}

resource "cloudflare_dns_record" "dns_api_aaaa" {
  zone_id = data.cloudflare_zone.dns_zone.zone_id
  name    = var.api_subdomain_name
  type    = "AAAA"
  content = hcloud_server.server.ipv6_address
  proxied = true
  ttl     = 1
}
