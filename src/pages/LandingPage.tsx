import { useState } from 'react';
import { useScale } from '../hooks/useScale';
import { RedButton, YellowButton } from '../components/Shared';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { InstagramStrip } from '../components/InstagramStrip';

export default function LandingPage() {
  const { scaleTransform, scaledHeight } = useScale(8719);
  const [activeTab, setActiveTab] = useState<'quick' | 'drinks' | 'pastries'>('quick');
  const [openFaqIdx, setOpenFaqIdx] = useState<number>(0);

  const handleMenuScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("menu");
    if (el) {
      const scale = Math.min(1, window.innerWidth / 1920);
      window.scrollTo({ top: el.offsetTop * scale, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div 
        className="relative mx-auto bg-white font-nunito w-[1920px] h-[8719px] origin-top"
        style={{ transform: scaleTransform }}
      >
        {/* ============ HERO ============ */}
        <section className="absolute left-0 top-0 w-[1920px] h-[900px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/figma/landing/assets/94addf636cfc5819.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />

          {/* Decorative Right Cluster */}
          <div className="absolute left-[775px] top-[121px] w-[1172px] h-[889px]">
            <div className="absolute left-0 top-0 w-[163px] h-[127px] rounded-[4px] bg-[url('/figma/landing/assets/374a955a0b7cc45c.png')] bg-center bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ transform: 'matrix(0,-1,1,0,72,255)' }} />
            <div className="absolute left-0 top-0 w-[150.083px] h-[501.769px] bg-[url('/figma/landing/assets/9a2b60982818b63b.png')] bg-center bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ transform: 'matrix(0.519,0.855,-0.855,0.519,1051.891,432)' }} />
            <div className="absolute left-0 top-0 w-[458.303px] h-[687.455px] bg-[url('/figma/landing/assets/d57efd050bfddac0.png')] bg-center bg-cover bg-no-repeat origin-top-left" style={{ transform: 'matrix(0.925,-0.380,0.380,0.925,-62,214.061)' }} />
            <div className="absolute left-[207px] top-[444px] w-[248px] h-[248px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
            <div className="absolute left-[72px] top-[-123px] w-[1166.911px] h-[1150.454px] overflow-hidden pointer-events-none">
              <div className="absolute left-0 top-0 w-[794.477px] h-[993.54px] bg-[url('/figma/landing/assets/d6b05c66dc1dea2e.png')] bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ backgroundPosition: '50% 0', transform: 'matrix(-0.117,-0.993,-0.993,0.117,1167.7,869.2)' }} />
            </div>
            {/* WhatsApp Bubble */}
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[934px] top-[626px] w-[125px] h-[125px] hover:scale-105 transition-transform">
              <div className="absolute inset-0 rounded-[37.5px] bg-gradient-to-br from-[#FBFBFC] to-[#DBDDE8]" />
              <div className="absolute left-[18.8px] top-[62.5px] w-[85.2px] h-[53.2px] opacity-25 rounded-[37.5px] bg-gradient-to-tl from-[#00D95F] to-[#07FF74]" />
              <div className="absolute left-[16.3px] top-[16.3px] w-[92.2px] h-[92.2px] rounded-[37.5px] bg-gradient-to-tl from-[#00D95F] to-[#07FF74] flex items-center justify-center">
                <i className="fab fa-whatsapp text-white text-[58px]" />
              </div>
            </a>
          </div>

          <Header activePage="home" />

          <span className="absolute left-[15px] top-[12px] w-[420px] font-nunito font-light italic text-[20px] leading-[25px] text-[#F4F1F1]">
            From signature shawarmas to refreshing blends and satisfying meals, The Liquid Spot brings you flavor, comfort, and quality in every order.
          </span>

          <span className="absolute left-[152px] top-[300px] font-nunito font-bold text-[20px] leading-[25px] whitespace-nowrap text-brand-red">
            Freshly Made Daily • Served With Flavor
          </span>
          
          <div className="absolute left-[149px] top-[420px] font-nunito font-black text-[120px] leading-[96px]">
            <div className="text-brand-red">You’ll</div>
            <div className="text-brand-yellow">Crave Again</div>
          </div>
          
          <div className="absolute left-[149px] top-[727px] w-[600px] h-[61px]">
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
        <section id="menu" className="absolute left-0 top-[1574px] w-[1920px] h-[1579px] overflow-hidden bg-white">
          <div className="absolute left-[265px] top-[140px] w-[681px] h-[125px]">
            <div className="absolute left-[23px] top-[14px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="absolute left-[66px] top-0 font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">
              CRAVINGS START HERE.
            </span>
            <span className="absolute left-[22px] top-[50px] w-[636px] font-nunito font-extrabold text-[80px] leading-[72px] text-center whitespace-nowrap text-black">
              View Our Menu
            </span>
          </div>

          {/* TABS */}
          <div className="absolute left-[290px] top-[316px] flex flex-row gap-[30px] items-start">
            <div onClick={() => setActiveTab('quick')} className="relative w-[303px] h-[69px] cursor-pointer text-center">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] text-black">Quick Bites &amp; Meals</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] text-brand-red">Yummy Choi</div>
              {activeTab === 'quick' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div onClick={() => setActiveTab('drinks')} className="relative w-[303px] h-[69px] cursor-pointer text-center">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] text-black">Fresh Blends &amp; Drinks</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] text-brand-red">Tropical and Traditional</div>
              {activeTab === 'drinks' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div onClick={() => setActiveTab('pastries')} className="relative w-[303px] h-[69px] cursor-pointer text-center">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] text-black">Pastries</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] text-brand-red">Cool Bites</div>
              {activeTab === 'pastries' && <div className="mt-1 mx-auto w-[42px] h-[3px] rounded-[30px] bg-brand-yellowAccent" />}
            </div>
            <div title="Salads menu coming soon" className="relative w-[303px] h-[69px] cursor-default text-center opacity-55">
              <div className="font-nunito font-semibold text-[28px] leading-[28.8px] text-black">Salads</div>
              <div className="font-oswald font-semibold text-[18px] leading-[25px] text-brand-red">Cool Bites</div>
            </div>
          </div>

          {/* TAB 1: QUICK BITES */}
          {activeTab === 'quick' && (
            <div className="absolute left-[247px] top-[426px] w-[1416px] flex flex-col">
              {menuGroups.map((group, idx) => (
                <div key={idx} className="relative h-[333px] w-[1416px]">
                  <div className="absolute left-[60px] top-[52px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
                  <span className="absolute left-[113px] top-[42px] font-nunito font-extrabold text-[20px] leading-[23px] whitespace-nowrap text-black">{group.name}</span>
                  <div className="absolute left-[44px] top-[102px] flex flex-row gap-[63.34px]">
                    {group.cards.map((card, cIdx) => (
                      <div key={cIdx} className="relative w-[406.66px] h-[182px] flex-shrink-0 rounded-[18px] bg-white shadow-card hover:-translate-y-[7px] hover:shadow-[inset_0_0_0_1px_#E5E7EB,14px_20px_34px_0px_rgba(0,0,0,0.22)] transition-all duration-300">
                        <div className="absolute left-[1px] top-[1px] w-[202.33px] h-[180px] overflow-hidden rounded-[18px]" style={{ background: card.bg }} />
                        <div className="absolute left-[15px] top-[18px] h-[26px] rounded-[26px] bg-brand-yellow flex items-center justify-center px-[14px]">
                          <span className="font-nunito font-semibold text-[11px] leading-[18px] text-[#222]">{card.label}</span>
                        </div>
                        <div className="absolute left-[211.5px] top-[17px] w-[186px] flex flex-col gap-[3px] items-start">
                          <span className="font-nunito font-bold text-[14px] leading-[24px] text-[#222]">{card.title}</span>
                          <span className="font-nunito font-light text-[7px] leading-[12px] text-[#222] w-[180px]">{card.desc}</span>
                          <span className="font-nunito font-semibold text-[6px] leading-[10px] text-[#222] w-[180px]">{card.ingr}</span>
                          <span className="font-nunito font-semibold text-[6px] leading-[10px] text-[#222] w-[180px]">{card.allergen}</span>
                          <div className="relative w-[186px] h-[20px] mt-1">
                            <span className="absolute left-0 top-0 font-nunito font-extrabold text-[10px] leading-[20px] text-brand-red">{card.price}</span>
                            {card.spice && (
                              <>
                                <span className="absolute left-[102px] top-[5px] font-oswald font-normal text-[6px] leading-[10px] text-brand-redAlt">Spice Lvl:</span>
                                <span className="absolute left-[132px] top-[4px] text-[6px] leading-[10px] tracking-[2px] whitespace-nowrap">🌶️ 🌶️🌶️</span>
                              </>
                            )}
                          </div>
                        </div>
                        <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[334px] top-[151px] w-[57px] h-[18px] rounded-[4px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                          <span className="font-oswald font-normal text-[6px] text-black">Order Now</span>
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
            <div className="absolute left-[291px] top-[500px] w-[1416px] flex flex-col gap-[69px]">
              {drinkRows.map((row, rIdx) => (
                <div key={rIdx} className="flex flex-row gap-[64px]">
                  {row.cards.map((card, cIdx) => (
                    <div key={cIdx} className="relative w-[374px] h-[182px] flex-shrink-0 mt-[27px] hover:-translate-y-[7px] transition-transform duration-300">
                      <div className="absolute left-0 top-0 w-[374px] h-[182px] rounded-[18px] bg-white shadow-[inset_0_0_0_1px_#E5E7EB]" />
                      <div className="absolute left-0 top-[-27px] w-[165px] h-[234px] rounded-[100px] bg-[url('/figma/landing/assets/3a6280bd1e8636e7.png')] bg-center bg-[length:100%_114.8%] bg-no-repeat" />
                      <div className="absolute left-[187px] top-[29px] w-[186px]">
                        <div className="font-nunito font-bold text-[14px] leading-[24px] text-[#222]">{card.title}</div>
                        <div className="mt-1 flex flex-col gap-1">
                          <span className="font-nunito font-light text-[7px] leading-[12px] text-[#222]">{card.desc}</span>
                          <span className="font-nunito font-semibold text-[6px] leading-[10px] text-[#222]">{card.ingr}</span>
                          <span className="font-nunito font-semibold text-[6px] leading-[10px] text-[#222]">{card.allergen}</span>
                        </div>
                        <div className="relative w-[168px] h-[20px] mt-[12px]">
                          <span className="absolute left-0 top-0 font-nunito font-extrabold text-[10px] leading-[20px] text-brand-red">{card.price}</span>
                          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[111px] top-[2px] w-[57px] h-[18px] rounded-[4px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                            <span className="font-oswald font-normal text-[6px] text-black">Order Now</span>
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
            <div className="absolute left-[262px] top-[440px] w-[1416px] flex flex-col gap-[40px]">
              <div className="flex flex-row gap-[45px]">
                {pies.map((card, idx) => (
                  <div key={idx} className="relative w-[302.5px] h-[452.55px] flex-shrink-0 hover:-translate-y-[8px] transition-transform duration-300">
                    <div className="absolute left-0 top-[135.77px] w-[302.5px] h-[316.78px] rounded-[30px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]" />
                    <div className="absolute left-0 top-[63px] w-[303px] h-[172px] rounded-[50px]" style={{ background: card.bg }} />
                    <span className="absolute left-[35px] top-[252px] font-nunito font-extrabold text-[15px] leading-[20px] text-brand-red">{card.price}</span>
                    <span className="absolute left-[35px] top-[275px] font-nunito font-normal text-[24px] leading-[28.8px] whitespace-nowrap text-black">{card.title}</span>
                    <div className="absolute left-[35px] top-[315px] w-[235px] flex flex-col gap-[6px]">
                      <span className="font-nunito font-light text-[8px] leading-[13px] text-[#222]">{card.desc}</span>
                      <span className="font-nunito font-semibold text-[8px] leading-[12px] text-[#222]">{card.ingr}</span>
                      <span className="font-nunito font-semibold text-[8px] leading-[12px] text-[#222]">{card.allergen}</span>
                    </div>
                    <i className="fas fa-arrow-right absolute left-[40px] top-[410px] text-[15px] text-black" />
                    <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[90px] top-[403px] w-[101px] h-[32px] rounded-[4px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                      <span className="font-oswald font-normal text-[15px] text-black">Order Now</span>
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-[16px]">
                <span className="font-nunito font-bold text-[24px] leading-[28.8px] text-black">Banana Bread Range</span>
                <div className="flex flex-row flex-wrap gap-[45px]">
                  {bananas.map((card, idx) => (
                    <div key={idx} className="relative w-[302.5px] h-[452.55px] flex-shrink-0 hover:-translate-y-[8px] transition-transform duration-300">
                      <div className="absolute left-0 top-[135.77px] w-[302.5px] h-[316.78px] rounded-[30px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)]" />
                      <div className="absolute left-0 top-[63px] w-[303px] h-[172px] rounded-[50px]" style={{ background: card.bg }} />
                      <span className="absolute left-[35px] top-[252px] font-nunito font-extrabold text-[15px] leading-[20px] text-brand-red">{card.price}</span>
                      <span className="absolute left-[35px] top-[275px] w-[236px] font-nunito font-normal text-[24px] leading-[28.8px] text-black">{card.title}</span>
                      <div className="absolute left-[35px] top-[335px] w-[235px] flex flex-col gap-[6px]">
                        <span className="font-nunito font-light text-[8px] leading-[13px] text-[#222]">{card.desc}</span>
                        <span className="font-nunito font-semibold text-[8px] leading-[12px] text-[#222]">{card.ingr}</span>
                        <span className="font-nunito font-semibold text-[8px] leading-[12px] text-[#222]">{card.allergen}</span>
                      </div>
                      <i className="fas fa-arrow-right absolute left-[40px] top-[410px] text-[15px] text-black" />
                      <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="absolute left-[90px] top-[403px] w-[101px] h-[32px] rounded-[4px] bg-brand-yellow flex items-center justify-center hover:brightness-95 hover:-translate-y-[2px] transition-all">
                        <span className="font-oswald font-normal text-[15px] text-black">Order Now</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ============ CATERING BANNER ============ */}
        <section className="absolute left-0 top-[3205px] w-[1920px] h-[912px] overflow-hidden">
          <div className="absolute left-0 top-0 w-[963px] h-[960px] bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[962px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/45f616fcb6e453e7.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[1442px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/6315e951f530162f.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[960px] top-[480px] w-[963px] h-[480px] bg-[url('/figma/landing/assets/0df3bfdfbfaf75d0.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute left-[661px] top-0 w-[672px] h-[672px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
          <a href="/catering" className="absolute left-[1202px] top-[532px] w-[322px] h-[92px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <div className="absolute left-[27.85px] top-[-10px] w-[305.87px] h-[114.06px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-nunito font-bold text-[25px] leading-[25px] text-white">Catering Services</span>
          </a>
        </section>

        {/* ============ SIMPLE ORDERING ============ */}
        <section className="absolute left-[346px] top-[4248px] w-[1314px] h-[535px]">
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
        <section className="absolute left-[71px] top-[5106px] w-[1808px] h-[1077px]">
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
        <section className="absolute left-0 top-[6342px] w-[1920px] h-[720.38px] overflow-hidden bg-[url('/figma/landing/assets/24f90eccd0b63e35.jpg')] bg-center bg-no-repeat" style={{ backgroundSize: '100% 198.2%' }}>
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
        <section className="absolute left-0 top-[7054px] w-[1920px] h-[314.3px]">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={7393} />
        <Footer top={7785} />
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
      { label: "Spices", title: "Chicken Shawarma", price: "£10.00", spice: true, bg: "url('/figma/landing/assets/381eb7712d94472d.png') center / cover no-repeat", desc: "Handcrafted with well-grilled, flavourful chicken and/or beef, fresh carrots and cabbage, topped with frankfurters, and finished with our in-house shawarma dressing.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." },
      { label: "Bold", title: "Beef Shawarma", price: "£10", spice: true, bg: "url('/figma/landing/assets/cf58835a97d9302d.jpg') center / cover no-repeat", desc: "Handcrafted with well-grilled, flavourful beef, fresh carrots and cabbage, topped with frankfurters, and finished with our in-house shawarma dressing.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." }
    ]
  },
  {
    name: "Loaded & Cheesy",
    cards: [
      { label: "Extra Loaded", title: "Loaded Shawarma", price: "£13", spice: true, bg: "url('/figma/landing/assets/ded90afec8a34908.png') center / cover no-repeat", desc: "Extremely filling and boldly flavoured. Made with 100% seasoned chicken or beef, topped with frankfurters and our in-house dressing. Perfect for when you want a break from veggies.", ingr: "Ingredients: Carrots, cabbage, chicken and/or beef, frankfurter, in-house dressing", allergen: "Allergen advice: May contain traces of eggs, cheese, mustard." },
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
    { title: "Creamy Tigernut Drink", price: "£5.00", desc: "Smooth, naturally sweet tigernut drink.", ingr: "Ingredients: Tigernuts, water, spices", allergen: "Allergen advice: May contain traces of nuts" },
    { title: "Blended Banana", price: "£6.99", desc: "Fresh bananas blended into a smooth, refreshing drink.", ingr: "Ingredients: Bananas, milk, sweetener", allergen: "Allergen advice: Contains milk; may contain traces of nuts" },
    { title: "Nosy Cinnamon", price: "£6.99", desc: "Lightly spiced cinnamon drink with warm, comforting taste.", ingr: "Ingredients: Cinnamon, milk, sweetener", allergen: "Allergen advice: Contain traces of nuts" }
  ] },
  { cards: [
    { title: "Zesty Zobo", price: "£3.99", desc: "Bold and refreshing hibiscus drink with a tangy finish.", ingr: "Ingredients: Hibiscus leaves, ginger, spices", allergen: "Allergen advice: May contain traces of nuts" }
  ] }
];

const pies = [
  { title: "Meat Pie", price: "£2.50", bg: "url('/figma/landing/assets/0fe094edc96a1173.jpg') center / cover no-repeat", desc: "Golden, flaky pastry filled with rich, savoury minced beef.", ingr: "Ingredients: Minced beef, onions, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" },
  { title: "Chicken Pie", price: "£2.00", bg: "url('/figma/landing/assets/29cfbef857f273ea.jpg') center / cover no-repeat", desc: "Flaky pastry packed with tender, well-seasoned chicken for a hearty bite.", ingr: "Ingredients: Chicken, onions, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" },
  { title: "Suya Chicken Pie", price: "£2.50", bg: "#F5F5F5", desc: "A bold twist on a classic. Tender chicken seasoned with suya spices, baked to perfection.", ingr: "Ingredients: Chicken, suya spice, onions, seasoning, pastry", allergen: "Allergen advice: Contains peanuts, wheat (gluten); may contain traces of eggs, milk" },
  { title: "Sausage Roll", price: "£2.80", bg: "url('/figma/landing/assets/584a90c450f4e32d.jpg') center / cover no-repeat", desc: "Freshly baked pastry with juicy, seasoned sausage filling.", ingr: "Ingredients: Sausage meat, seasoning, pastry", allergen: "Allergen advice: Contains wheat (gluten); may contain traces of eggs, milk" }
];

const bananas = [
  { title: "Classic Banana Bread", price: "£10.00", bg: "url('/figma/landing/assets/4993cda576f284c1.jpg') center / cover no-repeat", desc: "Soft, moist banana bread with natural sweetness.", ingr: "Ingredients: Banana, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains wheat (gluten), eggs, milk" },
  { title: "Nutty Banana Bread", price: "£13.00", bg: "url('/figma/landing/assets/4993cda576f284c1.jpg') center / cover no-repeat", desc: "Classic banana bread with added crunch from mixed nuts.", ingr: "Ingredients: Banana mixed nuts, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains nuts, wheat (gluten), eggs, milk" },
  { title: "Chocolatey Banana Bread", price: "£15.00", bg: "url('/figma/landing/assets/4993cda576f284c1.jpg') center / cover no-repeat", desc: "Moist banana bread blended with rich chocolate.", ingr: "Ingredients: Banana chocolate, flour, sugar, eggs, butter.", allergen: "Allergen advice: Contains wheat (gluten), eggs, milk." },
  { title: "Nutty + Choc Banana Bread", price: "£15.00", bg: "url('/figma/landing/assets/03752743e003c37b.jpg') center / cover no-repeat", desc: "Bananas, crunchy nuts, and chocolate in one loaf.", ingr: "Ingredients: Banana mixed nuts, chocolate, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains nuts, wheat (gluten), eggs, milk" },
  { title: "Peanut Banana Bread", price: "£13.00", bg: "url('/figma/landing/assets/2d9ca0dd06ca04a5.jpg') center / cover no-repeat", desc: "Banana bread with a rich peanut twist.", ingr: "Ingredients: Banana, peanuts, flour, sugar, eggs, butter", allergen: "Allergen advice: Contains peanuts, wheat (gluten), eggs, milk" }
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