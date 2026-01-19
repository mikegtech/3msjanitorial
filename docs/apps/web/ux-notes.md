# UX Notes

Design decisions and user experience guidelines for the 3MS Janitorial website.

## Target Audience

### Primary: Business Decision Makers
- Office managers
- Facility managers
- Business owners
- Property managers
- Church administrators
- School administrators

### Characteristics
- Often researching on mobile during work
- Value professionalism and reliability
- Want quick answers to common questions
- Need to justify the expense to stakeholders
- May be comparing multiple vendors

## User Goals

1. **Understand services offered** - What types of cleaning do you do?
2. **Verify credibility** - Are you insured? Background checked?
3. **Check service area** - Do you serve my location?
4. **See social proof** - What do other customers say?
5. **Get pricing** - How much will this cost?
6. **Make contact** - How do I get started?

## Design Principles

### 1. Trust First
Commercial cleaning involves letting strangers into your business. Every element should reinforce trust:
- Prominent insurance/bonding badges
- Background check emphasis
- Real customer reviews (with business names)
- Professional, clean aesthetic

### 2. Mobile-First
Many users will research on phones during work hours:
- Sticky CTA bar on mobile
- Touch-friendly buttons (min 44px)
- Readable text without zooming
- Fast page loads

### 3. Clear CTAs
The conversion funnel is simple:
- Primary: Request a Quote (captures lead)
- Secondary: Call Now (immediate contact)

Both CTAs should be visible on every page.

### 4. Reduce Friction
- Form asks only necessary information
- Clear progress feedback
- Immediate confirmation on submission
- Multiple contact options

## Page-Specific UX

### Home Page
**Goal**: Quickly establish what we do and build trust

- Hero: Clear value proposition + both CTAs
- Trust strip: Badges immediately visible
- Services: Visual cards, not walls of text
- Reviews: Social proof with real names
- FAQ: Answer common objections
- Final CTA: One more chance to convert

### Services Page
**Goal**: Detailed service information for evaluation

- Clear categories (office, medical, retail, etc.)
- Feature lists show specific inclusions
- Custom plan CTA acknowledges flexibility

### Contact Page
**Goal**: Capture lead with minimal friction

- Form is primary focus
- Contact info sidebar for alternatives
- "What happens next" reduces uncertainty
- Success state provides clear confirmation

### Reviews Page
**Goal**: Build trust through social proof

- Aggregate rating displayed prominently
- Business names add credibility
- Mix of industries shows breadth
- Final CTA capitalizes on positive sentiment

## Mobile Considerations

### Sticky CTA Bar
- Fixed to bottom of screen
- Two buttons: Call / Quote
- Disappears on desktop (header has CTAs)
- Z-index ensures visibility

### Navigation
- Hamburger menu on mobile
- Full menu on desktop
- Phone number prominent in menu

### Form
- Single column layout
- Large touch targets
- Native date/select pickers
- Error messages inline

## Accessibility

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Primary blue on white: 4.87:1
- Green on white: 4.52:1

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Skip links (future enhancement)

### Screen Readers
- Semantic HTML (nav, main, footer)
- Alt text for images
- Form labels properly associated

## Performance

### Target Metrics
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Optimizations
- Lazy load below-fold images (future)
- Preconnect to font CDN
- Minimal JavaScript bundle
- Static site can be cached aggressively

## Future UX Enhancements

### Phase 2
- Form submission feedback from API
- Email confirmation to user

### Phase 3
- Customer portal for schedule viewing
- Calendar integration

### Phase 4
- Chatbot for immediate assistance
- Login for returning customers

## Content Guidelines

See [content.md](./content.md) for copy and messaging guidelines.
