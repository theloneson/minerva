import { YellowButton } from './Shared';

interface HeaderProps {
  activePage?: 'home' | 'catering' | 'find-us' | 'about-us';
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