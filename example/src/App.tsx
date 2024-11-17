import React, { useEffect, useState } from 'react';
import {
  CircleSpinner,
  PulseSpinner,
  WaveSpinner,
  ClockSpinner,
  SquareSpinner,
  StarSpinner,
  HeartbeatSpinner,
  DNASpinner,
  GalaxySpinner,
  MatrixSpinner,
  FlipSpinner,
  DotSpinner,
} from 'spinner-zilla';

const spinnerComponents = [
  { name: 'CircleSpinner', component: CircleSpinner },
  { name: 'PulseSpinner', component: PulseSpinner },
  { name: 'WaveSpinner', component: WaveSpinner },
  { name: 'ClockSpinner', component: ClockSpinner },
  { name: 'SquareSpinner', component: SquareSpinner },
  { name: 'StarSpinner', component: StarSpinner },
  { name: 'HeartbeatSpinner', component: HeartbeatSpinner },
  { name: 'DNASpinner', component: DNASpinner },
  { name: 'GalaxySpinner', component: GalaxySpinner },
  { name: 'MatrixSpinner', component: MatrixSpinner },
  { name: 'FlipSpinner', component: FlipSpinner },
  { name: 'DotSpinner', component: DotSpinner },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 rounded-full bg-purple-400 opacity-10 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-400 opacity-10 -bottom-32 -right-32 animate-pulse delay-700"></div>
      </div>

      {/* Main content */}
      <div className={`container mx-auto px-4 relative transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold mb-2 tracking-tight">
                <span className="inline-block transform hover:scale-105 transition-transform duration-200 cursor-default">
                  Spinner
                </span>
                <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 transform hover:scale-105 transition-transform duration-200 cursor-default ml-1">
                  Zilla
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start space-x-3 mt-2">
                <span className="px-3 py-1 bg-purple-700 bg-opacity-50 rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-400/30">
                  v0.1.0
                </span>
                <span className="px-3 py-1 bg-blue-700 bg-opacity-50 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
                  React
                </span>
              </div>
            </div>
            <p className="text-xl mb-8 text-gray-100 max-w-lg leading-relaxed">
              A collection of <span className="font-semibold text-yellow-300">12 stunning</span>, customizable React spinners for your next project.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#installation" 
                className="group bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <span>Get Started</span>
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="https://github.com/SibilSoren/spinner-zilla" 
                className="group bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-lg flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Featured spinner showcase */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
                <GalaxySpinner size="xl" color="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const InstallationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('installation');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="installation" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 rounded-full bg-purple-500 opacity-10 -top-20 -right-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-10 -bottom-32 -left-32 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Installation</h2>
          
          <div className="space-y-8">
            {/* NPM Installation */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300">npm</span>
              </div>
              <pre className="text-blue-300 font-mono">npm install spinner-zilla</pre>
            </div>

            {/* Important Note */}
            <div className="bg-yellow-900 bg-opacity-20 backdrop-blur-lg border-l-4 border-yellow-400 p-6 rounded-lg shadow-xl">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-300">
                    Don't forget to import the CSS file to enable animations!
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Example */}
            <div className="bg-gray-900 bg-opacity-50 backdrop-blur-lg rounded-lg p-6 shadow-xl border border-purple-500/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-purple-300">Usage</span>
              </div>
              <pre className="text-green-300 font-mono whitespace-pre-wrap">
{`import 'spinner-zilla/dist/index.css';
import { CircleSpinner, WaveSpinner } from 'spinner-zilla';

function App() {
  return (
    <div className="flex space-x-4">
      <CircleSpinner size="md" color="text-blue-500" />
      <WaveSpinner size="lg" color="text-purple-500" />
    </div>
  );
}`}
              </pre>
            </div>

            {/* Props Documentation */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8 shadow-xl border border-white/20">
              <h3 className="text-xl font-semibold mb-6 text-white">Available Props</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-purple-300 mb-2">size</h4>
                  <ul className="list-disc list-inside text-gray-200 space-y-2">
                    <li>sm - Small</li>
                    <li>md - Medium (default)</li>
                    <li>lg - Large</li>
                    <li>xl - Extra Large</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-purple-300 mb-2">color</h4>
                  <p className="text-gray-200">Any Tailwind CSS color class (e.g., text-blue-500)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpinnerCard = ({ name, Component }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [size, setSize] = useState('md');

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSize(size === 'md' ? 'lg' : 'md')}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-xl border border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative">
        <div className="flex flex-col items-center space-y-4">
          <div className="h-16 w-16 flex items-center justify-center">
            <Component size={size} color={isHovered ? 'text-purple-400' : 'text-gray-300'} />
          </div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const DemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('demo');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 rounded-full bg-blue-500 opacity-10 top-20 right-20 animate-pulse"></div>
        <div className="absolute w-72 h-72 rounded-full bg-purple-500 opacity-10 bottom-10 left-10 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Demo</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {spinnerComponents.map(({ name, component: Component }) => (
            <SpinnerCard key={name} name={name} Component={Component} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white py-12 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0">
      <div className="absolute w-64 h-64 rounded-full bg-purple-500 opacity-5 top-0 right-0 animate-pulse"></div>
    </div>

    <div className="container mx-auto px-4 relative">
      <div className="text-center space-y-6">
        <p className="text-lg">Made with ❤️ by Sibil Sarjam Soren</p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/SibilSoren/spinner-zilla" 
            className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
            </svg>
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.npmjs.com/package/spinner-zilla" 
            className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z"/>
            </svg>
            <span>npm</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <InstallationSection />
    <DemoSection />
    <Footer />
  </div>
);

export default App;
