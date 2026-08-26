import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScale } from '../hooks/useScale';
import { MobileFollow } from '../components/Shared';
import { Header, MobileHeader } from '../components/Header';
import { Footer, MobileFooter } from '../components/Footer';
import { InstagramStrip, MobileInstagramStrip } from '../components/InstagramStrip';

interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  startTime: string;
  endTime: string;
  guestCount: string;
  cateringRequirements: string;
  budget: string;
  notes: string;
}

const initialFormData: ConsultationFormData = {
  fullName: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  eventLocation: '',
  startTime: '',
  endTime: '',
  guestCount: '',
  cateringRequirements: '',
  budget: '',
  notes: ''
};

export default function FindUs() {
  const { scaleTransform, scaledHeight } = useScale(4670);
  const [prefIdx, setPrefIdx] = useState<number>(0);
  const [formData, setFormData] = useState<ConsultationFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const isDesktop = window.innerWidth >= 1024;
      const rawHash = location.hash.replace('#', '');

      // Map hash targets appropriately for desktop vs mobile
      const targetId = isDesktop ? 'consultation-form' : 'consultation-form-m';

      const el = document.getElementById(targetId) || document.getElementById(rawHash);
      if (el) {
        setTimeout(() => {
          if (isDesktop) {
            const scale = Math.min(1, window.innerWidth / 1920);
            let topPos = 0;
            let curr: HTMLElement | null = el;
            while (curr && curr !== document.body) {
              topPos += curr.offsetTop;
              curr = curr.offsetParent as HTMLElement;
            }
            window.scrollTo({ top: topPos * scale, behavior: 'smooth' });
          } else {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    }
  }, [location]);

  const prefLabels = ["Virtual Meeting", "Phone Call", "In-Person Meeting"];

  const handleInputChange = (field: keyof ConsultationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setErrorMessage('Please provide either an email address or a phone number.');
      return;
    }

    setIsSubmitting(true);

    const scriptUrl =
      import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
      'https://script.google.com/macros/s/AKfycbwkbIFr0Vu4kIPWNGGFKq4UrfRhPuBMjHmmGopDLp_6LFqO0yH3P42VN3VyIl261V4x/exec';
    const payload = {
      ...formData,
      consultationPreference: prefLabels[prefIdx],
      submittedAt: new Date().toISOString()
    };

    try {
      if (scriptUrl) {
        // Send to Google Apps Script Web App using text/plain (CORS-safelisted simple content type to prevent preflight block)
        await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(payload)
        });
      } else {
        // Fallback or local development simulation
        console.info('No VITE_GOOGLE_SCRIPT_URL configured. Submission payload recorded:', payload);
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      setSubmitStatus('success');
    } catch (err) {
      console.error('Error submitting consultation enquiry:', err);
      setErrorMessage('Failed to submit form. Please check your connection or contact us via WhatsApp.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData(initialFormData);
    setPrefIdx(0);
    setSubmitStatus('idle');
    setErrorMessage('');
  };

  const waEnquiryBody = encodeURIComponent(
    `Hi The Liquid Spot! I'd like to book a catering consultation.\n\n` +
    `*Name:* ${formData.fullName || 'Not provided'}\n` +
    `*Email:* ${formData.email || 'Not provided'}\n` +
    `*Phone:* ${formData.phone || 'Not provided'}\n` +
    `*Event Type:* ${formData.eventType || 'Not specified'}\n` +
    `*Event Date:* ${formData.eventDate || 'Not specified'}\n` +
    `*Location:* ${formData.eventLocation || 'Not specified'}\n` +
    `*Guests:* ${formData.guestCount || 'Not specified'}\n` +
    `*Budget:* ${formData.budget || 'Not specified'}\n` +
    `*Preference:* ${prefLabels[prefIdx]}\n` +
    (formData.notes ? `*Notes:* ${formData.notes}` : '')
  );
  const waSubmitHref = `https://wa.me/447810007544?text=${waEnquiryBody}`;

  return (
    <>
    <div className="hidden lg:block w-full overflow-hidden bg-white" style={{ height: scaledHeight }}>
      <div
        className="relative mx-auto bg-white font-nunito w-[1920px] h-[4550px] origin-top-left"
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
          <span className="absolute left-[149px] top-[540px] w-[750px] font-nunito font-bold italic text-[25px] leading-[36px] text-[#F4F1F1] text-balance">
            Daily orders go through us directly. Catering and event bookings go through the form below. We are easy to reach and quick to respond.
          </span>
        </section>

        {/* ============ CONTACT US ============ */}
        <section className="absolute left-0 top-[930px] w-[1920px] h-[385px] overflow-hidden bg-gradient-to-b from-white from-96% to-[#E7F5F5]">
          <span className="absolute left-[320px] top-[12px] w-[1280px] font-nunito font-semibold text-[69px] leading-[80px] text-center text-[#222]">Contact Us</span>
          <div className="absolute left-[320px] top-[130px] w-[1280px] flex flex-row">
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
          <span className="absolute left-[320px] top-[314px] w-[1280px] font-nunito font-bold italic text-[16px] text-center text-[#222]">Next day delivery to every part of the UK.</span>
        </section>

        {/* ============ READY TO ORDER BANNER ============ */}
        <section className="absolute left-0 top-[1315px] w-[1920px] h-[353px] bg-[url('/figma/findus/assets/84b21635877fa5ff.png')] bg-[length:14.115%_35.411%] bg-[position:100%_0%] bg-no-repeat">
          <div className="absolute inset-0 overflow-hidden bg-brand-redBanner">
            <div className="absolute inset-0 opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-[position:50%_0%] bg-[length:100%_307.149%] bg-no-repeat" />
          </div>
          <div className="absolute left-[101px] top-[82px] w-[1636px] flex flex-row gap-[504px] items-center">
            <div className="w-[779px] flex-shrink-0 flex flex-col gap-[16px] items-start">
              <span className="font-nunito font-bold text-[60px] leading-[60px] text-white">Ready To Order? We Are One Message Away.</span>
              <span className="font-nunito font-semibold italic text-[20px] leading-[25px] text-[#F4F1F1]">We deliver nationwide. Please see our FAQ section for notice windows on regular and catering orders.</span>
            </div>
            <a href="https://wa.me/447810007544" target="_blank" rel="noopener noreferrer" className="relative w-[353px] h-[101px] flex-shrink-0 rounded-[12px] bg-white flex items-center justify-center hover:brightness-95 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.25)] transition-all">
              <div className="absolute left-[30.53px] top-[-11px] w-[335.32px] h-[125.22px] rounded-[12px] shadow-[inset_0_0_0_3px_#FFF] pointer-events-none" />
              <span className="font-nunito font-semibold text-[25px] leading-[25px] text-brand-red">Place Your Order</span>
            </a>
          </div>
        </section>

        {/* ============ BOOK A CONSULTATION ============ */}
        <section id="consultation" className="absolute left-0 top-[1668px] w-[1920px] h-[1372px] overflow-hidden">

          {/* Left Image Panel */}
          <div className="absolute left-0 top-0 w-[1013px] h-[1372px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/figma/catering/assets/bf7b0e683dc63017.jpg')] bg-center bg-cover bg-no-repeat" />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute left-[86px] top-[88px] w-[722px] flex flex-col gap-[21px] items-start">
              <div className="relative w-[240px] h-[30px]">
                <div className="absolute left-[2px] top-[15px] w-[42px] h-[2px] rounded-[30px] bg-brand-yellow" />
                <span className="absolute left-[45px] top-[5px] font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Catering Enquiries</span>
              </div>
              <span className="font-nunito font-extrabold text-[60px] leading-[67.2px] whitespace-nowrap text-white">Book a Consultation.</span>
              <span className="font-nunito font-medium text-[17px] leading-[28px] text-white">Fill this in and we will be in touch within 2 working days to arrange your consultation.</span>
            </div>
            <div className="absolute left-[420px] top-[430px] w-[175px] h-[175px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
            <span className="absolute left-[283px] top-[660px] w-[577px] font-nunito font-extrabold text-[40px] leading-[96px] text-center whitespace-nowrap text-white">Book at least 8 weeks ahead</span>
            <span className="absolute left-[323px] top-[734px] w-[469px] font-nunito font-semibold text-[20px] leading-[30px] text-center text-white">Early bookings get the widest menu selection and the most time for proper planning.</span>
          </div>

          {/* Form Card */}
          <div id="consultation-form" className="absolute left-[1053px] top-[40px] w-[827px] rounded-[24px] bg-[#FAFAFA] shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-[40px] flex flex-col gap-[20px] items-start">

            {submitStatus === 'success' ? (
              <div className="w-full py-16 flex flex-col items-center text-center gap-6">
                <div className="w-[90px] h-[90px] rounded-full bg-[#E6F8EE] flex items-center justify-center text-[#00A859] text-[42px] shadow-lg animate-bounce">
                  <i className="fas fa-check-circle" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-oswald font-bold text-[36px] text-[#222]">Enquiry Submitted Successfully!</h3>
                  <p className="font-nunito font-medium text-[18px] text-[#555] max-w-lg">
                    Thank you, <strong className="text-brand-red">{formData.fullName}</strong>. Your consultation details have been recorded. We will review your request and get back to you within 2 working days.
                  </p>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-8 py-3 rounded-[10px] bg-[#222] text-white font-fredoka text-[17px] hover:bg-black transition-all"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={waSubmitHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-[10px] bg-[#25D366] text-white font-fredoka text-[17px] flex items-center gap-2 hover:brightness-105 transition-all shadow-md"
                  >
                    <i className="fab fa-whatsapp text-[20px]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[20px]">
                {/* Error Banner */}
                {errorMessage && (
                  <div className="w-full p-4 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-[15px] font-semibold flex items-center gap-3">
                    <i className="fas fa-exclamation-circle text-[18px]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Contact Info */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Contact Information</span>
                  <div className="flex flex-row gap-[24px]">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      required
                      className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email address *"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                    className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                {/* Event Info */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Event Information</span>
                  <div className="flex flex-row gap-[24px]">
                    <div className="relative flex-1 min-w-0">
                      <select
                        value={formData.eventType}
                        onChange={(e) => handleInputChange('eventType', e.target.value)}
                        className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                      >
                        <option value="">Event Type</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Corporate Event">Corporate Event</option>
                        <option value="Church / Community">Church / Community</option>
                        <option value="Baby Shower">Baby Shower</option>
                        <option value="Private Party">Private Party</option>
                        <option value="Other">Other</option>
                      </select>
                      <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                    </div>
                    <input
                      type="date"
                      placeholder="Event Date *"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Event Location"
                    value={formData.eventLocation}
                    onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                    className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                  />
                  <div className="flex flex-row gap-[24px]">
                    <div className="relative flex-1 min-w-0">
                      <select
                        value={formData.startTime}
                        onChange={(e) => handleInputChange('startTime', e.target.value)}
                        className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                      >
                        <option value="">Start Time</option>
                        <option value="Morning (8am – 12pm)">Morning (8am – 12pm)</option>
                        <option value="Afternoon (12pm – 4pm)">Afternoon (12pm – 4pm)</option>
                        <option value="Evening (4pm – 8pm)">Evening (4pm – 8pm)</option>
                      </select>
                      <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                    </div>
                    <input
                      type="text"
                      placeholder="End Time"
                      value={formData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                      className="flex-1 min-w-0 h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                    />
                  </div>
                </div>

                {/* Guest Information */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Guest Information</span>
                  <div className="relative w-full">
                    <select
                      value={formData.guestCount}
                      onChange={(e) => handleInputChange('guestCount', e.target.value)}
                      className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                    >
                      <option value="">Estimated Guest Count</option>
                      <option value="Under 20">Under 20</option>
                      <option value="20 – 50">20 – 50</option>
                      <option value="50 – 100">50 – 100</option>
                      <option value="100+">100+</option>
                    </select>
                    <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                  </div>
                </div>

                {/* Catering Requirements */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Catering Requirements</span>
                  <div className="relative w-full">
                    <select
                      value={formData.cateringRequirements}
                      onChange={(e) => handleInputChange('cateringRequirements', e.target.value)}
                      className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[24px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                    >
                      <option value="">What are you interested in?</option>
                      <option value="Signature Feasts">Signature Feasts</option>
                      <option value="Artisan Bites">Artisan Bites</option>
                      <option value="LiquidSpot Blends">LiquidSpot Blends</option>
                      <option value="Full Package">Full Package</option>
                    </select>
                    <i className="fas fa-caret-down absolute right-[20px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                  </div>
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Budget</span>
                  <div className="relative w-full">
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[28px] font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                    >
                      <option value="">Estimated Catering Budget</option>
                      <option value="Under £250">Under £250</option>
                      <option value="£250 – £500">£250 – £500</option>
                      <option value="£500 – £1,000">£500 – £1,000</option>
                      <option value="£1,000+">£1,000+</option>
                    </select>
                    <i className="fas fa-caret-down absolute right-[24px] top-[22px] text-[16px] text-[#737879] pointer-events-none" />
                  </div>
                </div>

                {/* Tell Us More */}
                <div className="flex flex-col gap-[24px] w-full">
                  <span className="font-oswald font-bold text-[25px] leading-[28px] whitespace-nowrap text-brand-redAlt">Tell Us More</span>
                  <input
                    type="text"
                    placeholder="About your event"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    className="w-full h-[60px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-[33px] font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                  />
                </div>

                {/* Submit Block */}
                <div className="w-full flex flex-col gap-[20px] mt-[12px]">
                  <div className="flex flex-col gap-[16px]">
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
                  <div className="flex justify-end items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-[240px] h-[60px] rounded-[12px] bg-brand-red flex items-center justify-center px-4 hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                    >
                      <div className="absolute -inset-y-1.5 -inset-x-1 rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
                      {isSubmitting ? (
                        <span className="font-fredoka font-normal text-[18px] whitespace-nowrap text-white flex items-center gap-2">
                          <i className="fas fa-circle-notch fa-spin text-[16px]" />
                          Submitting...
                        </span>
                      ) : (
                        <span className="font-fredoka font-normal text-[18px] whitespace-nowrap text-white">Submit Enquiry</span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}

          </div>
        </section>

        {/* ============ FOLLOW ============ */}
        <section className="absolute left-0 top-[3051px] w-[1920px] h-[314.3px]">
          <a href="https://www.instagram.com/theliquidspotuk" target="_blank" rel="noopener noreferrer" className="absolute left-[850px] top-[57px] w-[100px] h-[100px] rounded-[50px] bg-brand-red flex items-center justify-center hover:brightness-110 hover:-translate-y-[5px] shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all">
            <i className="fab fa-instagram text-[50px] text-white" />
          </a>
          <span className="absolute left-[638px] top-[176px] w-[523px] font-nunito font-medium text-[50px] leading-[83.33px] text-center whitespace-nowrap text-black">Follow TheLiquidSpot</span>
          <span className="absolute left-[594px] top-[259px] w-[611px] font-nunito font-medium text-[18px] leading-[30px] text-center whitespace-nowrap text-body-gray">Fresh bites, refreshing blends, and moments worth sharing.</span>
        </section>

        <InstagramStrip top={3366} />
        <Footer top={3737} />
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
          <p className="max-w-xl font-bold italic text-[18px] md:text-[22px] leading-relaxed text-[#F4F1F1]">
            Daily orders go through us directly. Catering and event bookings go through the form below. We are easy to reach and quick to respond.
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
        <div className="absolute inset-0 opacity-5 bg-[url('/figma/catering/assets/1a2194c95b168638.png')] bg-cover bg-top" />
        <div className="relative flex flex-col items-start gap-5">
          <h2 className="font-bold text-[32px] md:text-[44px] leading-[1.1] text-white">Ready To Order? We Are One Message Away.</h2>
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
            <p className="font-medium text-[15px] md:text-[17px] leading-[26px] text-white">Fill this in and we will be in touch within 2 working days to arrange your consultation.</p>
            <div className="mt-2 flex flex-col items-center gap-3 text-center">
              <div className="w-[120px] h-[120px] bg-[url('/figma/landing/assets/b213b544c9b50224.png')] bg-center bg-cover bg-no-repeat" />
              <span className="font-extrabold text-[24px] md:text-[30px] leading-tight text-white">Book at least 8 weeks ahead</span>
              <span className="max-w-md font-semibold text-[15px] md:text-[17px] leading-[25px] text-white">Early bookings get the widest menu selection and the most time for proper planning.</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div id="consultation-form-m" className="px-6 md:px-12 py-12 flex flex-col gap-6 max-w-2xl mx-auto">
          {submitStatus === 'success' ? (
            <div className="w-full py-10 flex flex-col items-center text-center gap-5">
              <div className="w-[72px] h-[72px] rounded-full bg-[#E6F8EE] flex items-center justify-center text-[#00A859] text-[34px] shadow-md animate-bounce">
                <i className="fas fa-check-circle" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-oswald font-bold text-[28px] text-[#222]">Enquiry Received!</h3>
                <p className="font-nunito font-medium text-[15px] text-[#555]">
                  Thank you, <strong className="text-brand-red">{formData.fullName}</strong>. Your consultation details have been recorded. We will be in touch within 2 working days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full max-w-sm">
                <button
                  onClick={handleResetForm}
                  className="w-full py-3 rounded-[10px] bg-[#222] text-white font-fredoka text-[16px] hover:bg-black transition-all"
                >
                  Submit Another
                </button>
                <a
                  href={waSubmitHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-[10px] bg-[#25D366] text-white font-fredoka text-[16px] flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md"
                >
                  <i className="fab fa-whatsapp text-[18px]" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {errorMessage && (
                <div className="w-full p-4 rounded-[8px] bg-red-50 border border-red-200 text-red-700 text-[14px] font-semibold flex items-center gap-2">
                  <i className="fas fa-exclamation-circle text-[16px]" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Contact Information</span>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address *"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Event Information</span>
                <div className="relative">
                  <select
                    title="Event Type"
                    value={formData.eventType}
                    onChange={(e) => handleInputChange('eventType', e.target.value)}
                    className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Event Type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Church / Community">Church / Community</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Private Party">Private Party</option>
                    <option value="Other">Other</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
                <input
                  type="date"
                  placeholder="Event Date *"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange('eventDate', e.target.value)}
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
                <input
                  type="text"
                  placeholder="Event Location"
                  value={formData.eventLocation}
                  onChange={(e) => handleInputChange('eventLocation', e.target.value)}
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
                <div className="relative">
                  <select
                    title="Start Time"
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Start Time</option>
                    <option value="Morning (8am – 12pm)">Morning (8am – 12pm)</option>
                    <option value="Afternoon (12pm – 4pm)">Afternoon (12pm – 4pm)</option>
                    <option value="Evening (4pm – 8pm)">Evening (4pm – 8pm)</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
                <input
                  type="text"
                  placeholder="End Time"
                  value={formData.endTime}
                  onChange={(e) => handleInputChange('endTime', e.target.value)}
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Guest Information</span>
                <div className="relative">
                  <select
                    title="Estimated Guest Count"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange('guestCount', e.target.value)}
                    className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Estimated Guest Count</option>
                    <option value="Under 20">Under 20</option>
                    <option value="20 – 50">20 – 50</option>
                    <option value="50 – 100">50 – 100</option>
                    <option value="100+">100+</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Catering Requirements</span>
                <div className="relative">
                  <select
                    title="Catering interests"
                    value={formData.cateringRequirements}
                    onChange={(e) => handleInputChange('cateringRequirements', e.target.value)}
                    className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">What are you interested in?</option>
                    <option value="Signature Feasts">Signature Feasts</option>
                    <option value="Artisan Bites">Artisan Bites</option>
                    <option value="LiquidSpot Blends">LiquidSpot Blends</option>
                    <option value="Full Package">Full Package</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Budget</span>
                <div className="relative">
                  <select
                    title="Estimated Catering Budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#555] appearance-none outline-none focus:border-brand-red transition-colors"
                  >
                    <option value="">Estimated Catering Budget</option>
                    <option value="Under £250">Under £250</option>
                    <option value="£250 – £500">£250 – £500</option>
                    <option value="£500 – £1,000">£500 – £1,000</option>
                    <option value="£1,000+">£1,000+</option>
                  </select>
                  <i className="fas fa-caret-down absolute right-5 top-[20px] text-[16px] text-[#737879] pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-oswald font-bold text-[20px] text-brand-redAlt">Tell Us More</span>
                <input
                  type="text"
                  placeholder="About your event"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  className="w-full h-[56px] rounded-[7px] bg-white border-[3px] border-line-inputThick px-5 font-epilogue font-semibold text-[16px] text-[#222] placeholder-[#555] outline-none focus:border-brand-red transition-colors"
                />
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative mt-2 w-full sm:w-[220px] h-[58px] rounded-[12px] bg-brand-red flex items-center justify-center px-4 hover:brightness-110 shadow-[0_14px_28px_rgba(0,0,0,0.22)] transition-all disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
                >
                  <div className="absolute -inset-y-1.5 -inset-x-1 rounded-[12px] shadow-[inset_0_0_0_3px_#F3274C] pointer-events-none" />
                  {isSubmitting ? (
                    <span className="font-fredoka font-normal text-[17px] whitespace-nowrap text-white flex items-center gap-2">
                      <i className="fas fa-circle-notch fa-spin text-[16px]" />
                      Submitting...
                    </span>
                  ) : (
                    <span className="font-fredoka font-normal text-[17px] whitespace-nowrap text-white">Submit Enquiry</span>
                  )}
                </button>
              </div>
            </form>
          )}
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
  { icon: "fas fa-envelope", bg: "#000000", label: "theliquidspotfoodanddrinks@gmail.com", href: "mailto:theliquidspotfoodanddrinks@gmail.com", barRadius: "0" },
  { icon: "fab fa-tiktok", bg: "#000000", label: "@TheLiquidSpot", href: "https://www.tiktok.com/@theliquidspot", barRadius: "0" },
  { icon: "fab fa-instagram", bg: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", label: "TheLiquidSpot", href: "https://www.instagram.com", barRadius: "0px 4px 4px 0px" }
];