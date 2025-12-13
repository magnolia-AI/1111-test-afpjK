# 1177.se Clone

An accurate, responsive recreation of the Swedish healthcare guide portal (1177 Vårdguiden) built with modern web technologies. This project focuses on accessibility, performance, and the distinct utilitarian design language of the Swedish public healthcare system.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn/UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime/Package Manager**: [Bun](https://bun.sh/)
- **Database (Ready)**: Drizzle ORM (Template prepared)

## ✨ Features

- **Authentic Design System**: Meticulously recreated color palette using Vårdguiden Red (`#D11241`), Slate Blue, and stark white backgrounds.
- **Responsive Navigation**:
  - Complex desktop header with informative links.
  - Mobile-optimized drawer navigation using Shadcn Cheet components.
- **Key Sections**:
  - **Sjukdomar & Besvär**: Hero navigation for primary care categories.
  - **Self-Service Grid**: Quick access to "Journalen", "Boka tid", and "Förnya recept".
  - **News Feed**: Current events and healthcare updates.
- **Accessibility**: High-contrast typography and semantic HTML structure.

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended) or Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd 1177-clone
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── app/
│   ├── globals.css      # Design tokens and global styles
│   ├── layout.tsx       # Root layout including fonts and providers
│   └── page.tsx         # Homepage composition
├── components/
│   ├── ui/              # Reusable Shadcn/UI components
│   ├── site-header.tsx  # Main navigation bar
│   ├── hero-section.tsx # Search and primary messaging
│   ├── category-grid.tsx# Quick access service cards
│   └── news-section.tsx # Article feed
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Design Guidelines

This project follows the 1177 Design Language:

- **Typography**: Open Sans (Primary), JetBrains Mono (Code/Dev).
- **Colors**:
  - Primary: Vårdguiden Red (`var(--primary)`)
  - Accent: Slate Blue (`var(--accent)`)
  - Background: Stark White / Light Grey (`#F5F5F5`)
- **Philosophy**: Clarity, Accessibility, and Trust.

## 📄 License

This project is for educational purposes as a UI reproduction. All brand assets (Logos, Names) belong to Inera AB / 1177 Vårdguiden.

