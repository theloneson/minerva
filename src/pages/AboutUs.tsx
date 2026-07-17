import { useState, useEffect } from 'react';
import { useScale } from '../hooks/useScale';
import { MobileFollow } from '../components/Shared';
import { Header, MobileHeader } from '../components/Header';
import { Footer, MobileFooter } from '../components/Footer';
import { InstagramStrip, MobileInstagramStrip } from '../components/InstagramStrip';

export default function AboutUs() {
  const { scaleTransform, scaledHeight } = useScale(6495);
  const [quoteIdx, setQuoteIdx] = useState(0);

  const nextQuote = () => setQuoteIdx((prev) => (prev + 1) % quotes.length);
  const prevQuote = () => setQuoteIdx((prev) => (prev + quotes.length - 1) % quotes.length);

  // Auto-advance the testimonial carousel continuously.
  useEffect(() => {
    const id = setInterval(() => setQuoteIdx((prev) => (prev + 1) % quotes.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
    <div className="hidden lg:block w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div
        className="relative mx-auto bg-white font-nunito w-[1920px] h-[6495px] origin-top-left"
        style={{ transform: scaleTransform }}
      >
        {/* ============ HERO ============ */}
<section className="absolute left-0 top-0 w-[1920px] h-[596px] overflow-hidden">
  <div className="absolute left-0 top-[-152px] w-[1920px] h-[900px] bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-center bg-[length:100%_120.471%] bg-no-repeat" />
  <div className="absolute left-0 top-0 w-[1934px] h-[709px] opacity-90 bg-black" />

  {/* Shawarma (same as landing hero, right side, cropped by hero bottom) */}
  <div className="absolute left-[926px] top-[3px] w-[1166.911px] h-[1150.454px] overflow-hidden pointer-events-none">
    <div className="absolute left-0 top-0 w-[794.477px] h-[993.54px] bg-[url('/figma/landing/assets/d6b05c66dc1dea2e.png')] bg-[length:100%_100%] bg-no-repeat origin-top-left" style={{ backgroundPosition: '50% 0', transform: 'matrix(-0.117,-0.993,-0.993,0.117,1167.7,869.2)' }} />
  </div>

  <Header activePage="about-us" />

  <h1 className="absolute left-[673px] top-[246px] w-[433px] font-nunito font-black text-[80px] leading-[60px] text-center">
    <span className="text-[#FFE600]">About</span>{' '}
    <span className="text-[#FF3B5C]">Us</span>
  </h1>
  <span className="absolute left-[574px] top-[326px] w-[622px] font-nunito font-semibold italic text-[20px] leading-[25px] text-center text-[#F4F1F1] text-balance">
    The LiquidSpot is a food and beverage brand dedicated to serving freshly prepared handmade foods and specialty drinks. Our menu brings together a variety of well-loved snacks, pastries, meals, and refreshing drinks made with care and quality ingredients.
  </span>
</section>

        <section className="absolute left-[161px] top-[651px] w-[1548px] h-[734px]">
          <div className="absolute left-[51px] top-[21px] w-[669px] h-[734px]">
            {/* Left Image (Tall) */}
            <div className="absolute left-0 top-[67px] w-[320px] h-[600px] rounded-[16px] bg-[url('/figma/about/assets/1.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
            
            {/* Right Top Image */}
            <div className="absolute left-[340px] top-[67px] w-[320px] h-[290px] rounded-[16px] bg-[url('/figma/about/assets/2.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
            
            {/* Right Bottom Image */}
            <div className="absolute left-[340px] top-[377px] w-[320px] h-[290px] rounded-[16px] bg-[url('/figma/about/assets/3.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
          </div>
          <div className="absolute left-[852px] top-[197.5px] w-[696px] flex flex-col gap-[18px] items-center">
            <span className="font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] text-center text-brand-red">WHO WE ARE</span>
            <span className="font-nunito font-extrabold text-[60px] leading-[60px] text-center text-[#212121]">The LiquidSpot.</span>
            <span className="w-[640px] font-nunito font-medium text-[17px] leading-[28px] text-center text-body-gray whitespace-pre-line">
              From handcrafted shawarmas and freshly baked pastries to refreshing specialty drinks, every item is prepared with attention to flavour, freshness, and consistency.
              {"\n\n"}
              At The LiquidSpot, we believe good food and drinks create moments of enjoyment and connection. Whether you're grabbing a quick bite, enjoying a refreshing drink, or sharing food with friends and family, we aim to provide an experience that is simple, satisfying, and memorable.
            </span>
          </div>
        </section>

        {/* ============ HYGIENE RATING BAR ============ */}
        <section className="absolute left-0 top-[1440px] w-[1920px] h-[285px] bg-[url('/figma/findus/assets/84b21635877fa5ff.png')] bg-[length:14.115%_35.411%] bg-[position:100%_0%] bg-no-repeat">
          <div className="absolute inset-0 overflow-hidden bg-[#121212]">
            <div className="absolute left-0 top-0 w-[1920px] h-[353px] opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-[position:50%_0%] bg-[length:100%_307.149%] bg-no-repeat" />
          </div>
          <div className="absolute left-[1546px] top-[27px] flex flex-row gap-[10px]">
            {[1, 2, 3, 4].map(i => <i key={i} className="fas fa-star text-[26px] text-brand-yellowAccent" />)}
            <i className="fas fa-star text-[26px] text-white" />
          </div>
          <div className="absolute left-[101px] top-[66px] w-[1641px] flex flex-row gap-[482px] items-center">
            <div className="w-[793px] flex-shrink-0 flex flex-col gap-[18px] items-start">
              <span className="font-nunito font-bold text-[60px] leading-[60px] whitespace-nowrap text-white underline">4-Star Food Hygiene Rating</span>
              <span className="w-[700px] font-nunito font-semibold italic text-[30px] leading-[38px] text-[#F4F1F1]">Registered UK food business. Verified by the Food Standards Agency — tap to view.</span>
            </div>
            <a href="https://ratings.food.gov.uk" target="_blank" rel="noopener noreferrer" className="relative w-[353px] h-[101px] flex-shrink-0 rounded-[12px] bg-white flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <div className="absolute left-[30.53px] top-[-11px] w-[335.32px] h-[125.22px] rounded-[12px] shadow-[inset_0_0_0_3px_#FFF] pointer-events-none" />
              <span className="font-nunito font-black text-[30px] leading-[25px] text-brand-red">View More</span>
            </a>
          </div>
        </section>

        {/* ============ VISION & MISSION ============ */}
        <section className="absolute left-0 top-[1725px] w-[1920px] h-[940px] overflow-hidden bg-white">
          <div className="absolute left-[164px] top-[100px] flex flex-col gap-[21px] items-start">
            <div className="relative w-[281px] h-[30px]">
              <div className="absolute left-0 top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
              <span className="absolute left-[75px] top-[5px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">WHAT DRIVES US</span>
            </div>
            <span className="font-nunito font-extrabold text-[80px] leading-[67.2px] whitespace-nowrap text-[#212121]">Vision &amp; Mission.</span>
          </div>
          <div className="absolute left-[208px] top-[364px] w-[1543px] flex flex-row gap-[76px] items-center">
            <div className="relative w-[610px] flex-shrink-0 rounded-[30px] shadow-[inset_0_0_0_5px_#F3274C] flex flex-col gap-[22px] items-center justify-center px-[60px] py-[50px] hover:-translate-y-[8px] hover:shadow-[inset_0_0_0_5px_#F3274C,0_18px_36px_rgba(0,0,0,0.14)] transition-all duration-300">
              <span className="font-nunito font-bold text-[34px] leading-[38px] text-center text-[#222]">Our Vision</span>
              <span className="font-nunito font-medium text-[28px] leading-[40px] text-center text-body-gray">To become the go-to brand for handmade foods and specialty drinks, known for quality, flavor, and a satisfying food experience.</span>
              <div className="flex flex-row gap-[10px]">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-[8px] h-[8px] border border-brand-yellowAccent" />)}
              </div>
            </div>
            <div className="relative w-[171px] h-[171px] flex-shrink-0 rounded-[37.5px] bg-black">
              <div className="absolute left-[-7px] top-[-13.5px] w-[185px] h-[185px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
            </div>
            <div className="relative w-[610px] flex-shrink-0 rounded-[30px] shadow-[inset_0_0_0_5px_#F3274C] flex flex-col gap-[22px] items-center justify-center px-[60px] py-[50px] hover:-translate-y-[8px] hover:shadow-[inset_0_0_0_5px_#F3274C,0_18px_36px_rgba(0,0,0,0.14)] transition-all duration-300">
              <span className="font-nunito font-bold text-[34px] leading-[38px] text-center text-[#222]">Our Mission</span>
              <span className="font-nunito font-medium text-[28px] leading-[40px] text-center text-body-gray">Our mission is to prepare and serve freshly made snacks, pastries, meals, and specialty drinks using quality ingredients and carefully crafted recipes. We are committed to delivering great taste, consistency, and a welcoming food experience that keeps customers coming back</span>
            </div>
          </div>
        </section>

        {/* ============ OUR OFFERINGS ============ */}
        <section className="absolute left-[15px] top-[2622px] w-[1898px] h-[596px]">
          <span className="absolute left-[16px] top-[178px] w-[590px] font-oswald font-semibold text-[150px] leading-[100px] tracking-[5px] text-center whitespace-nowrap text-transparent" style={{ WebkitTextStroke: '2px #F3274C' }}>Our Offerings</span>
          <span className="absolute left-[1324px] top-[178px] w-[590px] font-oswald font-semibold text-[150px] leading-[100px] tracking-[5px] text-center whitespace-nowrap text-transparent" style={{ WebkitTextStroke: '2px #F3274C' }}>Our Offerings</span>
          <div className="absolute left-[635px] top-[98px] w-[660px] h-[423.32px]">
            {offerings.map((tile, idx) => (
              <div key={idx} className="absolute w-[310px] h-[206.66px] rounded-[30px] overflow-hidden hover:scale-105 hover:shadow-[0_18px_36px_rgba(0,0,0,0.4)] transition-all duration-300" style={{ left: tile.x, top: tile.y, background: tile.bg }}>
                <div className="absolute inset-0 bg-[#0C0C0C]/70" />
                <span className="absolute left-[20px] top-[26px] w-[270px] font-nunito font-extrabold text-[30px] leading-[30px] text-center text-white">{tile.title}</span>
                <span className="absolute left-[18px] top-[103px] w-[274px] font-nunito font-light text-[14px] leading-[15px] text-center text-white">{tile.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ SUSTAINABILITY ============ */}
        <section className="absolute left-0 top-[3218px] w-[1920px] h-[948px] overflow-hidden">
          <div className="absolute left-0 top-0 w-[963px] h-[960px] bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[962px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/45f616fcb6e453e7.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[1442px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/6315e951f530162f.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[960px] top-[480px] w-[963px] h-[480px] bg-[url('/figma/landing/assets/0df3bfdfbfaf75d0.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute left-[181px] top-[65px] flex flex-col gap-[21px] items-start">
            <div className="relative w-[281px] h-[30px]">
              <div className="absolute left-0 top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellow" />
              <span className="absolute left-[75px] top-[5px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-yellow">SUSTAINABILITY</span>
            </div>
            <span className="font-nunito font-extrabold text-[80px] leading-[67.2px] whitespace-nowrap text-white">Food With Purpose.</span>
          </div>
          <span className="absolute left-[293px] top-[264px] w-[1407px] font-nunito font-medium italic text-[35px] leading-[50px] text-center text-white whitespace-pre-line text-balance">
            "We are also mindful of the role small businesses play in building a more responsible food system. As part of our commitment to sustainability, we make conscious efforts to minimise food waste, manage resources responsibly, and adopt practices that support more sustainable production in line with the principles of SDG 12."
            {"\n\n"}
            "Through thoughtful preparation and responsible food handling, we aim to operate in a way that respects both our customers and the environment."
          </span>
        </section>

        {/* ============ TESTIMONIALS ============ */}
        <section className="absolute left-0 top-[4166px] w-[1920px] h-[730px] overflow-hidden bg-black">
          <div className="absolute left-[-76px] top-[-133px] w-[2036px] h-[805px] opacity-20 bg-[url('/figma/about/assets/b073f56caebd2e41.png')] bg-[position:50%_0%] bg-[length:100.023%_142.857%] bg-no-repeat" />
          <div className="absolute left-[365px] top-[180px] w-[1320px] h-[393px]">
            <div className="absolute left-[444px] top-0 w-[432px] h-[69.39px] border-b border-dashed border-brand-yellow">
              <i className="fas fa-quote-left absolute left-[76px] top-[4px] text-[28px] text-brand-yellow" />
              <span className="absolute left-[143.55px] top-[-5px] w-[212px] font-oswald font-normal text-[32px] leading-[38.4px] text-center whitespace-nowrap text-white">What Client Says?</span>
            </div>
            <div className="absolute left-[12px] top-[109px] w-[1296px] overflow-hidden">
              <div
                className="flex flex-row transition-transform duration-500 ease-in-out"
                style={{ width: `${quotes.length * 100}%`, transform: `translateX(-${quoteIdx * (100 / quotes.length)}%)` }}
              >
                {quotes.map((q, i) => (
                  <div key={i} className="flex flex-col items-center gap-[22px] px-[148px] shrink-0" style={{ width: `${100 / quotes.length}%` }}>
                    <span className="w-[1000px] min-h-[100px] font-nunito font-medium italic text-[26px] leading-[45px] text-center text-footer-gray text-balance">
                      {q.text}
                    </span>
                    <span className="font-oswald font-semibold text-[20px] tracking-[2px] text-center text-white">{q.name}</span>
                    <div className="flex flex-row gap-[8px]">
                      {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star text-[20px] text-brand-yellowAccent" />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div onClick={prevQuote} className="absolute left-0 top-[108px] w-[55px] h-[55px] rounded-[27.5px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <i className="fas fa-arrow-left text-[18px] text-white" />
            </div>
            <div onClick={nextQuote} className="absolute left-[1241px] top-[108px] w-[55px] h-[55px] rounded-[27.5px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <i className="fas fa-arrow-right text-[18px] text-white" />
            </div>
            <div className="absolute left-0 top-[366px] w-[1296px] flex flex-row justify-center gap-[10px]">
              {quotes.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setQuoteIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-[8px] rounded-full transition-all ${i === quoteIdx ? 'w-[24px] bg-brand-yellow' : 'w-[8px] bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ============ FOLLOW ============ */}
        <section className="absolute left-0 top-[4880px] w-[1920px] h-[314.3px]">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={5194} />
        <Footer top={5563} />
      </div>
    </div>

    {/* ================= MOBILE / TABLET (below lg) ================= */}
    <div className="lg:hidden w-full overflow-x-hidden bg-white font-nunito">
      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-90" />
        <MobileHeader activePage="about-us" />
        <div className="relative px-6 md:px-12 pt-40 pb-20 flex flex-col items-center gap-5 text-center">
          <h1 className="font-black text-[52px] md:text-[72px] leading-none">
            <span className="text-[#FFE600]">Our</span>{' '}
            <span className="text-[#FF3B5C]">Story</span>
          </h1>
          <p className="max-w-xl font-semibold italic text-[15px] md:text-[18px] leading-relaxed text-[#F4F1F1]">
            The LiquidSpot is a food and beverage brand built on freshly prepared handmade food and specialty drinks — made with quality ingredients, crafted with intention.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-6 md:px-12 py-14 flex flex-col items-center gap-8">
        <div className="w-full max-w-xl grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-[16px] bg-[url('/figma/about/assets/1.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
          <div className="h-40 md:h-56 rounded-[16px] bg-[url('/figma/about/assets/2.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
          <div className="h-40 md:h-56 rounded-[16px] bg-[url('/figma/about/assets/3.png')] bg-center bg-cover bg-no-repeat shadow-[0_10px_30px_rgba(0,0,0,0.2)]" />
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">WHO WE ARE</span>
          <h2 className="font-extrabold text-[40px] md:text-[52px] leading-none text-[#212121]">The LiquidSpot.</h2>
          <p className="max-w-xl font-medium text-[15px] md:text-[17px] leading-[26px] text-body-gray whitespace-pre-line">
            From handcrafted shawarmas and freshly baked pastries to refreshing specialty drinks, every item is prepared with attention to flavour, freshness, and consistency.
            {"\n\n"}
            At The LiquidSpot, we believe good food and drinks create moments of enjoyment and connection. Whether you're grabbing a quick bite, enjoying a refreshing drink, or sharing food with friends and family, we aim to provide an experience that is simple, satisfying, and memorable.
          </p>
        </div>
      </section>

      {/* HYGIENE RATING BAR */}
      <section className="relative overflow-hidden bg-[#121212] px-6 md:px-12 py-12">
        <div className="absolute inset-0 opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-cover bg-top" />
        <div className="relative flex flex-col items-start gap-5">
          <div className="flex flex-row gap-[8px]">
            {[1, 2, 3, 4].map(i => <i key={i} className="fas fa-star text-[20px] text-brand-yellowAccent" />)}
            <i className="fas fa-star text-[20px] text-white" />
          </div>
          <span className="font-bold text-[30px] md:text-[44px] leading-tight text-white underline">4-Star Food Hygiene Rating</span>
          <span className="font-semibold italic text-[17px] md:text-[22px] leading-[28px] text-[#F4F1F1]">Registered UK food business. Verified by the Food Standards Agency — tap to view.</span>
          <a href="https://ratings.food.gov.uk" target="_blank" rel="noopener noreferrer" className="relative mt-2 w-[220px] h-[64px] rounded-[12px] bg-white flex items-center justify-center hover:brightness-95 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
            <div className="absolute -inset-y-[6px] inset-x-[12px] rounded-[12px] shadow-[inset_0_0_0_3px_#FFF] pointer-events-none" />
            <span className="font-black text-[20px] text-brand-red">View More</span>
          </a>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="px-6 md:px-12 py-14 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">WHAT DRIVES US</span>
          </div>
          <h2 className="font-extrabold text-[40px] md:text-[56px] leading-none text-[#212121]">Vision &amp; Mission.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          <div className="rounded-[30px] shadow-[inset_0_0_0_5px_#F3274C] flex flex-col gap-[18px] items-center justify-center px-7 py-9 text-center">
            <span className="font-bold text-[22px] text-[#222]">Our Vision</span>
            <span className="font-medium text-[15px] md:text-[17px] leading-[27px] text-body-gray">To become the go-to brand for handmade foods and specialty drinks, known for quality, flavor, and a satisfying food experience.</span>
            <div className="flex flex-row gap-[10px]">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-[8px] h-[8px] border border-brand-yellowAccent" />)}
            </div>
          </div>
          <div className="rounded-[30px] shadow-[inset_0_0_0_5px_#F3274C] flex flex-col gap-[18px] items-center justify-center px-7 py-9 text-center">
            <span className="font-bold text-[22px] text-[#222]">Our Mission</span>
            <span className="font-medium text-[15px] md:text-[17px] leading-[27px] text-body-gray">Our mission is to prepare and serve freshly made snacks, pastries, meals, and specialty drinks using quality ingredients and carefully crafted recipes. We are committed to delivering great taste, consistency, and a welcoming food experience that keeps customers coming back</span>
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS */}
      <section className="px-6 md:px-12 py-14 flex flex-col items-center gap-8">
        <span className="font-oswald font-semibold text-[44px] md:text-[64px] leading-none tracking-[3px] text-center text-transparent" style={{ WebkitTextStroke: '2px #F3274C' }}>Our Offerings</span>
        <div className="w-full max-w-xl grid gap-5 md:grid-cols-2">
          {offerings.map((tile, idx) => (
            <div key={idx} className="relative h-[210px] rounded-[30px] overflow-hidden" style={{ background: tile.bg }}>
              <div className="absolute inset-0 bg-[#0C0C0C]/70" />
              <div className="relative h-full flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="font-extrabold text-[24px] md:text-[28px] leading-[1.05] text-white">{tile.title}</span>
                <span className="font-light text-[13px] md:text-[14px] leading-[17px] text-white">{tile.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="relative overflow-hidden px-6 md:px-12 py-16">
        <div className="absolute inset-0 bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-row items-center gap-3">
              <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellow" />
              <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-yellow">SUSTAINABILITY</span>
            </div>
            <h2 className="font-extrabold text-[36px] md:text-[56px] leading-[1.05] text-white">Food With Purpose.</h2>
          </div>
          <p className="font-medium italic text-[17px] md:text-[24px] leading-[30px] md:leading-[40px] text-center text-white whitespace-pre-line">
            "We are also mindful of the role small businesses play in building a more responsible food system. As part of our commitment to sustainability, we make conscious efforts to minimise food waste, manage resources responsibly, and adopt practices that support more sustainable production in line with the principles of SDG 12."
            {"\n\n"}
            "Through thoughtful preparation and responsible food handling, we aim to operate in a way that respects both our customers and the environment."
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-black px-6 md:px-12 py-16">
        <div className="absolute inset-0 opacity-20 bg-[url('/figma/about/assets/b073f56caebd2e41.png')] bg-cover bg-top" />
        <div className="relative flex flex-col items-center gap-7 text-center">
          <div className="flex flex-row items-center gap-3 border-b border-dashed border-brand-yellow pb-4">
            <i className="fas fa-quote-left text-[22px] text-brand-yellow" />
            <span className="font-oswald font-normal text-[24px] md:text-[30px] leading-tight text-white">What Client Says?</span>
          </div>
          <div className="w-full max-w-2xl overflow-hidden">
            <div
              className="flex flex-row transition-transform duration-500 ease-in-out"
              style={{ width: `${quotes.length * 100}%`, transform: `translateX(-${quoteIdx * (100 / quotes.length)}%)` }}
            >
              {quotes.map((q, i) => (
                <div key={i} className="flex flex-col items-center gap-5 px-4 shrink-0" style={{ width: `${100 / quotes.length}%` }}>
                  <p className="min-h-[120px] font-medium italic text-[17px] md:text-[22px] leading-[30px] md:leading-[38px] text-footer-gray">
                    {q.text}
                  </p>
                  <span className="font-oswald font-semibold text-[18px] tracking-[2px] text-white">{q.name}</span>
                  <div className="flex flex-row gap-[8px]">
                    {[1, 2, 3, 4, 5].map(s => <i key={s} className="fas fa-star text-[18px] text-brand-yellowAccent" />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <button type="button" onClick={prevQuote} aria-label="Previous testimonial" className="w-[50px] h-[50px] rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-white/10 transition-colors">
              <i className="fas fa-arrow-left text-[16px] text-white" />
            </button>
            <button type="button" onClick={nextQuote} aria-label="Next testimonial" className="w-[50px] h-[50px] rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] flex items-center justify-center hover:bg-white/10 transition-colors">
              <i className="fas fa-arrow-right text-[16px] text-white" />
            </button>
          </div>
          <div className="flex flex-row gap-[10px]">
            {quotes.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuoteIdx(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-[8px] rounded-full transition-all ${i === quoteIdx ? 'w-[24px] bg-brand-yellow' : 'w-[8px] bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <MobileFollow />
      <MobileInstagramStrip />
      <MobileFooter />
    </div>
    </>
  );
}

// ========================
// DATA CONSTANTS
// ========================

const offerings = [
  { x: "15px", y: "0px", title: "Freshly Made Food & Snacks", bg: "url('/figma/landing/assets/0fe094edc96a1173.jpg') 50% 50% / 100% 100% no-repeat", desc: "Preparation and sale of handmade snacks, pastries, and light meals including shawarmas, pies, sausage rolls, melts, and other freshly prepared items" },
  { x: "335px", y: "0px", title: "Specialty Drinks", bg: "url('/figma/about/assets/89bbbd02ec579f6c.jpg') 50% 50% / 100% 100% no-repeat", desc: "Preparation and sale of refreshing beverages including fruit blends, traditional drinks, and other specialty refreshments." },
  { x: "15px", y: "211.66px", title: "Catering Services", bg: "url('/figma/about/assets/9825f97d056d7079.png') 50% 50% / 100% 100% no-repeat", desc: "Provision of freshly prepared food and drinks for small events, meetings and gatherings, church or community events, and private celebrations." },
  { x: "335px", y: "211.66px", title: "Custom Orders", bg: "url('/figma/about/assets/6e085848898fa0ce.jpg') 50% 50% / 100% 100% no-repeat", desc: "Preparation of selected menu items in larger quantities for parties, celebrations, group orders, and corporate needs." }
];

const quotes = [
  { name: "ISAAC", text: "\"The shawarma was the best I have tasted in a very long time. It's so perfect and gave me a taste of home. Thank you, Ma\"" },
  { name: "KEHIDE", text: "\"You should have added 3 then tell me to not pay for the 3rd one if it's not nice — but you should know I will definitely pay if at all. It's really a good deal thou, now we have shawarma plug 😄 see you next weekend 👍\"" },
  { name: "GRACE", text: "\"The pastries were delicious, filling — infact it was made by a perfectionist 🫡 I kept going for another bite. Your pastries are now my new cravings 🤣\"" },
  { name: "ELIZABETH", text: "\"Shared one of the plain banana bread with my colleagues and they all loved it. Gave the nutty set to my aunt's family in Manchester yesterday and the biscoff one did not last 24 hours. Hubby asked if you gave me the recipe so I can replicate 😀\"" },
  { name: "TOSIN", text: "\"I had the meat pie, sandwich, and shawarma, and I was impressed with all three. Everything tasted fresh and well-made, with great flavour in every bite. The seasoning was spot on — especially the pepper inside the shawarma, it added just the right amount of heat without overpowering the food. I highly recommend it.\"" },
  { name: "ESSE", text: "\"It is delicious and my aunty and my cousin were very appreciative of it. It was perfect xx — I was worried it wouldn't be spicy at all but it was just right.\"" }
];