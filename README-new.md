# WorthSoftware Portfolio

A modern, responsive portfolio website for WorthSoftware built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop and mobile devices
- **TypeScript**: Type-safe development with excellent IDE support
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessibility**: Following best practices for web accessibility

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **CSS3** - Modern CSS with Grid and Flexbox layouts
- **CSS Variables** - Consistent design system

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/          # Hero section with testimonials grid
│   ├── About/           # Company information and values
│   ├── Services/        # Service offerings
│   ├── Portfolio/       # Project showcase
│   ├── Testimonials/    # Client testimonials
│   ├── Contact/         # Contact form
│   └── Footer/          # Footer with social links
├── assets/              # Images and static assets
├── variables.css        # CSS custom properties
└── index.css           # Global styles
```

## 🎨 Design System

### Colors
- **Primary Black**: `#111111`
- **Gray Text**: `#555555`
- **Light Gray**: `#f8f9fa`
- **White**: `#ffffff`

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Responsive font sizes** using CSS custom properties

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd worthsoftware-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Animations

- **Fade-in animations** on scroll using Intersection Observer API
- **Hover effects** on interactive elements
- **Smooth scrolling** navigation

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Add the corresponding CSS file
3. Import and add to the main `App.tsx`

### Updating Content
- **Images**: Replace placeholder images in `src/assets/`
- **Text Content**: Update the content directly in each component
- **Styling**: Modify CSS custom properties in `variables.css`

## 🌟 Performance Optimizations

- **Lazy loading** of images
- **Optimized animations** with CSS transforms
- **Efficient bundle splitting** with Vite
- **Modern CSS** with minimal dependencies

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ by WorthSoftware
