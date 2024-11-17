# 🌀 Spinner-Zilla

A comprehensive React spinner library featuring 13 beautiful, customizable loading animations. Built with TypeScript and Tailwind CSS for modern web applications.

<p align="center">
  <img src="./assets/demo.gif" alt="Spinner-Zilla Demo" width="600px" />
</p>

## ✨ Features

- 🎨 13 unique, customizable spinner components
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

1. Import your desired spinner component:
```jsx
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

## 🎨 Available Components

1. **CircleSpinner**: Simple circular loading animation
2. **PulseSpinner**: Pulsating circle effect
3. **RingSpinner**: Rotating ring with customizable thickness
4. **DotSpinner**: Multiple dots in sequence
5. **FlipSpinner**: 3D flipping animation
6. **WaveSpinner**: Wave-like loading bars
7. **ClockSpinner**: Clock hands rotation effect
8. **SquareSpinner**: Rotating square pattern
9. **StarSpinner**: Spinning star animation
10. **HeartbeatSpinner**: Heartbeat pulse effect
11. **DNASpinner**: DNA helix animation
12. **GalaxySpinner**: Galaxy spiral effect
13. **MatrixSpinner**: Matrix-style number animation

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
import { CircleSpinner } from 'spinner-zilla';

<CircleSpinner />  // Uses default props
```

### Custom Size and Color
```jsx
import { RingSpinner } from 'spinner-zilla';

<RingSpinner 
  size="lg"
  color="text-purple-500" 
/>
```

### Custom Styling with className
```jsx
import { WaveSpinner } from 'spinner-zilla';

<WaveSpinner 
  size="xl"
  color="text-green-500"
  className="p-4 bg-gray-100 rounded-lg shadow-inner" 
/>
```

### Multiple Spinners
```jsx
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
git clone https://github.com/your-username/spinner-zilla.git
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
- Open an [issue](https://github.com/your-username/spinner-zilla/issues)
- Contact us at [your-email@example.com]
- Join our [Discord community](https://discord.gg/your-server)
