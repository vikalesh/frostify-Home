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
              <p>Every appliance is built differently, featuring complex electrical circuits, specialized mechanical parts, and advanced software boards (PCBs). Our technicians possess deep diagnostic knowledge and multi-brand expertise to handle an expansive range of appliance breakdowns.</p>
              {/* <p>Service-specific pages for AC, Washing Machine and Refrigerator with instant WhatsApp booking.</p> */}
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
              <p>With an expansive and well-coordinated network of mobile technicians, Frostify Service Center brings premium doorstep appliance repair solutions to residential and commercial customers across Mumbai, Navi Mumbai, Thane, and nearby regions.Our technicians are strategically placed to guarantee rapid travel times to the following prominent neighborhoods:</p>
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
              <h2>Multi-Brand Support Expertise</h2>
              <p>Brand names are used only to identify appliance compatibility and repair expertise.</p>
               <p>Even though we operate as an independent service provider, our technicians
                    continuously train on the unique systems and technologies used by leading
                    global appliance brands. This enables us to deliver professional,
                    authorized-level repair expertise at competitive third-party service rates.
                  </p>

                  <p>
                    We proudly support, diagnose, and repair appliances from the following
                    major manufacturers:
                  </p>
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

        <section id="d" className="section darkSec">
          <div className="container ">
             <p className="eyebrow">A Diagnostic Guide</p>
              <h2>Understanding Your Appliance Issues </h2>
               <p>To help you identify when it is time to call in the professionals, here is a quick overview of common symptoms that indicate your home appliance requires immediate repair or maintenance.</p> 
             <div className="contactBox">  
                <h3> When to Call an AC Technician </h3>
                <p> .The unit blows air, but the room temperature does not drop
                </p>
                <p>.Water drops or streams down continuously from the indoor AC unit casing
                </p>
                <p>.The outdoor unit fails to turn on, or makes a loud, grinding metallic noise.

                </p>
                <p>.The AC switches off automatically within minutes of starting (short-cycling)
                </p>
                <p>.An unpleasant, musty odor fills the room whenever you switch on the machine.
                </p>
            </div>
              <br />
               <div className="contactBox"> 
                <h3>When Your Washing Machine Needs Attention</h3>
                <p>.The clothes emerge completely soaking wet, indicating a failure to spin or drain.</p>
                <p>.The machine fills with water but the drum remains completely stationary.</p>
                <p>.Water pools around the base of the machine during a wash cycle.</p>
                <p>.The digital display flashes unfamiliar error codes and halts mid-cycle.</p>
                <p>.The machine shakes violently, moving away from its designated wall spot during the spin cycle.</p>
               </div>
 <br />
               <div className="contactBox"> 
                <h3>Signs Your Refrigerator is Struggling</h3>
                <p>Food in the fresh food compartment spoils rapidly or turns warm.</p>
                <p>Ice sheets form excessively fast on the walls of the freezer compartment.</p>
                <p>The refrigerator makes a loud clicking or buzzing noise every few minutes.</p>
                <p>You notice water pooling at the bottom of the vegetable crisper drawers.</p>
                <p>The exterior sides of the refrigerator cabinet feel abnormally hot to the touch.</p>
              </div>

          </div>
        </section>

         <section id="contact" className="section contactSec">
          <div className="container ">
            <p className="eyebrow"> FAQs</p>
              <h2>Frequently Asked Questions</h2>
                   <br />
                        <br />
            <div className="contactBox">
              <h3>Q1. Is Frostify Service Center an authorized brand dealer?</h3>
              <p>No. Frostify Service Center is an independent third-party appliance repair and maintenance service provider. We are not an authorized service center, authorized dealer, agent, or official representative of Samsung, LG, Whirlpool, Bosch, IFB, Daikin, Voltas, Blue Star, Haier, Godrej, Panasonic, Hitachi, Carrier, or any other brand mentioned on this website. All brand names, logos, and trademarks are the exclusive property of their respective owners and are used purely for identification and service compatibility purposes.</p>
            </div>
            <br />
            <div className="contactBox">
              <h3>Q2. How quickly can a technician visit my home?</h3>
              <p>We consistently offer same-day appliance repair services across Mumbai, Navi Mumbai, and Thane. Appointments are scheduled based on the real-time availability of technicians in your localized neighborhood. Once you initiate contact via phone or WhatsApp, our backend team works instantly to assign the closest available expert to you.</p>
            </div>
            <br />
            <div className="contactBox">
              <h3>Q3. Do you provide a warranty on the repairs performed?</h3>
              <p>Yes, we do. To instill complete confidence and peace of mind, Frostify Service Center backs its repair support with a dedicated service and parts warranty. The precise duration of the warranty varies depending on the type of appliance and the specific spare parts replaced during the job. Our technicians will clarify these details upfront.</p>
            </div>
            <br />
            <div className="contactBox">
              <h3>Q4. Are there any hidden costs in your pricing structure?</h3>
              <p>Absolutely not. We take immense pride in our transparent pricing policy. Our technician will thoroughly inspect your appliance at your doorstep, diagnose the primary breakdown, and present a clear breakdown of service charges before starting any physical repair work. You only pay the mutually agreed-upon amount once the repair is completed successfully.</p>
            </div>
            <br />
            <div className="contactBox">
              <h3>Q5. Can you handle smart, inverter-based home appliances?</h3>
              <p>Yes, our technical team possesses specialized expertise in modern home electronics. We regularly repair high-end inverter ACs, smart frost-free side-by-side refrigerators, and fully automatic front-load washing machines equipped with digital inverter motors and advanced PCB control systems.</p>
            </div>
            <br />


          </div>
          </section>

        <section id="contact" className="section contactSec">
          <div className="container contactGrid">
            <div>
              <p className="eyebrow">Book Service</p>
              <h2>Book Your Doorstep Repair Service Instantly</h2>
              <p>Do not let a broken appliance disrupt your household peace, comfort, and safety. Get your home back to full efficiency with reliable, fast, and professional support from Mumbai's trusted appliance repair experts.</p>
              <p>Booking a doorstep service with Frostify Service Center is incredibly easy. You can call us directly or drop us a quick text message to describe your appliance issues. Our responsive customer support desk is active from 9:00 AM to 9:00 PM to register your requests and dispatch help immediately.</p>
              <br />
              <h3>Contact Frostify Service Center now and let our multi-brand specialists restore your AC, washing machine, or refrigerator to perfect working health today!</h3>
              <br />
              {/* <p>Call or WhatsApp Frostify Service Center for AC, Washing Machine or Refrigerator repair service.</p> */}
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
