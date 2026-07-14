# Chapter Digital Solutions — Company Website

Official company website for **Chapter Digital Solutions**, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui-style components** (Button, Card, Dialog, Input)
- **Framer Motion** (scroll animations)
- **Vercel** (recommended deployment)

## Pages

| Route       | Description                          |
| ----------- | ------------------------------------ |
| `/`         | Home — hero, services, EthioCloud    |
| `/about`    | Company story, values, technologies  |
| `/products` | EthioCloud and future products       |
| `/blog`     | Coming soon placeholder              |
| `/contact`  | Contact info and message form        |
| `/privacy`  | Privacy Policy                       |
| `/terms`    | Terms of Service                     |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist & Contact Forms

- **Waitlist** (`/api/waitlist`) — collects emails via the "Join the Waitlist" button
- **Contact** (`/api/contact`) — stores contact form submissions

Locally, submissions are saved to:

- `data/waitlist.json`
- `data/contacts.json`

> **Note for production:** Vercel's serverless filesystem is ephemeral. For production, connect a persistent store (e.g. Supabase, Vercel Postgres, Resend Audiences, or Mailchimp).

## Customization

Edit `src/lib/constants.ts` to update:

- Company email and location
- Social media links
- Navigation items

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Deploy — no environment variables required for the basic site

## Color Palette

| Color      | Hex       |
| ---------- | --------- |
| Primary    | `#8B5E3C` |
| Dark Brown | `#5C4033` |
| Sand       | `#D6B98C` |
| Cream      | `#F8F5F2` |
| Accent     | `#C89B3C` |
