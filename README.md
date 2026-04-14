# ☕ QRtea - Generate QR Codes with Style

A modern, beautiful QR code generator built with Next.js 16, featuring a warm chocolate-themed UI and customizable QR code generation with download capabilities.

![Next.js](https://img.shields.io/badge/Next.js-16.2.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Beautiful UI** - Warm chocolate-themed design with custom styling
- 📱 **QR Code Generation** - Generate QR codes from any URL or text
- 💾 **Download Support** - Export QR codes as high-quality PNG images
- 🎯 **Custom Branding** - Includes custom logo integration
- 🌙 **Dark Mode Ready** - Built-in theme support with next-themes
- ⚡ **Fast & Responsive** - Built on Next.js 16 App Router
- 🔔 **Toast Notifications** - User-friendly success/error messages
- 🎭 **Modern Components** - Built with shadcn/ui and Radix UI primitives

## 🚀 Tech Stack

### Core
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)

### UI Components
- **Component Library:** [shadcn/ui](https://ui.shadcn.com/) - Radix Vega style
- **QR Code:** [@lglab/react-qr-code](https://www.npmjs.com/package/@lglab/react-qr-code) - Advanced QR code generation
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Toast Notifications:** [Sonner](https://sonner.emilkowal.ski/) - Elegant toast messages

### Fonts
- **Primary:** Inter (Sans-serif)
- **Display:** Modak (Decorative headings)
- **Mono:** Geist Mono
- **Heading:** Inter

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ or **Bun** 1.0+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd qrtea
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📖 Usage

1. **Enter your link/text** - Type the URL or text you want to convert into a QR code
2. **Generate** - Click the "Generate QR Code" button
3. **Customize** - The QR code features custom styling with:
   - Blue finder patterns with rounded corners
   - Custom logo overlay (church logo)
   - Optimized color scheme for brand consistency
4. **Download** - Click "Download QR Code" to save as a high-resolution PNG (1000x1000px)

## 🎨 Design System

### Color Palette
- **Primary Background:** Chocolate brown (`#D2691E`)
- **Buttons & Accents:** Saddle brown (`#8B4513`)
- **Hover State:** Sienna (`#A0522D`)
- **QR Code Pattern:** Navy blue (`#003262`)
- **Finder Patterns:** White (`#ffffff`)

### Typography
- **Headings:** Modak (decorative, playful)
- **Body Text:** Inter (clean, readable)
- **UI Elements:** Geist Sans & Mono

### Custom Shadows
- **Liquid Shadow:** Unique depth effect for elevated elements
- **Multiple shadow levels:** xs, sm, md, lg, xl, 2xl for various elevation states

## 🏗️ Project Structure

```
qrtea/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts & metadata
│   ├── page.tsx             # Main QR generator page
│   ├── globals.css          # Global styles & theme variables
│   └── favicon.ico          # Site favicon
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx       # Button component
│       ├── input.tsx        # Input component
│       ├── card.tsx         # Card component
│       ├── field.tsx        # Form field component
│       ├── label.tsx        # Label component
│       ├── separator.tsx    # Separator component
│       ├── sonner.tsx       # Toast notification wrapper
│       └── index.ts         # Component exports
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                  # Static assets
│   └── logo-church.png      # Custom QR code logo
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── components.json          # shadcn/ui configuration
└── postcss.config.mjs       # PostCSS configuration
```

## 🚦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reloading |
| `npm run build` | Build production-ready application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🎯 QR Code Customization

The QR code generator supports extensive customization:

```typescript
<ReactQRCode
  value={link}                    // URL or text to encode
  size={400}                      // Display size in pixels
  dataModulesSettings={{
    color: "#003262"              // QR pattern color
  }}
  imageSettings={{
    src: '/logo-church.png',      // Logo image path
    width: 60,                    // Logo width
    height: 60,                   // Logo height
    excavate: true,               // Clear area around logo
    opacity: 1,                   // Logo transparency
  }}
  finderPatternOuterSettings={{
    style: 'rounded',             // Corner style
    color: "#ffffff",             // Outer corner color
  }}
  finderPatternInnerSettings={{
    style: "rounded",             // Inner corner style
    color: "#003262",             // Inner corner color
  }}
/>
```

## 🌐 Deployment

### Vercel (Recommended)
The easiest way to deploy a Next.js app is on the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy with default settings

### Other Platforms
- **Netlify:** Build command: `npm run build`, Output: `.next`
- **Docker:** Use the official Next.js Docker image
- **Self-hosted:** Run `npm run build && npm run start`

## 🔧 Configuration

### Next.js Config
Located in `next.config.ts` - currently using default configuration. Extend as needed for:
- Image optimization
- Custom headers
- Redirects/rewrites
- Environment variables

### TypeScript Config
Configured in `tsconfig.json` with:
- Strict mode enabled
- Path aliases (`@/*` maps to root)
- Next.js plugin for type checking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary. All rights reserved.

© 2024 QRtea. All rights reserved.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [@lglab/react-qr-code](https://www.npmjs.com/package/@lglab/react-qr-code) - Advanced QR code library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icons

## 📞 Support

For support, questions, or feedback, please open an issue on the repository or contact the development team.

---

**Built with ☕ and React**
