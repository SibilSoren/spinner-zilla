import React from 'react';
import { useState } from 'react'
import { CircleSpinner, PulseSpinner, RingSpinner } from 'spinner-zilla'

const colors = [
  'text-blue-500',
  'text-green-500',
  'text-red-500',
  'text-purple-500',
  'text-yellow-500',
  'text-pink-500'
];

const sizes = ['sm', 'md', 'lg', 'xl'] as const;
const thicknesses = ['thin', 'normal', 'thick'] as const;

function App() {
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState<typeof sizes[number]>('md');
  const [thickness, setThickness] = useState<typeof thicknesses[number]>('normal');

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Spinner-Zilla Demo</h1>
        
        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Thickness</label>
              <select 
                className="w-full border rounded p-2"
                value={thickness}
                onChange={(e) => setThickness(e.target.value as typeof thicknesses[number])}
              >
                {thicknesses.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Spinners */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-4">Circle Spinner</h2>
              <CircleSpinner size={size} color={color} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-4">Pulse Spinner</h2>
              <PulseSpinner size={size} color={color} />
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-4">Ring Spinner</h2>
              <RingSpinner size={size} color={color} thickness={thickness} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
