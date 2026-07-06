import { useState } from 'react';
import { useScale } from '../hooks/useScale';
import { MobileFollow } from '../components/Shared';
import { Header, MobileHeader } from '../components/Header';
import { Footer, MobileFooter } from '../components/Footer';
import { InstagramStrip, MobileInstagramStrip } from '../components/InstagramStrip';

export default function CateringService() {
  const { scaleTransform, scaledHeight } = useScale(7415);
  const [imgIdx, setImgIdx] = useState(0);

  const nextImg = () => setImgIdx((prev) => (prev + 1) % timelineImgs.length);
  const prevImg = () => setImgIdx((prev) => (prev + timelineImgs.length - 1) % timelineImgs.length);

  return (
    <>
    <div className="hidden lg:block w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div
        className="relative mx-auto bg-white font-nunito w-[1920px] h-[7415px] origin-top-left"
        style={{ transform: scaleTransform }}
      >
        {/* ============ HERO ============ */}
        <section className="absolute left-0 top-0 w-[1920px] h-[900px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/figma/catering/assets/11263f48ece5dacf.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute left-[1183px] top-[229px] w-[551px] h-[436px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-top bg-[length:100%_126.376%] bg-no-repeat" />

          <Header activePage="catering" />

          <div className="absolute left-[151px] top-[307px] w-[74px] h-[3px] rounded-[30px] bg-brand-yellow" />
          <span className="absolute left-[245px] top-[296px] font-oswald font-bold text-[20px] leading-[25px] tracking-[2px] whitespace-nowrap text-brand-yellow">Catering &amp; Events</span>
          <div className="absolute left-[150px] top-[375px] font-nunito font-black text-[80px] leading-[96px]">
            <div className="text-brand-yellow">The Food</div>
            <div className="text-brand-red">You Own</div>
          </div>
          <span className="absolute left-[160px] top-[679px] w-[622px] font-nunito font-semibold italic text-[20px] leading-[25px] text-[#F4F1F1] text-balance">
            From intimate gatherings to large celebrations, TheLiquidSpot creates thoughtfully curated food and drink experiences tailored to your guests, preferences, and occasion.
          </span>
          <a href="/find-us#consultation" className="absolute left-[1331px] top-[708px] w-[322px] h-[92px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-2xl transition-all duration-300">
            <div className="absolute left-[27.85px] top-[-10px] w-[305.87px] h-[114.06px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-nunito font-black text-[25px] text-white">Book a Consultation</span>
          </a>
        </section>

        {/* ============ EVERY MOMENT ============ */}
        <section className="absolute left-0 top-[900px] w-[1920px] h-[969px] overflow-hidden">
          <div className="absolute left-0 top-0 w-[1920px] h-[1084px] opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[158px] top-[52px] w-[304px] h-[30px]">
            <div className="absolute left-[23px] top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="absolute left-[66px] top-[5px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">WHAT WE CATER TO</span>
          </div>
          <span className="absolute left-[138px] top-[92px] w-[1195px] font-nunito font-extrabold text-[80px] leading-[72px] text-center whitespace-nowrap text-[#222]">Every Moment, Every Occasion.</span>
          <span className="absolute left-[173px] top-[184px] w-[776px] font-nunito font-medium text-[17px] leading-[28px] text-body-gray">
            Whether it's a birthday for twenty or a corporate lunch for a hundred — we show up fresh, prepared, and ready to make your event memorable.
          </span>
          <div className="absolute left-[53px] top-[355px] w-[1816px] flex flex-row gap-[24px] items-center">
            {caterCards.map((card, idx) => (
              <div key={idx} className="relative w-[430px] h-[390px] flex-shrink-0 rounded-[48px_0_48px_0] bg-white shadow-[inset_0_0_0_2px_#F2F2F2] flex flex-col gap-[32px] px-[22px] py-[40px] items-center justify-center hover:-translate-y-[8px] hover:shadow-[inset_0_0_0_2px_#F3274C,0_18px_36px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div
                  className="w-[96px] h-[96px] rounded-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="flex flex-col gap-[16px] items-center">
                  <span className="font-nunito font-extrabold text-[30px] leading-none text-center text-brand-red">{card.title}</span>
                  <span className="w-[361px] font-nunito font-semibold text-[18px] leading-none text-center text-[#222]">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============ THREE SIGNATURE OFFERINGS ============ */}
        <section className="absolute left-0 top-[1869px] w-[1920px] h-[1091px] overflow-hidden bg-white">
          <div className="absolute left-[164px] top-[100px] w-[776px] flex flex-col gap-[21px] items-start">
            <div className="relative w-[304px] h-[30px]">
              <div className="absolute left-[23px] top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
              <span className="absolute left-[66px] top-[5px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">WHAT WE BRING</span>
            </div>
            <span className="font-nunito font-extrabold text-[60px] leading-[67.2px] whitespace-nowrap text-[#212121]">Three Signature Offerings.</span>
            <span className="font-nunito font-medium text-[17px] leading-[28px] text-[#222]">Every catering package is built from our three core collections — mixed and matched to suit your event, your guests, and your occasion.</span>
          </div>
          <div className="absolute left-[266px] top-[385px] w-[1387px] flex flex-row gap-[83px] items-center">
            {offerings.map((card, idx) => (
              <div key={idx} className="relative w-[406.67px] h-[605.67px] flex-shrink-0 rounded-[18px] overflow-hidden bg-white shadow-[inset_0_0_0_1px_#E5E7EB,10px_11px_20px_0px_rgba(0,0,0,0.15)] hover:-translate-y-[7px] hover:shadow-[inset_0_0_0_1px_#E5E7EB,14px_20px_34px_0px_rgba(0,0,0,0.22)] transition-all duration-300">
                <div className="absolute left-[0.66px] top-[1px] w-[405px] h-[353px] overflow-hidden" style={{ background: card.bg }} />
                <i className="far fa-heart absolute left-[371px] top-[24px] text-[15px] text-[#C3C3C3]" />
                <div className="absolute left-[17px] top-[21px] h-[26px] rounded-[26px] bg-brand-yellow flex items-center gap-[5px] px-[12px]">
                  <i className="fas fa-utensils text-[10px] text-[#222]" />
                  <span className="font-nunito font-semibold text-[14px] leading-[18px] text-[#222]">{card.label}</span>
                </div>
                <span className="absolute left-0 top-[370px] w-[406px] font-nunito font-extrabold text-[28px] leading-[30px] text-center text-brand-red">{card.title}</span>
                <span className="absolute left-[76.66px] top-[420px] w-[250px] font-nunito font-normal text-[16px] leading-[24px] text-center text-[#222]">{card.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ============ FOOD PROCESSING STEPS ============ */}
        <section className="absolute left-[203px] top-[2968px] w-[1544px] flex flex-col gap-[94px] items-center">
          <div className="w-[631px] flex flex-col gap-[39px] items-center">
            <span className="font-oswald font-bold text-[25px] leading-[28px] text-center whitespace-nowrap text-brand-red">FOOD PROCESSING</span>
            <span className="font-nunito font-semibold text-[80px] leading-[81px] text-center text-[#212121]">Simple Ordering, Great Food.</span>
          </div>
          <div className="relative w-[1544px] h-[394px] rounded-[14px] bg-[#EE284B] bg-[url('/figma/catering/assets/6c040c306c132abd.png')] bg-[length:96.3%_80.964%] bg-[position:130.53%_0%] bg-no-repeat">
            <div className="absolute left-[63px] top-[41px] w-[1419px] flex flex-row gap-[108px] items-start">
              {steps.map((step, idx) => (
                <div key={idx} className="relative w-[237px] flex-shrink-0 flex flex-col gap-[19px] items-center">
                  <span className="font-oswald font-semibold text-[80px] leading-[100px] tracking-[5px] text-center text-transparent" style={{ WebkitTextStroke: '2px #FFF200' }}>{step.num}</span>
                  <div className="flex flex-col gap-[30px] items-center">
                    <span className="font-nunito font-bold text-[26px] leading-[26px] text-center whitespace-nowrap text-white">{step.title}</span>
                    <span className="font-nunito font-normal text-[18px] leading-[28px] text-center text-white">{step.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BOOKING & PLANNING TIMELINE ============ */}
        <section className="absolute left-0 top-[3763px] w-[1920px] h-[1109px] overflow-hidden">
          <div className="absolute left-[-12px] top-[27px] w-[1182px] h-[1079px] overflow-hidden">
            <div className="absolute inset-0 transition-all duration-300 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${timelineImgs[imgIdx]}')` }} />
            <div onClick={nextImg} className="absolute left-[1047px] top-[335px] w-[65px] h-[65px] bg-brand-red shadow-[0_10px_20px_0_rgba(0,0,0,0.06)] flex items-center justify-center cursor-pointer hover:brightness-110 transition-all">
              <i className="fas fa-arrow-right text-[17px] text-[#212121]" />
            </div>
            <div onClick={prevImg} className="absolute left-[1047px] top-[400px] w-[65px] h-[65px] bg-white flex items-center justify-center cursor-pointer hover:bg-[#F5F5F5] transition-all">
              <i className="fas fa-arrow-left text-[17px] text-[#212121]" />
            </div>
          </div>
          <div className="absolute left-[1097px] top-[25px] w-[799px] h-[1079px] bg-[#FFFEFA] bg-[url('/figma/catering/assets/df1d49e63e4686a7.png')] bg-[length:91.525%_100%] bg-[position:104.074%_50%] bg-no-repeat" />
          <div className="absolute left-[1121px] top-0 w-[794px] h-[1109px]">
            <div className="absolute left-[13px] top-[40px] w-[589px] flex flex-col gap-[19px] items-start">
              <div className="relative w-[304px] h-[30px]">
                <div className="absolute left-[23px] top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
                <span className="absolute left-[66px] top-[5px] font-oswald font-bold text-[25px] leading-[30px] tracking-[2px] whitespace-nowrap text-brand-red">WHAT WE CATER</span>
              </div>
              <span className="font-nunito font-semibold text-[50px] leading-[50px] text-[#212121]">Booking &amp; Planning Timeline.</span>
              <span className="w-[589px] font-nunito font-medium text-[17px] leading-[28px] text-[#222]">To ensure the highest level of service and a menu truly curated for your event, we recommend booking at least 8 weeks in advance.</span>
            </div>
            <div className="absolute left-[13px] top-[336px] w-[663px] rounded-[30px] bg-white shadow-[0_0_50px_-13px_rgba(0,0,0,0.2)] flex flex-col gap-[20px] p-[40px]">
              {timeline.map((row, idx) => (
                <div key={idx} className="w-[582.33px] border border-[#DEDEDE] p-[16px_20px] flex flex-col gap-[9px]">
                  <span className="font-nunito font-bold text-[20px] leading-[24px] whitespace-nowrap text-black">{row.title}</span>
                  <span className="font-nunito font-normal text-[16px] leading-[23.33px] text-body-gray">{row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ READY TO START PLANNING ============ */}
        <section className="absolute left-0 top-[4869px] w-[1920px] h-[912px] overflow-hidden">
          <div className="absolute left-0 top-0 w-[963px] h-[960px] bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[962px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/45f616fcb6e453e7.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[1442px] top-0 w-[480px] h-[480px] bg-[url('/figma/landing/assets/6315e951f530162f.jpg')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute left-[960px] top-[480px] w-[963px] h-[480px] bg-[url('/figma/landing/assets/0df3bfdfbfaf75d0.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute left-[661px] top-0 w-[672px] h-[672px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
          <span className="absolute left-[46px] top-[282px] w-[683px] font-nunito font-extrabold text-[80px] leading-[81px] text-center text-white">Ready to start planning?</span>
          <a href="/find-us#consultation" className="absolute left-[1202px] top-[532px] w-[322px] h-[92px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-2xl transition-all duration-300">
            <div className="absolute left-[27.85px] top-[-10px] w-[305.87px] h-[114.06px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-nunito font-black text-[25px] leading-[25px] text-white">Book a Consultation</span>
          </a>
        </section>

        {/* ============ FOLLOW ============ */}
        <section className="absolute left-0 top-[5765px] w-[1920px] h-[314.3px]">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={6114} />
        <Footer top={6481} />
      </div>
    </div>

    {/* ================= MOBILE / TABLET (below lg) ================= */}
    <div className="lg:hidden w-full overflow-x-hidden bg-white font-nunito">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/figma/catering/assets/11263f48ece5dacf.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
        <MobileHeader activePage="catering" />
        <div className="relative px-6 md:px-12 pt-36 pb-20 flex flex-col items-start gap-5">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[50px] h-[3px] rounded-[30px] bg-brand-yellow" />
            <span className="font-oswald font-bold text-[16px] md:text-[20px] tracking-[2px] text-brand-yellow">Catering &amp; Events</span>
          </div>
          <h1 className="font-black text-[52px] md:text-[80px] leading-[1.05]">
            <span className="block text-brand-yellow">The Food</span>
            <span className="block text-brand-red">You Own</span>
          </h1>
          <p className="max-w-xl font-semibold italic text-[15px] md:text-[18px] leading-relaxed text-[#F4F1F1]">
            From intimate gatherings to large celebrations, TheLiquidSpot creates thoughtfully curated food and drink experiences tailored to your guests, preferences, and occasion.
          </p>
          <a href="/find-us#consultation-m" className="relative mt-2 rounded-[12px] bg-brand-red px-8 py-4 flex items-center justify-center hover:brightness-110 shadow-2xl transition-all duration-300">
            <div className="absolute -inset-y-[8px] inset-x-[10px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
            <span className="font-black text-[18px] text-white">Book a Consultation</span>
          </a>
        </div>
      </section>

      {/* EVERY MOMENT */}
      <section className="relative overflow-hidden px-6 md:px-12 py-14">
        <div className="absolute inset-0 opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-cover bg-center" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">WHAT WE CATER TO</span>
          </div>
          <h2 className="font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-[#222]">Every Moment, Every Occasion.</h2>
          <p className="max-w-2xl font-medium text-[15px] md:text-[17px] leading-[26px] text-body-gray">
            Whether it's a birthday for twenty or a corporate lunch for a hundred — we show up fresh, prepared, and ready to make your event memorable.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {caterCards.map((card, idx) => (
              <div key={idx} className="rounded-[48px_0_48px_0] bg-white shadow-[inset_0_0_0_2px_#F2F2F2] flex flex-col gap-6 px-6 py-9 items-center text-center hover:-translate-y-[6px] hover:shadow-[inset_0_0_0_2px_#F3274C,0_18px_36px_rgba(0,0,0,0.12)] transition-all duration-300">
                <div
                  className="w-[84px] h-[84px] rounded-full bg-center bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <div className="flex flex-col gap-3 items-center">
                  <span className="font-extrabold text-[24px] md:text-[28px] leading-none text-brand-red">{card.title}</span>
                  <span className="font-semibold text-[15px] md:text-[17px] leading-snug text-[#222]">{card.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE SIGNATURE OFFERINGS */}
      <section className="px-6 md:px-12 py-14 bg-white flex flex-col gap-4">
        <div className="flex flex-row items-center gap-3">
          <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
          <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">WHAT WE BRING</span>
        </div>
        <h2 className="font-extrabold text-[34px] md:text-[48px] leading-[1.05] text-[#212121]">Three Signature Offerings.</h2>
        <p className="max-w-2xl font-medium text-[15px] md:text-[17px] leading-[26px] text-[#222]">
          Every catering package is built from our three core collections — mixed and matched to suit your event, your guests, and your occasion.
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {offerings.map((card, idx) => (
            <div key={idx} className="rounded-[18px] overflow-hidden bg-white shadow-[inset_0_0_0_1px_#E5E7EB,10px_11px_20px_0px_rgba(0,0,0,0.15)] hover:-translate-y-[6px] transition-all duration-300">
              <div className="relative h-56 md:h-64" style={{ background: card.bg }}>
                <div className="absolute left-4 top-4 h-[28px] rounded-[26px] bg-brand-yellow flex items-center gap-[6px] px-[12px]">
                  <i className="fas fa-utensils text-[11px] text-[#222]" />
                  <span className="font-semibold text-[13px] text-[#222]">{card.label}</span>
                </div>
                <i className="far fa-heart absolute right-4 top-4 text-[16px] text-white/80" />
              </div>
              <div className="p-6 flex flex-col gap-3 text-center items-center">
                <span className="font-extrabold text-[24px] leading-[28px] text-brand-red">{card.title}</span>
                <span className="max-w-xs font-normal text-[15px] leading-[23px] text-[#222]">{card.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD PROCESSING STEPS */}
      <section className="px-6 md:px-12 py-14 flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-oswald font-bold text-[18px] md:text-[22px] text-brand-red">FOOD PROCESSING</span>
          <h2 className="max-w-lg font-semibold text-[38px] md:text-[56px] leading-[1.05] text-[#212121]">Simple Ordering, Great Food.</h2>
        </div>
        <div className="w-full rounded-[14px] bg-[#EE284B] px-6 py-10 md:px-10 grid gap-10 md:grid-cols-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-3 items-center text-center">
              <span className="font-oswald font-semibold text-[56px] leading-[64px] tracking-[5px] text-transparent" style={{ WebkitTextStroke: '2px #FFF200' }}>{step.num}</span>
              <span className="font-bold text-[22px] leading-tight text-white">{step.title}</span>
              <span className="max-w-sm font-normal text-[15px] leading-[25px] text-white">{step.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING & PLANNING TIMELINE */}
      <section className="flex flex-col">
        <div className="relative h-[320px] md:h-[440px] overflow-hidden">
          <div className="absolute inset-0 transition-all duration-300 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('${timelineImgs[imgIdx]}')` }} />
          <div className="absolute right-4 bottom-4 flex flex-row">
            <button type="button" onClick={prevImg} aria-label="Previous photo" className="w-[52px] h-[52px] bg-white flex items-center justify-center hover:bg-[#F5F5F5] transition-all">
              <i className="fas fa-arrow-left text-[16px] text-[#212121]" />
            </button>
            <button type="button" onClick={nextImg} aria-label="Next photo" className="w-[52px] h-[52px] bg-brand-red flex items-center justify-center hover:brightness-110 transition-all">
              <i className="fas fa-arrow-right text-[16px] text-[#212121]" />
            </button>
          </div>
        </div>
        <div className="bg-[#FFFEFA] px-6 md:px-12 py-12 flex flex-col gap-6">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellowAccent" />
            <span className="font-oswald font-bold text-[18px] md:text-[22px] tracking-[2px] text-brand-red">WHAT WE CATER</span>
          </div>
          <h2 className="font-semibold text-[34px] md:text-[44px] leading-[1.05] text-[#212121]">Booking &amp; Planning Timeline.</h2>
          <p className="max-w-2xl font-medium text-[15px] md:text-[17px] leading-[26px] text-[#222]">
            To ensure the highest level of service and a menu truly curated for your event, we recommend booking at least 8 weeks in advance.
          </p>
          <div className="rounded-[30px] bg-white shadow-[0_0_50px_-13px_rgba(0,0,0,0.2)] flex flex-col gap-[16px] p-6 md:p-8">
            {timeline.map((row, idx) => (
              <div key={idx} className="border border-[#DEDEDE] px-5 py-4 flex flex-col gap-[8px]">
                <span className="font-bold text-[17px] md:text-[19px] leading-[23px] text-black">{row.title}</span>
                <span className="font-normal text-[14px] md:text-[15px] leading-[22px] text-body-gray">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO START PLANNING */}
      <section className="relative overflow-hidden px-6 py-20 flex flex-col items-center gap-8 text-center">
        <div className="absolute inset-0 bg-[url('/figma/landing/assets/c7bd7438b86fbdba.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <h2 className="relative max-w-md font-extrabold text-[38px] md:text-[56px] leading-[1.05] text-white">Ready to start planning?</h2>
        <a href="/find-us#consultation-m" className="relative rounded-[12px] bg-brand-red px-8 py-4 flex items-center justify-center hover:brightness-110 shadow-2xl transition-all duration-300">
          <div className="absolute -inset-y-[8px] inset-x-[10px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
          <span className="font-black text-[18px] text-white">Book a Consultation</span>
        </a>
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

const timelineImgs = [
  "/figma/catering/assets/bf7b0e683dc63017.jpg",
  "https://images.unsplash.com/photo-1555244162-803834f70033?w=1400&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=1400&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80",
  "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=1400&q=80"
];

const caterCards = [
  { image: "/figma/catering/assets/1.jpeg", title: "Private Celebrations", desc: "Your special moments deserve exceptional food. We bring warmth, flavour, and a spread that makes your guests talk long after the event." },
  { image: "/figma/catering/assets/2.jpeg", title: "Corporate Events", desc: "Professional, punctual, and perfectly presented. We handle the food so your team can focus on what matters — with great energy and full stomachs." },
  { image: "/figma/catering/assets/3.jpeg", title: "Church & Community", desc: "Serving community means serving with heart. We cater for fellowships and gatherings where community and good food come together beautifully." },
  { image: "/figma/catering/assets/4.jpeg", title: "Weddings & Showers", desc: "Intimate doesn't mean less special. Whether it's ten people or thirty, every gathering deserves food that brings people together and keeps them there." }
];

const offerings = [
  { label: "Main Course", title: "Signature Feasts", bg: "url('/figma/catering/assets/a009410a210a1347.png') 102.994% 0% / 99.919% 114.637% no-repeat", desc: "Delicious, hearty main meals prepared with quality ingredients and authentic flavours. Designed to impress and satisfy every guest at the table." },
  { label: "Finger Food", title: "Artisan Bites", bg: "url('/figma/catering/assets/094aea18f7394678.png') 102.994% 0% / 99.919% 114.637% no-repeat", desc: "Handcrafted pastries, snacks, and crowd-favourite finger foods. Perfect for sharing, grazing tables, and creating those memorable moments between the bigger bites" },
  { label: "Drinks", title: "LiquidSpot Blends", bg: "url('/figma/catering/assets/3f7de7e3222ab905.png') 102.994% 0% / 99.919% 114.637% no-repeat", desc: "Our specialty drink range — refreshing, expertly crafted beverages that complement your menu and elevate the overall event experience from first sip to last." }
];

const steps = [
  { num: "01", title: "Book Consultation", desc: "Schedule a free consultation. We'll learn about your event, your vision, and exactly what you're looking to achieve." },
  { num: "02", title: "Menu Design", desc: "We design a customised menu from our Signature Feasts, Artisan Bites, and LiquidSpot Blends collections — tailored to your event style and guests." },
  { num: "03", title: "Proposal & Quote", desc: "You'll receive a clear, tailored proposal with menu recommendations, service options, and transparent pricing. No surprises." },
  { num: "04", title: "Confirmation & Delivery", desc: "Once approved, we bring everything to life — freshly prepared food, exceptional service, and the quality The LiquidSpot is known for." }
];

const timeline = [
  { title: "Consultation & Event Planning", desc: "A detailed discussion to understand your vision, guest profile, dietary requirements, and budget." },
  { title: "Menu Design & Recommendations", desc: "Crafting a menu that matches your event style and guests — not a generic package." },
  { title: "Dietary & Guest Considerations", desc: "Time to review all allergies, dietary needs, and guest preferences properly." },
  { title: "Proposal Preparation & Revisions", desc: "Your tailored proposal, reviewed and revised until it's exactly right." },
  { title: "Event Logistics & Scheduling", desc: "Delivery, setup, timing, and service coordination — all confirmed well in advance." }
];