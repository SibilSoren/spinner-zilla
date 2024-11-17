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
  const [currentSpinnerIndex, setCurrentSpinnerIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSpinnerIndex((prev) => (prev + 1) % spinnerComponents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentSpinner = spinnerComponents[currentSpinnerIndex].component;

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
      <div className={`container mx-auto px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col items-center space-y-6">
          <div className="text-6xl font-bold mb-4">Spinner-Zilla</div>
          <p className="text-xl text-center mb-8 animate-pulse">Beautiful, customizable loading animations for React</p>
          <div className="h-20 w-20 mb-8">
            <CurrentSpinner size="xl" color="text-white" />
          </div>
          <div className="flex justify-center space-x-4">
            <a 
              href="#demo" 
              className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              View Demo
            </a>
            <a 
              href="https://github.com/SibilSoren/spinner-zilla" 
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const SpinnerCard = ({ name, Component }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [size, setSize] = useState('md');

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSize(size === 'md' ? 'lg' : 'md')}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-16 w-16 flex items-center justify-center">
          <Component size={size} color={isHovered ? 'text-purple-600' : 'text-gray-600'} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
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
    <section id="demo" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Demo</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {spinnerComponents.map(({ name, component: Component }) => (
            <SpinnerCard key={name} name={name} Component={Component} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>Made with ❤️ by Sibil Sarjam Soren</p>
      <div className="mt-4">
        <a href="https://github.com/SibilSoren/spinner-zilla" className="text-gray-400 hover:text-white mx-2 transition-colors duration-200">GitHub</a>
        <a href="https://www.npmjs.com/package/spinner-zilla" className="text-gray-400 hover:text-white mx-2 transition-colors duration-200">npm</a>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <DemoSection />
    <Footer />
  </div>
);

export default App;
