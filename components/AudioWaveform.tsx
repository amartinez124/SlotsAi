'use client';

import { useEffect, useRef } from 'react';

interface AudioWaveformProps {
  audioData: Uint8Array;
  width?: number;
  height?: number;
  barCount?: number;
  className?: string;
}

export function AudioWaveform({
  audioData,
  width = 200,
  height = 60,
  barCount = 48,
  className = '',
}: AudioWaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (audioData.length === 0) return;

    // Calculate bar dimensions
    const barWidth = width / barCount;
    const barSpacing = 2;
    const effectiveBarWidth = barWidth - barSpacing;

    // Sample audio data to match bar count
    const step = Math.floor(audioData.length / barCount);

    for (let i = 0; i < barCount; i++) {
      const dataIndex = i * step;
      const value = audioData[dataIndex] || 0;
      
      // Normalize value (0-255 to 0-1)
      const normalizedValue = value / 255;
      
      // Calculate bar height (minimum 2px for visibility)
      const barHeight = Math.max(2, normalizedValue * height);
      
      // Calculate x position
      const x = i * barWidth;
      
      // Calculate y position (center vertically)
      const y = (height - barHeight) / 2;
      
      // Create color gradient based on amplitude
      // Blue (quiet) to red (loud)
      const hue = 240 - (normalizedValue * 240); // 240 (blue) to 0 (red)
      const saturation = 70 + (normalizedValue * 30); // 70% to 100%
      const lightness = 50 + (normalizedValue * 10); // 50% to 60%
      
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      
      // Draw rounded rectangle bar
      ctx.beginPath();
      ctx.roundRect(x, y, effectiveBarWidth, barHeight, 2);
      ctx.fill();
    }
  }, [audioData, width, height, barCount]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: `${width}px`, height: `${height}px` }}
    />
  );
}
