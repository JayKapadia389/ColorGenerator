import React, { useState } from 'react';
import { Hct, hexFromArgb } from '@material/material-color-utilities';
import {
  googleBlueHexColors,
  googleRedHexColors,
  googleGreenHexColors,
  googleYellowHexColors,
  googleOrangeHexColors,
  googlePinkHexColors,
  googlePurpleHexColors,
  googleCyanHexColors,
  googleMagentaHexColors,
  googleElectricHexColors,
} from './colors.js';

const shadeLabels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
const averageCTMap = [
  { chroma: 10.53, tone: 95.01 },
  { chroma: 21.49, tone: 90.30 },
  { chroma: 34.89, tone: 83.08 },
  { chroma: 48.73, tone: 76.14 },
  { chroma: 61.03, tone: 69.01 },
  { chroma: 69.52, tone: 63.13 },
  { chroma: 69.20, tone: 56.72 },
  { chroma: 65.14, tone: 50.50 },
  { chroma: 61.43, tone: 44.29 },
  { chroma: 57.22, tone: 39.13 },
];

const presetColors = {
  Blue: googleBlueHexColors,
  Red: googleRedHexColors,
  Green: googleGreenHexColors,
  Yellow: googleYellowHexColors,
  Orange: googleOrangeHexColors,
  Pink: googlePinkHexColors,
  Purple: googlePurpleHexColors,
  Cyan: googleCyanHexColors,
  Magenta: googleMagentaHexColors,
  Electric: googleElectricHexColors,
};

const averageHues = {
  Blue: 262.98,
  Red: 24.40,
  Green: 156.19,
  Yellow: 81.66,
  Orange: 56.36,
  Pink: 350.10,
  Purple: 310.88,
  Cyan: 211.52,
  Magenta: 326.32,
  Electric: 206.19,
};

export default function HueShadesGenerator() {
  const [hue, setHue] = useState(210);
  const [selectedColor, setSelectedColor] = useState('Blue');

  const generatedShades = averageCTMap.map(({ chroma, tone }) => {
    const hct = Hct.from(hue, chroma, tone);
    return hexFromArgb(hct.toInt());
  });

  const handleColorSelect = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', backgroundColor: '#212121', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
        Hue-based Material Shade Generator
      </h1>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>Hue: {hue}</label>
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Generated Shades
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
          {generatedShades.map((hex, index) => (
            <div
              key={index}
              style={{
                backgroundColor: hex,
                color: '#fff',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '14px',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              }}
            >
              {shadeLabels[index]}<br />{hex.toUpperCase()}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px' }}>
          Compare with Existing Color Shades
        </h2>
        <select
          value={selectedColor}
          onChange={handleColorSelect}
          style={{ marginBottom: '16px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {Object.keys(presetColors).map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <div style={{ marginBottom: '12px', fontSize: '14px' }}>
          <strong>Average Hue of {selectedColor}:</strong> {averageHues[selectedColor]}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
          {presetColors[selectedColor].map((hex, index) => (
            <div
              key={index}
              style={{
                backgroundColor: hex,
                color: '#fff',
                padding: '12px',
                borderRadius: '12px',
                fontSize: '14px',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              }}
            >
              {shadeLabels[index]}<br />{hex.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
