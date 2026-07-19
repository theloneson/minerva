import { useState } from 'react';
import { useScale } from '../hooks/useScale';
import { RedButton, MobileFollow } from '../components/Shared';
import { Header, MobileHeader } from '../components/Header';
import { Footer, MobileFooter } from '../components/Footer';
import { InstagramStrip, MobileInstagramStrip } from '../components/InstagramStrip';

// Menu section height per tab — Pastries needs the tall/scrollable treatment, but Quick Bites,
// Drinks, and Salads each get a section sized to their own content so short tabs don't leave a
// dead white gap before the next section starts.
const MENU_HEIGHTS: Record<'quick' | 'drinks' | 'pastries' | 'salads', number> = {
  quick: 1740,
  drinks: 1190,
  pastries: 2010,
  salads: 1080,
};

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState<'quick' | 'drinks' | 'pastries' | 'salads'>('quick');
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  const menuSectionHeight = MENU_HEIGHTS[activeTab];
  const menuEnd = 1574 + menuSectionHeight;
  const cateringTop = menuEnd + 52;
  const cateringEnd = cateringTop + 912;
  const simpleOrderingTop = cateringEnd + 131;
  const simpleOrderingEnd = simpleOrderingTop + 535;
  const faqTop = simpleOrderingEnd + 323;
  const faqEnd = faqTop + 1077;
  const everyBiteTop = faqEnd + 159;
  const everyBiteEnd = everyBiteTop + 720.38;
  const followTop = everyBiteEnd - 8.38;
  const followEnd = followTop + 314.3;
  const instagramTop = followEnd + 24.7;
  const instagramEnd = instagramTop + 367.05;
  const footerTop = instagramEnd + 24.95;
  const totalHeight = footerTop + 933 + 1;

  const { scaleTransform, scaledHeight } = useScale(totalHeight);

  const handleMenuScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const isDesktop = window.innerWidth >= 1024;
    const el = document.getElementById(isDesktop ? "menu" : "menu-m");
    if (!el) return;
    if (isDesktop) {
      const scale = Math.min(1, window.innerWidth / 1920);
      window.scrollTo({ top: el.offsetTop * scale, behavior: "smooth" });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="hidden lg:block w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div
        className="relative mx-auto bg-white font-nunito w-[1920px] origin-top-left"
        style={{ transform: scaleTransform, height: totalHeight }}
      >
        {/* ============ HERO ============ */}
        <section className="absolute left-0 top-0 w-[1920px] h-[900px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/figma/landing/assets/94addf636cfc5819.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />

          {/* Decorative Right Cluster (photos only) */}
          <div className="absolute left-[775px] top-[121px] w-[1172px] h-[889px]">
            <div className="absolute left-0 top-0 w-[163px] h-[127px] rounded-[4px] bg-[url('/figma/landing/assets/374a955a0b7cc45c.png')] bg-center bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ transform: 'matrix(0,-1,1,0,72,255)' }} />
            <div className="absolute left-0 top-0 w-[150.083px] h-[501.769px] bg-[url('/figma/landing/assets/9a2b60982818b63b.png')] bg-center bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ transform: 'matrix(0.519,0.855,-0.855,0.519,1051.891,432)' }} />
            <div className="absolute left-0 top-0 w-[458.303px] h-[687.455px] bg-[url('/figma/landing/assets/d57efd050bfddac0.png')] bg-center bg-cover bg-no-repeat origin-top-left" style={{ transform: 'matrix(0.925,-0.380,0.380,0.925,-62,214.061)' }} />
            <div className="absolute left-[72px] top-[-123px] w-[1166.911px] h-[1150.454px] overflow-hidden pointer-events-none">
              <div className="absolute left-0 top-0 w-[794.477px] h-[993.54px] bg-[url('/figma/landing/assets/d6b05c66dc1dea2e.png')] bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ backgroundPosition: '50% 0', transform: 'matrix(-0.117,-0.993,-0.993,0.117,1167.7,869.2)' }} />
            </div>
          </div>

          {/* Dark veil over the WHOLE section — same trick as the Catering Services banner. Because it spans edge-to-edge there's no visible box, and everything rendered after it (logo, bubble, header, copy) stays crisp on top */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          <div className="absolute left-[982px] top-[565px] w-[248px] h-[248px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />

          {/* WhatsApp Bubble */}
          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[1709px] top-[747px] w-[125px] h-[125px] hover:scale-105 transition-transform">
            <div className="absolute inset-0 rounded-[37.5px] bg-gradient-to-br from-[#FBFBFC] to-[#DBDDE8]" />
            <div className="absolute left-[18.8px] top-[62.5px] w-[85.2px] h-[53.2px] opacity-25 rounded-[37.5px] bg-gradient-to-tl from-[#00D95F] to-[#07FF74]" />
            <div className="absolute left-[16.3px] top-[16.3px] w-[92.2px] h-[92.2px] rounded-[37.5px] bg-gradient-to-tl from-[#00D95F] to-[#07FF74] flex items-center justify-center">
              <i className="fab fa-whatsapp text-white text-[58px]" />
            </div>
          </a>

          <Header activePage="home" />

          <span className="absolute left-[152px] top-[300px] font-nunito font-bold text-[20px] leading-[25px] whitespace-nowrap text-brand-red">
            Freshly Made Daily • Served With Flavor
          </span>
          
          <div className="absolute left-[149px] top-[345px] font-nunito font-black text-[120px] leading-[96px]">
            <div className="text-white">Flavor</div>
            <div className="text-brand-red">You’ll</div>
            <div className="text-brand-yellow">Crave Again</div>
          </div>

          <span className="absolute left-[149px] top-[650px] w-[560px] font-nunito font-light italic text-[20px] leading-[25px] text-[#F4F1F1]">
            From signature shawarmas to refreshing blends and satisfying meals, The Liquid Spot brings you flavor, comfort, and quality in every order.
          </span>

          <div className="absolute left-[149px] top-[750px] w-[600px] h-[61px]">
            <RedButton onClick={handleMenuScroll} className="absolute left-0 top-0 w-[192.27px]">
              View Menu
            </RedButton>
            <div className="absolute left-[252.27px] top-[20px] w-[107px] h-[15px] bg-[url('/figma/landing/assets/6073f9eb99d516d9.png')] bg-center bg-no-repeat bg-[length:100%_100%]" />
          </div>
        </section>

        {/* ============ BITES & BLENDS INTRO ============ */}
        <section className="absolute left-[295px] top-[979px] w-[1330px] h-[555px]">
          <div className="absolute left-[-64px] top-[30px] w-[369px] h-[525px] rounded-pill bg-[url('/figma/landing/assets/ded90afec8a34908.png')] bg-center bg-[length:100%_114.8%] bg-no-repeat hover:scale-105 hover:shadow-2xl transition-all duration-350" />
          <div className="absolute left-[1024px] top-[30px] w-[369px] h-[525px] rounded-pill bg-[url('/figma/landing/assets/3a6280bd1e8636e7.png')] bg-center bg-[length:100%_114.8%] bg-no-repeat hover:scale-105 hover:shadow-2xl transition-all duration-350" />
          
          <span className="absolute left-[530px] top-[83px] w-[304px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] text-center whitespace-nowrap text-brand-red">
            THE LIQUID SPOT
          </span>
          
          <div className="absolute left-[394px] top-[152px] w-[578.75px] h-[72px] flex flex-row items-center justify-center gap-[18px] font-nunito font-semibold text-[80px] leading-[72px] text-black whitespace-nowrap">
            <span>Bites</span><span>&amp;</span><span>Blends</span>
          </div>
          
          <span className="absolute left-[392px] top-[286px] w-[583px] font-nunito font-medium text-[20px] leading-[26.67px] text-center text-body-gray text-balance">
            The Liquid Spot is your go-to for bold flavours and feel-good bites — from loaded shawarmas and flaky pastries to rich banana loaves and refreshing handcrafted drinks. Every bite and sip is made to satisfy.
          </span>
          
          <span className="absolute left-[508px] top-[411px] w-[351px] font-nunito font-black text-[16px] leading-[26.67px] text-center whitespace-nowrap text-body-gray">
            Monday to Saturday – 07:00am TO 06:00pm
          </span>
          <span className="absolute left-[569px] top-[444px] w-[213px] font-nunito font-black text-[24px] leading-[40px] text-center whitespace-nowrap text-brand-red">
            +44 7810 007 544
          </span>
          
          <RedButton href="/about-us" className="absolute left-[565px] top-[503px] w-[192.27px]">
            Learn More
          </RedButton>
        </section>

        {/* ============ MENU ============ */}
        <section id="menu" className="absolute left-0 top-[1574px] w-[1920px] overflow-hidden bg-white" style={{ height: menuSectionHeight }}>
          <div className="absolute left-[265px] top-[140px] w-[681px] h-[125px]">
            <div className="absolute left-[23px] top-[14px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="absolute left-[66px] top-0 font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">
              CRAVINGS START HERE.
            </span>
            <span className="absolute left-[22px] top-[50px] w-[636px] font-nunito font-extrabold text-[80px] leading-[72px] text-center whitespace-nowrap text-black">
              View Our Menu
            </span>
          </div>

          {/* TABS — whitespace-nowrap keeps every label on one line so all four sit on the same baseline instead of wrapping unevenly and looking crooked */}
          <div className="absolute left-[290px] top-[316px] flex flex-row gap-[56px] items-start">
            <div onClick={() => setActiveTab('quick')} className="relative h-[69px] cursor-pointer text-center group">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] whitespace-nowrap text-black group-hover:text-brand-red transition-colors">Quick Bites &amp; Meals</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] whitespace-nowrap text-brand-red">Yummy Choi</div>
              {activeTab === 'quick' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div onClick={() => setActiveTab('drinks')} className="relative h-[69px] cursor-pointer text-center group">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] whitespace-nowrap text-black group-hover:text-brand-red transition-colors">Fresh Blends &amp; Drinks</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] whitespace-nowrap text-brand-red">Tropical and Traditional</div>
              {activeTab === 'drinks' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div onClick={() => setActiveTab('pastries')} className="relative h-[69px] cursor-pointer text-center group">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] whitespace-nowrap text-black group-hover:text-brand-red transition-colors">Pastries</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] whitespace-nowrap text-brand-red">Cool Bites</div>
              {activeTab === 'pastries' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div onClick={() => setActiveTab('salads')} className="relative h-[69px] cursor-pointer text-center group">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] whitespace-nowrap text-black group-hover:text-brand-red transition-colors">Salads</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] whitespace-nowrap text-brand-red">Cool Bites</div>
              {activeTab === 'salads' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
          </div>

          {/* Scrollable tab content area — starts below the tabs row so it never intercepts clicks on the tabs themselves. The section itself is sized per-tab (see MENU_HEIGHTS) so short tabs (Drinks, Salads) don't leave dead space; only Pastries — whose content is genuinely taller than the section — scrolls internally */}
          <div
            className="absolute left-0 top-[406px] w-full overflow-x-hidden"
            style={{ height: menuSectionHeight - 406, overflowY: activeTab === 'pastries' ? 'auto' : 'visible' }}
          >

          {/* TAB 1: QUICK BITES */}
          {activeTab === 'quick' && (
            <div className="absolute left-[90px] top-[20px] w-[1800px] flex flex-col">
              {menuGroups.map((group, idx) => (
                <div key={idx} className="relative h-[430px] w-[1800px]">
                  <div className="absolute left-[60px] top-[52px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
                  <span className="absolute left-[113px] top-[42px] font-nunito font-extrabold text-[20px] leading-[23px] whitespace-nowrap text-black">{group.name}</span>
                  <div className="absolute left-[51px] top-[117px] flex flex-row gap-[70px]">
                    {group.cards.map((card, cIdx) => (
                      <div key={cIdx} className="relative w-[540px] h-[265px] flex-shrink-0 rounded-[22px] bg-white shadow-card hover:-translate-y-[7px] hover:shadow-[inset_0_0_0_1px_#E5E7EB,14px_20px_34px_0px_rgba(0,0,0,0.22)] transition-all duration-300">
                        <div className="absolute left-[1px] top-[1px] w-[268px] h-[263px] overflow-hidden rounded-[22px]" style={{ background: card.bg }} />
                        <div className="absolute left-[20px] top-[23px] h-[33px] rounded-[33px] bg-brand-yellow flex items-center justify-center px-[18px]">
                          <span className="font-nunito font-semibold text-[14px] leading-[22px] text-[#222]">{card.label}</span>
                        </div>
                        <div className="absolute left-[292px] top-[18px] w-[228px] h-[178px] overflow-hidden flex flex-col gap-[5px] items-start">
                          <span className="font-nunito font-bold text-[22px] leading-[26px] line-clamp-2 text-[#222]">{card.title}</span>
                          <span className="font-nunito font-light text-[14px] leading-[18px] line-clamp-2 text-[#222] w-[226px]">{card.desc}</span>
                          <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-2 text-[#222] w-[226px]">{card.ingr}</span>
                          <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222] w-[226px]">{card.allergen}</span>
                        </div>
                        <span className="absolute left-[292px] top-[203px] font-nunito font-extrabold text-[18px] leading-[26px] text-brand-red">{card.price}</span>
                        {card.spice && (
                          <div className="absolute left-[292px] top-[234px] flex flex-row items-center gap-[5px]">
                            <span className="font-oswald font-normal text-[10px] leading-[13px] text-brand-redAlt">Spice Lvl:</span>
                            <span className="text-[10px] leading-[13px] tracking-[2px] whitespace-nowrap">🌶️ 🌶️🌶️</span>
                          </div>
                        )}
                        <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[434px] top-[201px] w-[86px] h-[28px] rounded-[6px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                          <span className="font-oswald font-normal text-[11px] text-black">Order Now</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: DRINKS */}
          {activeTab === 'drinks' && (
            <div className="absolute left-[190px] top-[100px] w-[1600px] flex flex-col gap-[86px]">
              {drinkRows.map((row, rIdx) => (
                <div key={rIdx} className="flex flex-row gap-[80px]">
                  {row.cards.map((card, cIdx) => (
                    <div key={cIdx} className="relative w-[500px] h-[250px] flex-shrink-0 mt-[36px] hover:-translate-y-[7px] transition-transform duration-300">
                      <div className="absolute left-0 top-0 w-[500px] h-[250px] rounded-[24px] bg-white shadow-[inset_0_0_0_1px_#E5E7EB]" />
                      <div className="absolute left-0 top-[-36px] w-[221px] h-[313px] rounded-[110px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${card.bg}')` }} />
                      <div className="absolute left-[248px] top-[26px] w-[236px] h-[196px] overflow-hidden flex flex-col">
                        <div className="font-nunito font-bold text-[22px] leading-[27px] line-clamp-2 text-[#222]">{card.title}</div>
                        <div className="mt-2.5 flex flex-col gap-2">
                          <span className="font-nunito font-light text-[14px] leading-[18px] line-clamp-2 text-[#222]">{card.desc}</span>
                          <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-2 text-[#222]">{card.ingr}</span>
                          <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.allergen}</span>
                        </div>
                        <div className="relative w-[236px] h-[32px] mt-[14px]">
                          <span className="absolute left-0 top-0 font-nunito font-extrabold text-[18px] leading-[32px] text-brand-red">{card.price}</span>
                          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[140px] top-[2px] w-[86px] h-[28px] rounded-[6px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                            <span className="font-oswald font-normal text-[11px] text-black">Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: PASTRIES */}
          {activeTab === 'pastries' && (
            <div className="absolute left-[70px] top-[34px] w-[1780px] flex flex-col gap-[53px]">
              <div className="flex flex-row gap-[60px]">
                {pies.map((card, idx) => (
                  <div key={idx} className="relative w-[400px] h-[598px] flex-shrink-0 hover:-translate-y-[8px] transition-transform duration-300">
                    <div className="absolute left-0 top-[179px] w-[400px] h-[419px] rounded-[39px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]" />
                    <div className="absolute left-0 top-[83px] w-[400px] h-[228px] rounded-[65px]" style={{ background: card.bg }} />
                    <span className="absolute left-[46px] top-[334px] font-nunito font-extrabold text-[22px] leading-[29px] text-brand-red">{card.price}</span>
                    <span className="absolute left-[46px] top-[363px] font-nunito font-normal text-[32px] leading-[38px] whitespace-nowrap text-black">{card.title}</span>
                    <div className="absolute left-[46px] top-[416px] w-[310px] h-[113px] overflow-hidden flex flex-col gap-[8px]">
                      <span className="font-nunito font-light text-[14px] leading-[20px] line-clamp-2 text-[#222]">{card.desc}</span>
                      <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.ingr}</span>
                      <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-2 text-[#222]">{card.allergen}</span>
                    </div>
                    <i className="fas fa-arrow-right absolute left-[53px] top-[543px] text-[19px] text-black" />
                    <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[120px] top-[534px] w-[133px] h-[43px] rounded-[6px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                      <span className="font-oswald font-normal text-[20px] text-black">Order Now</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[20px]">
                <span className="font-nunito font-bold text-[31px] leading-[37px] text-black">Banana Bread Range</span>
                <div className="flex flex-row flex-wrap gap-[60px] w-[1780px]">
                  {bananas.map((card, idx) => (
                    <div key={idx} className="relative w-[400px] h-[598px] flex-shrink-0 hover:-translate-y-[8px] transition-transform duration-300">
                      <div className="absolute left-0 top-[179px] w-[400px] h-[419px] rounded-[39px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]" />
                      <div className="absolute left-0 top-[83px] w-[400px] h-[228px] rounded-[65px]" style={{ background: card.bg }} />
                      <span className="absolute left-[46px] top-[334px] font-nunito font-extrabold text-[22px] leading-[29px] text-brand-red">{card.price}</span>
                      <span className="absolute left-[46px] top-[363px] w-[312px] font-nunito font-normal text-[32px] leading-[38px] text-black">{card.title}</span>
                      <div className="absolute left-[46px] top-[443px] w-[310px] h-[86px] overflow-hidden flex flex-col gap-[6px]">
                        <span className="font-nunito font-light text-[14px] leading-[20px] line-clamp-2 text-[#222]">{card.desc}</span>
                        <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.ingr}</span>
                        <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.allergen}</span>
                      </div>
                      <i className="fas fa-arrow-right absolute left-[53px] top-[543px] text-[19px] text-black" />
                      <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[120px] top-[534px] w-[133px] h-[43px] rounded-[6px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                        <span className="font-oswald font-normal text-[20px] text-black">Order Now</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SALADS */}
          {activeTab === 'salads' && (
            <div className="absolute left-[70px] top-[34px] w-[1780px] flex flex-row flex-wrap gap-[60px]">
              {salads.map((card, idx) => (
                <div key={idx} className="relative w-[400px] h-[598px] flex-shrink-0 hover:-translate-y-[8px] transition-transform duration-300">
                  <div className="absolute left-0 top-[179px] w-[400px] h-[419px] rounded-[39px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]" />
                  <div className="absolute left-0 top-[83px] w-[400px] h-[228px] rounded-[65px]" style={{ background: card.bg }} />
                  <span className="absolute left-[46px] top-[334px] font-nunito font-extrabold text-[22px] leading-[29px] text-brand-red">{card.price}</span>
                  <span className="absolute left-[46px] top-[363px] w-[312px] font-nunito font-normal text-[32px] leading-[38px] text-black">{card.title}</span>
                  <div className="absolute left-[46px] top-[443px] w-[310px] h-[86px] overflow-hidden flex flex-col gap-[6px]">
                    <span className="font-nunito font-light text-[14px] leading-[20px] line-clamp-2 text-[#222]">{card.desc}</span>
                    <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.ingr}</span>
                    <span className="font-nunito font-semibold text-[13px] leading-[16px] line-clamp-1 text-[#222]">{card.allergen}</span>
                  </div>
                  <i className="fas fa-arrow-right absolute left-[53px] top-[543px] text-[19px] text-black" />
                  <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[120px] top-[534px] w-[133px] h-[43px] rounded-[6px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                    <span className="font-oswald font-normal text-[20px] text-black">Order Now</span>
                  </a>
                </div>
              ))}
            </div>
          )}
          </div>
        </section>

        {/* ============ CATERING BANNER ============ */}
        <section className="absolute left-0 w-[1920px] h-[912px] overflow-hidden" style={{ top: cateringTop }}>
          <div className="absolute left-0 top-0 w-[963px] h-[960px] bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[962px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/45f616fcb6e453e7.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[1442px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/6315e951f530162f.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[960px] top-[480px] w-[963px] h-[480px] bg-[url('/figma/landing/assets/0df3bfdfbfaf75d0.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-[661px] top-0 w-[672px] h-[672px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
          <a href="/find-us#consultation" className="absolute left-[1202px] top-[532px] w-[322px] h-[92px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <div className="absolute left-[27.85px] top-[-10px] w-[305.87px] h-[114.06px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-nunito font-bold text-[25px] leading-[25px] text-white">Book a Consultation</span>
          </a>
        </section>

        {/* ============ SIMPLE ORDERING ============ */}
        <section className="absolute left-[346px] w-[1314px] h-[535px]" style={{ top: simpleOrderingTop }}>
          <span className="absolute left-[554px] top-[46px] font-oswald font-bold text-[25px] leading-[28px] text-center whitespace-nowrap text-brand-red">FOOD PROCESSING</span>
          <span className="absolute left-[341px] top-[113px] w-[631px] font-nunito font-semibold text-[80px] leading-[81px] text-center text-[#212121]">Simple Ordering, Great Food.</span>
          <div className="absolute left-[112px] top-[439px] w-[1032px] h-[1px] bg-[url('/figma/landing/assets/458b114f296b901e.png')] bg-left-top bg-repeat-x" style={{ backgroundSize: '978px 1px' }} />
          
          <div className="absolute left-[-97px] top-[310px] w-[1508px] flex flex-row gap-[133px] items-center">
            <div className="relative w-[414px] h-[259.39px] flex-shrink-0 flex flex-col items-center justify-center gap-[8px]">
              <span className="font-nunito font-semibold text-[28px] leading-[36.4px] whitespace-nowrap text-[#212121]">Freshly Made</span>
              <span className="w-[312px] font-nunito font-medium text-[17px] leading-[28px] text-center text-body-gray2">Every meal and drink is prepared fresh with care, flavor, and quality ingredients.</span>
            </div>
            <div className="relative w-[414px] h-[259.39px] flex-shrink-0 rounded-[17px] bg-white outline outline-1 outline-dashed outline-[#5C5C5B] outline-offset-[-1px]">
              <span className="absolute left-[51px] top-[55px] w-[312px] font-nunito font-medium text-[17px] leading-[28px] text-center text-body-gray2">Hit the Order Now button and a member of our team will respond quickly to guide you through your order.</span>
              <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[128px] top-[182px] w-[158px] h-[48px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
                <span className="font-oswald font-bold text-[17px] tracking-[0.8px] text-black uppercase">order now</span>
              </a>
            </div>
            <div className="relative w-[414px] h-[259.39px] flex-shrink-0 flex flex-col items-center justify-center gap-[8px]">
              <span className="font-nunito font-semibold text-[28px] leading-[36.4px] whitespace-nowrap text-[#212121]">Fast &amp; Reliable Delivery</span>
              <span className="w-[312px] font-nunito font-medium text-[17px] leading-[28px] text-center text-body-gray2">We work with trusted delivery services to get your order to you fresh and on time.</span>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="absolute left-[71px] w-[1808px] h-[1077px]" style={{ top: faqTop }}>
          <div className="absolute inset-0 rounded-[50px] border-solid border-[#222] border-y-[20px] border-x-[27px] pointer-events-none" />
          <div className="absolute left-[26px] top-[312px] w-[813px] flex flex-col gap-[67px] items-center">
            <span className="font-oswald font-bold text-[60px] leading-[28px] text-center text-brand-redAlt">FAQS</span>
            <span className="font-nunito font-bold text-[80px] leading-[80px] text-center text-[#212121] text-balance">Everything You Need To Know Before You Order</span>
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="w-[212.3px] h-[65px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <span className="font-oswald font-bold text-[17px] tracking-[0.8px] text-black uppercase">order now</span>
            </a>
          </div>
          <div className="absolute left-[973px] top-[238px] w-[598px] flex flex-col gap-[24px] items-start">
            {faqData.map((faq, i) => {
              const isOpen = openFaqIdx === i;
              return (
                <div key={i} className="relative w-[598px] flex flex-col">
                  <div 
                    onClick={() => setOpenFaqIdx(isOpen ? -1 : i)}
                    className={`relative w-[598px] h-[55px] bg-white border border-[#565656]/30 cursor-pointer flex flex-row justify-between items-center px-[30px] pr-[25px] hover:bg-[#FAFAFA] transition-colors ${isOpen ? 'rounded-t-[16px]' : 'rounded-[16px]'}`}
                  >
                    <span className="font-lexend font-semibold text-[18px] text-[#080809]">{faq.q}</span>
                    <i className="far fa-eye text-[16px] text-[#080809]" />
                  </div>
                  {isOpen && (
                    <div className="w-[598px] rounded-b-[16px] bg-white flex px-[25px] py-[20px] items-center border border-t-0 border-[#565656]/30">
                      <span className="flex-grow font-dmsans font-normal text-[16px] leading-[26px] text-[#54595F]">{faq.a}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ EVERY BITE BANNER ============ */}
        <section className="absolute left-0 w-[1920px] h-[720.38px] overflow-hidden bg-[url('/figma/landing/assets/24f90eccd0b63e35.jpg')] bg-center bg-no-repeat" style={{ backgroundSize: '100% 198.2%', top: everyBiteTop }}>
          <div className="absolute left-0 top-0 w-[1017px] h-[730px] bg-[url('/figma/landing/assets/e9035b2b86b7fc28.png')] bg-center bg-[length:105%_100%] bg-no-repeat" />
          <div className="absolute left-0 top-0 w-[75px] h-[148px] bg-[url('/figma/landing/assets/5cdfcc8a47b72ae9.png')] bg-center bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ transform: 'matrix(-1,0,0,1,1939,286)' }} />
          <div className="absolute left-[1103px] top-[120px] w-[761px] h-[397px]">
            <span className="absolute left-[236px] top-0 font-oswald font-bold text-[25px] leading-[28px] text-center whitespace-nowrap text-brand-redAlt">Crispy, Every Bite Taste</span>
            <span className="absolute left-0 top-[67px] w-[761px] font-nunito font-bold text-[80px] leading-[81px] text-center text-[#212121]">Every Bite Deserves A Refreshing Blend.</span>
            <span className="absolute left-[174px] top-[258px] w-[414px] font-nunito font-medium text-[17px] leading-[28px] text-center whitespace-nowrap text-body-gray2">Fresh drinks made to complement every craving.</span>
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[250px] top-[332px] w-[212.3px] h-[65px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <span className="font-oswald font-bold text-[17px] tracking-[0.8px] text-black uppercase">order now</span>
            </a>
          </div>
        </section>

        {/* ============ FOLLOW ============ */}
        <section className="absolute left-0 w-[1920px] h-[314.3px]" style={{ top: followTop }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={instagramTop} />
        <Footer top={footerTop} />
      </div>
    </div>

    {/* ================= MOBILE / TABLET (below lg) ================= */}
    <div className="lg:hidden w-full overflow-x-hidden bg-white font-nunito">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/figma/landing/assets/94addf636cfc5819.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/45" />
        <MobileHeader activePage="home" />
        <div className="relative px-6 md:px-12 pt-36 pb-20 flex flex-col items-start gap-5">
          <span className="font-bold text-[15px] md:text-[18px] leading-[22px] text-brand-red">
            Freshly Made Daily • Served With Flavor
          </span>
          <h1 className="font-black text-[54px] md:text-[84px] leading-[0.92]">
            <span className="block text-white">Flavor</span>
            <span className="block text-brand-red">You’ll</span>
            <span className="block text-brand-yellow">Crave Again</span>
          </h1>
          <p className="max-w-md font-light italic text-[15px] md:text-[18px] leading-relaxed text-[#F4F1F1]">
            From signature shawarmas to refreshing blends and satisfying meals, The Liquid Spot brings you flavor, comfort, and quality in every order.
          </p>
          <RedButton onClick={handleMenuScroll} className="mt-2 w-[180px]">
            View Menu
          </RedButton>
        </div>
      </section>

      {/* BITES & BLENDS INTRO */}
      <section className="px-6 md:px-12 py-14 flex flex-col items-center gap-4 text-center">
        <div className="grid grid-cols-2 gap-4 w-full max-w-md md:max-w-xl">
          <div className="h-64 md:h-80 rounded-[110px] bg-[url('/figma/landing/assets/ded90afec8a34908.png')] bg-center bg-cover bg-no-repeat" />
          <div className="h-64 md:h-80 rounded-[110px] bg-[url('/figma/landing/assets/3a6280bd1e8636e7.png')] bg-center bg-cover bg-no-repeat" />
        </div>
        <span className="mt-6 font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">THE LIQUID SPOT</span>
        <h2 className="font-semibold text-[44px] md:text-[64px] leading-none text-black">Bites &amp; Blends</h2>
        <p className="max-w-xl font-medium text-[15px] md:text-[17px] leading-relaxed text-body-gray">
          The Liquid Spot is your go-to for bold flavours and feel-good bites — from loaded shawarmas and flaky pastries to rich banana loaves and refreshing handcrafted drinks. Every bite and sip is made to satisfy.
        </p>
        <span className="font-black text-[13px] md:text-[15px] text-body-gray">Monday to Saturday – 07:00am TO 06:00pm</span>
        <span className="font-black text-[22px] md:text-[24px] text-brand-red">+44 7810 007 544</span>
        <RedButton href="/about-us" className="mt-2 w-[180px]">Learn More</RedButton>
      </section>

      {/* MENU */}
      <section id="menu-m" className="py-12 bg-white">
        <div className="px-6 md:px-12 flex flex-col items-center gap-3 text-center">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">CRAVINGS START HERE.</span>
          </div>
          <h2 className="font-extrabold text-[44px] md:text-[64px] leading-none text-black">View Our Menu</h2>
        </div>

        {/* TABS */}
        <div className="mt-8 px-6 md:px-12 flex flex-row gap-7 overflow-x-auto no-scrollbar">
          <button type="button" onClick={() => setActiveTab('quick')} className="flex-shrink-0 text-center group">
            <div className="font-semibold text-[18px] md:text-[22px] leading-tight text-black whitespace-nowrap group-hover:text-brand-red transition-colors">Quick Bites &amp; Meals</div>
            <div className="font-oswald font-semibold text-[13px] md:text-[15px] text-brand-red">Yummy Choi</div>
            {activeTab === 'quick' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
          </button>
          <button type="button" onClick={() => setActiveTab('drinks')} className="flex-shrink-0 text-center group">
            <div className="font-semibold text-[18px] md:text-[22px] leading-tight text-black whitespace-nowrap group-hover:text-brand-red transition-colors">Fresh Blends &amp; Drinks</div>
            <div className="font-oswald font-semibold text-[13px] md:text-[15px] text-brand-red">Tropical and Traditional</div>
            {activeTab === 'drinks' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
          </button>
          <button type="button" onClick={() => setActiveTab('pastries')} className="flex-shrink-0 text-center group">
            <div className="font-semibold text-[18px] md:text-[22px] leading-tight text-black whitespace-nowrap group-hover:text-brand-red transition-colors">Pastries</div>
            <div className="font-oswald font-semibold text-[13px] md:text-[15px] text-brand-red">Cool Bites</div>
            {activeTab === 'pastries' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
          </button>
          <button type="button" onClick={() => setActiveTab('salads')} className="flex-shrink-0 text-center group">
            <div className="font-semibold text-[18px] md:text-[22px] leading-tight text-black whitespace-nowrap group-hover:text-brand-red transition-colors">Salads</div>
            <div className="font-oswald font-semibold text-[13px] md:text-[15px] text-brand-red">Cool Bites</div>
            {activeTab === 'salads' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
          </button>
        </div>

        {/* TAB 1: QUICK BITES */}
        {activeTab === 'quick' && (
          <div className="mt-8 px-6 md:px-12 flex flex-col gap-10">
            {menuGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <div className="flex flex-row items-center gap-3">
                  <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
                  <span className="font-extrabold text-[20px] leading-[23px] text-black">{group.name}</span>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {group.cards.map((card, cIdx) => (
                    <div key={cIdx} className="rounded-[18px] bg-white shadow-card overflow-hidden">
                      <div className="relative h-44 md:h-52" style={{ background: card.bg }}>
                        <span className="absolute left-3 top-3 rounded-[26px] bg-brand-yellow px-3 py-[4px] font-semibold text-[12px] text-[#222]">{card.label}</span>
                      </div>
                      <div className="p-4 flex flex-col gap-1.5">
                        <span className="font-bold text-[17px] text-[#222]">{card.title}</span>
                        <span className="font-light text-[12px] leading-[18px] text-[#222]">{card.desc}</span>
                        <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.ingr}</span>
                        <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.allergen}</span>
                        <div className="mt-2 flex flex-row items-center justify-between">
                          <span className="font-extrabold text-[16px] text-brand-red">{card.price}</span>
                          {card.spice && (
                            <span className="text-[10px] tracking-[2px] whitespace-nowrap">
                              <span className="font-oswald text-brand-redAlt mr-1">Spice Lvl:</span>🌶️ 🌶️🌶️
                            </span>
                          )}
                          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="rounded-[4px] bg-brand-yellow px-3 py-1.5 hover:brightness-95 transition-all">
                            <span className="font-oswald text-[12px] text-black">Order Now</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: DRINKS */}
        {activeTab === 'drinks' && (
          <div className="mt-8 px-6 md:px-12 grid gap-6 md:grid-cols-2">
            {drinkRows.flatMap((row) => row.cards).map((card, idx) => (
              <div key={idx} className="rounded-[18px] bg-white shadow-[inset_0_0_0_1px_#E5E7EB] overflow-hidden flex flex-row">
                <div className="w-[130px] md:w-[150px] flex-shrink-0 rounded-r-[80px] bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${card.bg}')` }} />
                <div className="flex-grow p-4 flex flex-col gap-1.5">
                  <span className="font-bold text-[17px] text-[#222]">{card.title}</span>
                  <span className="font-light text-[12px] leading-[18px] text-[#222]">{card.desc}</span>
                  <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.ingr}</span>
                  <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.allergen}</span>
                  <div className="mt-2 flex flex-row items-center justify-between">
                    <span className="font-extrabold text-[16px] text-brand-red">{card.price}</span>
                    <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="rounded-[4px] bg-brand-yellow px-3 py-1.5 hover:brightness-95 transition-all">
                      <span className="font-oswald text-[12px] text-black">Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PASTRIES */}
        {activeTab === 'pastries' && (
          <div className="mt-8 px-6 md:px-12 flex flex-col gap-8">
            <div className="grid gap-6 md:grid-cols-2">
              {pies.map((card, idx) => (
                <MobilePastryCard key={idx} card={card} />
              ))}
            </div>
            <span className="font-bold text-[22px] leading-tight text-black">Banana Bread Range</span>
            <div className="grid gap-6 md:grid-cols-2">
              {bananas.map((card, idx) => (
                <MobilePastryCard key={idx} card={card} />
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: SALADS */}
        {activeTab === 'salads' && (
          <div className="mt-8 px-6 md:px-12 grid gap-6 md:grid-cols-2">
            {salads.map((card, idx) => (
              <MobilePastryCard key={idx} card={card} />
            ))}
          </div>
        )}
      </section>

      {/* CATERING BANNER */}
      <section className="relative overflow-hidden px-6 py-16 flex flex-col items-center gap-6">
        <div className="absolute inset-0 bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative w-[200px] h-[200px] md:w-[280px] md:h-[280px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
        <a href="/find-us#consultation-m" className="relative rounded-[12px] bg-brand-red px-10 py-5 flex items-center justify-center hover:brightness-110 shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
          <div className="absolute -inset-y-[8px] inset-x-[10px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
          <span className="font-bold text-[20px] leading-[25px] text-white">Book a Consultation</span>
        </a>
      </section>

      {/* SIMPLE ORDERING */}
      <section className="px-6 md:px-12 py-14 flex flex-col items-center gap-4 text-center">
        <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[1px] text-brand-red">FOOD PROCESSING</span>
        <h2 className="max-w-lg font-semibold text-[38px] md:text-[56px] leading-[1.05] text-[#212121]">Simple Ordering, Great Food.</h2>
        <div className="mt-6 w-full grid gap-6 md:grid-cols-3 items-stretch">
          <div className="flex flex-col items-center justify-center gap-2 px-6 py-8">
            <span className="font-semibold text-[24px] leading-tight text-[#212121]">Freshly Made</span>
            <span className="max-w-xs font-medium text-[15px] leading-[26px] text-body-gray2">Every meal and drink is prepared fresh with care, flavor, and quality ingredients.</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 rounded-[17px] outline outline-1 outline-dashed outline-[#5C5C5B] outline-offset-[-1px] px-6 py-8">
            <span className="max-w-xs font-medium text-[15px] leading-[26px] text-body-gray2">Hit the Order Now button and a member of our team will respond quickly to guide you through your order.</span>
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="w-[158px] h-[48px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <span className="font-oswald font-bold text-[16px] tracking-[0.8px] text-black uppercase">order now</span>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 px-6 py-8">
            <span className="font-semibold text-[24px] leading-tight text-[#212121]">Fast &amp; Reliable Delivery</span>
            <span className="max-w-xs font-medium text-[15px] leading-[26px] text-body-gray2">We work with trusted delivery services to get your order to you fresh and on time.</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-4 md:mx-10 my-10 rounded-[30px] border-solid border-[#222] border-[10px] md:border-[14px] px-4 py-10 md:px-8">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="font-oswald font-bold text-[36px] md:text-[48px] leading-none text-brand-redAlt">FAQS</span>
          <h2 className="max-w-xl font-bold text-[30px] md:text-[44px] leading-[1.1] text-[#212121]">Everything You Need To Know Before You Order</h2>
          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="w-[190px] h-[56px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
            <span className="font-oswald font-bold text-[16px] tracking-[0.8px] text-black uppercase">order now</span>
          </a>
        </div>
        <div className="mt-8 flex flex-col gap-4 max-w-2xl mx-auto">
          {faqData.map((faq, i) => {
            const isOpen = openFaqIdx === i;
            return (
              <div key={i} className="flex flex-col">
                <div
                  onClick={() => setOpenFaqIdx(isOpen ? -1 : i)}
                  className={`bg-white border border-[#565656]/30 cursor-pointer flex flex-row justify-between items-center gap-3 px-5 py-4 hover:bg-[#FAFAFA] transition-colors ${isOpen ? 'rounded-t-[16px]' : 'rounded-[16px]'}`}
                >
                  <span className="font-lexend font-semibold text-[15px] md:text-[17px] text-[#080809]">{faq.q}</span>
                  <i className="far fa-eye text-[15px] text-[#080809] flex-shrink-0" />
                </div>
                {isOpen && (
                  <div className="rounded-b-[16px] bg-white px-5 py-4 border border-t-0 border-[#565656]/30">
                    <span className="font-dmsans font-normal text-[14px] md:text-[16px] leading-[24px] text-[#54595F]">{faq.a}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EVERY BITE BANNER */}
      <section className="relative overflow-hidden px-6 py-16 text-center">
        <div className="absolute inset-0 bg-[url('/figma/landing/assets/24f90eccd0b63e35.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-white/85" />
        <div className="relative flex flex-col items-center gap-5">
          <span className="font-oswald font-bold text-[18px] md:text-[22px] text-brand-redAlt">Crispy, Every Bite Taste</span>
          <h2 className="max-w-xl font-bold text-[34px] md:text-[52px] leading-[1.05] text-[#212121]">Every Bite Deserves A Refreshing Blend.</h2>
          <p className="max-w-sm font-medium text-[15px] md:text-[17px] leading-[26px] text-body-gray2">Fresh drinks made to complement every craving.</p>
          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="w-[190px] h-[56px] rounded-[9px] bg-brand-yellow flex items-center justify-center hover:brightness-95 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
            <span className="font-oswald font-bold text-[16px] tracking-[0.8px] text-black uppercase">order now</span>
          </a>
        </div>
      </section>

      <MobileFollow />
      <MobileInstagramStrip />
      <MobileFooter />

      {/* Floating WhatsApp bubble */}
      <a
        href="https://wa.me/447810007544"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-to-tl from-[#00D95F] to-[#07FF74] flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform"
      >
        <i className="fab fa-whatsapp text-white text-[30px]" />
      </a>
    </div>
    </>
  );
}

// Mobile card used for pies and banana bread (pastries tab)
function MobilePastryCard({ card }: { card: { title: string; price: string; bg: string; desc: string; ingr: string; allergen: string } }) {
  return (
    <div className="rounded-[24px] bg-white shadow-pastry overflow-hidden">
      <div className="h-44 md:h-52 rounded-b-[30px]" style={{ background: card.bg }} />
      <div className="p-5 flex flex-col gap-1.5">
        <span className="font-extrabold text-[15px] leading-[20px] text-brand-red">{card.price}</span>
        <span className="font-normal text-[22px] leading-[27px] text-black">{card.title}</span>
        <span className="mt-1 font-light text-[12px] leading-[18px] text-[#222]">{card.desc}</span>
        <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.ingr}</span>
        <span className="font-semibold text-[10px] leading-[15px] text-[#222]">{card.allergen}</span>
        <div className="mt-3 flex flex-row items-center gap-4">
          <i className="fas fa-arrow-right text-[15px] text-black" />
          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="w-[101px] h-[32px] rounded-[4px] bg-brand-yellow flex items-center justify-center hover:brightness-95 transition-all">
            <span className="font-oswald text-[15px] text-black">Order Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// ========================
// DATA CONSTANTS
// ========================

const menuGroups = [
  {
    name: "Classic Wraps",
    cards: [
      { label: "Combo", title: "Chicken & Beef Shawarma", price: "£13.00", spice: true, bg: "url('/figma/landing/assets/ded90afec8a34908.png') 8% 50% / cover no-repeat", desc: "Handcrafted with well-grilled, flavourful chicken and beef, fresh carrots and cabbage, topped with frankfurters, and finished with our in-house shawarma dressing.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." },
      { label: "Spices", title: "Chicken Shawarma", price: "£10.00", spice: true, bg: "url('/shared/Chicken shawarma.jpg') center / cover no-repeat", desc: "Handcrafted with well-grilled, flavourful chicken and/or beef, fresh carrots and cabbage, topped with frankfurters, and finished with our in-house shawarma dressing.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." },
      { label: "Bold", title: "Beef Shawarma", price: "£10", spice: true, bg: "url('/figma/landing/assets/cf58835a97d9302d.jpg') center / cover no-repeat", desc: "Handcrafted with well-grilled, flavourful beef, fresh carrots and cabbage, topped with frankfurters, and finished with our in-house shawarma dressing.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." }
    ]
  },
  {
    name: "Loaded & Cheesy",
    cards: [
      { label: "Extra Loaded", title: "Loaded Shawarma", price: "£13", spice: true, bg: "url('https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800&q=80') center / cover no-repeat", desc: "Extremely filling and boldly flavoured. Made with 100% seasoned chicken or beef, topped with frankfurters and our in-house dressing. Perfect for when you want a break from veggies.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." },
      { label: "Cheesy", title: "Cheesy Shawarma", price: "£15", spice: false, bg: "url('/figma/landing/assets/1f1e9a7e0b59896e.jpg') center / cover no-repeat", desc: "For cheesy lovers. Flavourful chicken or beef topped with a generous pull of creamy mozzarella and our signature dressing.", ingr: "Ingredients: Chicken or beef, mozzarella cheese, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." }
    ]
  },
  {
    name: "The Melts",
    cards: [
      { label: "Melts", title: "Loaded Chicken and Cheese Melts", price: "£5.00", spice: false, bg: "url('/figma/landing/assets/45f616fcb6e453e7.jpg') center / cover no-repeat", desc: "Seasoned chicken with melted cheese, toasted to perfection.", ingr: "Ingredients: Chicken, cheese, bread, seasoning", allergen: "Allergen advice: Contains wheat (gluten), milk; may contain traces of eggs, cheese, mustard." },
      { label: "Creamy", title: "Tuna Egg & Mayo Melt", price: "£5.00", spice: false, bg: "url('/figma/landing/assets/bab478824ac20016.png') center / cover no-repeat", desc: "Creamy tuna, egg, and mayo toasted between soft bread slices.", ingr: "Ingredients: Tuna, eggs, mayonnaise, bread", allergen: "Allergen advice: Contains fish, eggs, wheat (gluten)" },
      { label: "Melt", title: "Cheese & Chicken Mushroom", price: "£5.00", spice: false, bg: "url('/figma/landing/assets/ffaae3b4cb91d7c9.jpg') center / cover no-repeat", desc: "Tender chicken and mushrooms with melted cheese in warm toast.", ingr: "Ingredients: Chicken, mushrooms, cheese, bread", allergen: "Allergen advice: Contains wheat (gluten), milk; may contain traces of eggs" }
    ]
  }
];

const drinkRows = [
  { cards: [
    { title: "Creamy Tigernut Drink", price: "£5.00", bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Horchata%2C_my_drink_of_choice_in_Mexico_-_Merida_Yucatan_21_March_2021.jpg/960px-Horchata%2C_my_drink_of_choice_in_Mexico_-_Merida_Yucatan_21_March_2021.jpg", desc: "Smooth, naturally sweet tigernut drink.", ingr: "Ingredients: Tigernuts, water, spices", allergen: "Allergen advice: May contain traces of nuts" },
    { title: "Blended Banana", price: "£6.99", bg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Fresh_fruit_smoothie_being_poured_into_a_glass.jpg/960px-Fresh_fruit_smoothie_being_poured_into_a_glass.jpg", desc: "Fresh bananas blended into a smooth, refreshing drink.", ingr: "Ingredients: Bananas, milk, sweetener", allergen: "Allergen advice: Contains milk; may contain traces of nuts" },
    { title: "Nosy Cinnamon", price: "£6.99", bg: "https://upload.wikimedia.org/wikipedia/commons/2/28/Boza_from_Vefa_in_Ankara.jpg", desc: "Lightly spiced cinnamon drink with warm, comforting taste.", ingr: "Ingredients: Cinnamon, milk, sweetener", allergen: "Allergen advice: Contain traces of nuts" }
  ] },
  { cards: [
    { title: "Zesty Zobo", price: "£3.99", bg: "https://upload.wikimedia.org/wikipedia/commons/3/36/Zobo_%28local_drink_in_northern_Nigeria%29.jpg", desc: "Bold and refreshing hibiscus drink with a tangy finish.", ingr: "Ingredients: Hibiscus leaves, ginger, spices", allergen: "Allergen advice: May contain traces of nuts" }
  ] }
];

const pies = [
  { title: "Meat Pie", price: "£2.50", bg: "url('/figma/landing/assets/0fe094edc96a1173.jpg') center / cover no-repeat", desc: "Golden, flaky pastry filled with rich, savoury minced beef.", ingr: "Ingredients: Minced beef, onions, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" },
  { title: "Chicken Pie", price: "£2.00", bg: "url('/figma/landing/assets/29cfbef857f273ea.jpg') center / cover no-repeat", desc: "Flaky pastry packed with tender, well-seasoned chicken for a hearty bite.", ingr: "Ingredients: Chicken, onions, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" },
  { title: "Suya Chicken Pie", price: "£2.50", bg: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Meat_pie_in_Northern_Nigeria.jpg/960px-Meat_pie_in_Northern_Nigeria.jpg') center / cover no-repeat", desc: "A bold twist on a classic. Tender chicken seasoned with suya spices, baked to perfection.", ingr: "Ingredients: Chicken, suya spice, onions, seasoning, pastry", allergen: "Allergen advice: Contains peanuts, wheat (gluten); may contain traces of eggs, milk" },
  { title: "Sausage Roll", price: "£2.80", bg: "url('/figma/landing/assets/584a90c450f4e32d.jpg') center / cover no-repeat", desc: "Freshly baked pastry with juicy, seasoned sausage filling.", ingr: "Ingredients: Sausage meat, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" }
];

const bananas = [
  { title: "Classic Banana Bread", price: "£10.00", bg: "url('/figma/landing/assets/Clasis Banana Bread.jpg') center / cover no-repeat", desc: "Soft, moist banana bread with natural sweetness.", ingr: "Ingredients: Banana, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains wheat (gluten), eggs, milk" },
  { title: "Nutty Banana Bread", price: "£13.00", bg: "url('/figma/landing/assets/Nutty Banana Bread.jpg') center / cover no-repeat", desc: "Classic banana bread with added crunch from mixed nuts.", ingr: "Ingredients: Banana mixed nuts, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains nuts, wheat (gluten), eggs, milk" },
  { title: "Chocolatey Banana Bread", price: "£15.00", bg: "url('/figma/landing/assets/chocolate banana bread.jpg') center / cover no-repeat", desc: "Moist banana bread blended with rich chocolate.", ingr: "Ingredients: Banana chocolate, flour, sugar, eggs, butter.", allergen: "Allergen advice: Contains wheat (gluten), eggs, milk." },
  { title: "Nutty + Choc Banana Bread", price: "£15.00", bg: "url('/figma/landing/assets/nutt + chocolate banana bread.jpg') center / cover no-repeat", desc: "Bananas, crunchy nuts, and chocolate in one loaf.", ingr: "Ingredients: Banana mixed nuts, chocolate, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains nuts, wheat (gluten), eggs, milk" },
  { title: "Peanut Banana Bread", price: "£13.00", bg: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Peanut_Butter_Swirl_Banana_Bread_from_the_side.jpg/960px-Peanut_Butter_Swirl_Banana_Bread_from_the_side.jpg') center / cover no-repeat", desc: "Banana bread with a rich peanut twist.", ingr: "Ingredients: Banana, peanuts, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains peanuts, wheat (gluten), eggs, milk" }
];

const salads = [
  { title: "Garden Salad", price: "£5.50", bg: "url('/figma/landing/assets/garden salad.jpg') center / cover no-repeat", desc: "A crisp bowl of baked beans, carrots, sweetcorn, and apple with a creamy house dressing.", ingr: "Ingredients: Baked beans, carrots, sweetcorn, apple, creamy dressing", allergen: "Allergen advice: Contains egg (dressing); may contain traces of mustard" },
  { title: "Potato Salad", price: "£4.50", bg: "url('/figma/landing/assets/Potato salad.jpg') center / cover no-repeat", desc: "Creamy diced potatoes tossed with fresh herbs and a hint of smoked paprika.", ingr: "Ingredients: Potatoes, mayonnaise, herbs, paprika", allergen: "Allergen advice: Contains egg (mayonnaise); may contain traces of mustard" }
];

const faqData = [
  { q: "How do i place an order?", a: "Click the WhatsApp button on our website and send us a message — we'll guide you through the rest." },
  { q: "How much notice do you require?", a: "All orders are freshly made to order. We require a minimum of 24–48 hours' notice to ensure availability and quality." },
  { q: "Do you Cater for dietary requirements", a: "Yes. Please discuss any allergies or dietary needs with us when placing your order and we'll do our best to accommodate." },
  { q: "Do you offer Catering Services?", a: "Yes. We cater for birthdays, weddings, corporate events, church gatherings, baby showers, private parties, and other occasions. For event bookings, visit our Catering page." },
  { q: "Can i customize my catering menu?", a: "Absolutely. We work closely with clients to curate menus based on event type, preferences, guest requirements, and budget." },
  { q: "Do you deliver?", a: "Delivery may be available depending on your location and order size — message us on WhatsApp to confirm." },
  { q: "What do you offer?", a: "Pastries, snacks, specialty drinks, shawarmas, melts, salads, banana bread, catering menus, and seasonal selections." },
  { q: "Are you a registered business?", a: "Yes. The LiquidSpot is a registered UK food business operating in compliance with food safety regulations. We hold a 4-Star Food Hygiene Rating." }
];