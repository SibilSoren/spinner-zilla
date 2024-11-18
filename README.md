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

## 📚 Documentation

Visit our interactive Storybook documentation to explore all components and their variations:
[Spinner-Zilla Storybook](https://sibilsoren.github.io/spinner-zilla/)

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

For detailed examples and live previews of each component, visit our [Storybook documentation](https://sibilsoren.github.io/spinner-zilla/).

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

function App() {
  return <CircleSpinner size="lg" color="text-blue-500" />;
}
```

### Multiple Sizes
```jsx
import 'spinner-zilla/dist/index.css';
import { WaveSpinner } from 'spinner-zilla';

function LoadingStates() {
  return (
    <div className="flex items-center gap-4">
      <WaveSpinner size="sm" color="text-purple-500" />
      <WaveSpinner size="md" color="text-purple-500" />
      <WaveSpinner size="lg" color="text-purple-500" />
      <WaveSpinner size="xl" color="text-purple-500" />
    </div>
  );
}
```

### Custom Colors
```jsx
import 'spinner-zilla/dist/index.css';
import { StarSpinner } from 'spinner-zilla';

function CustomColorSpinner() {
  return (
    <div className="flex items-center gap-4">
      <StarSpinner size="lg" color="text-emerald-500" />
      <StarSpinner size="lg" color="text-pink-500" />
      <StarSpinner size="lg" color="text-amber-500" />
    </div>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📬 Contact & Support

- Report issues on [GitHub](https://github.com/SibilSoren/spinner-zilla/issues)
- Contact us at soren.sibilsarjam@gmail.com
- View interactive examples in our [Storybook](https://sibilsoren.github.io/spinner-zilla/)
