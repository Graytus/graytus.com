import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/siteData";
import chintiImg from "../assets/chinti/chninti.png";
import Chinti from "./Chinti";
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Phone,
  RefreshCw
} from "lucide-react";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! 👋 Welcome to Graytus Technologies. I'm Chinti, your AI Assistant. How can I assist your business or project today?",
    time: "Just now"
  }
];

const QUICK_PROMPTS = [
  "What services do you offer? 🚀",
  "How to start a project? 💼",
  "Tell me about internships 🎓",
  "Chat on WhatsApp 💬",
  "Location & Working Hours 📍"
];

export default function AIChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend) => {
    const query = typeof textToSend === "string" ? textToSend : inputValue;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Response Generation with contextual intelligence
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse = "";
      let action = null;

      if (lower.includes("service") || lower.includes("offer") || lower.includes("what do you do")) {
        botResponse = "At Graytus Technologies, we engineer end-to-end digital solutions including:\n\n• Website Development (Static, Dynamic, eCommerce)\n• Mobile App Development (iOS, Android, Cross-platform)\n• Custom Software & Enterprise ERP/CRM\n• SaaS Platform Engineering\n• Hospitality Solutions & Property Management Systems";
        action = { label: "Explore All Services", path: "/services" };
      } else if (lower.includes("project") || lower.includes("quote") || lower.includes("pricing") || lower.includes("hire") || lower.includes("start")) {
        botResponse = "We'd love to partner with you! Our engineering team builds custom solutions tailored to your operational goals and budget. You can share your project scope on our Contact Page or chat directly with our tech architects on WhatsApp.";
        action = { label: "Start Your Project", path: "/contact" };
      } else if (lower.includes("internship") || lower.includes("student") || lower.includes("training") || lower.includes("eligibility")) {
        botResponse = "Graytus offers high-impact internship programs with real-world project mentorship in Web Development, Mobile Apps, Python/AI, and UI/UX Design! Includes completion certificate, stipend opportunities, and potential PPO.";
        action = { label: "View Internship Program", path: "/internship" };
      } else if (lower.includes("whatsapp") || lower.includes("chat") || lower.includes("call") || lower.includes("phone")) {
        botResponse = `You can directly reach out to our team on WhatsApp at ${COMPANY_INFO.phone}. Click below to initiate a direct WhatsApp chat!`;
        action = { label: "Open WhatsApp Chat", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` };
      } else if (lower.includes("location") || lower.includes("address") || lower.includes("hour") || lower.includes("office") || lower.includes("where")) {
        botResponse = `📍 Headquarters Address:\n${COMPANY_INFO.address}\n\n🕒 Working Hours:\n${COMPANY_INFO.workingHours}`;
        action = { label: "View Contact & Map", path: "/contact" };
      } else if (lower.includes("portfolio") || lower.includes("work") || lower.includes("case study") || lower.includes("experience")) {
        botResponse = "Explore our verified case studies and digital deliverables across web platforms, mobile apps, SaaS, and enterprise software.";
        action = { label: "Browse Portfolio", path: "/portfolio" };
      } else {
        botResponse = `Thank you for reaching out! Whether you are exploring custom software, mobile apps, web solutions, or enterprise technology, our team is ready to help. Feel free to connect directly via WhatsApp or submit an inquiry.`;
        action = { label: "Connect on WhatsApp", url: `https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}` };
      }

      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: botResponse,
        action,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Chinti Mascot as the AI Chat Trigger */}
      <Chinti onClick={() => setIsOpen(true)} isOpen={isOpen} />

      {/* Chat Widget Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="bg-white rounded-4 shadow-2xl border overflow-hidden d-flex flex-column position-fixed"
            style={{
              bottom: "20px",
              right: "20px",
              width: "360px",
              maxWidth: "calc(100vw - 32px)",
              height: "530px",
              maxHeight: "calc(100vh - 100px)",
              boxShadow: "0 20px 40px rgba(15, 23, 42, 0.22)",
              zIndex: 1060
            }}
          >
            {/* Header */}
              <div
                className="p-3 text-white d-flex align-items-center justify-content-between"
                style={{
                  background: "linear-gradient(135deg, #0866C6 0%, #004B99 100%)"
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <div
                    className="rounded-circle bg-white text-primary-blue d-flex align-items-center justify-content-center shadow-sm overflow-hidden"
                    style={{ width: "38px", height: "38px" }}
                  >
                    <img
                      src={chintiImg}
                      alt="Chinti"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <div className="fw-bold d-flex align-items-center gap-1" style={{ fontSize: "0.95rem" }}>
                      Chinti AI Assistant
                      <span className="badge bg-success px-1 py-0" style={{ fontSize: "0.6rem" }}>Online</span>
                    </div>
                    <div className="small text-white-50" style={{ fontSize: "0.72rem" }}>
                      Instant Support & Solutions
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-1">
                  <button
                    type="button"
                    onClick={handleResetChat}
                    className="btn btn-sm text-white-50 p-1 hover-text-white"
                    title="Reset chat"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <RefreshCw size={15} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-sm text-white p-1"
                    title="Close chat"
                    style={{ background: "transparent", border: "none" }}
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Chat Message Scroll Area */}
              <div
                className="flex-grow-1 p-3 overflow-y-auto bg-light d-flex flex-column gap-3"
                style={{ fontSize: "0.88rem" }}
              >
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`d-flex flex-column ${m.sender === "user" ? "align-items-end" : "align-items-start"}`}
                  >
                    <div
                      className={`p-3 rounded-4 shadow-sm ${
                        m.sender === "user"
                          ? "bg-primary-blue text-white rounded-bottom-end-0"
                          : "bg-white text-dark border rounded-bottom-start-0"
                      }`}
                      style={{
                        maxWidth: "85%",
                        lineHeight: "1.55",
                        whiteSpace: "pre-line"
                      }}
                    >
                      {m.text}
                    </div>

                    {/* Optional Action Button */}
                    {m.action && (
                      <div className="mt-2">
                        {m.action.url ? (
                          <a
                            href={m.action.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-success rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-sm font-weight-bold"
                            style={{ fontSize: "0.78rem" }}
                          >
                            <span>{m.action.label}</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          <Link
                            to={m.action.path}
                            onClick={() => setIsOpen(false)}
                            className="btn btn-sm btn-primary-gt rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-sm font-weight-bold"
                            style={{ fontSize: "0.78rem" }}
                          >
                            <span>{m.action.label}</span>
                            <ExternalLink size={12} />
                          </Link>
                        )}
                      </div>
                    )}

                    <span className="small text-muted mt-1 px-1" style={{ fontSize: "0.68rem" }}>
                      {m.time}
                    </span>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="d-flex align-items-center gap-1 bg-white p-2 px-3 rounded-4 border w-auto align-self-start shadow-sm">
                    <span className="spinner-grow spinner-grow-sm text-primary-blue" style={{ width: "6px", height: "6px" }} />
                    <span className="spinner-grow spinner-grow-sm text-primary-blue" style={{ width: "6px", height: "6px", animationDelay: "0.15s" }} />
                    <span className="spinner-grow spinner-grow-sm text-primary-blue" style={{ width: "6px", height: "6px", animationDelay: "0.3s" }} />
                    <span className="small text-muted ms-1" style={{ fontSize: "0.72rem" }}>Graytus AI typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompt Suggestion Chips */}
              <div className="px-3 py-2 bg-white border-top overflow-x-auto d-flex gap-2" style={{ whiteSpace: "nowrap" }}>
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="btn btn-sm bg-light text-dark border rounded-pill px-2 py-1 font-weight-medium flex-shrink-0 hover-lift"
                    style={{ fontSize: "0.73rem" }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Chat Input Field */}
              <div className="p-2 px-3 bg-white border-top d-flex align-items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask Graytus AI anything..."
                  className="form-control form-control-sm border-0 bg-light rounded-pill px-3 py-2"
                  style={{ fontSize: "0.85rem", outline: "none", boxShadow: "none" }}
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim()}
                  className="btn btn-primary-gt rounded-circle p-2 d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: "36px", height: "36px", opacity: inputValue.trim() ? 1 : 0.5 }}
                >
                  <Send size={15} />
                </button>
              </div>

              {/* Direct WhatsApp Callout Bottom Banner */}
              <div className="py-1 px-3 bg-light text-center border-top">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-success text-decoration-none small font-weight-bold d-inline-flex align-items-center gap-1"
                  style={{ fontSize: "0.72rem" }}
                >
                  <Phone size={11} />
                  <span>Need human expert? Direct WhatsApp: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}

