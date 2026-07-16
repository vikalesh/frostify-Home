"use client";

import Link from "next/link";
import { useState } from "react";
import { brandGroups, locations, services, trustBadges, whyChoose } from "@/lib/data";
import { BRAND_NAME, PHONE, PHONE_DISPLAY, whatsappUrl } from "@/lib/site";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";


export default function HomePage() {
  const router = useRouter();
  const [domain, setDomain] = useState("");

  function openDomain() {
    const value = domain.toLowerCase().trim();
    if (value.includes("washing") || value.includes("washer")) {
      window.location.href = "/washing-machine-repair";
      return;
    }
    if (value.includes("fridge") || value.includes("refrigerator")) {
      window.location.href = "/refrigerator-repair";
      return;
    }
    if (value.includes("ac") || value.includes("air")) {
      window.location.href = "/ac-repair";
      return;
    }
    window.location.href = "#services";
  }

  return (
    <>
      
    <Navbar />

      <main>
        <section
          className="hero"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url('/images/refrigerator1.jpg')",
          }}
        >

          <div className="container heroGrid">
            <div className="heroText">
              <p className="eyebrow"> Mumbai's Trusted Appliance Repair Experts</p>
              {/* <p className="eyebrow">Mumbai • Navi Mumbai • Thane</p> */}
              <h1>Premium Appliance Repair <span>At Your Doorstep</span></h1>
              <p className="lead">
                Frostify Service Center provides fast, professional and affordable repair services for AC, Washing Machine and Refrigerator with local doorstep support.
              </p>
              <div className="domainBox">
                <input
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  placeholder="Enter domain: AC, Washing Machine, Refrigerator"
                  aria-label="Enter service domain"
                />
                <button type="button" onClick={openDomain}>Open Service</button>
              </div>
              <div className="heroActions">
                <a className="btn primary" href={`tel:${PHONE}`}>Call Now — {PHONE_DISPLAY}</a>
                <a className="btn whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Now</a>
              </div>
              <div className="miniTrust">
                {trustBadges.slice(0, 4).map((item) => <span key={item}>✅ {item}</span>)}
              </div>
            </div>
            
          </div>
        </section>

        <section id="services" className="section servicesSec">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Our Services</p>
              <h2>Choose Your Appliance Repair Service</h2>
              <p>Service-specific pages for AC, Washing Machine and Refrigerator with instant WhatsApp booking.</p>
            </div>
            <div className="serviceGrid">
              {services.map((service) => (
                <Link className="serviceCard" href={service.href} key={service.title}>
                  <div className="serviceIcon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span>View Service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section darkSec">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Why Choose Us</p>
              <h2>Why Choose Frostify?</h2>
              <p>Designed for local, fast and trustworthy appliance repair service.</p>
            </div>
            <div className="whyGrid">
              {whyChoose.map((item) => (
                <div className="whyCard" key={item.title}>
                  {/* <div>
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={200}
                        height={300}
                        />
                    </div> */}
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="section">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Location Coverage</p>
              <h2>Service Locations Across Mumbai</h2>
              <p>Our technicians provide doorstep appliance repair services across Mumbai, Navi Mumbai, Thane and nearby locations.</p>
            </div>
            <div className="chips">
              {locations.map((location) => <span key={location}>📍 {location}</span>)}
            </div>
          </div>
        </section>

        <section id="brands" className="section darkSec">
          <div className="container">
            <div className="center">
              <p className="eyebrow">Brand Support</p>
              <h2>We Service All Major Brands</h2>
              <p>Brand names are used only to identify appliance compatibility and repair expertise.</p>
            </div>
            <div className="brandGrid">
              {brandGroups.map((group) => (
                <div className="brandCard" key={group.title}>
                  <h3>{group.title}</h3>
                  <div>
                    {group.brands.map((brand) => <span key={brand}>{brand}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contactSec">
          <div className="container contactGrid">
            <div>
              <p className="eyebrow">Book Service</p>
              <h2>Need Urgent Appliance Repair?</h2>
              <p>Call or WhatsApp Frostify Service Center for AC, Washing Machine or Refrigerator repair service.</p>
              <div className="heroActions">
                <a className="btn primary" href={`tel:${PHONE}`}>Call {PHONE_DISPLAY}</a>
                <a className="btn whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp Support</a>
              </div>
            </div>
            <div className="contactBox">
              <h3>Quick Contact</h3>
              <p>📞 {PHONE_DISPLAY}</p>
              <p>🕘 9:00 AM – 9:00 PM</p>
              <p>📍 Mumbai </p>
              {/* <p>📍 Mumbai, Navi Mumbai & Thane</p> */}
            </div>
          </div>
        </section>

        <section id="disclaimer" className="disclaimer">
          <div className="container">
            <h2>Important Disclaimer</h2>
            <p>
              Frostify Service Center is an independent third-party appliance repair and maintenance service provider. Frostify Service Center is not an authorized service center, dealer, agent, or representative of Samsung, LG, Whirlpool, Bosch, IFB, Daikin, Voltas, Blue Star, Haier, Godrej, Panasonic, Hitachi, Carrier, or any other brand mentioned on this website.
            </p>
            <p>
              All brand names, logos, trademarks, and product names are the property of their respective owners and are used only for identification and service compatibility purposes.
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <h3>{BRAND_NAME}</h3>
            <p>AC, Washing Machine and Refrigerator repair service with doorstep support across Mumbai, Navi Mumbai and Thane.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#locations">Locations</a>
            <a href="#brands">Brands</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <h4>Services</h4>
            <Link href="/ac-repair">AC Repair</Link>
            <Link href="/washing-machine-repair">Washing Machine Repair</Link>
            <Link href="/refrigerator-repair">Refrigerator Repair</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href={`tel:${PHONE}`}>📞 {PHONE_DISPLAY}</a>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">💬 WhatsApp Support</a>
            <span>7 Days a Week</span>
          </div>
        </div>
        <div className="container footerBottom">
          <span>© 2026 Frostify Service Center. All Rights Reserved.</span>
          <span>Independent third-party appliance repair service provider.</span>
        </div>
      </footer>

      <div className="mobileCta">
        <a className="btn primary" href={`tel:${PHONE}`}>Call</a>
        <a className="btn whatsapp" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </>
  );
}
