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

Configuration files:
- `traefik.yml` - Static configuration (entrypoints, providers, logging)
- `dynamic/middlewares.yml` - Reusable middleware (security headers, rate limiting, CORS)
- `dynamic/tls.yml` - TLS options and certificate configuration

#### Promtail (`/promtail`)

Promtail collects and ships logs to Loki:
- Application logs from all services
- Traefik access logs
- System logs

Configuration files:
- `promtail.yml` - Log collection with Docker service discovery

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
| Phase 1 | Local development only | Complete |
| Phase 2 | API deployment | Planned |
| Phase 3 | Full stack with calendar | Planned |
| Phase 4 | Agent service + Auth0 | Planned |
| Phase 5 | Observability + monitoring | Planned |

## Quick Start

### 1. Copy Environment File

```bash
cp .env.example .env
# Edit .env with your values
```

### 2. Start Infrastructure (Development)

```bash
cd infra
docker compose up -d
```

This starts:
- **Traefik** on ports 8880 (HTTP), 8443 (HTTPS), 9080 (Dashboard)
- **Promtail** for log collection

### 3. Access Services

| Service | URL |
|---------|-----|
| Traefik Dashboard | http://localhost:9080/dashboard/ |
| Web App (when enabled) | http://localhost:8880 |

### 4. View Logs

```bash
docker compose logs -f traefik
docker compose logs -f promtail
```

### 5. Stop Infrastructure

```bash
docker compose down
```

## Port Mapping

Since ports 80/443 are in use on the host, development uses alternate ports:

| Service | Internal Port | Host Port |
|---------|---------------|-----------|
| Traefik HTTP | 80 | 8880 |
| Traefik HTTPS | 443 | 8443 |
| Traefik Dashboard | 8080 | 9080 |

## Local Development (Without Docker)

For local development, use the monorepo's development server:

```bash
pnpm dev
```

This runs Vite's dev server with hot reload. No infrastructure setup required.
