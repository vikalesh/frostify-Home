
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  PHONE,
  PHONE_DISPLAY,
  whatsappUrl,
} from "@/lib/siteConfigFri";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="navbar">
      
      <div className="navbar-flex">
        <div 
          className="mobile-align"
        >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "12px",
              // background: "linear-gradient(135deg,#2563eb,#06b6d4)",
              background: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <Image
              className="hero-img"
              src="/images/logo-removebg.png"
              alt="Frostify Service Center in Mumbai"
              width={40}  // Add your desired width in pixels
              height={40}  // Add your desired height in pixels
            />
          </div>

          <div>
            <div
              style={{
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              Frostify
            </div>

            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
              }}
            >
              Service Center
            </div>
          </div>
        </a>
        
        {/* Mobile Hamburger */}

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        > ☰ </button>

        </div>

        {/* Navigation */}
        <nav className="navbar-menu">

          <Link href="/">Home</Link>

          <Link href="/ac-repair" >
            AC Repair
          </Link>

          <Link href="/washing-machine-repair" >
            Washing Machine
          </Link>

          <Link href="/refrigerator-repair" >
            Refrigerator
          </Link>

          <a
            href={`tel:${PHONE}`}
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: '12px'
            }}
          >
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#22c55e",
              color: "#fff",
              padding: "10px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: '12px'
            }}
          >
            WhatsApp Now
          </a>

        </nav>




      </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">

          <Link href="/">Home</Link>

          <Link href="/ac-repair" >
            AC Repair
          </Link>

          <Link href="/washing-machine-repair" >
            Washing Machine
          </Link>

          <Link href="/refrigerator-repair" >
            Refrigerator
          </Link>

          <a href={`tel:${PHONE}`}>
            📞 {PHONE_DISPLAY}
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Now
          </a>

        </div>
      )}


    </header>
  );
}

