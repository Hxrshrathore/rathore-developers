'use client';

import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  logoText,
  logoHref = '/',
  items,
  className = '',
  ease = 'circ.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor,
  buttonLabel = 'Schedule a Visit',
  onButtonClick,
  rightContent,
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const router = useRouter();

  const NAV_HEIGHT = 68;        // top bar height
  const EXPANDED_HEIGHT = 340;  // expanded desktop height

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return EXPANDED_HEIGHT;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const padding = 20;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return NAV_HEIGHT + contentHeight + padding;
      }
    }
    return EXPANDED_HEIGHT;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: NAV_HEIGHT, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.5, ease, stagger: 0.1 }, '-=0.15');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    // If nav was already expanded (e.g. prop change from scroll), keep it open
    if (isExpanded && tl) {
      tl.progress(1);
    }
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  // Lock body scroll when nav is expanded
  useLayoutEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isExpanded]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const handleCloseAndNavigate = (e, href) => {
    e.preventDefault();
    if (isExpanded) {
      const tl = tlRef.current;
      if (tl) {
        setIsHamburgerOpen(false);
        tl.eventCallback('onReverseComplete', () => {
          setIsExpanded(false);
          router.push(href);
        });
        tl.reverse();
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] z-[99] top-[1em] md:top-[1.5em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block p-0 rounded-2xl shadow-lg relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor, height: NAV_HEIGHT }}
      >
        {/* Top Bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 flex items-center justify-between px-5 z-[2]" style={{ height: NAV_HEIGHT }}>
          {/* Hamburger */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group flex flex-col items-center justify-center cursor-pointer gap-[7px] order-2 md:order-none w-12 h-12`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' }}
          >
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? 'translate-y-[4.5px] rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[28px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${
                isHamburgerOpen ? '-translate-y-[4.5px] -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          {/* Logo — centered */}
          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            <Link href={logoHref} className="text-[22px] font-bold tracking-tighter no-underline" style={{ color: menuColor || '#000' }}>
              {logoText}
            </Link>
          </div>

          {/* Right side — Portal + CTA */}
          <div className="hidden md:flex items-center gap-4 order-3">
            {rightContent}
            <button
              type="button"
              className="card-nav-cta-button inline-flex border-0 rounded-xl px-6 py-3 items-center font-bold text-[10px] uppercase tracking-[0.15em] cursor-pointer transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden order-3">
            <button
              type="button"
              className="inline-flex border-0 rounded-lg px-4 py-2.5 items-center font-bold text-[9px] uppercase tracking-widest cursor-pointer"
              style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
              onClick={onButtonClick}
            >
              {buttonLabel}
            </button>
          </div>
        </div>

        {/* Expanded Content — Card Panels */}
        <div
          className={`card-nav-content absolute left-0 right-0 bottom-0 p-3 flex flex-col items-stretch gap-3 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-stretch md:gap-3`}
          style={{ top: NAV_HEIGHT }}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-3 p-5 md:p-6 rounded-xl min-w-0 flex-[1_1_auto] md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-semibold tracking-[-0.3px] text-[20px] md:text-[22px] mb-1">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-opacity duration-200 hover:opacity-70 text-[14px] md:text-[15px] py-0.5"
                    href={lnk.href || '#'}
                    aria-label={lnk.ariaLabel}
                    onClick={(e) => handleCloseAndNavigate(e, lnk.href || '#')}
                    style={{ color: 'inherit' }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0 text-[16px]" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
