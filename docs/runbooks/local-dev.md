# Local Development Runbook

This guide covers setting up and running the 3MS Janitorial project locally.

## Prerequisites

### Required Software

| Software | Version | Installation |
|----------|---------|--------------|
| Node.js | >= 20.0.0 | [nodejs.org](https://nodejs.org/) or nvm |
| pnpm | >= 9.0.0 | `npm install -g pnpm` |
| Git | >= 2.x | System package manager |

### Verify Installation

```bash
node --version   # Should show v20.x.x or higher
pnpm --version   # Should show 9.x.x or higher
git --version    # Should show 2.x.x or higher
```

## Initial Setup

### 1. Clone Repository

```bash
git clone <repository-url> 3msjanitorial
cd 3msjanitorial
```

### 2. Install Dependencies

```bash
pnpm install
```

This installs dependencies for all packages and apps in the monorepo.

### 3. Build Contracts Package

The web app depends on the contracts package. Build it first:

```bash
pnpm --filter @3msjanitorial/contracts build
```

Or build everything:

```bash
pnpm build
```

## Running the Development Server

### Start All Apps

```bash
pnpm dev
```

This starts Turborepo's dev task which runs all apps with development servers.

### Start Only Web App

```bash
pnpm --filter @3msjanitorial/web dev
```

The web app will be available at `http://localhost:3000`.

## Common Development Tasks

### Linting

```bash
# Check for lint errors
pnpm lint

# Auto-fix lint errors
pnpm lint:fix
```

### Type Checking

```bash
pnpm typecheck
```

### Formatting

```bash
# Format all files
pnpm format

# Check formatting without fixing
pnpm check
```

### Building

```bash
# Build all packages and apps
pnpm build

# Build specific package
pnpm --filter @3msjanitorial/contracts build

# Build specific app
pnpm --filter @3msjanitorial/web build
```

### Cleaning

```bash
# Remove all build artifacts and node_modules
pnpm clean
```

## Project Structure

```
3msjanitorial/
├── apps/
│   ├── web/          # React web application
│   ├── api/          # NestJS API (Phase 2)
│   └── agent/        # Python agent (Phase 4)
├── packages/
│   └── contracts/    # Shared Zod schemas
├── infra/            # Infrastructure configs
├── docs/             # Documentation
├── package.json      # Root package.json
├── pnpm-workspace.yaml
├── turbo.json        # Turborepo config
├── biome.json        # Linting/formatting config
└── tsconfig.base.json
```

## IDE Setup

### VS Code (Recommended)

Install recommended extensions:
- Biome (`biomejs.biome`)
- TypeScript Vue Plugin (for better TS support)

Settings (`.vscode/settings.json`):
```json
{
  "editor.defaultFormatter": "biomejs.biome",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  }
}
```

### WebStorm/IntelliJ

1. Enable Biome plugin
2. Set Biome as default formatter
3. Enable format on save

## Troubleshooting

### "Cannot find module @3msjanitorial/contracts"

The contracts package needs to be built before the web app can import from it:

```bash
pnpm --filter @3msjanitorial/contracts build
```

### Port 3000 Already in Use

Change the port in `apps/web/vite.config.ts`:

```typescript
server: {
  port: 3001, // Change to available port
}
```

### pnpm Install Fails

Try clearing the cache:

```bash
pnpm store prune
rm -rf node_modules
pnpm install
```

### TypeScript Errors in IDE

Restart the TypeScript server:
- VS Code: `Cmd/Ctrl + Shift + P` → "TypeScript: Restart TS Server"
- WebStorm: File → Invalidate Caches and Restart

### Turbo Cache Issues

Clear Turborepo cache:

```bash
rm -rf .turbo
pnpm build
```

## Working with Contracts

When modifying schemas in `packages/contracts`:

1. Make changes to schema files
2. Rebuild the package: `pnpm --filter @3msjanitorial/contracts build`
3. TypeScript should pick up the changes in consuming apps

For active development, use watch mode:

```bash
pnpm --filter @3msjanitorial/contracts dev
```

## Form Testing

The Request a Quote form (`/contact`) stores submissions in localStorage. To view stored leads:

1. Open browser DevTools
2. Go to Application → Local Storage
3. Look for `leads` key

To clear test data:
```javascript
localStorage.removeItem('leads');
```

## Browser Support

The web app targets modern browsers:
- Chrome/Edge 90+
- Firefox 90+
- Safari 14+

No IE11 support.
