'use client';
import { useState } from 'react';

export function ThemeControls() {
  const [theme, setTheme] = useState('light');
  function selectTheme(value: string) {
    setTheme(value);
    document.documentElement.dataset.theme = value;
  }
  return <div className="theme-controls" role="group" aria-label="Color theme">
    <button type="button" aria-label="Light theme" aria-pressed={theme === 'light'} onClick={() => selectTheme('light')}><img className="icon" src="/assets/portfolio-theme-dark.svg" width="14" height="14" alt="" /></button>
    <button type="button" aria-label="Dark theme" aria-pressed={theme === 'dark'} onClick={() => selectTheme('dark')}><img className="icon" src="/assets/portfolio-theme-light.svg" width="14" height="14" alt="" /></button>
  </div>;
}
