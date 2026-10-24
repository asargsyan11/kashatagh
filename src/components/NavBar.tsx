'use client';

import { useState, useEffect, useRef } from 'react';

const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggle = (id: string) => setOpenMenu((prev) => (prev === id ? null : id));
  const close = () => setOpenMenu(null);

  return (
    <nav className="nav" ref={navRef}>
      <div className="wordmark">Հայոց <span>Քաշաթաղ</span></div>
      <div className="nav-links">

        <div className="nav-item">
          <button
            className="nav-trigger"
            onClick={() => toggle('history')}
            aria-expanded={openMenu === 'history'}
          >
            Պատմություն <Chevron />
          </button>
          <div className={`dropdown${openMenu === 'history' ? ' open' : ''}`}>
            <a href="/geography" onClick={close}>Աշխարհագրական դիրք</a>
            <a href="/history" onClick={close}>Պատմական ակնարկ</a>
            <a href="/history/sources" onClick={close}>Հիշատակումներ պատմական աղբյուրներում</a>
          </div>
        </div>

        <div className="nav-item"><a href="/monuments">Հուշարձաններ</a></div>
        <div className="nav-item"><a href="/liberation-movement">Արցախյան շարժում</a></div>
        <div className="nav-item"><a href="/frontline">Առաջնագիծ</a></div>

        <div className="nav-item">
          <button
            className="nav-trigger"
            onClick={() => toggle('people')}
            aria-expanded={openMenu === 'people'}
          >
            Ժողովուրդ <Chevron />
          </button>
          <div className={`dropdown${openMenu === 'people' ? ' open' : ''}`}>
            <a href="/resettlement" onClick={close}>Վերաբնակեցում</a>
            <a href="/kashatagh-people" onClick={close}>Քաշաթաղցիները</a>
            <a href="/memorial" onClick={close}>Հուշամատյան</a>
          </div>
        </div>

        <div className="nav-item">
          <button
            className="nav-trigger"
            onClick={() => toggle('media')}
            aria-expanded={openMenu === 'media'}
          >
            Մեդիա <Chevron />
          </button>
          <div className={`dropdown${openMenu === 'media' ? ' open' : ''}`}>
            <a href="/merani-newspaper" onClick={close}>Մերանի պաշտոնաթերթ</a>
            <a href="/film" onClick={close}>Ֆիլմ</a>
            <a href="/library" onClick={close}>Գրադարան</a>
          </div>
        </div>

        <div className="nav-item">
          <button
            className="nav-trigger"
            onClick={() => toggle('about')}
            aria-expanded={openMenu === 'about'}
          >
            Մեր մասին <Chevron />
          </button>
          <div className={`dropdown${openMenu === 'about' ? ' open' : ''}`}>
            <a href="/about-photographer" onClick={close}>Հեղինակի մասին</a>
            <a href="/team" onClick={close}>Մեր թիմը</a>
            <a href="/supporting-orgs" onClick={close}>Աջակից հասարակական կազմակերպություններ</a>
            <a href="/support-us" onClick={close}>Աջակցել մեզ</a>
          </div>
        </div>

        <div className="nav-item"><a href="/store">Խանութ</a></div>

      </div>
    </nav>
  );
}
