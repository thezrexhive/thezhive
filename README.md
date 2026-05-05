# ZRexHive

A SaaS platform for modern teams. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS with custom design system
- **Database & Auth** — Supabase (PostgreSQL + Auth)
- **Icons** — Lucide React

## Project Structure

```
/
├── app/
│   ├── (marketing)/        # Public pages — uses Navbar + Footer layout
│   │   ├── page.tsx        # Landing page
│   │   ├── pricing/        # Pricing page
│   │   └── about/          # About page
│   ├── (app)/              # Authenticated dashboard — uses Sidebar + TopNav layout
│   │   ├── dashboard/      # Main dashboard with stats and activity feed
│   │   └── settings/       # User profile and plan settings
│   ├── (onboarding)/       # Signup and setup flow — minimal focused layout
│   │   ├── login/          # Sign in page
│   │   └── onboarding/
│   │       ├── step-1/     # Create account
│   │       ├── step-2/     # Choose a plan
│   │       └── step-3/     # Confirmation
│   ├── layout.tsx          # Root layout (Inter font, global CSS)
│   ├── loading.tsx         # Global loading state
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Design tokens and base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Marketing nav — sticky, responsive, mobile menu
│   │   ├── Footer.tsx      # Marketing footer with link groups
│   │   ├── Sidebar.tsx     # Dashboard sidebar — collapsible (240px / 64px)
│   │   └── TopNav.tsx      # Dashboard top bar — breadcrumbs, search, user menu
│   └── ui/
│       ├── Button.tsx      # primary | secondary | ghost | danger variants
│       ├── Card.tsx        # Bordered surface with optional hover state
│       ├── Badge.tsx       # Status labels: default | success | warning | error | accent
│       ├── Container.tsx   # Responsive max-width wrapper (sm | md | lg | full)
│       └── Section.tsx     # Vertical spacing block (sm | md | lg | xl)
├── lib/
│   ├── supabase/
│   │   ├── client.ts       # Browser Supabase client (createBrowserClient)
│   │   └── server.ts       # Server Supabase client (createServerClient)
│   └── utils.ts            # cn(), formatRelativeTime()
└── types/
    ├── index.ts            # Shared TypeScript interfaces and prop types
    └── database.ts         # Generated Supabase database types
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.local` and fill in your Supabase project credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Database

The Supabase `profiles` table is already migrated. It extends `auth.users` with:

| Column | Type | Description |
|---|---|---|
| `id` | uuid | References `auth.users(id)`, cascade delete |
| `email` | text | User email address |
| `display_name` | text | User-chosen display name |
| `avatar_url` | text | Profile avatar URL |
| `plan` | enum | `free` \| `pro` \| `enterprise` |
| `onboarding_completed` | boolean | Whether onboarding is finished |
| `onboarding_step` | integer | Last completed step (1–3) |

A trigger on `auth.users` automatically creates a profile row on signup. Row Level Security is enabled — users can only read and update their own profile.

## Route Groups

| Group | Path prefix | Layout | Auth required |
|---|---|---|---|
| `(marketing)` | `/`, `/pricing`, `/about` | Navbar + Footer | No |
| `(app)` | `/dashboard`, `/settings` | Sidebar + TopNav | Yes — redirects to `/login` |
| `(onboarding)` | `/login`, `/onboarding/*` | Minimal header with progress | No |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```
