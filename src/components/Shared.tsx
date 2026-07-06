import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
}

// Internal paths must go through react-router Link — plain <a> forces a full
// reload and 404s on hosts without SPA fallback.
function tagFor(href?: string): { Tag: React.ElementType; props: Record<string, unknown> } {
  if (!href) return { Tag: 'button', props: {} };
  if (href.startsWith('/')) return { Tag: Link, props: { to: href } };
  return { Tag: 'a', props: { href } };
}

export function RedButton({ children, href, onClick, className = "" }: ButtonProps) {
  const { Tag, props } = tagFor(href);
  return (
    <Tag
      {...(props as object)}
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
        className="group w-[80px] h-[80px] rounded-full bg-brand-red flex items-center justify-center shadow-[0_14px_28px_rgba(0,0,0,0.22)] hover:shadow-[0_20px_40px_rgba(243,39,76,0.4)] hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out"
      >
        <i className="fab fa-instagram text-[40px] text-white inline-block group-hover:rotate-12 transition-transform duration-300" />
      </a>
      <span className="font-nunito font-medium text-[30px] md:text-[40px] leading-tight text-black">Follow TheLiquidSpot</span>
      <span className="max-w-md font-nunito font-medium text-[15px] md:text-[17px] leading-[26px] text-body-gray">
        Fresh bites, refreshing blends, and moments worth sharing.
      </span>
    </section>
  );
}

export function YellowButton({ children, href, onClick, className = "" }: ButtonProps) {
  const { Tag, props } = tagFor(href);
  return (
    <Tag
      {...(props as object)}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg bg-brand-yellow hover:brightness-95 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <span className="font-oswald text-black">{children}</span>
    </Tag>
  );
}

// ==========================================
// Hover Image Component (Use this for your photos)
// ==========================================
interface HoverImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HoverImage({ src, alt, className = "" }: HoverImageProps) {
  return (
    <div className={`overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:brightness-90"
      />
    </div>
  );
}