# 🌀 Spinner-Zilla

A comprehensive React spinner library featuring 13 beautiful, customizable loading animations. Built with TypeScript and Tailwind CSS for modern web applications.

<p align="center">
  <img src="./assets/demo.gif" alt="Spinner-Zilla Demo" width="600px" />
</p>

## ✨ Features

- 🎨 12 unique, customizable spinner components
- 📱 Responsive sizing (sm, md, lg, xl)
- 🎯 Built with TypeScript for type safety
- 🌈 Tailwind CSS integration
- 📦 Zero dependencies (except peer dependencies)
- 🚀 Lightweight and performant
- 📖 Comprehensive Storybook documentation
- ♿ Accessibility-friendly

## 🚀 Installation

```bash
# npm
npm install spinner-zilla

# yarn
yarn add spinner-zilla

# pnpm
pnpm add spinner-zilla
```

## 📋 Requirements

This package has the following peer dependencies:
- `react`: >=16.8.0
- `react-dom`: >=16.8.0
- `tailwindcss`: >=3.0.0

## 📖 Usage

1. Import the CSS and your desired spinner component:
```jsx
// Import the CSS (important!)
import 'spinner-zilla/dist/index.css';

// Import your desired components
import { CircleSpinner, RingSpinner, WaveSpinner } from 'spinner-zilla';
```

2. Use it in your React component:
```jsx
function LoadingState() {
  return (
    <div className="flex items-center gap-4">
      <CircleSpinner size="md" color="text-blue-500" />
      <span>Loading...</span>
    </div>
  );
}
```

> ⚠️ **Important**: Make sure to import the CSS file to enable all animations and styles.

## 🎨 Available Components

1. **CircleSpinner**: Simple circular loading animation
2. **ClockSpinner**: Clock-like spinner with rotating hands
3. **DNASpinner**: DNA helix-inspired loading animation
4. **DotSpinner**: Multiple dots with bouncing animation
5. **FlipSpinner**: 3D flipping animation effect
6. **GalaxySpinner**: Orbital rings with rotating planets
7. **HeartbeatSpinner**: Pulsating heart animation
8. **MatrixSpinner**: Matrix-inspired digital rain effect
9. **PulseSpinner**: Pulsating circle effect
10. **SquareSpinner**: Multiple squares with rotation
11. **StarSpinner**: Rotating and scaling star animation
12. **WaveSpinner**: Multiple bars with wave animation

## ⚙️ Props

All spinner components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Size of the spinner |
| color | string | 'text-blue-500' | Tailwind color class |
| className | string | '' | Additional CSS classes |

### Size Reference
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 2.5rem (40px)

## 🎯 Examples

### Basic Usage
```jsx
import 'spinner-zilla/dist/index.css';
import { CircleSpinner } from 'spinner-zilla';

<CircleSpinner />  // Uses default props
```

### Custom Size and Color
```jsx
import 'spinner-zilla/dist/index.css';
import { RingSpinner } from 'spinner-zilla';

<RingSpinner 
  size="lg"
  color="text-purple-500" 
/>
```

### Custom Styling with className
```jsx
import 'spinner-zilla/dist/index.css';
import { WaveSpinner } from 'spinner-zilla';

<WaveSpinner 
  size="xl"
  color="text-green-500"
  className="p-4 bg-gray-100 rounded-lg shadow-inner" 
/>
```

### Multiple Spinners
```jsx
import 'spinner-zilla/dist/index.css';
import { DotSpinner, StarSpinner } from 'spinner-zilla';

<div className="flex gap-4">
  <DotSpinner size="sm" color="text-blue-500" />
  <StarSpinner size="md" color="text-yellow-500" />
</div>
```

## 🎮 Interactive Demo

Visit our [Storybook](https://your-storybook-url.com) to see all spinners in action and try different configurations.

## 🛠️ Development

1. Clone the repository:
```bash
git clone https://github.com/SibilSoren/spinner-zilla.git
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook for development:
```bash
npm run storybook
```

4. Build the library:
```bash
npm run build
```

The build process will:
- Generate the JavaScript bundle in the `dist` directory
- Extract and process all CSS including Tailwind utilities
- Create TypeScript declaration files
- Bundle all animations and styles into `dist/index.css`

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-spinner`)
3. Commit your changes (`git commit -m 'Add amazing spinner'`)
4. Push to the branch (`git push origin feature/amazing-spinner`)
5. Open a Pull Request

## 📄 License

MIT 

## 🙏 Credits

- Inspired by various loading animations from the web
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Documentation powered by [Storybook](https://storybook.js.org/)

## 🤝 Support

Need help? Feel free to:
- Open an [issue](https://github.com/SibilSoren/spinner-zilla/issues)
- Contact us at [soren.sibilsarjam@gmail.com]
<!-- - Join our [Discord community](https://discord.gg/your-server) -->
