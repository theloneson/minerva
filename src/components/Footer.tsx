interface FooterProps {
  top: number;
}

export function Footer({ top }: FooterProps) {
  return (
    <footer 
      className="absolute left-0 w-[1920px] h-[933px] overflow-hidden bg-black" 
      style={{ top: `${top}px` }}
    >
      {/* Background Decorations */}
      <div className="absolute left-[-169px] top-[216px] w-[472px] h-[335px] opacity-40 bg-[url('/figma/landing/assets/f45ef5c82c01e6de.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
      
      <div className="absolute left-[1769px] top-[-40px] w-[276px] h-[217px] flex flex-row gap-[68px] rotate-45">
        {[1, 2, 3, 4].map(i => <div key={i} className="w-[1px] h-[250px] bg-[#BD9675]" />)}
      </div>
      <div className="absolute left-[1775px] top-[756px] w-[276px] h-[177px] flex flex-row gap-[68px] rotate-45">
        {[1, 2, 3, 4].map(i => <div key={i} className="w-[1px] h-[250px] bg-[#BD9675]" />)}
      </div>

      {/* Top Links Row */}
      <div className="absolute left-[217px] top-[155px] w-[1608px] flex flex-row gap-[205px] items-start">
        
        {/* Working Hours */}
        <div className="w-[172px] flex flex-col gap-[30px] flex-shrink-0">
          <span className="font-oswald font-semibold text-[20px] leading-[24px] text-brand-yellow">Working Hours</span>
          <span className="font-josefin font-normal text-[16px] leading-[32px] tracking-tight text-footer-gray">
            MONDAY TO SATURDAY<br/>7.00am – 6.00pm
          </span>
        </div>

        {/* Quick Links */}
        <div className="w-[172px] flex flex-col gap-[30px] flex-shrink-0">
          <span className="font-oswald font-semibold text-[20px] leading-[24px] text-brand-red">Quick Links</span>
          <div className="flex flex-col font-nunito font-normal text-[16px] leading-[32px]">
            <a href="/" className="text-footer-gray hover:text-brand-yellow transition-colors">Home</a>
            <a href="/catering" className="text-footer-gray hover:text-brand-yellow transition-colors">Catering Service</a>
            <a href="/about-us" className="text-footer-gray hover:text-brand-yellow transition-colors">About Us</a>
            <a href="/find-us" className="text-footer-gray hover:text-brand-yellow transition-colors">Find Us</a>
          </div>
        </div>

        {/* Our Specials */}
        <div className="w-[172px] flex flex-col gap-[30px] flex-shrink-0">
          <span className="font-oswald font-semibold text-[20px] leading-[24px] text-brand-red">Our Specials</span>
          <div className="flex flex-col font-nunito font-normal text-[16px] leading-[32px] text-footer-gray">
            <span>Quick Bite</span>
            <span>Blends</span>
            <span>Pastries</span>
            <span>Salads</span>
          </div>
        </div>

        {/* Social */}
        <div className="w-[123px] flex flex-col gap-[30px] flex-shrink-0">
          <span className="font-oswald font-normal text-[20px] leading-[24px] text-brand-yellow">Social</span>
          <div className="flex flex-col font-nunito font-normal text-[16px] leading-[32px]">
            <a href="#" className="text-footer-gray hover:text-brand-yellow transition-colors">Facebook</a>
            <a href="#" className="text-footer-gray hover:text-brand-yellow transition-colors">Instagram</a>
          </div>
        </div>

        {/* Contact */}
        <div className="w-[251px] flex flex-col gap-[45px] flex-shrink-0">
          <span className="font-oswald font-semibold text-[20px] leading-[24px] text-white">Contact</span>
          <div className="flex flex-col font-nunito font-normal text-[16px] leading-[32px]">
            <a href="mailto:theliquidspotfoodanddriks@gmail.com" className="text-footer-gray hover:text-brand-yellow transition-colors whitespace-nowrap">theliquidspotfoodanddriks@gmail.com</a>
            <a href="tel:+447810007544" className="text-footer-gray hover:text-brand-yellow transition-colors">+447810007544</a>
          </div>
        </div>
      </div>

      {/* Middle Newsletter Row */}
      <div className="absolute left-[179px] top-[467px] w-[1579px] flex flex-row gap-[286px] items-center">
        <div className="w-[252px] h-[252px] flex-shrink-0 bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
        <span className="w-[420px] flex-shrink-0 font-nunito font-normal text-[16px] leading-[27.2px] text-center text-footer-gray">
          The Liquid Spot is your go-to for bold flavours and feel-good bites — from loaded shawarmas and flaky pastries to rich banana loaves and refreshing handcrafted drinks. Every bite and sip is made to satisfy.
        </span>
        <div className="w-[360px] flex-shrink-0 flex flex-col gap-[15px]">
          <span className="font-epilogue font-normal text-[16px] leading-[26.67px] text-white">Get recent news and updates.</span>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-[360px] h-[63px] rounded-[10px] bg-white border border-[#DEDEDE] px-[36px] font-epilogue text-[16px] text-[#222] outline-none"
          />
          <button className="relative mt-[11px] w-[158.63px] h-[60px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <div className="absolute left-[14.94px] top-[-6px] w-[150.69px] h-[72px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-fredoka font-normal text-[16px] text-white">Subscribe</span>
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="absolute left-0 top-[878px] w-[1920px] flex flex-row gap-[8px] items-center justify-center">
        <span className="font-fugaz font-normal text-[16px] leading-[26.67px] text-brand-yellow">TheLiquidSpot</span>
        <span className="font-nunito font-normal text-[14px] leading-[23.8px] text-footer-gray">© 2025. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

// Mobile / tablet footer — flow layout (used below lg)
export function MobileFooter() {
  return (
    <footer className="bg-black px-6 py-12 md:px-12 flex flex-col gap-10 overflow-hidden">
      {/* Logo + blurb */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-[140px] h-[140px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
        <span className="max-w-md font-nunito font-normal text-[14px] leading-[24px] text-footer-gray">
          The Liquid Spot is your go-to for bold flavours and feel-good bites — from loaded shawarmas and flaky pastries to rich banana loaves and refreshing handcrafted drinks. Every bite and sip is made to satisfy.
        </span>
      </div>

      {/* Link columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
        <div className="flex flex-col gap-[14px]">
          <span className="font-oswald font-semibold text-[18px] leading-[24px] text-brand-yellow">Working Hours</span>
          <span className="font-josefin font-normal text-[14px] leading-[26px] tracking-tight text-footer-gray">
            MONDAY TO SATURDAY<br/>7.00am – 6.00pm
          </span>
        </div>
        <div className="flex flex-col gap-[14px]">
          <span className="font-oswald font-semibold text-[18px] leading-[24px] text-brand-red">Quick Links</span>
          <div className="flex flex-col font-nunito font-normal text-[14px] leading-[28px]">
            <a href="/" className="text-footer-gray hover:text-brand-yellow transition-colors">Home</a>
            <a href="/catering" className="text-footer-gray hover:text-brand-yellow transition-colors">Catering Service</a>
            <a href="/about-us" className="text-footer-gray hover:text-brand-yellow transition-colors">About Us</a>
            <a href="/find-us" className="text-footer-gray hover:text-brand-yellow transition-colors">Find Us</a>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <span className="font-oswald font-semibold text-[18px] leading-[24px] text-brand-red">Our Specials</span>
          <div className="flex flex-col font-nunito font-normal text-[14px] leading-[28px] text-footer-gray">
            <span>Quick Bite</span>
            <span>Blends</span>
            <span>Pastries</span>
            <span>Salads</span>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <span className="font-oswald font-normal text-[18px] leading-[24px] text-brand-yellow">Social</span>
          <div className="flex flex-col font-nunito font-normal text-[14px] leading-[28px]">
            <a href="#" className="text-footer-gray hover:text-brand-yellow transition-colors">Facebook</a>
            <a href="#" className="text-footer-gray hover:text-brand-yellow transition-colors">Instagram</a>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="flex flex-col gap-[14px]">
        <span className="font-oswald font-semibold text-[18px] leading-[24px] text-white">Contact</span>
        <div className="flex flex-col font-nunito font-normal text-[14px] leading-[28px]">
          <a href="mailto:theliquidspotfoodanddriks@gmail.com" className="text-footer-gray hover:text-brand-yellow transition-colors break-all">theliquidspotfoodanddriks@gmail.com</a>
          <a href="tel:+447810007544" className="text-footer-gray hover:text-brand-yellow transition-colors">+447810007544</a>
        </div>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col gap-[15px] w-full max-w-md">
        <span className="font-epilogue font-normal text-[15px] leading-[26px] text-white">Get recent news and updates.</span>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-[54px] rounded-[10px] bg-white border border-[#DEDEDE] px-[24px] font-epilogue text-[15px] text-[#222] outline-none"
        />
        <button type="button" className="relative w-[158.63px] h-[56px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 transition-all duration-300">
          <div className="absolute -inset-y-[6px] inset-x-[10px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
          <span className="font-fredoka font-normal text-[15px] text-white">Subscribe</span>
        </button>
      </div>

      {/* Copyright */}
      <div className="flex flex-row flex-wrap gap-[8px] items-center justify-center border-t border-white/10 pt-6">
        <span className="font-fugaz font-normal text-[15px] leading-[26px] text-brand-yellow">TheLiquidSpot</span>
        <span className="font-nunito font-normal text-[13px] leading-[22px] text-footer-gray">© 2025. All Rights Reserved.</span>
      </div>
    </footer>
  );
}