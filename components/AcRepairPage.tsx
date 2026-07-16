"use client";

import { FormEvent, useMemo, useState } from "react";
import { brands, reviews, serviceAreas, services, whyChoose } from "@/lib/dataAc";
import { BRAND_NAME, PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/site";
import Image from "next/image";
import Navbar from "./Navbar";

type FormState = {
  name: string;
  phone: string;
  service: string;
  area: string;
  time: string;
};

export default function AcRepairPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", area: "", time: "" });

  const formMessage = useMemo(() => {
    return [
      `Hi ${BRAND_NAME}, I need AC service.`,
      form.name ? `Name: ${form.name}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.service ? `Service: ${form.service}` : "",
      form.area ? `Area: ${form.area}` : "",
      form.time ? `Preferred Time: ${form.time}` : ""
    ].filter(Boolean).join("");
  }, [form]);

  function submitToWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(whatsappUrl(formMessage), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <Navbar />
      <main>

        <section className="hero">
          

      <div className="hero-frame" style={{  width: "100%", height: "clamp(480px, 80vh, 760px)", overflow: "hidden", backgroundColor: "#1a2230" }}>
        <Image
          className="hero-img"
          // src="/images/hero.svg"
          src="/images/ac1.jpg"
          alt="Professional technician repairing  AC at a customer's home in Mumbai"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "left center", display: "block" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(10,14,20,0.72) 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />
        {/* <div className="hero-left-gradient" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "55%", background: "linear-gradient(to right, rgba(10,14,20,0.88) 0%, rgba(10,14,20,0.60) 55%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} /> */}

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Mumbai&apos;s Trusted AC Repair Experts</p>
              <h1>AC Repair & Service <span style={{ color: "#fb923c" }}>At Your Doorstep</span></h1>
              <p style={{ fontSize: 19, maxWidth: 620 }}>
                Fast, reliable and affordable AC repair services for homes and offices across Mumbai. Certified technicians, same-day service, genuine spare parts and transparent pricing.
              </p>
              <div className="hero-badges">
                <span className="badge">✅ Same-Day Service</span>
                <span className="badge">👨‍🔧 Certified Technicians</span>
                <span className="badge">🔧 Genuine Spare Parts</span>
                <span className="badge">🏠 Doorstep Repairs</span>
              </div>
              <div className="btn-row">
                <a className="btn btn-primary" href={`tel:${PHONE}`}>Call Now — {PHONE_DISPLAY}</a>
                <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </div>
            </div>
          </div>
    
    </div>

        </section>

        <div className="trust">
          <div className="container trust-grid">
            <div className="trust-item"><h3>⚡ Same-Day Service</h3><p>Quick response across Mumbai.</p></div>
            <div className="trust-item"><h3>❄️ Expert AC Technicians</h3><p>Certified and experienced professionals.</p></div>
            <div className="trust-item"><h3>✅ All Major Brands</h3><p>Daikin, LG, Samsung, Voltas and more.</p></div>
            <div className="trust-item"><h3>💰 Transparent Pricing</h3><p>No hidden charges.</p></div>
          </div>
        </div>

        <section className="section" id="services">
          <div className="container">
            <div className="center">
              <p className="eyebrow">What We Fix</p>
              <h2>Our AC Repair Services</h2>
              <p>Complete air conditioning solutions to keep your home, office and commercial space cool and comfortable.</p>
            </div>
            <div className="grid">
              {services.map((service) => (
                <article className="card" key={service.title}>
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a className="btn btn-whatsapp" href={whatsappUrl(`Hi ${BRAND_NAME}, I need ${service.title} service in Mumbai.`)} target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "#0b1424" }}>
          <div className="container">
            <div className="center">
              <p className="eyebrow">Why Choose Us</p>
              <h2>Why Choose Frostify?</h2>
            </div>
            <div className="grid">
              {whyChoose.map((item) => (
                <div className="card" key={item.title}>
                  <div className="card-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Brand Coverage</p>
              <h2>Brands We Service</h2>
              <p>Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, Panasonic and all major AC brands.</p>
            </div>
            <div className="brands">
              {brands.map((brand) => <span className="brand" key={brand}>{brand}</span>)}
              <span className="brand" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)" }}>+ All Major AC Brands</span>
            </div>
          </div>
        </section>

        <section className="section cleaning">
          <div className="container split">
            <div>
              <p className="eyebrow">Deep Cleaning</p>
              <h2>Professional AC Deep Cleaning</h2>
              <p>Remove dust, bacteria, allergens and bad odors with our premium AC deep cleaning service. Improve cooling performance, indoor air quality and AC life.</p>
              <div className="btn-row"><a className="btn btn-primary" href={`tel:${PHONE}`}>Call for Deep Cleaning</a></div>
            </div>
            <div className="benefits">
              <div className="benefit">✅ Better Cooling Performance</div>
              <div className="benefit">✅ Lower Energy Consumption</div>
              <div className="benefit">✅ Dust & Bacteria Removal</div>
              <div className="benefit">✅ Longer AC Lifespan</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Coverage</p>
              <h2>AC Service Areas</h2>
              <p>Providing fast and reliable AC repair services across Mumbai and nearby locations.</p>
            </div>
            <div className="area-list">{serviceAreas.map((area) => <span className="area" key={area}>📍 {area}</span>)}</div>
          </div>
        </section>

        <section className="section" style={{ background: "#0b1424" }}>
          <div className="container">
            <div className="center">
              <p className="eyebrow">Customer Reviews</p>
              <h2>What Our Customers Say</h2>
            </div>
            <div className="grid">
              {reviews.map((review) => <div className="card" key={review}><h3>★★★★★</h3><p>“{review}”</p></div>)}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container form-wrap">
            <div className="card">
              <p className="eyebrow">Get In Touch</p>
              <h2>Book AC Service Today</h2>
              <p>Fill in your details and our AC specialist will contact you shortly to schedule a visit. The form opens WhatsApp with all details pre-filled using the same number.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={`tel:${PHONE}`}>Call {PHONE_DISPLAY}</a>
                <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </div>
            </div>
            <form className="card" onSubmit={submitToWhatsApp}>
              <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select AC Service Required</option>
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Other AC Service">Other AC Service</option>
              </select>
              <input required placeholder="Location / Area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
              <input placeholder="Preferred Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
              <button className="btn btn-whatsapp" type="submit">Send Enquiry on WhatsApp</button>
            </form>
          </div>
        </section>

        <section className="section" style={{ background: "linear-gradient(135deg,#ef4444,#f97316)", textAlign: "center" }}>
          <div className="container">
            <h2>Need Urgent AC Repair?</h2>
            <p style={{ color: "#fff" }}>Same-day AC service available across Mumbai.</p>
            <a className="btn" style={{ background: "#fff", color: "#111827" }} href={`tel:${PHONE}`}>Call Now — {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="footer-seo">
          <div className="container">
            <p>
              {BRAND_NAME} is a trusted AC repair and maintenance company in Mumbai. We specialize in AC repair, installation, gas charging, water leakage repair, compressor repair, PCB repair, deep cleaning and annual maintenance services. Our experienced technicians service Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, Panasonic, Lloyd, Godrej, Haier, Whirlpool and all major AC brands with fast doorstep support and transparent pricing.
            </p>
            
          </div>
        </section>
        <section className="footer-seo">
          <div className="container">
            <p>
             <b> Disclaimer:</b> Frostify Service Center is an independent, third-party service provider specializing in appliance repairs and maintenance. We are not affiliated with, authorized by, sponsored by, or endorsed by any specific original equipment manufacturers (OEMs) or brands mentioned on this website. All product names, logos, and brands are the property of their respective owners. Any use of these names on this site is purely for identification and informational purposes to describe the compatibility and scope of our repair services.
            </p>
          </div>
        </section>
      </main>

      <div className="mobile-cta">
        <a className="btn btn-primary" href={`tel:${PHONE}`}>Call</a>
        <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </>
  );
}
