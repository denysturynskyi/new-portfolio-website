'use client';
import { useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

function subscribeToTheme(listener: () => void) {
  window.addEventListener('portfolio-theme-change', listener);
  return () => window.removeEventListener('portfolio-theme-change', listener);
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export function ThemeControls() {
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, () => 'light');

  function selectTheme(value: Theme) {
    document.documentElement.dataset.theme = value;
    try {
      localStorage.setItem('portfolio-theme', value);
    } catch {
      /* Theme still works when browser storage is unavailable. */
    }
    window.dispatchEvent(new Event('portfolio-theme-change'));
  }
  return (
    <fieldset className="theme-controls" aria-label="Color theme">
      <button
        className="theme-button"
        type="button"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        onClick={() => selectTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <img
          className="icon light-theme-icon default-icon"
          src="/assets/portfolio-moon-default.svg"
          width="14"
          height="14"
          alt=""
        />
        <img
          className="icon light-theme-icon hover-icon"
          src="/assets/portfolio-moon-hover.svg"
          width="14"
          height="14"
          alt=""
        />
        <img
          className="icon dark-theme-icon default-icon"
          src="/assets/portfolio-sun-dark-default.svg"
          width="14"
          height="14"
          alt=""
        />
        <img
          className="icon dark-theme-icon hover-icon"
          src="/assets/portfolio-sun-dark-hover.svg"
          width="14"
          height="14"
          alt=""
        />
      </button>
    </fieldset>
  );
}
