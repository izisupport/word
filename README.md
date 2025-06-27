# IZI Support Website

Modern React application for IZI Support - a technology solutions company providing cloud services, cybersecurity, and IT consulting.

## 🚀 Features

- **Modern React 18** with TypeScript
- **Framer Motion** animations and transitions
- **Tailwind CSS v4** for styling
- **Particle network** background animations
- **Horizontal scrolling** partners carousel
- **Multi-page navigation** with smooth transitions
- **Responsive design** for all devices
- **Performance optimized** with modern practices

## 📋 Prerequisites

- Node.js 16+ 
- npm 8+ or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/izi-support/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📦 Build for Production

```bash
npm run build
```

## 🧞 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types
- `npm run preview` - Preview production build

## 🎨 Project Structure

```
src/
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
├── components/            # React components
│   ├── SolutionsPage.tsx
│   ├── CloudTechnologyPage.tsx
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/               # Reusable UI components
├── styles/
│   └── globals.css       # Global styles with Tailwind
└── public/               # Static assets
```

## 🌟 Key Components

### Pages
- **Homepage** - Hero section with particle animation, services overview
- **Solutions Page** - Detailed technology solutions and process
- **Cloud Technology Page** - Cloud services and migration process

### Features
- **Particle Network Animation** - Custom canvas-based background
- **Horizontal Scrolling Partners** - Infinite scroll animation
- **Responsive Navigation** - Multi-page routing system
- **Smooth Animations** - Framer Motion powered transitions

## 🎯 Technology Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Linting**: ESLint + Prettier

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build/ directory to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload build/ directory to your web server
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for environment-specific settings:
```
REACT_APP_API_URL=your_api_url
REACT_APP_CONTACT_EMAIL=info@izsupport.mn
```

### Customization
- **Colors**: Edit `tailwind.config.js` and `styles/globals.css`
- **Animations**: Modify Framer Motion variants in components
- **Content**: Update text and images in component files

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For support, email info@izsupport.mn or create an issue in this repository.

## 🔗 Links

- [Website](https://izsupport.mn)
- [Company LinkedIn](https://linkedin.com/company/izi-support)
- [Documentation](https://docs.izsupport.mn)

---

Made with ❤️ by IZI Support Team"# word" 
