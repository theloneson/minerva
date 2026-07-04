import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

export function RedButton({ children, href, onClick, className = "" }: ButtonProps) {
  const Tag = href ? "a" : "button";
  return (
    <Tag 
      href={href} 
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-[12px] bg-brand-red px-6 h-[55px] hover:brightness-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {/* The inset double-border trick */}
      <span className="pointer-events-none absolute -inset-y-1.5 -inset-x-1 rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C]" />
      <span className="font-nunito font-extrabold text-[18px] leading-[25px] text-white">{children}</span>
    </Tag>
  );
}

// Mobile / tablet "Follow TheLiquidSpot" section — flow layout (used below lg)
export function MobileFollow() {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-14 text-center">
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="The Liquid Spot on Instagram"
        className="w-[80px] h-[80px] rounded-full bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all"
      >
        <i className="fab fa-instagram text-[40px] text-white" />
      </a>
      <span className="font-nunito font-medium text-[30px] md:text-[40px] leading-tight text-black">Follow TheLiquidSpot</span>
      <span className="max-w-md font-nunito font-medium text-[15px] md:text-[17px] leading-[26px] text-body-gray">
        Fresh bites, refreshing blends, and moments worth sharing.
      </span>
    </section>
  );
}

export function YellowButton({ children, href, onClick, className = "" }: ButtonProps) {
  const Tag = href ? "a" : "button";
  return (
    <Tag 
      href={href} 
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg bg-brand-yellow hover:brightness-95 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <span className="font-oswald text-black">{children}</span>
    </Tag>
  );
}