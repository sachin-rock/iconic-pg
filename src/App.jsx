import { useState, useEffect } from "react";
import "./App.css";
import pgphoto1 from "./assets/pgphoto1.jpeg";
import pgphoto2 from "./assets/pgphoto2.jpeg";
import pgphoto3 from "./assets/pgphoto3.jpeg";
import pgphoto4 from "./assets/pgphoto4.jpeg";
import pgphoto5 from "./assets/pgphoto5.jpeg";
import pgphoto6 from "./assets/pgphoto6.jpeg";
import pgphoto7 from "./assets/pgphoto7.jpeg";
import locationQR from "./assets/location-qr.svg";

const WHATSAPP_NUMBER = "918975147738";
const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Exact verified Google Maps pin for "Iconic pg for girls"
// Built from Place CID confirmed against the listing's Place ID
// (0x3bc2bf001cdf1395:0xd620ef6c7ff5f8b5) — opens the place card directly,
// not a generic text search.
const MAPS_EXACT_LINK = "https://www.google.com/maps?cid=15429595572653652149";

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8616086594966!2d73.81548069678956!3d18.489926800000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf001cdf1395%3A0xd620ef6c7ff5f8b5!2sIconic%20pg%20for%20girls!5e0!3m2!1sen!2sin!4v1782192670199!5m2!1sen!2sin";

function Logo() {
  return (
    <svg
      className="nav-logo"
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>
      <rect width="42" height="42" rx="10" fill="url(#logoGrad)" />
      <polygon points="21,8.5 33,19 9,19" fill="#fff" />
      <rect x="13.5" y="19" width="15" height="12.5" rx="1.5" fill="#fff" />
      <rect x="18.5" y="24" width="5" height="7.5" rx="1" fill="#f59e0b" />
      <circle cx="21" cy="12.5" r="1.6" fill="#f59e0b" />
    </svg>
  );
}

