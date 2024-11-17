import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as Spinners from 'spinner-zilla';
import 'spinner-zilla/styles.css';

// Lazy load components
const SyntaxHighlighter = React.lazy(() => import('react-syntax-highlighter').then(module => ({ 
  default: module.Prism 
})));
const tomorrow = React.lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism').then(module => ({
  default: module.tomorrow
})));

const colors = [
  'text-blue-500',
  'text-green-500',
  'text-red-500',
  'text-purple-500',
  'text-yellow-500',
  'text-pink-500'
];

const sizes = ['sm', 'md', 'lg', 'xl'] as const;

const Header = () => (
  <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold mb-4 text-center">🌀 Spinner-Zilla</h1>
      <p className="text-xl text-center mb-8">Beautiful, customizable loading animations for React</p>
      <div className="flex justify-center space-x-4">
        <a href="#demo" className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          View Demo
        </a>
        <a href="https://github.com/yourusername/spinner-zilla" className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all">
          GitHub
        </a>
      </div>
    </div>
  </header>
);

const Features = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Customizable</h3>
          <p className="text-gray-600">Easily customize colors, sizes, and animations to match your design</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p className="text-gray-600">Four sizes (sm, md, lg, xl) for perfect fit on any screen</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Lightweight</h3>
          <p className="text-gray-600">Zero dependencies except React and minimal bundle size</p>
        </div>
      </div>
    </div>
  </section>
);

const Installation = () => {
  const npmInstall = 'npm install spinner-zilla';
  const usage = `import { CircleSpinner } from 'spinner-zilla';
import 'spinner-zilla/styles.css';  // Don't forget to import styles!

function App() {
  return (
    <div className="flex space-x-4">
      <CircleSpinner size="md" color="text-blue-500" />
      <PulseSpinner size="lg" color="text-purple-500" />
    </div>
  );
}`;

  return (
    <section className="py-16 bg-gray-50" id="installation">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Installation</h2>
        <div className="max-w-2xl mx-auto">
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-12 rounded-lg mb-8" />}>
            <SyntaxHighlighter language="bash" style={tomorrow} className="rounded-lg mb-8">
              {npmInstall}
            </SyntaxHighlighter>
          </Suspense>
          <h3 className="text-xl font-semibold mt-8 mb-4">Usage</h3>
          <div className="bg-gray-800 text-gray-300 p-4 rounded-lg mb-4">
            ⚠️ Important: Always import the CSS file to enable animations!
          </div>
          <Suspense fallback={<div className="animate-pulse bg-gray-200 h-48 rounded-lg" />}>
            <SyntaxHighlighter language="jsx" style={tomorrow} className="rounded-lg">
              {usage}
            </SyntaxHighlighter>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

const SpinnerDemo = ({ name, Component }: { name: string; Component: any }) => {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState<typeof sizes[number]>('md');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{name}</h3>
      <div className="flex justify-center items-center h-24 mb-4 bg-gray-50 rounded-lg">
        <Component color={color} size={size} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color</label>
          <select 
            className="w-full border rounded p-2"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            {colors.map((c) => (
              <option key={c} value={c}>{c.replace('text-', '').replace('-500', '')}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
          <select 
            className="w-full border rounded p-2"
            value={size}
            onChange={(e) => setSize(e.target.value as typeof sizes[number])}
          >
            {sizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

const SpinnersShowcase = () => {
  const spinnerComponents = Object.entries(Spinners)
    .filter(([name]) => name.endsWith('Spinner'))
    .sort(([a], [b]) => a.localeCompare(b));

  return (
    <section className="py-16" id="demo">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Spinner Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spinnerComponents.map(([name, Component]) => (
            <SpinnerDemo key={name} name={name} Component={Component} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>Made with ❤️ by the Spinner-Zilla team</p>
      <div className="mt-4">
        <a href="https://github.com/yourusername/spinner-zilla" className="text-gray-400 hover:text-white mx-2">GitHub</a>
        <a href="https://www.npmjs.com/package/spinner-zilla" className="text-gray-400 hover:text-white mx-2">npm</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Features />
        <Installation />
        <SpinnersShowcase />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
