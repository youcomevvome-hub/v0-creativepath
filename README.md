# Creative Path Inspired

A modern scholarship and study-abroad support platform built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Features

- Modern, responsive design with dark/light mode support
- Service pages for WES evaluation, GRE support, visa fees, and more
- Multi-step eligibility application form with service-specific questions
- Contact forms for inquiries, mentor applications, and donations
- Email notifications via Gmail SMTP (Nodemailer)
- Floating WhatsApp channel button with modern glass design
- SEO optimized with proper metadata

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui components
- **Forms:** React Hook Form + Zod validation
- **Email:** Nodemailer with Gmail SMTP
- **Icons:** Lucide React
- **Animations:** tw-animate-css
- **Analytics:** Vercel Analytics

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/youcomevvome-hub/you-creativepath.git
   cd you-creativepath
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   Copy the example environment file and fill in your values:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your Gmail credentials:

   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

   > **Note:** To generate a Gmail App Password:
   > 1. Enable 2-Factor Authentication on your Google account
   > 2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   > 3. Generate a new app password for "Mail"
   > 4. Use the 16-character password (without spaces)

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open the app**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── applications/     # Eligibility form submissions
│   │   └── contact/          # Contact/mentor/support forms
│   ├── apply/[service]/      # Service application pages
│   ├── contact/              # Contact page
│   ├── services/
│   │   ├── [slug]/           # Individual service pages
│   │   └── page.tsx          # Services listing
│   ├── globals.css           # Global styles + Tailwind
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── EligibilityForm.tsx   # Multi-step application form
│   ├── FloatingWhatsApp.tsx  # WhatsApp channel button
│   ├── Hero.tsx              # Homepage hero section
│   ├── HowItWorks.tsx        # Process steps section
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer
│   ├── ServiceGrid.tsx       # Featured services grid
│   └── Testimonials.tsx      # Testimonials carousel
├── lib/
│   ├── emailService.ts       # Nodemailer email utility
│   ├── services.ts           # Service definitions
│   └── utils.ts              # Utility functions
├── hooks/
│   └── useReveal.ts          # Scroll reveal hook
├── public/
│   └── images/               # Static images
├── .env.example              # Environment variables template
├── next.config.mjs           # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GMAIL_USER` | Yes | Gmail address for sending form notifications |
| `GMAIL_APP_PASSWORD` | Yes | Gmail App Password (16 characters) |

---

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Add environment variables in Project Settings → Environment Variables
4. Deploy

### Other Platforms

The app can be deployed to any platform supporting Node.js:

```bash
# Build
npm run build

# Start production server
npm run start
```

---

## Services Offered

- **WES Evaluation Support** - Credential evaluation assistance
- **GRE/GMAT Support** - Test fee coverage and preparation
- **Application Fee Support** - University application fees
- **Visa & SEVIS Support** - Immigration document fees
- **Transcript Evaluation** - Academic document verification
- **Tuition Fee Support** - Partial tuition assistance
- **Mentorship Program** - 1-on-1 guidance from scholars
- **College Board Support** - SAT/AP exam fees
- **Enrollment Deposit** - University deposit assistance

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is private and proprietary to Creative Path Inspired.

---

## Support

For questions or support, contact: vicecreativepath@gmail.com
