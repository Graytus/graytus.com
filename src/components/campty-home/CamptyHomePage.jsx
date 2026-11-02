import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowLeft, 
  Star,
  Search,
  MapPin,
  Calendar,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/campty-home.css";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function CamptyHomePage() {
  const [email, setEmail] = useState("");
  const [selectedPin, setSelectedPin] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const testimonials = [
    {
      quote: "I think this is the best camping service I have ever tried and I recommend it to you",
      name: "Theresa Jordan",
      role: "Traveler",
      avatar: "/images/about-female-developer.jpg",
      rating: 5,
    },
    {
      quote: "Campty helps me a lot in finding interesting camping destinations with seamless booking",
      name: "James Wilson",
      role: "Climber",
      avatar: "/images/about-male-developer.jpg",
      rating: 5,
    },
    {
      quote: "Fun, from the city of wates not too far. Beautiful views, pretty and cool experience!",
      name: "Jhon Tosan",
      role: "Adventurer",
      avatar: "/images/about-male-developer-realistic.jpg",
      rating: 5,
    },
    {
      quote: "The best camp guide ever. Super secure, friendly community and breathtaking scenery.",
      name: "Sarah Chen",
      role: "Solo Camper",
      avatar: "/images/about-female-developer.jpg",
      rating: 5,
    }
  ];

  const faqs = [
    {
      q: "What is Campty?",
      a: "Campty is a digital camping and travel platform that connects nature enthusiasts with verified camping spots, professional guides, and a vibrant community worldwide."
    },
    {
      q: "How to book tickets?",
      a: "Simply browse through our destinations, choose your preferred camping date, select your gear preferences, and complete your reservation with instant confirmation."
    },
    {
      q: "What kind of service will I get?",
      a: "You get end-to-end camping assistance, certified local guides, emergency safety coverage, equipment rental delivery, and 24/7 travel support."
    },
    {
      q: "Is equipment rental included?",
      a: "Yes! You can choose all-inclusive packages that include premium tents, sleeping bags, camp stoves, and lighting delivered straight to your campsite."
    }
  ];

  const mapPins = [
    { id: 0, title: "Mount Denali", location: "Alaska, USA", rating: "4.9 ★", top: "28%", left: "18%" },
    { id: 1, title: "Yellowstone Camp", location: "Wyoming, USA", rating: "5.0 ★", top: "42%", left: "26%" },
    { id: 2, title: "Black Forest", location: "Baden, Germany", rating: "4.8 ★", top: "34%", left: "52%" },
    { id: 3, title: "Swiss Alps Glamping", location: "Valais, Switzerland", rating: "4.9 ★", top: "38%", left: "56%" },
    { id: 4, title: "Mount Fuji Camp", location: "Honshu, Japan", rating: "4.9 ★", top: "44%", left: "84%" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert("Thank you for subscribing to Campty updates!");
      setEmail("");
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="campty-landing-page">
      {/* ── 1. HERO SECTION ── */}
      <section className="campty-hero-section">
        <div className="container-xl">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Content */}
            <div className="col-12 col-lg-6">
              <motion.div {...fadeUp(0)}>
                {/* 3 Blue accent hand-drawn sketch lines animating in */}
                <motion.div 
                  className="campty-sketch-lines"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <svg width="42" height="26" viewBox="0 0 42 26" fill="none">
                    <path d="M4 22L12 4M21 22V2M38 22L30 4" stroke="#0056D2" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </motion.div>

                <h1 className="campty-hero-h1">
                  Cabin In The<br />
                  Woods But In<br />
                  A <span className="campty-highlight-box">
                    Good Way!
                    <motion.span 
                      className="campty-highlight-underline-anim"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </span>
                </h1>

                <motion.p 
                  className="campty-hero-desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.2 }}
                >
                  Now you can enjoy camping anywhere and anytime, and of course it's safe with us.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link to="/contact" className="campty-btn-start">
                    Get Started
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Phone Hand Image with Floating Animation */}
            <div className="col-12 col-lg-6 campty-hero-phone-col">
              <div className="campty-hero-art-bg" />
              <motion.div 
                className="campty-phone-img-wrapper"
                initial={{ opacity: 0, y: 80, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                <img 
                  src="/images/campty-phone-hero.png" 
                  alt="Campty Mobile App Interface" 
                  className="campty-phone-main-img"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FULL-WIDTH SOLID BLUE STATS STRIPE ── */}
      <section className="campty-blue-stats-bar">
        <div className="container-xl">
          <div className="row align-items-center g-3 text-center text-lg-start">
            <div className="col-6 col-lg-3">
              <motion.div className="campty-stat-item" {...fadeUp(0)}>
                <span className="campty-stat-value">10</span>
                <span className="campty-stat-text">Years of Experience</span>
              </motion.div>
            </div>

            <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="campty-stat-divider d-none d-lg-block" />
              <motion.div className="campty-stat-item ps-lg-4" {...fadeUp(0.1)}>
                <span className="campty-stat-value">1K+</span>
                <span className="campty-stat-text">Camping Destination</span>
              </motion.div>
            </div>

            <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="campty-stat-divider d-none d-lg-block" />
              <motion.div className="campty-stat-item ps-lg-4" {...fadeUp(0.2)}>
                <span className="campty-stat-value">8K</span>
                <span className="campty-stat-text">Happy Customer</span>
              </motion.div>
            </div>

            <div className="col-6 col-lg-3 d-flex align-items-center justify-content-center">
              <div className="campty-stat-divider d-none d-lg-block" />
              <motion.div className="campty-stat-item ps-lg-4" {...fadeUp(0.3)}>
                <span className="campty-stat-value">4,2</span>
                <span className="campty-stat-text">Overall Rating</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. BENEFITS: "THAT THE WAY TO CAMP!" ── */}
      <section className="campty-benefits-section">
        <div className="container-xl">
          <div className="row g-4 align-items-start">
            {/* Left Heading */}
            <div className="col-12 col-lg-4">
              <motion.div {...fadeUp(0)}>
                <div className="campty-sketch-lines">
                  <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                    <path d="M4 18L10 4M18 18V2M32 18L26 4" stroke="#0056D2" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="campty-sec-heading">
                  That The Way<br />
                  To Camp!
                </h2>
                <p className="campty-sec-sub">
                  Try a variety of benefits when using our services.
                </p>
              </motion.div>
            </div>

            {/* Right 3 Benefits */}
            <div className="col-12 col-lg-8">
              <div className="row g-4">
                <div className="col-12 col-sm-4">
                  <motion.div className="campty-benefit-card" {...fadeUp(0.1)}>
                    <div className="campty-benefit-icon-wrap">
                      <img src="/images/campty-globe.png" alt="Lot of choices" className="campty-benefit-icon-img" />
                    </div>
                    <h3 className="campty-benefit-title">Lot Of Choises</h3>
                    <p className="campty-benefit-desc">
                      We have 1K+ camping choices ready for your journey.
                    </p>
                  </motion.div>
                </div>

                <div className="col-12 col-sm-4">
                  <motion.div className="campty-benefit-card" {...fadeUp(0.18)}>
                    <div className="campty-benefit-icon-wrap">
                      <img src="/images/campty-bag.png" alt="Best camp guide" className="campty-benefit-icon-img" />
                    </div>
                    <h3 className="campty-benefit-title">Best Camp Guide</h3>
                    <p className="campty-benefit-desc">
                      Our camp guide is ready to help you navigate anywhere.
                    </p>
                  </motion.div>
                </div>

                <div className="col-12 col-sm-4">
                  <motion.div className="campty-benefit-card" {...fadeUp(0.26)}>
                    <div className="campty-benefit-icon-wrap">
                      <img src="/images/campty-ticket.png" alt="Easy booking" className="campty-benefit-icon-img" />
                    </div>
                    <h3 className="campty-benefit-title">Easy Booking</h3>
                    <p className="campty-benefit-desc">
                      With an easy, safe and transparent booking process.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MAP & DESTINATION FINDER SECTION ── */}
      <section className="campty-map-section">
        <div className="container-xl">
          <div className="row align-items-end justify-content-between g-4 mb-4">
            <div className="col-12 col-lg-7">
              <motion.div {...fadeUp(0)}>
                <div className="campty-sketch-lines">
                  <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                    <path d="M4 18L10 4M18 18V2M32 18L26 4" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="campty-sec-heading">
                  Forest, Starry Night,<br />
                  Campfire, What Else<br />
                  Do You Need?
                </h2>
                <p className="campty-sec-sub">
                  Explore the most breathtaking camping locations across the globe with live guides.
                </p>
              </motion.div>
            </div>

            {/* Destination Search Pill Widget */}
            <div className="col-12 col-lg-5">
              <motion.div className="campty-map-search-pill" {...fadeUp(0.15)}>
                <div className="campty-search-col">
                  <div className="campty-search-label d-flex align-items-center gap-1">
                    <MapPin size={13} color="#0056D2" />
                    Location
                  </div>
                  <div className="campty-search-val">Choose Destination</div>
                </div>

                <div className="campty-search-divider" />

                <div className="campty-search-col">
                  <div className="campty-search-label d-flex align-items-center gap-1">
                    <Calendar size={13} color="#0056D2" />
                    Date
                  </div>
                  <div className="campty-search-val">Add Date</div>
                </div>

                <button type="button" className="campty-map-search-btn" aria-label="Search destination">
                  <Search size={18} color="#FFFFFF" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Dot Matrix World Map Canvas with Pulsing Pins */}
          <motion.div className="campty-world-map-wrapper" {...fadeUp(0.2)}>
            <img 
              src="/images/campty-world-map.png" 
              alt="World Camping Map" 
              className="campty-map-bg-img"
            />

            {/* Animated Interactive Pins */}
            {mapPins.map((pin) => (
              <div 
                key={pin.id}
                className={`campty-map-pin ${selectedPin === pin.id ? "active" : ""}`}
                style={{ top: pin.top, left: pin.left }}
                onClick={() => setSelectedPin(pin.id)}
              >
                <div className="campty-pin-radar" />
                <div className="campty-pin-core" />
                
                {/* Popover Card */}
                <div className="campty-pin-popover">
                  <div className="fw-bold text-dark">{pin.title}</div>
                  <div className="small text-muted">{pin.location}</div>
                  <div className="campty-pin-badge">{pin.rating}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 5. COMMUNITY SECTION ── */}
      <section className="campty-community-section">
        <div className="container-xl">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Content */}
            <div className="col-12 col-lg-5">
              <motion.div {...fadeUp(0)}>
                <div className="campty-sketch-lines">
                  <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                    <path d="M4 18L10 4M18 18V2M32 18L26 4" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>

                <h2 className="campty-sec-heading">
                  Community Service<br />
                  Is Calling, No Need<br />
                  For Stalling.
                </h2>

                <p className="campty-sec-sub mb-4" style={{ maxWidth: "420px" }}>
                  Want more fun camping, join our community to get friends to camp together and feel the sensation.
                </p>

                <div>
                  <Link to="/contact" className="campty-btn-start">
                    Join Community
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Community Network Graphic with Floating Speech Bubbles */}
            <div className="col-12 col-lg-7 text-center position-relative">
              <motion.div className="campty-community-wrapper" {...fadeUp(0.15)}>
                <img 
                  src="/images/campty-community.png" 
                  alt="Community Avatars Network" 
                  className="campty-community-img"
                />

                {/* Floating Animated Speech Badges */}
                <div className="campty-float-bubble bubble-1">
                  <span>Welcome!! 👋</span>
                </div>
                <div className="campty-float-bubble bubble-2">
                  <span>Join us!! ⛺</span>
                </div>
                <div className="campty-float-bubble bubble-3">
                  <span>Hola!! 🌲</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SATISFIED CUSTOMERS (TESTIMONIALS) ── */}
      <section className="campty-testimonials-section">
        <div className="container-xl">
          <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-3">
            <div>
              <div className="campty-sketch-lines">
                <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                  <path d="M4 18L10 4M18 18V2M32 18L26 4" stroke="#0056D2" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="campty-sec-heading mb-0">
                Satisfied Customers Are<br />
                Our Best Ads.
              </h2>
            </div>

            {/* Left/Right carousel arrow icons matching reference */}
            <div className="d-flex gap-2">
              <button 
                type="button" 
                className="campty-carousel-arrow-btn" 
                onClick={prevTestimonial}
                aria-label="Previous review"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                type="button" 
                className="campty-carousel-arrow-btn" 
                onClick={nextTestimonial}
                aria-label="Next review"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="row g-4">
            {testimonials.slice(0, 3).map((item, idx) => {
              const displayItem = testimonials[(activeTestimonialIdx + idx) % testimonials.length];
              return (
                <div className="col-12 col-md-4" key={idx}>
                  <motion.div 
                    className="campty-testimonial-quote-box" 
                    key={activeTestimonialIdx + idx}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="campty-blue-quotes">““</div>
                    <p className="campty-quote-para">
                      "{displayItem.quote}"
                    </p>
                    <div className="campty-client-info">
                      <img src={displayItem.avatar} alt={displayItem.name} className="campty-client-avatar" />
                      <div>
                        <div className="campty-client-name">{displayItem.name}</div>
                        <div className="campty-client-role">{displayItem.role}</div>
                        <div className="d-flex text-warning" style={{ fontSize: "0.7rem" }}>
                          {[...Array(displayItem.rating)].map((_, i) => (
                            <Star key={i} size={12} fill="#F59E0B" color="#F59E0B" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. GOT A QUESTION? (FAQ & NEWSLETTER) ── */}
      <section className="campty-faq-section">
        <div className="container-xl">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* Left Newsletter */}
            <div className="col-12 col-lg-5">
              <motion.div {...fadeUp(0)}>
                <div className="campty-sketch-lines">
                  <svg width="36" height="22" viewBox="0 0 36 22" fill="none">
                    <path d="M4 18L10 4M18 18V2M32 18L26 4" stroke="#FF7A59" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h2 className="campty-sec-heading">Got A Question?</h2>
                <p className="campty-sec-sub mb-3">
                  If there are questions you want to ask, we will answer all your questions.
                </p>

                <form onSubmit={handleSubscribe} className="campty-newsletter-pill">
                  <input 
                    type="email" 
                    placeholder="Enter Your Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="campty-newsletter-input" 
                    required 
                  />
                  <button type="submit" className="campty-btn-submit-pill">
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Right Interactive Accordion FAQ */}
            <div className="col-12 col-lg-7">
              <motion.div {...fadeUp(0.15)}>
                <p className="small text-muted mb-3">
                  Maybe your question is have been answered, check this out.
                </p>

                <div className="campty-faq-accordion-group">
                  {faqs.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div key={i} className={`campty-faq-accordion-item ${isOpen ? "open" : ""}`}>
                        <button 
                          type="button"
                          className="campty-faq-accordion-header"
                          onClick={() => setActiveFaq(isOpen ? -1 : i)}
                          aria-expanded={isOpen}
                        >
                          <span className="campty-faq-question">{faq.q}</span>
                          <span className={`campty-faq-icon-arrow ${isOpen ? "rotated" : ""}`}>
                            <ArrowRight size={18} color="#0056D2" />
                          </span>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: "easeInOut" }}
                              className="campty-faq-body"
                            >
                              <p className="mb-0 text-muted small lh-lg">{faq.a}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}