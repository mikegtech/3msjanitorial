# Release Runbook

This guide covers the release process for the 3MS Janitorial project.

## Current Phase: Phase 1 (Local Development Only)

In Phase 1, there is no deployment target. This document outlines the planned release process for future phases.

## Pre-Release Checklist

Before any release:

- [ ] All tests pass (when implemented)
- [ ] Linting passes: `pnpm lint`
- [ ] Type checking passes: `pnpm typecheck`
- [ ] Build succeeds: `pnpm build`
- [ ] Manual testing of critical paths
- [ ] Documentation updated
- [ ] CHANGELOG updated (when implemented)

## Version Management

We use [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes (backwards compatible)

## Build Process

### 1. Clean Build

```bash
pnpm clean
pnpm install
pnpm build
```

### 2. Verify Build Output

```bash
# Check web app build
ls -la apps/web/dist/

# Check contracts package build
ls -la packages/contracts/dist/
```

### 3. Preview Production Build

```bash
cd apps/web
pnpm preview
```

Visit `http://localhost:4173` to verify the production build.

## Deployment Targets (Future Phases)

### Phase 2+: Web Application

**Target**: VPS with Traefik reverse proxy

**Build artifacts**:
- `apps/web/dist/` - Static files for web server

**Deployment method** (planned):
1. Build on CI/CD
2. Upload to VPS
3. Nginx/Traefik serves static files

### Phase 2+: API Application

**Target**: Docker container on VPS

**Deployment method** (planned):
1. Build Docker image
2. Push to registry
3. Pull and deploy on VPS

### Phase 4+: Agent Service

**Target**: Docker container on VPS

**Deployment method** (planned):
1. Build Docker image with uv
2. Push to registry
3. Pull and deploy on VPS

## Environment Configuration

### Web Application

Environment variables (set during build):

| Variable | Description | Phase |
|----------|-------------|-------|
| `VITE_API_URL` | Backend API endpoint | Phase 2 |
| `VITE_AUTH0_DOMAIN` | Auth0 domain | Phase 4 |
| `VITE_AUTH0_CLIENT_ID` | Auth0 client ID | Phase 4 |

### API Application (Phase 2+)

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | JWT signing secret |
| `SMTP_*` | Email configuration |

## Rollback Procedure

### Web Application

1. Identify the last known good version
2. Rebuild from that commit
3. Redeploy static files

### API Application

1. Stop current container
2. Start previous version container
3. Verify connectivity

## Monitoring Post-Release

### Health Checks (Phase 5)

- Web app: Check HTTP 200 on `/`
- API: Check HTTP 200 on `/health`
- Agent: Check HTTP 200 on `/health`

### Logs (Phase 5)

View logs in Grafana dashboard:
- Access logs
- Error logs
- Application logs

## Release Notes Template

```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New feature description

### Changed
- Change description

### Fixed
- Bug fix description

### Security
- Security fix description
```

## Emergency Procedures

### Site Down

1. Check VPS connectivity
2. Check Traefik logs
3. Check Cloudflare status
4. Restart affected services

### Database Issues (Phase 2+)

1. Check database connectivity
2. Review recent migrations
3. Check disk space
4. Consider rollback if recent deploy

## Contact

For release issues, contact the development team.

---

**Note**: This runbook will be expanded as deployment infrastructure is implemented in later phases.
