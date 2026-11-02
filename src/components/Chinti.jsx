import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Send, ExternalLink, RefreshCw, GraduationCap } from "lucide-react";
import { COMPANY_INFO } from "../data/siteData";
import "./Chinti.css";

const WELCOME_MESSAGE = {
  id: "welcome-1",
  sender: "bot",
  text: "Hi! I’m Chinti 👋 How can I help you today?",
  time: "Just now"
};

/* ── Main Quick Options ── */
const MAIN_QUICK_OPTIONS = [
  { label: "Website Development", value: "Website Development" },
  { label: "Mobile App Development", value: "Mobile App Development" },
  { label: "Custom Software", value: "Custom Software" },
  { label: "Internship Enquiries 🎓", value: "Internship Enquiries" },
  { label: "Contact Our Team", value: "Contact Our Team" }
];

/* ── Internship Detailed Sub-Options ── */
const INTERNSHIP_QUICK_OPTIONS = [
  { label: "Available Programs", value: "What internship programs are available?" },
  { label: "Who Can Apply?", value: "Who can apply?" },
  { label: "Internship Duration", value: "What is the internship duration?" },
  { label: "Online or Onsite?", value: "Is it online or onsite?" },
  { label: "Fee or Stipend?", value: "Is there an internship fee or stipend?" },
  { label: "Certificate & LOR", value: "Will I receive a certificate?" },
  { label: "Real Client Projects?", value: "Will I work on real projects?" },
  { label: "How to Apply?", value: "How do I apply?" },
  { label: "← Back to Main Menu", value: "__BACK_TO_MAIN__" }
];

