import React, { useState } from 'react';
import { useScale } from '../hooks/useScale';
import { MobileFollow } from '../components/Shared';
import { Header, MobileHeader } from '../components/Header';
import { Footer, MobileFooter } from '../components/Footer';
import { InstagramStrip, MobileInstagramStrip } from '../components/InstagramStrip';

export default function FindUs() {
  const { scaleTransform, scaledHeight } = useScale(4848);
  const [prefIdx, setPrefIdx] = useState<number>(0);

  const prefLabels = ["Virtual Meeting", "Phone Call", "In-Person Meeting"];
  const waBody = encodeURIComponent(`Hi The Liquid Spot! I'd like to book a catering consultation. My preference: ${prefLabels[prefIdx]}`);
  const submitHref = `https://wa.me/447810007544?text=${waBody}`;

  return (
    <>
    <div className="hidden lg:block w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div
        className="relative mx-auto bg-white font-nunito w-[1920px] h-[4848px] origin-top-left"
        style={{ transform: scaleTransform }}
      >
        {/* ============ HERO ============ */}
        <section className="absolute left-0 top-0 w-[1920px] h-[900px] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/figma/findus/assets/fc783f160442afe0.png')] bg-center bg-[length:100%_100%] bg-no-repeat" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute left-[1183px] top-[229px] w-[551px] h-[436px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-top bg-[length:100%_126.376%] bg-no-repeat" />

          <Header activePage="find-us" />

          <div className="absolute left-[151px] top-[307px] w-[74px] h-[3px] rounded-[30px] bg-brand-yellow" />
          <span className="absolute left-[235px] top-[290px] font-nunito font-extrabold text-[25px] leading-[35px] whitespace-nowrap text-brand-yellow">Get In Touch</span>
          <span className="absolute left-[149px] top-[350px] font-nunito font-black text-[80px] leading-[96px] whitespace-nowrap text-white">Find Us.</span>
          <span className="absolute left-[149px] top-[448px] font-nunito font-black text-[80px] leading-[96px] whitespace-nowrap text-brand-red">Order Fresh.</span>
          <span className="absolute left-[149px] top-[544px] w-[622px] font-nunito font-semibold italic text-[20px] leading-[25px] text-[#F4F1F1] text-balance">
            Daily orders go through us directly. Catering and event bookings go through the form below. We're easy to reach and quick to respond.
          </span>
        </section>

        {/* ============ CONTACT US ============ */}
        <section className="absolute left-0 top-[930px] w-[1920px] h-[385px] overflow-hidden bg-gradient-to-b from-white from-96% to-[#E7F5F5]">
          <span className="absolute left-[320px] top-[26px] w-[1280px] font-nunito font-semibold text-[69px] leading-[80px] text-center text-[#222]">Contact Us</span>
          <div className="absolute left-[320px] top-[112px] w-[1280px] flex flex-row">
            {contacts.map((c, idx) => (
              <a key={idx} href={c.href} target="_blank" rel="noopener noreferrer" className="relative w-[320px] h-[165px] flex-shrink-0 block group">
                <div className="absolute left-[138px] top-0 w-[44px] h-[44px] rounded-[22px] flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: c.bg }}>
                  <i className={`${c.icon} text-[24px] text-white`} />
                </div>
                <span className="absolute left-0 top-[70px] w-[320px] font-nunito font-extrabold text-[13px] leading-[40px] text-center whitespace-nowrap text-[#222]">{c.label}</span>
                <div className="absolute left-0 top-[134px] w-[320px] h-[21px] bg-brand-red" style={{ borderRadius: c.barRadius }} />
                <div className="absolute left-[145px] top-[121px] w-[30px] h-[30px] rounded-[30px] bg-white shadow-[inset_0_0_0_1px_#F3274C] flex items-center justify-center transition-transform group-hover:scale-110">
                  <div className="w-[16px] h-[16px] rounded-[16px] bg-brand-red" />
                </div>
              </a>
            ))}
          </div>
          <span className="absolute left-[320px] top-[300px] w-[1280px] font-nunito font-bold italic text-[16px] text-center text-[#222]">Next day delivery to every part of the UK.</span>
        </section>

        {/* ============ READY TO ORDER BANNER ============ */}
        <section className="absolute left-0 top-[1315px] w-[1920px] h-[353px] bg-[url('/figma/findus/assets/84b21635877fa5ff.png')] bg-[length:14.115%_35.411%] bg-[position:100%_0%] bg-no-repeat">
          <div className="absolute inset-0 overflow-hidden bg-brand-redBanner">
            <div className="absolute inset-0 opacity-12 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-[position:50%_0%] bg-[length:100%_307.149%] bg-no-repeat" />
          </div>
          <div className="absolute left-[101px] top-[82px] w-[1636px] flex flex-row gap-[504px] items-center">
            <div className="w-[779px] flex-shrink-0 flex flex-col gap-[16px] items-start">
              <span className="font-nunito font-bold text-[60px] leading-[60px] text-white">Ready To Order? We're One Message Away.</span>
              <span className="font-nunito font-semibold italic text-[20px] leading-[25px] text-[#F4F1F1]">We deliver nationwide. Please see our FAQ section for notice windows on regular and catering orders.</span>
            </div>
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="relative w-[353px] h-[101px] flex-shrink-0 rounded-[12px] bg-white flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <div className="absolute left-[30.53px] top-[-11px] w-[335.32px] h-[125.22px] rounded-[12px] shadow-[inset_0_0_0_3px_#FFF] pointer-events-none" />
              <span className="font-nunito font-semibold text-[25px] leading-[25px] text-brand-red">Place Your Order</span>
            </a>
          </div>
        </section>

        {/* ============ BOOK A CONSULTATION ============ */}
        <section id="consultation" className="absolute left-0 top-[1668px] w-[1920px] h-[1550px] overflow-hidden">

          {/* Left Image Panel */}
          <div className="absolute left-0 top-0 w-[1013px] h-[1550px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/figma/catering/assets/bf7b0e683dc63017.jpg')] bg-center bg-cover bg-no-repeat" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute left-[86px] top-[88px] w-[722px] flex flex-col gap-[21px] items-start">
              <div className="relative w-[240px] h-[30px]">
                <div className="absolute left-[2px] top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellow" />
                <span className="absolute left-[45px] top-[5px] font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Catering Enquiries</span>
              </div>
              <span className="font-nunito font-extrabold text-[60px] leading-[67.2px] whitespace-nowrap text-white">Book a Consultation.</span>
              <span className="font-nunito font-medium text-[17px] leading-[28px] text-white">Fill this in and we'll be in touch within 2 working days to arrange your consultation.</span>
            </div>
            <div className="absolute left-[420px] top-[430px] w-[175px] h-[175px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
            <span className="absolute left-[283px] top-[660px] w-[577px] font-nunito font-extrabold text-[40px] leading-[96px] text-center whitespace-nowrap text-white">Book at least 8 weeks ahead</span>
            <span className="absolute left-[323px] top-[734px] w-[469px] font-nunito font-semibold text-[20px] leading-[30px] text-center text-white">Early bookings get the widest menu selection and the most time for proper planning.</span>
          </div>

          {/* Form Card */}
          <div className="absolute left-[1053px] top-[40px] w-[827px] rounded-[24px] bg-[#FAFAFA] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-[40px] flex flex-col gap-[20px] items-start">

            {/* Contact Info */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Contact Information</span>
              <div className="flex flex-row gap-[24px]">
                <input type="text" placeholder="Full Name" className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
                <input type="email" placeholder="Email address" className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
              </div>
              <input type="tel" placeholder="Phone Number" className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            </div>

            {/* Event Info */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Event Information</span>
              <div className="flex flex-row gap-[24px]">
                <div className="relative flex-1 min-w-0">
                  <select className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                    <option value="">Event Type</option>
                    <option>Birthday</option>
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Church / Community</option>
                    <option>Baby Shower</option>
                    <option>Private Party</option>
                    <option>Other</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
                <input type="text" placeholder="Event Date *" onFocus={(e) => e.target.type = "date"} className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
              </div>
              <input type="text" placeholder="Event Location" className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
              <div className="flex flex-row gap-[24px]">
                <div className="relative flex-1 min-w-0">
                  <select className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                    <option value="">Start Time</option>
                    <option>Morning (8am – 12pm)</option>
                    <option>Afternoon (12pm – 4pm)</option>
                    <option>Evening (4pm – 8pm)</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
                <input type="text" placeholder="End Time *" className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
              </div>
            </div>

            {/* Guess Information */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Guess Information</span>
              <div className="relative w-full">
                <select className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                  <option value="">Estimated Guest Count</option>
                  <option>Under 20</option>
                  <option>20 – 50</option>
                  <option>50 – 100</option>
                  <option>100+</option>
                </select>
                <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
              </div>
            </div>

            {/* Catering Requirements */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Catering Requirements</span>
              <div className="relative w-full">
                <select className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                  <option value="">What are you interested in? Select all that apply.</option>
                  <option>Signature Feasts</option>
                  <option>Artisan Bites</option>
                  <option>LiquidSpot Blends</option>
                  <option>Full Package</option>
                </select>
                <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Budget</span>
              <div className="relative w-full">
                <select className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[28px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                  <option value="">Estimated Catering Budget</option>
                  <option>Under £250</option>
                  <option>£250 – £500</option>
                  <option>£500 – £1,000</option>
                  <option>£1,000+</option>
                </select>
                <i className="fas fa-caret-down absolute right-[24px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
              </div>
            </div>

            {/* Tell Us More */}
            <div className="flex flex-col gap-[24px] w-full">
              <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Tell Us More</span>
              <input type="text" placeholder="About your event" className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[33px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            </div>

            {/* Submit Block */}
            <div className="w-full flex flex-row justify-between items-center mt-[12px]">
              <div className="flex flex-col gap-[24px]">
                <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Consultation Preference</span>
                <div className="flex flex-row gap-[40px] items-center">
                  {prefLabels.map((label, idx) => (
                    <label key={idx} onClick={() => setPrefIdx(idx)} className="group flex flex-row gap-[10px] items-center cursor-pointer">
                      <span className="w-[20px] h-[20px] rounded-[20px] border-[2px] border-brand-red flex items-center justify-center transition-transform group-hover:scale-110">
                        {prefIdx === idx && <span className="w-[10px] h-[10px] rounded-[10px] bg-brand-red" />}
                      </span>
                      <span className="font-epilogue font-semibold text-[16px] whitespace-nowrap text-[#555] group-hover:text-[#222] transition-colors">{label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <a href={submitHref} target="_blank" rel="noopener noreferrer" className="relative w-[155.11px] h-[60px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
                <div className="absolute left-[14.76px] top-[-6px] w-[147.34px] h-[72px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
                <span className="font-fredoka font-normal text-[18px] text-white">Submit Enquiry</span>
              </a>
            </div>

          </div>
        </section>

        {/* ============ FOLLOW ============ */}
        <section className="absolute left-0 top-[3229px] w-[1920px] h-[314.3px]">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={3544} />
        <Footer top={3915} />
      </div>
    </div>

    {/* ================= MOBILE / TABLET (below lg) ================= */}
    <div className="lg:hidden w-full overflow-x-hidden bg-white font-nunito">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/figma/findus/assets/fc783f160442afe0.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
        <MobileHeader activePage="find-us" />
        <div className="relative px-6 md:px-12 pt-36 pb-20 flex flex-col items-start gap-4">
          <div className="flex flex-row items-center gap-3">
            <div className="w-[50px] h-[3px] rounded-[30px] bg-brand-yellow" />
            <span className="font-extrabold text-[18px] md:text-[22px] text-brand-yellow">Get In Touch</span>
          </div>
          <h1 className="font-black text-[48px] md:text-[72px] leading-[1.05]">
            <span className="block text-white">Find Us.</span>
            <span className="block text-brand-red">Order Fresh.</span>
          </h1>
          <p className="max-w-xl font-semibold italic text-[15px] md:text-[18px] leading-relaxed text-[#F4F1F1]">
            Daily orders go through us directly. Catering and event bookings go through the form below. We're easy to reach and quick to respond.
          </p>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="px-6 md:px-12 py-14 bg-gradient-to-b from-white from-90% to-[#E7F5F5]">
        <h2 className="font-semibold text-[40px] md:text-[56px] leading-tight text-center text-[#222]">Contact Us</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
          {contacts.map((c, idx) => (
            <a key={idx} href={c.href} target="_blank" rel="noopener noreferrer" className="relative flex flex-col items-center gap-3 pt-2 pb-8 group">
              <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: c.bg }}>
                <i className={`${c.icon} text-[24px] text-white`} />
              </div>
              <span className="font-extrabold text-[13px] text-center text-[#222] break-all px-3">{c.label}</span>
              <div className="absolute bottom-0 left-0 right-0 h-[18px] rounded-[4px] bg-brand-red" />
              <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[28px] h-[28px] rounded-full bg-white shadow-[inset_0_0_0_1px_#F3274C] flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-[14px] h-[14px] rounded-full bg-brand-red" />
              </div>
            </a>
          ))}
        </div>
        <p className="mt-8 font-bold italic text-[15px] text-center text-[#222]">Next day delivery to every part of the UK.</p>
      </section>

      {/* READY TO ORDER BANNER */}
      <section className="relative overflow-hidden bg-brand-redBanner px-6 md:px-12 py-12">
        <div className="absolute inset-0 opacity-10 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-cover bg-top" />
        <div className="relative flex flex-col items-start gap-5">
          <h2 className="font-bold text-[32px] md:text-[44px] leading-[1.1] text-white">Ready To Order? We're One Message Away.</h2>
          <p className="font-semibold italic text-[15px] md:text-[18px] leading-relaxed text-[#F4F1F1]">We deliver nationwide. Please see our FAQ section for notice windows on regular and catering orders.</p>
          <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="relative mt-2 w-[240px] h-[68px] rounded-[12px] bg-white flex items-center justify-center hover:brightness-95 shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
            <div className="absolute -inset-y-[6px] inset-x-[12px] rounded-[12px] shadow-[inset_0_0_0_3px_#FFF] pointer-events-none" />
            <span className="font-semibold text-[19px] text-brand-red">Place Your Order</span>
          </a>
        </div>
      </section>

      {/* BOOK A CONSULTATION */}
      <section id="consultation-m">
        {/* Intro / image panel */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/figma/catering/assets/bf7b0e683dc63017.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative px-6 md:px-12 py-14 flex flex-col gap-5">
            <div className="flex flex-row items-center gap-3">
              <div className="w-[42px] h-[2px] rounded-[30px] bg-brand-yellow" />
              <span className="font-oswald font-bold text-[18px] md:text-[22px] text-brand-redAlt">Catering Enquiries</span>
            </div>
            <h2 className="font-extrabold text-[36px] md:text-[52px] leading-[1.05] text-white">Book a Consultation.</h2>
            <p className="font-medium text-[15px] md:text-[17px] leading-[26px] text-white">Fill this in and we'll be in touch within 2 working days to arrange your consultation.</p>
            <div className="mt-2 flex flex-col items-center gap-3 text-center">
              <div className="w-[120px] h-[120px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
              <span className="font-extrabold text-[24px] md:text-[30px] leading-tight text-white">Book at least 8 weeks ahead</span>
              <span className="max-w-md font-semibold text-[15px] md:text-[17px] leading-[25px] text-white">Early bookings get the widest menu selection and the most time for proper planning.</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 md:px-12 py-12 flex flex-col gap-6 max-w-2xl mx-auto">
          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Contact Information</span>
            <input type="text" placeholder="Full Name" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            <input type="email" placeholder="Email address" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            <input type="tel" placeholder="Phone Number" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Event Information</span>
            <div className="relative">
              <select title="Event Type" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                <option value="">Event Type</option>
                <option>Birthday</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Church / Community</option>
                <option>Baby Shower</option>
                <option>Private Party</option>
                <option>Other</option>
              </select>
              <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
            </div>
            <input type="text" placeholder="Event Date *" onFocus={(e) => e.target.type = "date"} className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            <input type="text" placeholder="Event Location" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
            <div className="relative">
              <select title="Start Time" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                <option value="">Start Time</option>
                <option>Morning (8am – 12pm)</option>
                <option>Afternoon (12pm – 4pm)</option>
                <option>Evening (4pm – 8pm)</option>
              </select>
              <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
            </div>
            <input type="text" placeholder="End Time *" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Guess Information</span>
            <div className="relative">
              <select title="Estimated Guest Count" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                <option value="">Estimated Guest Count</option>
                <option>Under 20</option>
                <option>20 – 50</option>
                <option>50 – 100</option>
                <option>100+</option>
              </select>
              <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Catering Requirements</span>
            <div className="relative">
              <select title="Catering interests" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                <option value="">What are you interested in? Select all that apply.</option>
                <option>Signature Feasts</option>
                <option>Artisan Bites</option>
                <option>LiquidSpot Blends</option>
                <option>Full Package</option>
              </select>
              <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Budget</span>
            <div className="relative">
              <select title="Estimated Catering Budget" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none">
                <option value="">Estimated Catering Budget</option>
                <option>Under £250</option>
                <option>£250 – £500</option>
                <option>£500 – £1,000</option>
                <option>£1,000+</option>
              </select>
              <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Tell Us More</span>
            <input type="text" placeholder="About your event" className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none" />
          </div>

          <div className="flex flex-col gap-5">
            <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Consultation Preference</span>
            <div className="flex flex-col gap-3">
              {prefLabels.map((label, idx) => (
                <label key={idx} onClick={() => setPrefIdx(idx)} className="group flex flex-row gap-[10px] items-center cursor-pointer">
                  <span className="w-[20px] h-[20px] rounded-full border-[2px] border-brand-red flex items-center justify-center transition-transform group-hover:scale-110">
                    {prefIdx === idx && <span className="w-[10px] h-[10px] rounded-full bg-brand-red" />}
                  </span>
                  <span className="font-epilogue font-semibold text-[15px] text-[#555] group-hover:text-[#222] transition-colors">{label}</span>
                </label>
              ))}
            </div>
            <a href={submitHref} target="_blank" rel="noopener noreferrer" className="relative mt-2 w-[170px] h-[58px] rounded-[12px] bg-brand-red flex items-center justify-center hover:brightness-110 shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
              <div className="absolute -inset-y-[6px] inset-x-[8px] rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
              <span className="font-fredoka font-normal text-[17px] text-white">Submit Enquiry</span>
            </a>
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

const contacts = [
  { icon: "fab fa-whatsapp", bg: "#00E510", label: "+44 7810 007544", href: "https://wa.me/447810007544", barRadius: "4px 0px 0px 4px" },
  { icon: "fas fa-envelope", bg: "#000000", label: "theliquidspotfoodanddrinks@gmail.com", href: "mailto:theliquidspotfoodanddriks@gmail.com", barRadius: "0" },
  { icon: "fab fa-tiktok", bg: "#000000", label: "@TheLiquidSpot", href: "https://www.tiktok.com/@theliquidspot", barRadius: "0" },
  { icon: "fab fa-instagram", bg: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", label: "TheLiquidSpot", href: "https://www.instagram.com", barRadius: "0px 4px 4px 0px" }
];