import { useState } from 'react';
import { YellowButton } from './Shared';

interface HeaderProps {
  activePage?: 'home' | 'catering' | 'find-us' | 'about-us';
}

const navLinks = [
  { href: '/', label: 'Home', page: 'home' },
  { href: '/catering', label: 'Catering', page: 'catering' },
  { href: '/find-us', label: 'Find Us', page: 'find-us' },
  { href: '/about-us', label: 'About Us', page: 'about-us' },
];

// Mobile / tablet header — flow layout with hamburger menu (used below lg)
export function MobileHeader({ activePage = 'home' }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 right-0 z-50">
      <div className="flex flex-row items-center justify-between px-5 py-4 md:px-10">
        <a
          href="/"
          aria-label="The Liquid Spot — Home"
          className="w-[72px] h-[72px] md:w-[90px] md:h-[90px] flex-shrink-0 bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat"
        />
        <div className="flex flex-row items-center gap-3">
          <YellowButton
            href="https://wa.me/447810007544"
            className="h-[42px] px-4 font-normal text-[16px] md:h-[48px] md:px-5 md:text-[18px]"
          >
            Order Now
          </YellowButton>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-[44px] h-[44px] rounded-lg bg-black/40 border border-white/20 flex items-center justify-center"
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'} text-[20px] text-white`} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="mx-5 md:mx-10 rounded-2xl bg-black/90 backdrop-blur-sm border border-white/10 px-6 py-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.page}
              href={link.href}
              className={`py-3 font-oswald font-bold text-[20px] border-b border-white/10 last:border-b-0 transition-colors ${
                activePage === link.page ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Header({ activePage = 'home' }: HeaderProps) {
  const getLinkClass = (page: string) => 
    `font-oswald font-bold text-[24px] leading-[35px] whitespace-nowrap transition-colors ${
      activePage === page ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
    }`;

  // 1. The Landing Page uses a custom asymmetrical layout
  if (activePage === 'home') {
    return (
      <>
        <a 
          href="/" 
          className="absolute left-[567px] top-[19px] w-[131px] h-[131px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" 
        />
        <nav className="absolute left-[1010px] top-[66px] flex flex-row gap-[48px] items-center">
          <a href="/" className={getLinkClass('home')}>Home</a>
          <a href="/catering" className={getLinkClass('catering')}>Catering</a>
          <a href="/find-us" className={getLinkClass('find-us')}>Find Us</a>
          <a href="/about-us" className={getLinkClass('about-us')}>About Us</a>
        </nav>
        <YellowButton 
          href="https://wa.me/447810007544" 
          className="absolute left-[1700px] top-[56px] w-[181.91px] h-[57px] font-normal text-[24px]"
        >
          Order Now
        </YellowButton>
      </>
    );
  }

  // 2. All sub-pages use a clean, full-width symmetrical flexbox layout
  return (
    <div className="absolute left-[145px] top-[19px] w-[1629.91px] h-[131px] flex flex-row gap-[329px] items-center z-50">
      <a 
        href="/" 
        className="w-[131px] h-[131px] flex-shrink-0 bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" 
      />
      
      <nav className="w-[659px] flex-shrink-0 flex flex-row gap-[48px] items-center">
        <a href="/" className={getLinkClass('home')}>Home</a>
        <a href="/catering" className={getLinkClass('catering')}>Catering</a>
        <a href="/find-us" className={getLinkClass('find-us')}>Find Us</a>
        <a href="/about-us" className={getLinkClass('about-us')}>About Us</a>
      </nav>
      
      <YellowButton 
        href="https://wa.me/447810007544" 
        className="w-[181.91px] h-[57px] flex-shrink-0 font-normal text-[24px]"
      >
        Order Now
      </YellowButton>
    </div>
  );
}