export default function Chinti() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [quickMenu, setQuickMenu] = useState("main"); // "main" | "internship"
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat whenever messages or typing change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Keyboard shortcut: Escape closes the panel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : inputValue;
    if (!query || !query.trim()) return;

    // Handle Return to Main Menu pill
    if (query === "__BACK_TO_MAIN__") {
      setQuickMenu("main");
      const userMsg = {
        id: Date.now(),
        sender: "user",
        text: "Main Menu",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(() => {
        const botMsg = {
          id: Date.now() + 1,
          sender: "bot",
          text: "Here are our core digital services and team contact details. What would you like to explore?",
          actions: [
            { label: "Explore Services", path: "/services" },
            { label: "Contact Us", path: "/contact" }
          ],
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, 400);
      return;
    }

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Automated preset responses based on user query
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse = "";
      let actions = [];

      // ── Internship Intents (English, Tamil, Tanglish) ──
      const isFeeStipend = /(fee|fees|stipend|cost|price|paid|free|salary|charge|charges|fees\s*evlo|stipend\s*undo|panam|kasu)/i.test(lower);
      const isCertificate = /(certif|lor|recommendation|noc|bonafide|certificate\s*kedaikuma|certificate\s*tharuvangala)/i.test(lower);
      const isProjects = /(real\s*project|live\s*project|client\s*project|dummy|real-world)/i.test(lower);
      const isEligibility = /(who can apply|eligib|qualification|qualify|criteria|freshers?|fresh graduate|degree|diploma|\bbe\b|\bbtech\b|\bbca\b|\bmca\b|yar.*apply|yaralam)/i.test(lower);
      const isDuration = /(duration|how long|period|months?|timing|ethana\s*maasam|ethana\s*month|evlo\s*naal)/i.test(lower);
      const isMode = /(online|onsite|offline|remote|hybrid|wfh|veetla|office.*poganuma|mode|location)/i.test(lower);
      const isApply = /(how to apply|how do i apply|apply.*process|registration|procedure|steps|epadi\s*apply|eppadi\s*apply)/i.test(lower);
      const isPrograms = /(program|programs|domain|domains|courses?|stack|roles?|positions?|available|enna.*domain|enna.*role)/i.test(lower);
      const isGeneralInternship = /(intern|internship|intership|trainee|training|iruka|irukka)/i.test(lower);

      if (isFeeStipend) {
        // Fee or stipend information: not stated on website -> safe standard fallback
        botResponse = "Please contact our team to confirm this internship detail.";
        actions = [
          { label: "Contact Us", path: "/contact" },
          { label: "Chat on WhatsApp", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` }
        ];
        setQuickMenu("internship");
      } else if (isCertificate) {
        botResponse = `Yes! Upon successful completion and evaluation of your project deliverables, you will receive:

• An Official Verified Internship Certificate
• A Personalized Letter of Recommendation (LOR)
• College documentation support (NOC, bonafide, and final project report assistance).`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isProjects) {
        botResponse = `Yes, 100%! You will work on live client projects — not dummy assignments.

You will build production-worthy software alongside senior engineers with 1-on-1 mentorship, modern component architectures, and weekly code reviews.`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isEligibility) {
        botResponse = `Our internship programs welcome:

• Qualifications: B.E / B.Tech (CSE, IT, ECE, EEE, AI/DS), BCA, MCA, B.Sc & M.Sc (CS/IT), or Polytechnic Diploma.
• Academic Stage: Pre-Final Year, Final-Year students, and fresh graduates.
• Experience: Zero prior professional experience required — only basic coding logic and learning drive!
• Workspace: A functional laptop and stable internet connection.
• Academic Support: College NOC, bonafide & final project report support included.`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isDuration) {
        botResponse = `Our internship programs run for 1 to 3 Months with flexible schedules. We value practical output and continuous learning at your pace.`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isMode) {
        botResponse = `We offer flexible 100% Remote (work from home) or Hybrid offline options with flexible hours, allowing you to learn without disrupting college classes.`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isApply) {
        botResponse = `Here is our 4-step application process:

1. Apply Online: Submit your application on our Internship page or email your resume to admin@graytustechnologies.com.
2. Screening & Interview: Brief technical or portfolio conversation with our team.
3. Onboarding: Meet the engineers, tools, and project scope.
4. Live Project & Certification: Ship real features and receive your verified certificate & LOR!`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isPrograms) {
        botResponse = `We offer 3 practical, industry-ready internship tracks (1–3 Months, Remote / Hybrid):

1. Full Stack Development Intern
• Tech: React.js, Node.js, Express.js, MongoDB, REST APIs, Bootstrap 5.

2. Software Testing / QA Intern
• Tech: Manual Testing, Test Cases, Selenium, API Testing (Postman), Bug Tracking.

3. UI/UX Design Intern
• Tech: Figma, Wireframing, Interactive Prototyping, Design Systems, User Journeys.`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      } else if (isGeneralInternship || query === "Internship Enquiries") {
        botResponse = `Graytus Technologies offers 1–3 month Remote and Hybrid internship programs in Full Stack Development, Software Testing (QA), and UI/UX Design with live client projects and verified certificates.

Select a question below or ask me anything about our internships!`;
        actions = [
          { label: "Apply for Internship", path: "/internship" }
        ];
        setQuickMenu("internship");
      }
      // ── Core Services & Company Information ──
      else if (lower.includes("web") || lower.includes("site")) {
        botResponse = "We build high-performance, responsive, and SEO-friendly corporate websites, dynamic web portals, and eCommerce solutions tailored to your business needs.";
        actions = [
          { label: "Explore Web Development", path: "/services/website-development" },
          { label: "Request a Quote", path: "/contact" }
        ];
      } else if (lower.includes("app") || lower.includes("mobile") || lower.includes("android") || lower.includes("ios")) {
        botResponse = "We design and develop cross-platform and native mobile applications (iOS & Android) with modern UI/UX, biometric login, offline sync, and real-time push notifications.";
        actions = [
          { label: "Explore Mobile App Services", path: "/services/mobile-app-development" },
          { label: "Chat on WhatsApp", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` }
        ];
      } else if (lower.includes("software") || lower.includes("custom") || lower.includes("erp") || lower.includes("saas") || lower.includes("crm")) {
        botResponse = "We engineer tailored business software, enterprise ERP/CRM dashboards, and scalable SaaS platforms designed to automate operations and replace manual workflows.";
        actions = [
          { label: "Explore Custom Software", path: "/services/custom-software-development" },
          { label: "Discuss Requirements", path: "/contact" }
        ];
      } else if (lower.includes("contact") || lower.includes("team") || lower.includes("call") || lower.includes("address") || lower.includes("phone") || lower.includes("email") || lower.includes("location")) {
        botResponse = `Here are our official contact details:\n\n📍 Address: ${COMPANY_INFO.address}\n📧 Email: ${COMPANY_INFO.email}\n📞 Phone: ${COMPANY_INFO.phone}\n🕒 Hours: ${COMPANY_INFO.workingHours}`;
        actions = [
          { label: "Open Contact Page", path: "/contact" },
          { label: "Chat on WhatsApp", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` }
        ];
      } else if (lower.includes("portfolio") || lower.includes("work") || lower.includes("project")) {
        botResponse = "Explore our verified digital case studies across web platforms, mobile applications, and enterprise software.";
        actions = [
          { label: "Browse Portfolio", path: "/portfolio" }
        ];
      } else {
        // Fallback for any unknown question
        botResponse = `Thank you for reaching out! As an automated assistant, I can direct you to our team for custom quotations, technical specifications, and project consultations.`;
        actions = [
          { label: "Contact Our Team", path: "/contact" },
          { label: "Direct WhatsApp", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` }
        ];
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botResponse,
        actions,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const handleKeyDownInput = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([WELCOME_MESSAGE]);
    setQuickMenu("main");
  };

  const currentOptions = quickMenu === "internship" ? INTERNSHIP_QUICK_OPTIONS : MAIN_QUICK_OPTIONS;

  return (
    <aside className="chinti-container" aria-label="Chinti Virtual Assistant">
      {/* ── Chatbot Panel (Rendered directly above/beside Chinti) ── */}
      {isOpen && (
        <section
          id="chinti-chat-panel"
          className="chinti-panel"
          role="region"
          aria-label="Chinti Chat Panel"
        >
          {/* Header */}
          <header className="chinti-panel-header">
            <div className="chinti-header-title-wrap">
              <div className="chinti-header-avatar">
                <img
                  src={`${import.meta.env.BASE_URL}images/chinti.png`}
                  alt=""
                  aria-hidden="true"
                  className="chinti-header-avatar-img"
                  width="28"
                  height="42"
                />
              </div>
              <div>
                <h2 className="chinti-header-title">Chinti — Graytus Assistant</h2>
                <span className="chinti-header-status">
                  <span className="chinti-status-dot" aria-hidden="true" />
                  Automated Support
                </span>
              </div>
            </div>

            <div className="chinti-header-actions">
              <button
                type="button"
                onClick={handleReset}
                className="chinti-btn-icon"
                title="Reset conversation"
                aria-label="Reset conversation"
              >
                <RefreshCw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="chinti-btn-icon"
                title="Close chat"
                aria-label="Close chat panel"
              >
                <X size={18} />
              </button>
            </div>
          </header>

          {/* Messages Scroll Area */}
          <div className="chinti-messages-body" tabIndex={0} aria-live="polite">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`chinti-msg-row ${m.sender === "user" ? "chinti-msg-user" : "chinti-msg-bot"}`}
              >
                <div className="chinti-bubble">
                  {m.text}
                </div>

                {/* Interactive Action Links */}
                {m.actions && m.actions.length > 0 && (
                  <div className="chinti-actions-wrap">
                    {m.actions.map((act, i) => act.url ? (
                      <a
                        key={i}
                        href={act.url}
                        target="_blank"
                        rel="noreferrer"
                        className="chinti-action-pill chinti-action-ext"
                      >
                        <span>{act.label}</span>
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <Link
                        key={i}
                        to={act.path}
                        onClick={() => setIsOpen(false)}
                        className={`chinti-action-pill ${act.label.includes("Internship") ? "chinti-action-internship" : ""}`}
                      >
                        {act.label.includes("Internship") && <GraduationCap size={13} />}
                        <span>{act.label}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <span className="chinti-msg-time">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="chinti-msg-row chinti-msg-bot">
                <div className="chinti-typing-indicator" aria-label="Chinti is typing">
                  <span className="chinti-dot" />
                  <span className="chinti-dot" />
                  <span className="chinti-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options Bar (Dynamic Menu: Main Services vs Internship Questions) */}
          <div
            className="chinti-quick-options"
            aria-label={quickMenu === "internship" ? "Internship questions" : "Suggested quick replies"}
          >
            {currentOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                className={`chinti-quick-btn ${opt.value === "__BACK_TO_MAIN__" ? "chinti-quick-btn-back" : ""} ${opt.value === "Internship Enquiries" ? "chinti-quick-btn-highlight" : ""}`}
                onClick={() => handleSend(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Message Input Form */}
          <form
            className="chinti-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDownInput}
              placeholder="Ask about internships, services, or pricing..."
              className="chinti-input-field"
              aria-label="Message to Chinti"
              maxLength={400}
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="chinti-send-btn"
              title="Send message"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </section>
      )}

      {/* ── Accessible Floating Mascot Trigger ── */}
      <button
        type="button"
        className="chinti-widget"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="chinti-chat-panel"
        aria-label={isOpen ? "Close Chinti assistant" : "Open Chinti assistant"}
        title={isOpen ? "Close Chinti chat" : "Chat with Chinti"}
      >
        {!isOpen && (
          <div className="chinti-greeting" aria-hidden="true">
            Hi, I’m Chinti! <span className="chinti-wave">👋</span>
          </div>
        )}

        <img
          src={`${import.meta.env.BASE_URL}images/chinti.png`}
          alt="Chinti, your virtual assistant"
          className="chinti-image"
          width="68"
          height="102"
          draggable={false}
        />
      </button>
    </aside>
  );
}
