# ADR-0001: Monorepo Tooling Selection

## Status

Accepted

## Date

2026-01-19

## Context

We need to establish the foundational tooling for the 3MS Janitorial project. The project will eventually include:

- A public-facing marketing website (React)
- A backend API (NestJS)
- An AI agent service (Python)
- Shared code/contracts between services

Key requirements:
- Fast development iteration
- Type safety across the stack
- Code sharing between packages
- Consistent code style
- Future extensibility for mobile apps

## Decision

We will use the following toolchain:

### Package Manager: pnpm

**Rationale:**
- Strict dependency resolution prevents phantom dependencies
- Efficient disk usage via content-addressable storage
- Excellent workspace support for monorepos
- Faster than npm/yarn for most operations
- Native support in most CI/CD systems

### Build System: Turborepo

**Rationale:**
- Purpose-built for TypeScript/JavaScript monorepos
- Intelligent caching reduces build times
- Simple configuration compared to Nx
- Good integration with pnpm workspaces
- Remote caching available for CI/CD (optional)

### Linting/Formatting: Biome

**Rationale:**
- Single tool replaces ESLint + Prettier
- Significantly faster than ESLint (written in Rust)
- Consistent formatting without configuration debates
- Import sorting built-in
- Actively maintained with good TypeScript support

**Trade-offs:**
- Smaller ecosystem than ESLint (fewer plugins)
- Some ESLint rules not available
- Team may need to learn new tool

### Frontend: Vite + React + TypeScript

**Rationale:**
- Vite provides fast HMR and build times
- React is well-understood with large ecosystem
- TypeScript provides type safety and IDE support
- Good integration with MUI component library

### UI Library: Material-UI (MUI) v7

**Rationale:**
- Comprehensive component library
- Built-in theming system
- Responsive grid system (Grid2 with size prop)
- Accessibility built-in
- Large community and documentation
- React 19 compatible

### Validation: Zod

**Rationale:**
- TypeScript-first with excellent type inference
- Works on both frontend and backend
- Composable schemas
- Good error messages
- Can be shared in contracts package

## Alternatives Considered

### Nx instead of Turborepo
- More features but higher complexity
- Heavier learning curve
- Turborepo sufficient for our needs

### ESLint + Prettier instead of Biome
- More ecosystem support
- Slower performance
- Two tools to configure and maintain

### Yarn instead of pnpm
- More familiar to some developers
- pnpm's strict mode prevents common issues
- Disk efficiency matters for CI caching

### Chakra UI instead of MUI
- Simpler API
- MUI has more components out of the box
- MUI has better enterprise adoption

## Consequences

### Positive
- Fast development cycle with Vite HMR
- Consistent code style enforced by Biome
- Type safety from TypeScript + Zod
- Efficient builds with Turborepo caching
- Clean dependency management with pnpm

### Negative
- Team needs to learn Biome if unfamiliar
- Biome has fewer lint rules than ESLint
- Turborepo remote caching requires setup for full benefit

### Neutral
- Standard React/TypeScript patterns apply
- MUI theming approach is opinionated but well-documented

## References

- [pnpm documentation](https://pnpm.io/)
- [Turborepo documentation](https://turbo.build/repo/docs)
- [Biome documentation](https://biomejs.dev/)
- [Vite documentation](https://vitejs.dev/)
- [MUI documentation](https://mui.com/)
- [Zod documentation](https://zod.dev/)
