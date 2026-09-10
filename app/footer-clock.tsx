'use client';

import { useEffect, useState } from 'react';

const formatZagrebTime = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Zagreb',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
    .format(new Date())
    .replace(' ', '')
    .toLowerCase();

export function FooterClock() {
  const [time, setTime] = useState(formatZagrebTime);

  useEffect(() => {
    const update = () => setTime(formatZagrebTime());
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span>{time} in Zagreb</span>;
}
