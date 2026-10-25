import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES_NAV } from "../data/siteData";
import { 
  Smartphone, 
  Globe, 
  Code, 
  Cpu, 
  Layers, 
  Boxes, 
  Lightbulb, 
  MapPin, 
  ChevronRight 
} from "lucide-react";

const ICON_MAP = {
  Smartphone: Smartphone,
  Globe: Globe,
  Code: Code,
  Cpu: Cpu,
  Layers: Layers,
  Boxes: Boxes,
  Lightbulb: Lightbulb,
  MapPin: MapPin
};

export default function MegaMenu({ show, onClose }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeCategory = SERVICES_NAV[activeTab] || SERVICES_NAV[0];
  const items = activeCategory.items || [];

  return (
    <div className={`mega-menu-container ${show ? "show" : ""}`}>
      <div className="mega-menu-inner">
        {/* Left Sidebar Category Tabs */}
        <div className="mega-menu-sidebar">
          {SERVICES_NAV.map((cat, idx) => {
            const isActive = activeTab === idx;
            const IconComp = ICON_MAP[cat.icon] || Code;

            return (
              <div
                key={idx}
                className={`mega-menu-tab ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveTab(idx)}
                onClick={() => setActiveTab(idx)}
              >
                <div className="mega-menu-tab-icon-box">
                  <IconComp size={18} />
                </div>
                <span className="mega-menu-tab-label">{cat.category}</span>
                <ChevronRight size={16} className="mega-menu-tab-arrow" />
              </div>
            );
          })}
        </div>

        {/* Vertical Separator Line */}
        <div className="mega-menu-divider"></div>

        {/* Right Content Panel */}
        <div className="mega-menu-content">
          <div className="d-flex flex-column gap-1">
            {items.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="mega-menu-sublink"
                onClick={onClose}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
