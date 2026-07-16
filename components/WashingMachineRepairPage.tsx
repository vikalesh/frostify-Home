"use client";

import { FormEvent, useMemo, useState } from "react";
import { brands, machineTypes, reviews, serviceAreas, services, whyChoose } from "@/lib/dataWm";
import { BRAND_NAME, PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/site";
import Navbar from "./Navbar";
import Image from "next/image";

type FormState = {
  name: string;
  phone: string;
  service: string;
  machineType: string;
  area: string;
  time: string;
};

export default function WashingMachineRepairPage() {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", machineType: "", area: "", time: "" });

  const formMessage = useMemo(() => {
    return [
      `Hi ${BRAND_NAME}, I need washing machine service.`,
      form.name ? `Name: ${form.name}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.service ? `Service: ${form.service}` : "",
      form.machineType ? `Machine Type: ${form.machineType}` : "",
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
          src="/images/w2.jpg"
          alt="Professional technician Washing Machine Repair at a customer's home in Mumbai"
          priority
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "left center", display: "block" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(10,14,20,0.72) 0%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} />
        {/* <div className="hero-left-gradient" aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "55%", background: "linear-gradient(to right, rgba(10,14,20,0.88) 0%, rgba(10,14,20,0.60) 55%, transparent 100%)", pointerEvents: "none", zIndex: 2 }} /> */}

           <div className="container hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Mumbai&apos;s Trusted Washing Machine Repair Experts</p>
              <h1>Washing Machine Repair <span style={{ color: "#38bdf8" }}>At Your Doorstep</span></h1>
              <p style={{ fontSize: 19, maxWidth: 640 }}>
                Fast, reliable and affordable washing machine repair service for homes across Mumbai. We repair front load, top load, fully automatic and semi-automatic machines with same-day doorstep support.
              </p>
              <div className="hero-badges">
                <span className="badge">✅ Same-Day Service</span>
                <span className="badge">🧑‍🔧 Skilled Technicians</span>
                <span className="badge">🔧 Genuine Spare Parts</span>
                <span className="badge">🏠 Doorstep Repair</span>
              </div>
              <div className="btn-row">
                <a className="btn btn-primary" href={`tel:${PHONE}`}>Call Now — {PHONE_DISPLAY}</a>
                <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </div>
            </div>
            {/* <div className="hero-card" aria-hidden="true">
              <div className="stat-box"><strong>Same Day</strong><p>Washing machine repair visit available across Mumbai</p></div>
              <div className="stat-box"><strong>All Types</strong><p>Front load, top load and fully automatic machines</p></div>
              <div className="machine-visual" />
            </div> */}
          </div>
    
    </div>



         
        </section>

        <div className="trust">
          <div className="container trust-grid">
            <div className="trust-item"><h3>⚡ Same-Day Service</h3><p>Quick response across Mumbai.</p></div>
            <div className="trust-item"><h3>🧺 All Machine Types</h3><p>Front load, top load and semi-automatic.</p></div>
            <div className="trust-item"><h3>✅ All Major Brands</h3><p>LG, Samsung, Whirlpool, Bosch, IFB and more.</p></div>
            <div className="trust-item"><h3>💰 Transparent Pricing</h3><p>No hidden charges.</p></div>
          </div>
        </div>

        <section className="section" id="services">
          <div className="container">
            <div className="center">
              <p className="eyebrow">What We Fix</p>
              <h2>Our Washing Machine Repair Services</h2>
              <p>Complete washing machine repair and maintenance solutions for common and complex problems.</p>
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

        <section className="section" style={{ background: "#091729" }}>
          <div className="container">
            <div className="center">
              <p className="eyebrow">Machine Types</p>
              <h2>We Repair All Washing Machine Types</h2>
              <p>Service support for home and commercial washing machine models.</p>
            </div>
            <div className="chips">
              {machineTypes.map((type) => <span className="chip" key={type}>{type}</span>)}
            </div>
          </div>
        </section>

        <section className="section">
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

        <section className="section" style={{ background: "#091729" }}>
          <div className="container">
            <div className="center">
              <p className="eyebrow">Brand Coverage</p>
              <h2>Brands We Service</h2>
              <p>LG, Samsung, Whirlpool, Bosch, IFB, Godrej, Haier, Panasonic and all major washing machine brands.</p>
            </div>
            <div className="brands">
              {brands.map((brand) => <span className="brand" key={brand}>{brand}</span>)}
              <span className="brand" style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)" }}>+ All Major Brands</span>
            </div>
          </div>
        </section>

        <section className="section cleaning">
          <div className="container split">
            <div>
              <p className="eyebrow">Deep Cleaning</p>
              <h2>Washing Machine Deep Cleaning</h2>
              <p>Remove detergent residue, dirt, bacteria and bad smell from your washing machine. Deep cleaning helps improve hygiene, wash quality and machine life.</p>
              <div className="btn-row"><a className="btn btn-primary" href={`tel:${PHONE}`}>Call for Deep Cleaning</a></div>
            </div>
            <div className="benefits">
              <div className="benefit">✅ Removes Bad Smell</div>
              <div className="benefit">✅ Better Wash Quality</div>
              <div className="benefit">✅ Cleaner Drum & Filter</div>
              <div className="benefit">✅ Longer Machine Life</div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Coverage</p>
              <h2>Washing Machine Service Areas</h2>
              <p>Providing fast and reliable washing machine repair service across Mumbai and nearby locations.</p>
            </div>
            <div className="area-list">{serviceAreas.map((area) => <span className="area" key={area}>📍 {area}</span>)}</div>
          </div>
        </section>

        <section className="section" style={{ background: "#091729" }}>
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
              <h2>Book Washing Machine Service Today</h2>
              <p>Fill in your details and our technician will contact you shortly. The form opens WhatsApp with all enquiry details pre-filled using the same number.</p>
              <div className="btn-row">
                <a className="btn btn-primary" href={`tel:${PHONE}`}>Call {PHONE_DISPLAY}</a>
                <a className="btn btn-whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </div>
            </div>
            <form className="card" onSubmit={submitToWhatsApp}>
              <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input required placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
                <option value="">Select Service Required</option>
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Other Washing Machine Service">Other Washing Machine Service</option>
              </select>
              <select required value={form.machineType} onChange={(e) => setForm({ ...form, machineType: e.target.value })}>
                <option value="">Select Machine Type</option>
                {machineTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <input required placeholder="Location / Area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
              <input placeholder="Preferred Time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
              <button className="btn btn-whatsapp" type="submit">Send Enquiry on WhatsApp</button>
            </form>
          </div>
        </section>

        <section className="section" style={{ background: "linear-gradient(135deg,#2563eb,#06b6d4)", textAlign: "center" }}>
          <div className="container">
            <h2>Need Urgent Washing Machine Repair?</h2>
            <p style={{ color: "#fff" }}>Same-day washing machine service available across Mumbai.</p>
            <a className="btn" style={{ background: "#fff", color: "#0f172a" }} href={`tel:${PHONE}`}>Call Now — {PHONE_DISPLAY}</a>
          </div>
        </section>

        <section className="footer-seo">
          <div className="container">
            <p>
              {BRAND_NAME} is a trusted washing machine repair and maintenance service provider in Mumbai. We specialize in washing machine repair, water leakage repair, drum repair, spin issue repair, drainage problem repair, PCB repair, door lock repair, deep cleaning, installation and annual maintenance services. Our technicians service LG, Samsung, Whirlpool, Bosch, IFB, Godrej, Haier, Panasonic, Siemens, Onida, Voltas Beko, Lloyd and all major washing machine brands with fast doorstep support and transparent pricing.
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