const galleryPhotos = [
  {
    src: pgphoto1,
    title: "Single Sharing Room",
    roomType: "Single Sharing",
    desc: "A private, fully furnished room with a personal wardrobe, study table & chair, and an attached bathroom. Great for residents who want their own space.",
  },
  {
    src: pgphoto2,
    title: "Double Sharing Room",
    roomType: "Double Sharing",
    desc: "Two separate single beds with individual wardrobes and a shared study area, kept bright and airy with large windows.",
  },
  {
    src: pgphoto3,
    title: "Triple Sharing Room",
    roomType: "Triple Sharing",
    desc: "A comfortable triple sharing setup with shared wardrobes and a dedicated study corner — budget-friendly without compromising on space.",
  },
  {
    src: pgphoto4,
    title: "Four Sharing Room",
    roomType: "Four Sharing",
    desc: "Our most economical option with four beds, shared storage, and a common study area — perfect for students on a budget.",
  },
  {
    src: pgphoto5,
    title: "Room Interior",
    roomType: null,
    desc: "Clean, well-maintained interiors with proper ventilation and furnished beds, ready to move in.",
  },
  {
    src: pgphoto6,
    title: "Wardrobe & Storage",
    roomType: null,
    desc: "Every resident gets dedicated wardrobe storage to keep their belongings organized and secure.",
  },
  {
    src: pgphoto7,
    title: "Room View",
    roomType: null,
    desc: "Spacious, naturally lit rooms with large windows — comfortable living, day or night.",
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: "",
    message: "",
  });

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.slice(1)]: value }));
  };

  const sendEnquiry = () => {
    const { name, phone, room, message } = formData;
    const text =
      `Hello, I would like to enquire about a room at Iconic PG.\n\n` +
      `Name: ${name || "Not provided"}\n` +
      `Phone: ${phone || "Not provided"}\n` +
      `Preferred Room: ${room || "Not specified"}\n` +
      `Message: ${message || "N/A"}\n\n` +
      `Could you please share the availability and next steps?`;
    window.open(waLink(text), "_blank");
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedPhoto(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#" className="nav-brand">
          <Logo />
          <div className="nav-name">
            <span>Iconic</span> PG
          </div>
        </a>
        <div className="nav-links">
          <a href="#amenities">Amenities</a>
          <a href="#rooms">Rooms</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
          <a
            href={waLink(
              "Hello, I'm interested in booking accommodation at Iconic PG. Could you please share the available rooms and pricing?",
            )}
            target="_blank"
            className="nav-cta"
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            🏠 Premium PG Accommodation · Karvenagar, Pune
          </div>
          <h1>
            Your <span>Home</span> Away From Home
          </h1>
          <p className="hero-desc">
            Iconic PG offers premium, fully furnished rooms with modern
            amenities in the heart of Karvenagar, Pune. Safe, comfortable, and
            community-driven living for students & professionals.
          </p>
          <div className="hero-btns">
            <a
              href={waLink(
                "Hello, I came across Iconic PG and would like to know more about room availability, amenities, and pricing.",
              )}
              target="_blank"
              className="btn-primary"
            >
              📱 Book on WhatsApp
            </a>
            <a href="#rooms" className="btn-outline">
              View Rooms & Pricing
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Happy Residents</div>
            </div>
            <div className="stat">
              <div className="stat-num">24/7</div>
              <div className="stat-label">Security</div>
            </div>
            <div className="stat">
              <div className="stat-num">100%</div>
              <div className="stat-label">WiFi Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities" id="amenities">
        <div className="section-label">What We Offer</div>
        <div className="section-title">Premium Amenities</div>
        <div className="section-sub">
          Everything you need for a comfortable and productive stay — all
          included in your rent.
        </div>
        <div className="amenities-grid">
          {[
            { icon: "📶", name: "High-Speed WiFi" },
            { icon: "🔒", name: "24/7 CCTV Security" },
            { icon: "🧺", name: "Washing Machine" },
            { icon: "🍳", name: "Common Gas / Kitchen" },
            { icon: "💨", name: "Air Cooler" },
            { icon: "🛏️", name: "Furnished Beds" },
            { icon: "📦", name: "Wardrobe Storage" },
            { icon: "💡", name: "24/7 Electricity" },
          ].map((item, i) => (
            <div key={i} className="amenity-card">
              <div className="amenity-icon">{item.icon}</div>
              <div className="amenity-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROOMS */}
      <section id="rooms">
        <div className="section-label">Accommodation Options</div>
        <div className="section-title">Choose Your Room</div>
        <div className="section-sub">
          Flexible sharing options to match your budget and lifestyle. All rooms
          fully furnished.
        </div>

        <div className="rooms-grid">
          <div className="room-card">
            <div className="room-header">
              <div className="room-type">Single Sharing</div>
              <div className="room-capacity">👤 1 Person</div>
              <div className="room-price">
                ₹12,000 <span>/month</span>
              </div>
            </div>
            <div className="room-body">
              <ul className="room-features">
                <li>Private Room</li>
                <li>Personal Wardrobe</li>
                <li>Study Table & Chair</li>
                <li>Attached Bathroom</li>
                <li>24/7 Security</li>
              </ul>
              <a
                href={waLink(
                  "Hello, I'm interested in booking a Single Sharing room at Iconic PG. Could you please share the availability and next steps?",
                )}
                target="_blank"
                className="room-btn"
              >
                Book This Room →
              </a>
            </div>
          </div>

          <div className="room-card">
            <div className="room-header">
              <div className="room-type">Double Sharing</div>
              <div className="room-capacity">👥 2 Persons</div>
              <div className="room-price">
                ₹7,500 <span>/month</span>
              </div>
            </div>
            <div className="room-body">
              <ul className="room-features">
                <li>2 Separate Single Beds</li>
                <li>Individual Wardrobes</li>
                <li>Study Area</li>
                <li>Air Cooler</li>
                <li>Shared Bathroom</li>
              </ul>
              <a
                href={waLink(
                  "Hello, I'm interested in booking a Double Sharing room at Iconic PG. Could you please share the availability and next steps?",
                )}
                target="_blank"
                className="room-btn"
              >
                Book This Room →
              </a>
            </div>
          </div>

          <div className="room-card">
            <div className="room-header">
              <div className="room-type">Triple Sharing</div>
              <div className="room-capacity">👥 3 Persons</div>
              <div className="room-price">
                ₹6,500 <span>/month</span>
              </div>
            </div>
            <div className="room-body">
              <ul className="room-features">
                <li>3 Comfortable Beds</li>
                <li>Shared Wardrobes</li>
                <li>Study Corner</li>
                <li>Air Cooler</li>
                <li>Common Bathroom</li>
              </ul>
              <a
                href={waLink(
                  "Hello, I'm interested in booking a Triple Sharing room at Iconic PG. Could you please share the availability and next steps?",
                )}
                target="_blank"
                className="room-btn"
              >
                Book This Room →
              </a>
            </div>
          </div>

          <div className="room-card">
            <div className="room-header">
              <div className="room-type">Four Sharing</div>
              <div className="room-capacity">👥 4 Persons</div>
              <div className="room-price">
                ₹5,500 <span>/month</span>
              </div>
            </div>
            <div className="room-body">
              <ul className="room-features">
                <li>4 Beds</li>
                <li>Shared Storage</li>
                <li>Common Study Area</li>
                <li>Air Cooler</li>
                <li>Common Bathroom</li>
              </ul>
              <a
                href={waLink(
                  "Hello, I'm interested in booking a Four Sharing room at Iconic PG. Could you please share the availability and next steps?",
                )}
                target="_blank"
                className="room-btn"
              >
                Book This Room →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY - using real room photos, click to view details */}
      <section className="amenities" id="gallery">
        <div className="section-label">Inside Look</div>
        <div className="section-title">Room Gallery</div>
        <div className="section-sub">
          Take a look at our clean, comfortable, and well-furnished rooms. Click
          any photo for details.
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo, i) => (
            <div
              key={i}
              className="gallery-img"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <div className="gallery-img-overlay">
                <span>🔍 View Details</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATION */}
      <section id="location">
        <div className="section-label">Find Us</div>
        <div className="section-title">Our Location</div>
        <div className="section-sub">
          Conveniently located in Karvenagar, Pune — close to colleges, IT
          parks, and everyday amenities.
        </div>
        <div className="location-wrap">
          <div className="location-card">
            <div className="location-name">📍 Iconic PG</div>
            <div className="location-addr">
              Dyndeep Colony, Lane No. 5,
              <br />
              Near Vikas Mitr Mandal Chowk,
              <br />
              Dnydeep Colony, Hingne Budrukh,
              <br />
              Karvenagar, Pune, Maharashtra 411052
            </div>
            <a
              href={MAPS_EXACT_LINK}
              target="_blank"
              className="location-map-btn"
            >
              🗺️ Open in Google Maps
            </a>
            <a
              href={MAPS_EXACT_LINK}
              target="_blank"
              className="location-qr"
            >
              <img
                src={locationQR}
                alt="Scan QR to open location in Google Maps"
              />
              <div className="location-qr-text">
                <strong>Scan to Navigate</strong>
                Point your camera here to open our exact location in Google Maps
              </div>
            </a>
          </div>
          <div>
            <iframe
              src={MAPS_EMBED_SRC}
              width="100%"
              height="320"
              style={{ border: 0, borderRadius: "14px" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="section-label">Happy Residents</div>
        <div className="section-title">What Our Residents Say</div>
        <div className="section-sub">
          Real experiences from the people who call Iconic PG home.
        </div>
        <div className="testi-grid">
          {[
            {
              name: "Priya Sharma",
              role: "Engineering Student",
              text: "Iconic PG has been like a home away from home. The rooms are clean, the management is caring, and it's the perfect place for studying.",
            },
            {
              name: "Rahul Patil",
              role: "IT Professional",
              text: "Great location, great wifi, and the owner Shubham bhai is very helpful. I would recommend Iconic PG to anyone looking for accommodation in Pune.",
            },
            {
              name: "Sneha Kulkarni",
              role: "MBA Student",
              text: "Safe, clean, and well-maintained. The CCTV and 24/7 security gives peace of mind. Very satisfied with my stay at Iconic PG.",
            },
          ].map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-name">{t.name}</div>
              <div className="testi-role">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">Get In Touch</div>
        <div className="section-title">Contact Us</div>
        <div className="section-sub">
          Reach out to book a room or schedule a visit. We'd love to show you
          around!
        </div>

        <div className="contact-wrap">
          <div className="contact-info">
            <h3>Talk to Shubham Dope</h3>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "24px",
                fontSize: "14px",
              }}
            >
              Our PG owner is always available to answer your questions and help
              you find the perfect room.
            </p>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <div className="contact-label">Phone / WhatsApp</div>
                <a href="tel:+918975147738" className="contact-val">
                  +91 89751 47738
                </a>
                <a href="tel:+917218785801" className="contact-val">
                  +91 72187 85801
                </a>
              </div>
            </div>
            <div className="contact-item" style={{ alignItems: "flex-start" }}>
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Address</div>
                <div
                  className="contact-val"
                  style={{ fontSize: "13px", fontWeight: "500" }}
                >
                  Dyndeep Colony, Lane No. 5, Near Vikas Mitr Mandal Chowk,
                  Hingne Budrukh, Karvenagar, Pune 411052
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <div>
                <div className="contact-label">Visiting Hours</div>
                <div className="contact-val">9:00 AM – 8:00 PM (All Days)</div>
              </div>
            </div>
            <a
              href={waLink(
                "Hello Shubham, I'm interested in accommodation at Iconic PG. Could you please share more details?",
              )}
              target="_blank"
              style={{
                background: "#25d366",
                color: "#fff",
                padding: "14px 24px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="contact-form">
            <h3
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              Send Enquiry
            </h3>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                id="fname"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                id="fphone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="form-group">
              <label>Room Type</label>
              <select id="froom" value={formData.room} onChange={handleChange}>
                <option>Select room type</option>
                <option>Single Sharing - ₹12,000/month</option>
                <option>Double Sharing - ₹7,500/month</option>
                <option>Triple Sharing - ₹6,500/month</option>
                <option>Four Sharing - ₹5,500/month</option>


              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                id="fmessage"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Any specific requirements or questions..."
              ></textarea>
            </div>
            <button className="form-submit" onClick={sendEnquiry}>
              Send via WhatsApp →
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">Iconic PG</div>
        <p style={{ marginBottom: "8px" }}>
          Managed by <strong style={{ color: "#fff" }}>Shubham Dope</strong> |
          Karvenagar, Pune 411052
        </p>
        <p style={{ marginBottom: "8px" }}>📞 +91 8975147738</p>
        <p>© 2025 Iconic PG. All rights reserved.</p>
      </footer>

      {/* WhatsApp Float */}
      <a
        href={waLink(
          "Hello, I'd like to know more about the available rooms at Iconic PG.",
        )}
        target="_blank"
        className="wa-float"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      {/* PHOTO DETAILS MODAL */}
      {selectedPhoto && (
        <div
          className="photo-modal-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="photo-modal-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="photo-modal-img"
            />
            <div className="photo-modal-body">
              <div className="photo-modal-title">{selectedPhoto.title}</div>
              <p className="photo-modal-desc">{selectedPhoto.desc}</p>
              <a
                href={waLink(
                  selectedPhoto.roomType
                    ? `Hello, I saw the ${selectedPhoto.roomType} room in your photo gallery and would like more details about availability and pricing at Iconic PG.`
                    : `Hello, I saw your photo gallery at Iconic PG and would like more information about the rooms and amenities.`,
                )}
                target="_blank"
                className="photo-modal-cta"
              >
                💬 Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;