---
name: Vital Balance
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#44474d'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#515f78'
  primary: '#07162c'
  on-primary: '#ffffff'
  primary-container: '#1d2b42'
  on-primary-container: '#8492ae'
  inverse-primary: '#b9c7e4'
  secondary: '#3e6658'
  on-secondary: '#ffffff'
  secondary-container: '#c0ecd9'
  on-secondary-container: '#446c5d'
  tertiary: '#141900'
  on-tertiary: '#ffffff'
  tertiary-container: '#282e00'
  on-tertiary-container: '#899b00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b9c7e4'
  on-primary-fixed: '#0d1c32'
  on-primary-fixed-variant: '#394760'
  secondary-fixed: '#c0ecd9'
  secondary-fixed-dim: '#a5d0be'
  on-secondary-fixed: '#002117'
  on-secondary-fixed-variant: '#264e40'
  tertiary-fixed: '#d9ee57'
  tertiary-fixed-dim: '#bdd13d'
  on-tertiary-fixed: '#191e00'
  on-tertiary-fixed-variant: '#424b00'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  mint-surface: '#B2D4C7'
  text-body: '#3A475C'
  border-soft: '#E1E8ED'
typography:
  display:
    fontFamily: DM Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: DM Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  section-gap: 100px
---

## Brand & Style

The design system is centered on a "Human-Centric Clinical" aesthetic. It balances the rigor of medical professionalism with the warmth of an empathetic dietitian's practice. Targeting an adult demographic (40-55+), the UI prioritizes clarity, high legibility, and a sense of calm reliability.

The style is **Modern Corporate with Soft Minimalism**. It avoids the sterile, cold feel of traditional clinics by using organic "Mint" highlights and "Fresh Lime" accents to symbolize growth and vitality. Key characteristics include:
- **Trustworthy Foundations:** Deep Navy typography provides a grounded, authoritative feel.
- **Approachable Geometry:** Generous rounded corners and soft shadows move away from sharp "industrial" medicine toward personal wellness.
- **Dynamic Structure:** Diagonal section separators break the monotony of standard web grids, subtly suggesting a "pathway" or progress in a health journey.

## Colors

The color strategy follows a 60/30/10 distribution to maintain a clean, airy healthcare feel while ensuring brand recognition.

- **Primary (Deep Navy):** Used for all headings, navigation links, and high-emphasis text. It establishes professional authority.
- **Action/Accent (Fresh Lime):** Reserved exclusively for interactive elements (CTAs, primary buttons) to ensure high visibility and a "pro-activity" psychological trigger.
- **Secondary (Sea Green):** Used for decorative icons, links within body text, and secondary visual elements.
- **Surface (Mint & White):** Backgrounds alternate between Pure White and Mint to define content sections. Mint is used specifically for card highlights or alternating background blocks to reduce eye strain.
- **Typography:** Body text uses a desaturated version of the navy (`#3A475C`) to ensure high contrast without the harshness of pure black.

## Typography

This design system utilizes a dual-font strategy. **DM Sans** provides a geometric, modern structure for headings, while **Inter** ensures maximum legibility for body content and data-heavy information.

- **Headings:** Set in Deep Navy. Large displays use tight letter-spacing for a modern, editorial look.
- **Body Text:** Optimized for the 40-55+ demographic with a generous 1.6 line-height and slightly larger base sizes (16px-18px) to accommodate varying visual needs.
- **Links:** Styled in Sea Green with a medium weight to distinguish them from standard body copy without using aggressive underlining.

## Layout & Spacing

The layout utilizes a 12-column fluid grid for desktop and a single-column fluid grid for mobile. 

- **Grid System:** 12 columns, 24px gutters, and 32px side margins for desktop. 
- **Rhythm:** A 4px base unit governs all internal component spacing (padding, gaps).
- **Separators:** Sections are divided by geometric diagonal separators (3-5 degree angle). These separators should alternate direction to create a subtle "zigzag" flow that guides the user downward.
- **Breakpoints:**
  - Desktop: 1200px+
  - Tablet: 768px - 1199px (8 columns, 16px gutters)
  - Mobile: <767px (4 columns, 16px margins)

## Elevation & Depth

Hierarchy is established through tonal layering and soft, ambient shadows rather than harsh borders.

- **Surface Tiers:** White is the base layer. Mint surfaces represent secondary information or highlighted containers.
- **Shadow Profile:** Cards and floating elements use a "Soft Health" shadow: `0px 10px 30px rgba(29, 43, 66, 0.06)`. The slight navy tint in the shadow ensures it feels integrated with the brand palette rather than muddy gray.
- **Active State Depth:** Interactive elements like buttons should slightly increase their shadow spread on hover to provide tactile feedback.

## Shapes

The shape language is friendly and organic. 

- **Standard Elements:** Input fields and small containers use a 0.5rem (8px) radius.
- **Large Components:** Service cards and testimonial containers use `rounded-2xl` (16px) to emphasize the modern, approachable clinic feel.
- **Interactive Elements:** Primary and secondary buttons use a "pill" shape (`rounded-full`) to differentiate them from static cards and emphasize their "action" nature.
- **Icons:** Should be housed in circular or soft-rounded Mint backgrounds to maintain consistency.

## Components

### Navigation
- **Sticky Navigation:** A white background with a subtle bottom shadow. The logo is placed on the left, with primary navigation links in Deep Navy.
- **Mobile Menu:** A full-screen overlay in Mint with large, accessible typography.

### Hero Section
- **Visuals:** Uses a navy-to-transparent gradient overlay on high-quality lifestyle imagery of healthy food or a smiling professional.
- **Typography:** Headline in White or high-contrast Deep Navy depending on the background.

### Buttons
- **Primary:** Fresh Lime background, Deep Navy text (for legibility), pill-shaped.
- **Secondary:** Transparent background with a Sea Green 2px border, Sea Green text, pill-shaped.

### Cards
- **Service Cards:** White background, `rounded-2xl`, soft shadow. Features a Sea Green icon at the top, a Deep Navy title, and desaturated navy body text.
- **Testimonials:** Mint background (`#B2D4C7`), `rounded-2xl`, with the quote in Deep Navy.

### Inputs & Forms
- **Fields:** Light gray border (`#E1E8ED`), white background, 8px corner radius. Focused state uses a 2px Sea Green border.
- **Submit Button:** Full-width on mobile, Primary Lime style.

### Section Transitions
- Avoid horizontal lines. Use diagonal SVG shapes to transition between White and Mint sections.