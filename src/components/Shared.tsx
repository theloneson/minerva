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