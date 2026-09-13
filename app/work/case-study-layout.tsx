import type { ReactNode } from 'react';
import Link from 'next/link';
import { FooterClock } from '../footer-clock';
import { ThemeControls } from '../theme-controls';
import { CopyLinkButton } from './active-lens/case-study-client';

export function CaseStudyHeader() {
  return (
    <header className="case-header">
      <div className="case-header-actions">
        <Link
          className="back-button"
          href="/"
          aria-label="Back to portfolio homepage"
        >
          <img
            className="back-default theme-light"
            src="/assets/case-back-light.svg"
            width="14"
            height="14"
            alt=""
          />
          <img
            className="back-default theme-dark"
            src="/assets/case-back-dark.svg"
            width="14"
            height="14"
            alt=""
          />
          <img
            className="back-hover"
            src="/assets/case-back-hover.svg"
            width="14"
            height="14"
            alt=""
          />
        </Link>
        <ThemeControls />
      </div>
      <CopyLinkButton />
    </header>
  );
}

export function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="info-card">
      <p>{title}</p>
      <p>{body}</p>
    </article>
  );
}

export function SectionHeading({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="case-heading">
      <h2>{title}</h2>
      <div className="case-body">{children}</div>
    </div>
  );
}

export function CaseStudyFooter() {
  return (
    <footer className="case-footer">
      <span>© 2026</span>
      <FooterClock />
    </footer>
  );
}
