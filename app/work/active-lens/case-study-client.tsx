'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { createPortal } from 'react-dom';

export const caseSections = [
  ['overview', 'Overview'],
  ['what-i-did', 'What I did'],
  ['process', 'Process'],
  ['discovery-audit', 'Discovery & Audit'],
  ['competitive-research', 'Competitive Research'],
  ['user-jobs', 'User Jobs'],
  ['design-principles', 'Design Principles'],
  ['key-decisions', 'Key Product Decisions'],
  ['design-system', 'Design System'],
  ['validation', 'Validation'],
  ['final-experience', 'Final Experience'],
] as const;

export function SidebarNavigation({
  sections = caseSections,
}: {
  sections?: ReadonlyArray<readonly [string, string]>;
}) {
  const [active, setActive] = useState('overview');

  useEffect(() => {
    const updateActive = () => {
      const current = [...sections].reverse().find(([id]) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 128;
      });
      setActive(current?.[0] ?? 'overview');
    };
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [sections]);

  return (
    <nav className="case-sidebar" aria-label="Case study sections">
      {sections.map(([id, label]) => (
        <a
          className={`sidebar-item${active === id ? ' is-active' : ''}`}
          href={`#${id}`}
          key={id}
          aria-current={active === id ? 'location' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export function CopyLinkButton() {
  async function copyCurrentUrl() {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const input = document.createElement('textarea');
      input.value = window.location.href;
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      input.remove();
    }
  }

  return (
    <button
      className="pill case-copy-link"
      type="button"
      onClick={copyCurrentUrl}
    >
      Copy link
    </button>
  );
}

function OpenedImageOverlay({
  images,
  index,
  alt,
  imageClassName = '',
  imageStyle,
  onIndexChange,
  onClose,
}: {
  images: string[];
  index: number;
  alt: string;
  imageClassName?: string;
  imageStyle?: CSSProperties;
  onIndexChange?: (index: number) => void;
  onClose: () => void;
}) {
  const [isClosing, setIsClosing] = useState(false);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef<number | null>(null);
  const hasSliderControls = Boolean(onIndexChange);

  const navigate = useCallback(
    (nextIndex: number) => {
      if (
        isAnimating ||
        nextIndex < 0 ||
        nextIndex >= images.length ||
        nextIndex === index
      ) {
        return;
      }
      setPreviousIndex(index);
      setDirection(nextIndex > index ? 'next' : 'previous');
      setIsAnimating(true);
      onIndexChange?.(nextIndex);
      animationTimer.current = window.setTimeout(() => {
        setIsAnimating(false);
        setPreviousIndex(null);
      }, 500);
    },
    [images.length, index, isAnimating, onIndexChange],
  );

  const requestClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    window.setTimeout(onClose, 250);
  }, [isClosing, onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        requestClose();
      } else if (hasSliderControls && event.key === 'ArrowLeft' && index > 0) {
        navigate(index - 1);
      } else if (
        hasSliderControls &&
        event.key === 'ArrowRight' &&
        index < images.length - 1
      ) {
        navigate(index + 1);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasSliderControls, images.length, index, navigate, requestClose]);

  useEffect(
    () => () => {
      if (animationTimer.current !== null) {
        window.clearTimeout(animationTimer.current);
      }
    },
    [],
  );

  return createPortal(
    <dialog
      open
      className={`opened-image-overlay${isClosing ? ' is-closing' : ''}`}
      aria-modal="true"
      aria-label="Opened image"
    >
      <button
        className="opened-image-backdrop"
        type="button"
        aria-label="Close opened image"
        onClick={requestClose}
      />
      <div className="opened-image-content">
        <div className="opened-image-frame">
          {isAnimating && previousIndex !== null ? (
            <img
              className={`${imageClassName}${imageClassName ? ' ' : ''}opened-image-outgoing is-${direction}`}
              style={imageStyle}
              src={images[previousIndex]}
              alt=""
            />
          ) : null}
          <img
            className={`${imageClassName}${imageClassName && isAnimating ? ' ' : ''}${isAnimating ? `opened-image-incoming is-${direction}` : ''}`}
            style={imageStyle}
            src={images[index]}
            alt={alt}
          />
        </div>
        {hasSliderControls ? (
          <div className="opened-slider-controls">
            <button
              className="slider-arrow opened-slider-arrow"
              type="button"
              aria-label="Previous image"
              disabled={index === 0}
              onClick={() => navigate(index - 1)}
            >
              <img
                className="arrow-state arrow-light-default"
                src="/assets/case-arrow-light-default.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-dark-default"
                src="/assets/case-arrow-dark-default-v2.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-hover"
                src="/assets/case-arrow-dark-hover-v2.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-light-disabled"
                src="/assets/case-arrow-light-disabled.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-dark-disabled"
                src="/assets/case-arrow-dark-disabled-v2.svg"
                width="14"
                height="14"
                alt=""
              />
            </button>
            <button
              className="slider-arrow slider-arrow-next opened-slider-arrow"
              type="button"
              aria-label="Next image"
              disabled={index === images.length - 1}
              onClick={() => navigate(index + 1)}
            >
              <img
                className="arrow-state arrow-light-default"
                src="/assets/case-arrow-light-default.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-dark-default"
                src="/assets/case-arrow-dark-default-v2.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-hover"
                src="/assets/case-arrow-dark-hover-v2.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-light-disabled"
                src="/assets/case-arrow-light-disabled.svg"
                width="14"
                height="14"
                alt=""
              />
              <img
                className="arrow-state arrow-dark-disabled"
                src="/assets/case-arrow-dark-disabled-v2.svg"
                width="14"
                height="14"
                alt=""
              />
            </button>
          </div>
        ) : null}
      </div>
    </dialog>,
    document.body,
  );
}

export function CaseStudyImage({
  src,
  alt,
  className = '',
  imageClassName = '',
  crop,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  crop?: {
    width: string;
    height: string;
    left: string;
    top: string;
    background?: string;
  };
}) {
  const [isOpen, setIsOpen] = useState(false);
  const imageStyle: CSSProperties | undefined = crop
    ? {
        position: 'absolute',
        width: crop.width,
        maxWidth: 'none',
        height: crop.height,
        left: crop.left,
        top: crop.top,
        objectFit: 'cover',
      }
    : undefined;

  return (
    <>
      <button
        className={`case-image${className ? ` ${className}` : ''}`}
        style={crop?.background ? { background: crop.background } : undefined}
        type="button"
        aria-label={`Open ${alt}`}
        onClick={() => setIsOpen(true)}
      >
        <img
          className={imageClassName}
          style={imageStyle}
          src={src}
          alt={alt}
        />
      </button>
      {isOpen ? (
        <OpenedImageOverlay
          images={[src]}
          index={0}
          alt={alt}
          imageClassName={imageClassName}
          imageStyle={imageStyle}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}

export function ImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'previous'>('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (animationTimer.current !== null) {
        window.clearTimeout(animationTimer.current);
      }
    },
    [],
  );

  function navigate(nextIndex: number) {
    if (
      isAnimating ||
      nextIndex < 0 ||
      nextIndex >= images.length ||
      nextIndex === index
    ) {
      return;
    }
    setPreviousIndex(index);
    setDirection(nextIndex > index ? 'next' : 'previous');
    setIsAnimating(true);
    setIndex(nextIndex);
    animationTimer.current = window.setTimeout(() => {
      setIsAnimating(false);
      setPreviousIndex(null);
    }, 500);
  }

  return (
    <>
      <div className="case-image-slider">
        <div className="case-image-viewport">
          <div
            className={`case-image-track${isAnimating ? ` is-animating is-${direction}` : ''}`}
          >
            {images.map((src, imageIndex) => (
              <button
                className={`case-image-slide${imageIndex === index ? ' is-active' : ''}${isAnimating && imageIndex === previousIndex ? ' is-outgoing' : ''}${isAnimating && imageIndex === index ? ' is-incoming' : ''}`}
                type="button"
                aria-label={`Open ${alt}`}
                aria-hidden={imageIndex !== index}
                tabIndex={imageIndex === index ? 0 : -1}
                onClick={() => setIsOpen(true)}
                key={`${src}-${imageIndex}`}
              >
                <img src={src} alt={imageIndex === index ? alt : ''} />
              </button>
            ))}
          </div>
        </div>
        <div className="slider-controls">
          <button
            className="slider-arrow"
            type="button"
            aria-label="Previous image"
            disabled={index === 0}
            onClick={() => navigate(index - 1)}
          >
            <img
              className="arrow-state arrow-light-default"
              src="/assets/case-arrow-inline-light-default.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-dark-default"
              src="/assets/case-arrow-dark-default-v2.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-inline-light-hover"
              src="/assets/case-arrow-inline-light-hover.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-hover"
              src="/assets/case-arrow-dark-hover-v2.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-light-disabled"
              src="/assets/case-arrow-inline-light-disabled.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-dark-disabled"
              src="/assets/case-arrow-dark-disabled-v2.svg"
              width="14"
              height="14"
              alt=""
            />
          </button>
          <button
            className="slider-arrow slider-arrow-next"
            type="button"
            aria-label="Next image"
            disabled={index === images.length - 1}
            onClick={() => navigate(index + 1)}
          >
            <img
              className="arrow-state arrow-light-default"
              src="/assets/case-arrow-inline-light-default.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-dark-default"
              src="/assets/case-arrow-dark-default-v2.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-inline-light-hover"
              src="/assets/case-arrow-inline-light-hover.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-hover"
              src="/assets/case-arrow-dark-hover-v2.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-light-disabled"
              src="/assets/case-arrow-inline-light-disabled.svg"
              width="14"
              height="14"
              alt=""
            />
            <img
              className="arrow-state arrow-dark-disabled"
              src="/assets/case-arrow-dark-disabled-v2.svg"
              width="14"
              height="14"
              alt=""
            />
          </button>
        </div>
      </div>
      {isOpen ? (
        <OpenedImageOverlay
          images={images}
          index={index}
          alt={alt}
          onIndexChange={setIndex}
          onClose={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
