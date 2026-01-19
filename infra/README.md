# Infrastructure

This directory contains infrastructure configuration for deploying 3MS Janitorial services.

## Planned Architecture

### VPS Deployment

The application will be deployed on a single VPS with the following stack:

```
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare Tunnel                         │
│               (SSL termination, DDoS protection)             │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                        Traefik                               │
│              (Reverse proxy, routing, middleware)            │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Web App   │  │     API     │  │   Agent Service     │  │
│  │  (Static)   │  │  (NestJS)   │  │    (Python/uv)      │  │
│  │  Port 3000  │  │  Port 4000  │  │     Port 5000       │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     Observability                            │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Promtail   │  │    Loki     │  │      Grafana        │  │
│  │ (Log ship)  │  │ (Log store) │  │   (Dashboards)      │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Components

#### Traefik (`/traefik`)

Traefik serves as the reverse proxy and handles:
- HTTP to HTTPS redirection (when not using Cloudflare Tunnel)
- Path-based routing to services
- Automatic certificate management (Let's Encrypt)
- Request rate limiting
- Security headers middleware

Configuration files (to be added):
- `traefik.yml` - Static configuration
- `dynamic/` - Dynamic configuration for services
- `docker-compose.yml` - Traefik container setup

#### Promtail (`/promtail`)

Promtail collects and ships logs to Loki:
- Application logs from all services
- Traefik access logs
- System logs

Configuration files (to be added):
- `promtail.yml` - Log collection configuration
- Labels for service identification

### Cloudflare Tunnel

Using Cloudflare Tunnel provides:
- Zero-trust access to the VPS
- No exposed ports (no public IP needed)
- Built-in DDoS protection
- SSL/TLS termination at Cloudflare edge
- Simple DNS management

Setup steps (Phase 5):
1. Create tunnel in Cloudflare dashboard
2. Install `cloudflared` on VPS
3. Configure tunnel to point to Traefik
4. Set DNS records to use tunnel

### Environment Requirements

- VPS: 2 vCPU, 4GB RAM minimum (8GB recommended)
- OS: Ubuntu 22.04 LTS or Debian 12
- Docker & Docker Compose
- `cloudflared` for tunnel

### Security Considerations

- All services run in Docker containers with limited privileges
- Secrets managed via Docker secrets or environment files (not committed)
- Database (if needed) only accessible from internal Docker network
- Regular security updates via automated patching

## Deployment Phases

| Phase | Components | Status |
|-------|------------|--------|
| Phase 1 | Local development only | Current |
| Phase 2 | API deployment | Planned |
| Phase 3 | Full stack with calendar | Planned |
| Phase 4 | Agent service + Auth0 | Planned |
| Phase 5 | Observability + monitoring | Planned |

## Local Development

For local development, use the monorepo's development server:

```bash
pnpm dev
```

This runs Vite's dev server with hot reload. No infrastructure setup required.
