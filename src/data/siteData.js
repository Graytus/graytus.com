import corporateWebImg from "../assets/porfolio/web.png";
import mobileAppImg from "../assets/porfolio/app.png";
import softwareImg from "../assets/porfolio/software.png";
import saasImg from "../assets/porfolio/saas.png";
import ecommerceImg from "../assets/porfolio/ecommerce.png";
import propertyImg from "../assets/porfolio/property.png";
import otaImg from "../assets/porfolio/ota.png";
import erpImg from "../assets/porfolio/erp.png";
import dynamicImg from "../assets/services/dynamic.png";
import cloudImg from "../assets/porfolio/cloud.png";

export const COMPANY_INFO = {
  name: "Graytus Technologies",
  tagline: "Building Digital Solutions That Move Businesses Forward",
  description: "We design and develop high-performance websites, mobile applications, custom software, and intelligent digital solutions that help global enterprises and ambitious startups grow.",
  establishedYear: 2020,
  email: "admin@graytustechnologies.com",
  phone: "+91 73586 77780",
  whatsapp: "+917358677780",
  address: "Vasavi Nagar, No 64/1F, Manalurpet Rd, Kilanaikkarai, Tiruvannamalai, Tamil Nadu 606603",
  workingHours: "Mon - Sat: 9:30 AM - 6:00 PM",
  socials: {
    instagram: "https://www.instagram.com/graytustechnologies/",
    facebook: "https://facebook.com/graytustech",
    linkedin: "https://www.linkedin.com/feed/",
    whatsapp: "https://wa.me/917358677780",
    twitter: "https://twitter.com/graytustech",
    github: "https://github.com/graytustechnologies"
  },
  stats: [
    { value: 50, label: "Projects Delivered", suffix: "+" },
    { value: 30, label: "Happy Clients", suffix: "+" },
    { value: 15, label: "Technologies", suffix: "+" },
    { value: 5, label: "Countries Served", suffix: "+" }
  ]
};

export const SERVICES_NAV = [
  {
    category: "Website Development",
    slug: "website-development",
    icon: "Globe",
    description: "Scalable, high-converting web applications & platforms.",
    items: [
      { name: "Static Website", path: "/services/static-website", desc: "Ultra-fast, secure & lightweight modern static websites." },
      { name: "Dynamic Website", path: "/services/dynamic-website", desc: "Interactive database-driven dynamic web portals." },
      { name: "Ecommerce website", path: "/services/ecommerce-website", desc: "High-converting online stores with secure checkouts." }
    ]
  },
  {
    category: "Mobile App Development",
    slug: "mobile-app-development",
    icon: "Smartphone",
    description: "Next-gen iOS, Android & cross-platform mobile experiences.",
    items: [
      { name: "Mobile App Development", path: "/services/mobile-app-development", desc: "End-to-end mobile strategy, native & hybrid apps." },
      { name: "Android App Development", path: "/services/android-app-development", desc: "Kotlin-powered high performance Android solutions." }
    ]
  },
  {
    category: "Software Solutions",
    slug: "software-development",
    icon: "Layers",
    description: "Bespoke enterprise software suites and SaaS platforms.",
    items: [
      { name: "Custom Software Development", path: "/services/custom-software-development", desc: "Tailored software built for unique enterprise needs." },
      { name: "SaaS Development", path: "/services/saas-development", desc: "Multi-tenant cloud platforms designed for scale." },
      { name: "ERP Development", path: "/services/erp-development", desc: "Centralized enterprise resource planning solutions." }
    ]
  },
  {
    category: "Hospitality Services",
    slug: "hospitality-services",
    icon: "Building2",
    description: "Comprehensive digital solutions for hotels, resorts & vacation rentals.",
    items: [
      { name: "OTA Listing Management", path: "/services/ota-listing-management", desc: "Multi-channel distribution across Booking.com, Airbnb & Agoda." },
      { name: "Property Management System", path: "/services/property-management-system", desc: "End-to-end hotel, resort & vacation rental management software." }
    ]
  }
];

export const ALL_SERVICES_DETAILS = {
  "website-development": {
    title: "Website Development Services",
    subtitle: "High-performance, scalable websites designed to turn visitors into long-term enterprise customers.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Website Development",
    intro: "At Graytus Technologies, we craft bespoke web applications engineered for speed, security, and effortless scalability. Whether you require an enterprise corporate portal, a complex SaaS web platform, or a high-converting web app, our senior engineering team delivers flawless digital products built with modern web technologies.",
    whyChoose: [
      "Sub-second load speeds optimized for Core Web Vitals",
      "Pixel-perfect responsive design across all viewports",
      "Robust security architecture with OWASP compliance",
      "SEO-ready semantic code structure",
      "Seamless API integrations with third-party tools"
    ],
    technologies: ["React", "Next.js", "Node.js", "HTML5", "CSS3", "JavaScript", "Bootstrap 5", "MongoDB", "PostgreSQL", "AWS"],
    whatWeOffer: [
      { title: "Business Website Development", desc: "Corporate sites engineered to establish brand authority and drive inbound lead pipelines." },
      { title: "Custom Web Application Development", desc: "Complex web applications tailored to streamline internal workflows and customer portals." },
      { title: "eCommerce Development", desc: "High-throughput online storefronts integrated with secure payment gateways." },
      { title: "Corporate Website Development", desc: "Enterprise-grade web presences built with accessibility, multi-language support, and compliance." },
      { title: "Landing Page Development", desc: "Frictionless, conversion-optimized landing pages engineered for paid advertising campaigns." },
      { title: "CMS Development", desc: "Headless and decoupled CMS solutions empowering marketing teams to publish content rapidly." }
    ],
    process: [
      { step: "01", title: "Discovery & Requirements", desc: "Deep dive into your business goals, target persona, and technical prerequisites." },
      { step: "02", title: "Architecture & UI/UX", desc: "Interactive Figma wireframes, design token systems, and database schema mapping." },
      { step: "03", title: "Agile Development", desc: "Sprint-based coding using clean modular React & Node architecture." },
      { step: "04", title: "Testing & QA", desc: "Automated end-to-end testing, cross-browser audits, and load pressure checks." },
      { step: "05", title: "Deployment & Launch", desc: "Zero-downtime CI/CD deployment to cloud servers with SSL configuration." },
      { step: "06", title: "Post-Launch Support", desc: "24/7 monitoring, regular patch maintenance, and feature enhancements." }
    ],
    benefits: [
      "3x Faster Time to Market using reusable component libraries",
      "99.99% Guaranteed uptime architecture",
      "Enhanced conversion rates with intuitive UX flows",
      "Dedicated account management and transparent weekly reporting"
    ],
    faqs: [
      { q: "How long does it take to build a custom website?", a: "Standard corporate web projects typically take 4 to 6 weeks, while large-scale custom web applications take 8 to 12 weeks depending on scope." },
      { q: "Do you provide source code ownership?", a: "Yes, 100% of the intellectual property and codebase rights belong to you upon project delivery." },
      { q: "Will the website be mobile friendly?", a: "Absolutely. We follow a strict mobile-first engineering approach so your site performs flawlessly on mobile, tablet, and desktop screens." }
    ]
  },
  "static-website": {
    title: "Static Website Development Services",
    subtitle: "At Graytus Technologies, we build high-performance static websites using HTML5, CSS3, JavaScript, and React. Our websites offer responsive design, faster loading, enhanced security, and SEO-friendly structure to strengthen your online presence.",
    category: "Website Development",
    intro: "At Graytus Technologies, we engineer high-performance static websites built with modern HTML5, CSS3, React, and JAMstack architectures. Perfect for corporate brochures, landing pages, and portfolios that require maximum loading speed, top-tier security, and zero database server maintenance.",
    whyChoose: [
      "Fast Loading & Optimized Performance",
      "Enhanced Security & Scalability",
      "Mobile-Friendly Responsive Design",
      "SEO-Friendly Structure & Core Web Vitals"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TailwindCSS", "Bootstrap 5", "Vercel", "Cloudflare"],
    whatWeOffer: [
      { title: "Corporate Brochure Websites", desc: "Sleek, responsive business websites that present your brand with elegance and authority." },
      { title: "High-Converting Landing Pages", desc: "Frictionless campaign landing pages engineered to maximize lead conversions." },
      { title: "Portfolio & Showcase Platforms", desc: "Visually stunning showcase platforms for agencies, enterprises, and executives." }
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "Understanding your brand tone, target audience, and content requirements." },
      { step: "02", title: "Figma UI/UX Design", desc: "Creating pixel-perfect responsive layouts tailored for mobile, tablet, and desktop." },
      { step: "03", title: "Semantic Development", desc: "Writing clean, modular HTML5/CSS3/React code with lightweight assets." },
      { step: "04", title: "PageSpeed & SEO Audit", desc: "Auditing Core Web Vitals to achieve 95+ Google PageSpeed ratings." },
      { step: "05", title: "Global CDN Launch", desc: "Deploying to ultra-fast edge CDN servers with automated SSL certification." },
      { step: "06", title: "Ongoing Support", desc: "Periodic content updates, performance checks, and feature enhancements." }
    ],
    benefits: [
      "Near-zero server maintenance and hosting costs",
      "Instant worldwide CDN caching with zero database lags",
      "Bulletproof protection against common web attack vectors"
    ],
    faqs: [
      { q: "What are the advantages of a Static Website?", a: "Static websites load instantly, cost very little to host, and possess virtually zero server vulnerabilities because they serve pre-rendered HTML/CSS/JS directly from edge CDNs without waiting for database queries." },
      { q: "Can we still update content on a static website?", a: "Yes! We can integrate a headless CMS or simple Markdown/Git workflow so your team can easily update content and imagery without touching code." }
    ]
  },
  "dynamic-website": {
    title: "Dynamic Website Development Services",
    subtitle: "At Graytus Technologies, we develop dynamic websites and database-driven web applications with real-time content, secure user access, and seamless functionality to support your business growth.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Website Development",
    intro: "Graytus Technologies builds robust dynamic websites and custom web portals powered by modern databases and backend microservices. Whether you require user authentication, interactive dashboards, real-time data sync, or custom content management, we deliver seamless experiences tailored to your business operations.",
    whyChoose: [
      "Real-Time Database Integration & Dynamic Content",
      "Secure User Authentication & Role-Based Access",
      "REST API & GraphQL Integration`",
      "Interactive UI & Responsive Web Design"
    ],
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    whatWeOffer: [
      { title: "Custom Web Portals", desc: "Secure portals with user logins, role permissions, and customized analytics dashboards." },
      { title: "Database-Driven Web Apps", desc: "Full-stack web applications capable of processing complex queries and high data volumes." },
      { title: "Interactive Business Systems", desc: "Dynamic booking systems, calculators, client intake forms, and user workflows." }
    ],
    process: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your business goals, website requirements, and target audience.", icon: "ClipboardList" },
      { step: "02", title: "02. UI/UX Design", desc: "We create user-friendly website layouts with responsive and intuitive designs.", icon: "Layout" },
      { step: "03", title: "03. Frontend Development", desc: "We build interactive website interfaces using modern web technologies.", icon: "Code2" },
      { step: "04", title: "04. Backend & Database Development", desc: "We integrate databases, server-side logic, and secure user authentication.", icon: "Database" },
      { step: "05", title: "05. API Integration", desc: "We connect third-party services and APIs for seamless website functionality.", icon: "Plug" },
      { step: "06", title: "06. Testing & Optimization", desc: "We test functionality, security, responsiveness, and website performance.", icon: "ShieldCheck" },
      { step: "07", title: "07. Deployment & Maintenance", desc: "We launch your dynamic website and provide ongoing support and updates.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your business goals, website requirements, and target audience.", icon: "ClipboardList" },
      { step: "02", title: "02. UI/UX Design", desc: "We create user-friendly website layouts with responsive and intuitive designs.", icon: "Layout" },
      { step: "03", title: "03. Frontend Development", desc: "We build interactive website interfaces using modern web technologies.", icon: "Code2" },
      { step: "04", title: "04. Backend & Database Development", desc: "We integrate databases, server-side logic, and secure user authentication.", icon: "Database" },
      { step: "05", title: "05. API Integration", desc: "We connect third-party services and APIs for seamless website functionality.", icon: "Plug" },
      { step: "06", title: "06. Testing & Optimization", desc: "We test functionality, security, responsiveness, and website performance.", icon: "ShieldCheck" },
      { step: "07", title: "07. Deployment & Maintenance", desc: "We launch your dynamic website and provide ongoing support and updates.", icon: "Rocket" }
    ],
    benefits: [
      "Personalized experiences tailored to each user's profile and session",
      "Automated operational workflows replacing manual spreadsheet tasks",
      "Seamless real-time synchronization across multiple devices"
    ],
    faqs: [
      { q: "How is a Dynamic Website different from a Static Website?", a: "A dynamic website generates content in real time based on user interactions, database records, and server logic, enabling features like user accounts, search filters, and custom dashboards." },
      { q: "Is a dynamic website scalable for high traffic?", a: "Yes, our cloud-native architectures auto-scale seamlessly on AWS/Docker to handle millions of simultaneous users." }
    ]
  },
  "ecommerce-website": {
    title: "eCommerce Website Development Services",
    subtitle: "At Graytus Technologies, we develop secure, responsive, and SEO-friendly eCommerce websites that help businesses sell products online, manage orders efficiently, and deliver a seamless shopping experience across all devices.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Website Development",
    intro: "Transform your online retail business with high-performance eCommerce websites. Graytus Technologies designs and builds custom online stores with lightning-fast checkouts, seamless payment gateway integrations, automated inventory management, and intuitive user experiences designed to maximize conversion rates.",
    whyChoose: [
      "User-Friendly Shopping Cart & Checkout",
      "Secure Payment Gateway Integration",
      "Product & Inventory Management",
      "Order Tracking & Management"
    ],
    technologies: ["React", "Next.js", "Node.js", "Shopify GraphQL", "WooCommerce", "Stripe API", "PostgreSQL", "Redis", "AWS"],
    whatWeOffer: [
      { title: "Custom Online Storefronts", desc: "Bespoke eCommerce platforms tailored to your brand identity and product catalog." },
      { title: "Omnichannel Shopping Portals", desc: "Unified checkout, inventory, and order tracking across web and mobile platforms." },
      { title: "Payment Gateway & ERP Integrations", desc: "Automated tax calculation, shipping logistics, and multi-currency payment processing." }
    ],
    howWeWorkSubtitle: "7 Steps to Build Your Online Store",
    process: [
      { step: "01", title: "01. Business Requirements", desc: "We understand your products, business goals, and target customers.", icon: "ClipboardList" },
      { step: "02", title: "02. Store Design", desc: "We create an attractive, user-friendly, and mobile-responsive online store.", icon: "Palette" },
      { step: "03", title: "03. Product Catalog Setup", desc: "We organize product listings, categories, images, prices, and inventory.", icon: "Package" },
      { step: "04", title: "04. Shopping Cart & Checkout", desc: "We build a smooth shopping experience with a simple checkout process.", icon: "ShoppingCart" },
      { step: "05", title: "05. Payment & Shipping Integration", desc: "We integrate suitable payment gateways and shipping solutions.", icon: "CreditCard" },
      { step: "06", title: "06. Testing & Optimization", desc: "We test orders, payments, security, mobile usability, and website performance.", icon: "ShieldCheck" },
      { step: "07", title: "07. Launch & Support", desc: "We launch your e-commerce website and provide ongoing maintenance and support.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "01. Business Requirements", desc: "We understand your products, business goals, and target customers.", icon: "ClipboardList" },
      { step: "02", title: "02. Store Design", desc: "We create an attractive, user-friendly, and mobile-responsive online store.", icon: "Palette" },
      { step: "03", title: "03. Product Catalog Setup", desc: "We organize product listings, categories, images, prices, and inventory.", icon: "Package" },
      { step: "04", title: "04. Shopping Cart & Checkout", desc: "We build a smooth shopping experience with a simple checkout process.", icon: "ShoppingCart" },
      { step: "05", title: "05. Payment & Shipping Integration", desc: "We integrate suitable payment gateways and shipping solutions.", icon: "CreditCard" },
      { step: "06", title: "06. Testing & Optimization", desc: "We test orders, payments, security, mobile usability, and website performance.", icon: "ShieldCheck" },
      { step: "07", title: "07. Launch & Support", desc: "We launch your e-commerce website and provide ongoing maintenance and support.", icon: "Rocket" }
    ],
    benefits: [
      "Substantially higher checkout completion and conversion rates",
      "Bank-grade payment security compliance (PCI-DSS ready)",
      "High concurrency architecture prepared for flash sales and holiday traffic"
    ],
    faqs: [
      { q: "Which payment gateways do you support?", a: "We support Stripe, PayPal, Razorpay, Authorize.net, Apple Pay, Google Pay, and custom bank APIs." },
      { q: "Will our eCommerce site be optimized for mobile shoppers?", a: "Yes, all our storefronts are engineered mobile-first with sub-second page loads to minimize cart abandonment." }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development Services",
    subtitle: "At Graytus Technologies, we provide professional mobile app development services to build high-performance Android and iOS applications. Our custom mobile apps feature intuitive UI/UX design, secure integrations, and responsive performance to enhance user engagement and support business growth.",
    heroImage: "/images/portfolio-health.jpg",
    category: "Mobile App Development",
    intro: "Graytus Technologies builds transformative mobile apps for iOS and Android. From intuitive consumer applications with millions of downloads to mission-critical enterprise mobility solutions, we combine slick UI animations with rock-solid backend infrastructure.",
    whyChoose: [
      "Native & Cross-Platform App Development",
      "API Integration & Offline Data Sync",
      "GPS, Camera & Biometric Integration",
      "App Store & Google Play Deployment Support"
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Node.js", "GraphQL", "REST APIs"],
    whatWeOffer: [
      { title: "Android App Development", desc: "Kotlin-powered native Android applications built for all device form factors." },
      { title: "iOS App Development", desc: "Swift & SwiftUI native iOS applications optimized for iPhone, iPad, and Apple Watch." },
      { title: "Flutter Development", desc: "Cross-platform applications delivering native feel from a single unified codebase." },
      { title: "React Native Development", desc: "High-speed cross-platform app development leveraging JavaScript ecosystem power." },
      { title: "App UI/UX Design", desc: "Engaging, user-tested mobile interfaces designed to maximize daily active users." },
      { title: "Mobile App Maintenance", desc: "Regular OS compatibility patches, security updates, and performance tuning." }
    ],
    howWeWorkSubtitle: "Our mobile app development process guides your product smoothly from concept to app store launch with precision.",
    process: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your app idea, business goals, and target users.", icon: "ClipboardList" },
      { step: "02", title: "02. Planning & Strategy", desc: "We define app features, technology, and development strategy.", icon: "Lightbulb" },
      { step: "03", title: "03. UI/UX Design", desc: "We create intuitive, attractive, and user-friendly app interfaces.", icon: "Palette" },
      { step: "04", title: "04. App Development", desc: "We build functional mobile apps for Android and iOS platforms.", icon: "Code2" },
      { step: "05", title: "05. API & Database Integration", desc: "We connect databases, APIs, authentication, and essential app services.", icon: "Plug" },
      { step: "06", title: "06. Testing & Quality Assurance", desc: "We test app performance, security, compatibility, and functionality.", icon: "ShieldCheck" },
      { step: "07", title: "07. Launch & Maintenance", desc: "We publish your app on the relevant app stores and provide ongoing support.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your app idea, business goals, and target users.", icon: "ClipboardList" },
      { step: "02", title: "02. Planning & Strategy", desc: "We define app features, technology, and development strategy.", icon: "Lightbulb" },
      { step: "03", title: "03. UI/UX Design", desc: "We create intuitive, attractive, and user-friendly app interfaces.", icon: "Palette" },
      { step: "04", title: "04. App Development", desc: "We build functional mobile apps for Android and iOS platforms.", icon: "Code2" },
      { step: "05", title: "05. API & Database Integration", desc: "We connect databases, APIs, authentication, and essential app services.", icon: "Plug" },
      { step: "06", title: "06. Testing & Quality Assurance", desc: "We test app performance, security, compatibility, and functionality.", icon: "ShieldCheck" },
      { step: "07", title: "07. Launch & Maintenance", desc: "We publish your app on the relevant app stores and provide ongoing support.", icon: "Rocket" }
    ],
    benefits: [
      "Reduced development cost with cross-platform engineering options",
      "Higher App Store ratings with user-centered friction reduction",
      "Bulletproof encryption for user data privacy"
    ],
    faqs: [
      { q: "Should I choose Native or Cross-Platform?", a: "For maximum cost efficiency and speed to market, Flutter or React Native is ideal. For ultra-specialized hardware performance, native Swift/Kotlin is recommended. We guide you during discovery." },
      { q: "Do you handle App Store and Google Play submissions?", a: "Yes, our team manages the entire submission process until your app is live and available for download." }
    ]
  },
  "software-development": {
    title: "Custom Software Development Services",
    tagline: "Scalable, Secure & Business-Focused Software Solutions",
    subtitle: "At Graytus Technologies, we provide custom software development services to help businesses streamline operations, improve productivity, and accelerate growth. We build secure, scalable, and reliable software solutions tailored to your unique business requirements using modern technologies and industry best practices.",
    heroImage: "/images/blog-cloud.jpg",
    category: "Software Development",
    intro: "At Graytus Technologies, we provide custom software development services to help businesses streamline operations, improve productivity, and accelerate growth. We build secure, scalable, and reliable software solutions tailored to your unique business requirements using modern technologies and industry best practices.",
    featuresHeading: "Key Features",
    whyChoose: [
      "Custom Software Solutions for Your Business",
      // "Scalable Architecture & High Performance",
      "Secure Data Management & System Integration",
      "Workflow Automation & Process Optimization",
      "Ongoing Software Maintenance & Technical Support"
    ],
    technologies: ["Python", "Node.js", "Java", "C# / .NET", "Docker", "Kubernetes", "PostgreSQL", "AWS", "Redis"],
    whatWeOffer: [
      { title: "Custom Software Development", desc: "Bespoke business platforms tailored to eliminate operational bottlenecks." },
      { title: "SaaS Development", desc: "Multi-tenant SaaS platforms equipped with billing, RBAC, and analytics." },
      { title: "ERP Software Development", desc: "Integrated resource planning covering inventory, HR, finance, and supply chain." },
      { title: "CRM Development", desc: "Custom relationship management platforms with automated lead pipeline tracking." },
      { title: "Enterprise Application Integration", desc: "Connecting legacy software systems with modern cloud microservices." },
      { title: "Software Maintenance & Refactoring", desc: "Modernizing legacy codebases into modular cloud-native architectures." }
    ],
    process: [
      { step: "01", title: "System Audit", desc: "Analyzing current software bottlenecks and defining technical specifications." },
      { step: "02", title: "Architecture Blueprint", desc: "Designing database models, API gateways, and microservice boundaries." },
      { step: "03", title: "Iterative Sprints", desc: "Bi-weekly sprint deliveries with functional software demonstrations." },
      { step: "04", title: "Security & Load Testing", desc: "Penetration testing, stress load checks, and compliance audits." },
      { step: "05", title: "Enterprise Deployment", desc: "Automated CI/CD pipelines to AWS/Azure cloud infrastructure." },
      { step: "06", title: "Continuous SLA Support", desc: "Guaranteed turnaround times for maintenance and operational support." }
    ],
    benefits: [
      "Zero recurring license fees compared to off-the-shelf software",
      "Total customization matching exact company SOPs",
      "Enhanced security protecting proprietary business data"
    ],
    faqs: [
      { q: "Can you modernize our existing legacy software?", a: "Yes. We specialize in legacy code refactoring, migrating monoliths to cloud-native microservices without interrupting daily operations." },
      { q: "How do you protect project confidentiality?", a: "We sign strict Non-Disclosure Agreements (NDAs) prior to any project discussion." }
    ]
  },
  "saas-development": {
    title: "SaaS Development Services",
    tagline: "Scalable, Secure & Cloud-Based SaaS Solutions",
    subtitle: "At Graytus Technologies, we provide custom SaaS development services to build secure, scalable, and cloud-based software solutions. We develop user-friendly SaaS applications that streamline business operations, improve productivity, and support long-term business growth.",
    heroImage: "/images/blog-cloud.jpg",
    category: "Software Solutions",
    intro: "At Graytus Technologies, we provide custom SaaS development services to build secure, scalable, and cloud-based software solutions. We develop user-friendly SaaS applications that streamline business operations, improve productivity, and support long-term business growth.",
    featuresHeading: "Key Features",
    whyChoose: [
      "Custom SaaS Application Development",
      "Scalable Cloud-Based Architecture",
      "Secure User Authentication & Data Protection",
      "Third-Party API & Payment Gateway Integration",
      "Ongoing SaaS Maintenance & Technical Support"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Stripe", "Redis"],
    whatWeOffer: [
      { title: "Multi-Tenant SaaS Architecture", desc: "Secure multi-tenancy models with shared and isolated database partitioning for high efficiency." },
      { title: "Subscription & Billing Engine", desc: "Automated recurring billing, invoicing, free trials, and tier upgrades via Stripe and PayPal." },
      { title: "Custom SaaS MVP Development", desc: "Fast-track minimum viable product engineering designed to validate ideas and onboard early adopters." },
      { title: "API-First & Microservices Integration", desc: "Robust REST & GraphQL APIs allowing third-party tools and enterprise clients to connect seamlessly." },
      { title: "Role-Based Access Control (RBAC)", desc: "Granular access management, enterprise single sign-on (SSO), and two-factor authentication." },
      { title: "SaaS Cloud Migration & Scaling", desc: "Refactoring legacy on-premise software into high-availability cloud-native SaaS platforms." }
    ],
    process: [
      { step: "01", title: "Product Discovery & Architecture", desc: "Defining user roles, subscription models, multi-tenant tenancy, and cloud database schema." },
      { step: "02", title: "UI/UX & Interactive Wireframing", desc: "Designing intuitive SaaS dashboards, customer portals, and seamless onboarding flows." },
      { step: "03", title: "Core MVP & Feature Development", desc: "Sprint-based development of multi-tenant logic, authentication, and core workflow capabilities." },
      { step: "04", title: "Billing & Third-Party Integration", desc: "Integrating automated payments, webhooks, CRM sync, and transaction email systems." },
      { step: "05", title: "Security Audit & Load Testing", desc: "Data isolation verification, penetration testing, and stress testing under concurrent user loads." },
      { step: "06", title: "Cloud Deployment & Continuous SLA", desc: "Automated CI/CD deployment on AWS/Azure with 24/7 server monitoring and feature updates." }
    ],
    benefits: [
      "Recurring revenue business model with scalable cloud infrastructure",
      "Zero per-user software installation requirements for end clients",
      "100% proprietary intellectual property rights code ownership"
    ],
    faqs: [
      { q: "What multi-tenancy architecture do you recommend for SaaS?", a: "We typically recommend a hybrid multi-tenant approach with logical data isolation (shared application, partitioned or schema-isolated database) for optimal balance of cost, security, and scalability." },
      { q: "Can you integrate subscription payments like Stripe?", a: "Yes, we implement complete subscription lifecycles including recurring billing, tiered pricing, invoice generation, card updates, and prorated plan upgrades." },
      { q: "Do you build MVPs for early-stage SaaS startups?", a: "Yes, we specialize in building fast-to-market SaaS MVPs within 6 to 10 weeks so you can launch, test, and gather early user feedback." }
    ]
  },
  "erp-development": {
    title: "ERP Development Services",
    tagline: "Custom, Scalable & Integrated ERP Software Solutions",
    subtitle: "At Graytus Technologies, we provide custom ERP development services to help businesses streamline operations, automate workflows, and manage resources efficiently. Our secure and scalable ERP solutions integrate business processes into one centralized system, improving productivity and supporting business growth.",
    heroImage: "/images/blog-cloud.jpg",
    category: "Software Solutions",
    intro: "At Graytus Technologies, we provide custom ERP development services to help businesses streamline operations, automate workflows, and manage resources efficiently. Our secure and scalable ERP solutions integrate business processes into one centralized system, improving productivity and supporting business growth.",
    featuresHeading: "Key Features",
    whyChoose: [
      "Custom ERP Software Development",
      "Inventory, Finance & Employee Management",
      "Business Process Automation",
      "Real-Time Reporting & Data Management",
      "Third-Party System Integration & Ongoing Support"
    ],
    technologies: ["Node.js", "Python", "Java", "PostgreSQL", "React", "Docker", "AWS", "Redis", "Kafka"],
    whatWeOffer: [
      { title: "Custom ERP Software Development", desc: "Bespoke enterprise management platforms built around your precise business workflows and organizational hierarchy." },
      { title: "Inventory & Supply Chain Management", desc: "Real-time stock tracking, automated reordering, multi-warehouse management, and vendor logistics." },
      { title: "Finance, Billing & Accounting", desc: "Automated invoicing, payroll calculation, expense tracking, tax compliance, and financial ledger analytics." },
      { title: "HRM & Employee Management", desc: "Staff attendance, performance management, leaves, shift scheduling, and recruitment pipeline tracking." },
      { title: "Business Process Automation", desc: "Eliminating manual bottlenecks with automated trigger workflows and paperless task approvals." },
      { title: "Legacy ERP Migration & Integration", desc: "Seamlessly connecting existing legacy ERPs (SAP, Oracle, Tally) with modern cloud APIs." }
    ],
    process: [
      { step: "01", title: "Business Workflow Audit", desc: "Analyzing operational bottlenecks, department dependencies, data models, and integration points." },
      { step: "02", title: "Custom ERP Architecture", desc: "Designing unified database structures, role-based security access matrices, and API pipelines." },
      { step: "03", title: "Modular Core Development", desc: "Agile sprints delivering functional ERP modules for finance, inventory, HR, and sales operations." },
      { step: "04", title: "Data Migration & Testing", desc: "Safe migration of legacy records, stress load testing, security audits, and regression checks." },
      { step: "05", title: "Enterprise Deployment", desc: "Zero-downtime deployment to secure private cloud or on-premise infrastructure with full SSL encryption." },
      { step: "06", title: "Staff Training & Continuous SLA", desc: "Comprehensive user onboarding, dedicated administrative training, and round-the-clock technical support." }
    ],
    benefits: [
      "Centralized single source of truth across all departments",
      "Significant reduction in manual administrative overhead",
      "100% customized logic matching exact company standard operating procedures"
    ],
    faqs: [
      { q: "Can the ERP system integrate with our existing accounting software?", a: "Yes, our custom ERP solutions seamlessly integrate with accounting tools like Tally, QuickBooks, Zoho Books, as well as custom payment gateways and CRM platforms." },
      { q: "Can we develop the ERP in progressive phases?", a: "Absolutely. We often follow a phased module-by-module rollout (e.g., Inventory & Billing first, followed by HR & Supply Chain) to minimize operational disruption." },
      { q: "Is our business data secure within the ERP?", a: "Yes, we implement enterprise-grade security including Role-Based Access Control (RBAC), end-to-end data encryption, audit trails, and automated backups." }
    ]
  },
  "ai-development": {
    title: "AI & Machine Learning Solutions",
    subtitle: "Empowering modern enterprises with autonomous AI agents, fine-tuned LLMs, and predictive models.",
    heroImage: "/images/blog-ai.jpg",
    category: "AI & Technology",
    intro: "Transform your business with cutting-edge artificial intelligence. Graytus Technologies helps organizations harness Generative AI, Retrieval-Augmented Generation (RAG), custom machine learning models, and autonomous AI agents to automate complex knowledge tasks.",
    whyChoose: [
      "Custom RAG architectures connected directly to internal company knowledge bases",
      "Fine-tuned open-source and proprietary models (OpenAI, Llama, Claude)",
      "Strict data privacy preventing training leakages on public models",
      "Intelligent workflow automation delivering 10x productivity gains"
    ],
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenAI API", "LangChain", "Pinecone", "FastAPI", "Docker"],
    whatWeOffer: [
      { title: "AI Agent Development", desc: "Autonomous AI agents capable of multi-step task execution and system interaction." },
      { title: "AI Chatbot Development", desc: "Context-aware conversational assistants trained on enterprise documentation." },
      { title: "Generative AI Solutions", desc: "Custom LLM integrations, automated content generation, and multimodal synthesis." },
      { title: "Machine Learning Engineering", desc: "Predictive analytics, recommendation engines, and anomaly detection models." },
      { title: "Computer Vision", desc: "Automated visual inspection, optical character recognition (OCR), and video analytics." },
      { title: "AI Process Automation", desc: "Intelligent document processing and automated workflow orchestration." }
    ],
    process: [
      { step: "01", title: "AI Feasibility Study", desc: "Evaluating data readiness, model selection, and ROI projection." },
      { step: "02", title: "Data Preparation & RAG", desc: "Cleaning data, generating embeddings, and building vector database indices." },
      { step: "03", title: "Model Fine-Tuning & Prompting", desc: "Training specialized models and engineering robust prompt pipelines." },
      { step: "04", title: "System Integration", desc: "Connecting AI engines with existing enterprise CRMs and web applications." },
      { step: "05", title: "Validation & Guardrails", desc: "Implementing hallucination checks and safety guardrails." },
      { step: "06", title: "Deployment & Optimization", desc: "Monitoring latency, token usage, and continuous model accuracy fine-tuning." }
    ],
    benefits: [
      "Up to 70% reduction in manual customer support workloads",
      "Instant data retrieval across enterprise knowledge repositories",
      "Data-driven predictive insights driving revenue growth"
    ],
    faqs: [
      { q: "Is our enterprise data safe when using AI models?", a: "Yes. We implement private enterprise endpoints or self-hosted open-source models on your private cloud to ensure zero data retention by external AI providers." },
      { q: "What is the difference between RAG and fine-tuning?", a: "RAG (Retrieval-Augmented Generation) connects private documents in real-time to answer domain queries accurately, while fine-tuning alters base model weights for specialized writing style or vocabulary." },
      { q: "How do you handle AI hallucinations and accuracy?", a: "We apply strict grounding techniques, guardrail verifications, confidence scoring thresholds, and human-in-the-loop review flows for high-stakes business decisions." }
    ]
  },
  "android-app-development": {
    title: "Android App Development Services",
    subtitle: "At Graytus Technologies, we provide professional Android app development services to build fast, secure, and scalable mobile applications tailored to your business needs. Our custom Android apps offer intuitive designs, reliable performance, and seamless integration to enhance user experience and support business growth.",
    heroImage: "/images/portfolio-health.jpg",
    category: "Mobile App Development",
    intro: "We design, build, and deploy native Android applications engineered for top-tier Google Play performance. From custom Android smartphone apps to TV, wear, and tablet ecosystems, Graytus Technologies ensures maximum device coverage.",
    whyChoose: ["Custom Android App Development Using Kotlin & Java", "Fast Performance & Battery Optimization", "Secure API & Database Integration", "GPS, Camera & Device Feature Integration", "Google Play Store Publishing Support"],
    technologies: ["Kotlin", "Java", "Jetpack Compose", "Android SDK", "Room DB", "Retrofit", "Firebase", "Coroutines"],
    whatWeOffer: [
      { title: "Native Android App Engineering", desc: "Fast, responsive Kotlin apps tailored for modern Android OS versions." },
      { title: "Android Tablet & Smart Device Apps", desc: "Adaptive layouts crafted for high-definition screens and enterprise handhelds." },
      { title: "Android App Modernization", desc: "Upgrading legacy Java codebases to clean modular Kotlin Jetpack Compose." }
    ],
    howWeWorkSubtitle: "Android App Development – 6 Steps",
    process: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your app idea, business goals, and target users.", icon: "ClipboardList" },
      { step: "02", title: "02. Planning & UI/UX Design", desc: "We plan app features and design intuitive, user-friendly Android interfaces.", icon: "Palette" },
      { step: "03", title: "03. Android App Development", desc: "We build custom Android applications tailored to your business needs.", icon: "Code2" },
      { step: "04", title: "04. API & Database Integration", desc: "We integrate APIs, databases, and essential app functionalities.", icon: "Plug" },
      { step: "05", title: "05. Testing & Quality Assurance", desc: "We test app performance, security, and compatibility across Android devices.", icon: "ShieldCheck" },
      { step: "06", title: "06. Play Store Launch & Maintenance", desc: "We assist with Google Play Store publishing, updates, and ongoing support.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "01. Requirement Analysis", desc: "We understand your app idea, business goals, and target users.", icon: "ClipboardList" },
      { step: "02", title: "02. Planning & UI/UX Design", desc: "We plan app features and design intuitive, user-friendly Android interfaces.", icon: "Palette" },
      { step: "03", title: "03. Android App Development", desc: "We build custom Android applications tailored to your business needs.", icon: "Code2" },
      { step: "04", title: "04. API & Database Integration", desc: "We integrate APIs, databases, and essential app functionalities.", icon: "Plug" },
      { step: "05", title: "05. Testing & Quality Assurance", desc: "We test app performance, security, and compatibility across Android devices.", icon: "ShieldCheck" },
      { step: "06", title: "06. Play Store Launch & Maintenance", desc: "We assist with Google Play Store publishing, updates, and ongoing support.", icon: "Rocket" }
    ],
    benefits: ["Access millions of Android users worldwide", "Instant push notification engagement", "Offline data sync and local caching"],
    faqs: [
      { q: "Do you support the latest Android 14/15 features?", a: "Yes, all our apps are built targeting the latest Android SDK versions, Material 3 design systems, and Google Play Store requirements." },
      { q: "Do you assist with publishing the app on the Google Play Store?", a: "Yes, we handle complete Play Console submission, app signing, store listing optimization, screenshots, and privacy policy compliance." },
      { q: "How do you ensure the app works smoothly across diverse Android devices?", a: "We run automated and manual QA testing across multiple screen sizes, Android OS versions, and hardware specifications to guarantee consistent performance." }
    ]
  },
  "flutter-app-development": {
    title: "Flutter App Development Services",
    subtitle: "Single codebase multi-platform applications delivering 60 FPS native performance with Dart.",
    heroImage: "/images/portfolio-fintech.jpg",
    category: "Mobile App Development",
    intro: "Leverage Google's Flutter framework to launch iOS, Android, and web applications simultaneously from a single, unified codebase — reducing cost and accelerating time to market.",
    whyChoose: ["Single codebase for iOS & Android", "Hot reload for fast iteration speed", "Custom pixel-perfect widget libraries", "Substantially reduced development overhead"],
    technologies: ["Flutter", "Dart", "BLoC / Provider", "Dio", "Hive / SQLite", "Firebase", "Codemagic"],
    whatWeOffer: [
      { title: "Cross-Platform Mobile Apps", desc: "Unified Flutter apps running seamlessly across iOS and Android smartphones." },
      { title: "Flutter Web & Desktop Solutions", desc: "Extending mobile app features to desktop browsers with zero codebase duplication." }
    ],
    process: [
      { step: "01", title: "Widget Architecture", desc: "Structuring reusable Dart widgets and reactive state management." },
      { step: "02", title: "Agile Development", desc: "Iterative sprints with rapid Hot Reload UI tweaks." },
      { step: "03", title: "Dual-Platform Testing", desc: "Simultaneous automated testing on iOS Simulator and Android Emulator." }
    ],
    benefits: ["Up to 50% cost savings compared to separate native apps", "Consistent UI look across all platforms", "Accelerated release velocity"],
    faqs: [
      { q: "Is Flutter suitable for large enterprise applications?", a: "Yes! Major brands like BMW, eBay, and Google trust Flutter for mission-critical mobile applications requiring high performance and brand consistency." },
      { q: "How much time and cost do we save using Flutter?", a: "Because Flutter compiles to both iOS and Android from a single codebase, clients typically save 35% to 50% on engineering hours and maintenance overhead." },
      { q: "Does Flutter support device hardware features like Bluetooth and GPS?", a: "Yes, Flutter provides native platform channels and robust plugins to interact directly with cameras, Bluetooth, biometric authentication, and geolocation." }
    ]
  },
  "react-native-development": {
    title: "React Native App Development Services",
    subtitle: "High-speed cross-platform mobile engineering leveraging JavaScript & React.",
    heroImage: "/images/portfolio-fintech.jpg",
    category: "Mobile App Development",
    intro: "Build native mobile experiences using JavaScript and React. React Native enables rapid feature releases, seamless web-to-mobile code sharing, and native performance.",
    whyChoose: ["JavaScript & React ecosystem power", "Native bridge for device APIs", "Code sharing between Web & Mobile", "Large open-source library ecosystem"],
    technologies: ["React Native", "TypeScript", "Redux Toolkit", "Expo", "Axios", "React Navigation"],
    whatWeOffer: [
      { title: "React Native App Engineering", desc: "Custom cross-platform applications with native component feel." },
      { title: "Native Module Integration", desc: "Connecting custom native Swift/Kotlin modules to React Native JavaScript bridges." }
    ],
    process: [
      { step: "01", title: "Component Mapping", desc: "Designing cross-platform React Native component hierarchies." },
      { step: "02", title: "State & API Integration", desc: "Connecting Redux/Context state to backend REST & GraphQL endpoints." },
      { step: "03", title: "Performance Profiling", desc: "Optimizing render passes and Hermes engine bundle sizes." }
    ],
    benefits: ["Fast time to market", "Unified web and mobile developer talent", "Proven stability used by Meta & Shopify"],
    faqs: [
      { q: "Can React Native handle complex native features?", a: "Yes, any native device feature can be integrated via custom native Swift/Kotlin bridge modules or verified Expo modules." },
      { q: "Can code be shared between a React web application and React Native mobile app?", a: "Yes, business logic, state management (Redux/Zustand), API hooks, and utility functions can be shared directly across web and mobile codebases." },
      { q: "How does React Native perform compared to pure native apps?", a: "With modern Hermes JavaScript engine and the new Fabric architecture, React Native delivers smooth 60 FPS animations and instant responsiveness." }
    ]
  },
  "custom-web-applications": {
    title: "Custom Web Application Services",
    subtitle: "Bespoke SaaS platforms, enterprise web portals, and complex web apps built for scale.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Website Development",
    intro: "We build tailored web applications that automate workflows, simplify customer interaction, and process millions of data transactions with ease.",
    whyChoose: ["Tailored logic built to match your SOPs", "Scalable cloud-native architecture", "Role-based access control (RBAC)", "Real-time WebSocket data updates"],
    technologies: ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS"],
    whatWeOffer: [
      { title: "Custom Web Apps & Portals", desc: "Full-featured cloud platforms engineered to your precise workflow." },
      { title: "SaaS Web Applications", desc: "Multi-tenant SaaS architectures with automated billing and analytics." }
    ],
    process: [
      { step: "01", title: "Product Blueprint", desc: "Mapping user journeys, database schemas, and API contracts." },
      { step: "02", title: "Sprint Coding", desc: "Agile sprints delivering functional software increments every two weeks." }
    ],
    benefits: ["Zero licensing overhead", "Complete proprietary software IP ownership", "Custom integrations with legacy tools"],
    faqs: [
      { q: "Do you build custom internal portals and admin dashboards?", a: "Yes, we construct bespoke admin dashboards, operational portals, ERPs, and CRMs tailored to your company's exact operational workflows." },
      { q: "How do you secure user data and role-based permissions?", a: "We implement Role-Based Access Control (RBAC), multi-factor authentication (MFA), encrypted database storage, and OWASP-standard security headers." },
      { q: "Can custom web applications scale to handle high concurrent traffic?", a: "Yes, our applications are engineered using cloud-native microservices, Redis caching, database indexing, and auto-scaling container configurations." }
    ]
  },
  "reactjs-development": {
    title: "ReactJS Development Services",
    subtitle: "Ultra-fast dynamic single page applications built with modern React standards.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Website Development",
    intro: "Create fluid, highly interactive frontends with ReactJS. Our senior React developers build responsive web interfaces optimized for state management and high speed.",
    whyChoose: ["Virtual DOM performance optimization", "Reusable component library architecture", "State management with Redux/Zustand", "Seamless REST/GraphQL integrations"],
    technologies: ["React", "Vite", "TypeScript", "Redux Toolkit", "Zustand", "TailwindCSS / Bootstrap", "React Query"],
    whatWeOffer: [
      { title: "Single Page Applications (SPA)", desc: "Lightning-fast single page web apps with zero page refresh delay." },
      { title: "Frontend Refactoring", desc: "Converting legacy jQuery/Angular 1 codebases to modern React components." }
    ],
    process: [
      { step: "01", title: "Design System Tokens", desc: "Building modular React component design systems." },
      { step: "02", title: "State Architecture", desc: "Implementing clean centralized state management and API caching." }
    ],
    benefits: ["Sub-second UI interactions", "Highly maintainable code structure", "Thriving community ecosystem"],
    faqs: [
      { q: "Why use ReactJS for web development?", a: "React provides unmatched component reusability, virtual DOM performance, vast ecosystem tooling, and smooth reactive user experiences." },
      { q: "Do you build single-page applications (SPA) or server-rendered apps (SSR)?", a: "We build both high-speed Single Page Applications using Vite/React and SEO-optimized server-rendered platforms using Next.js depending on your project needs." },
      { q: "How do you maintain code quality and test React applications?", a: "We follow strict modular component architecture, TypeScript typing, ESLint rules, and automated unit and integration tests." }
    ]
  },
  "hospitality-services": {
    title: "Hospitality Technology Services",
    subtitle: "End-to-end digital solutions for hotels, luxury resorts, and vacation rental management.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Hospitality Services",
    intro: "Maximize direct bookings, automate OTA listing channels, and optimize dynamic pricing with Graytus Technologies' hospitality software solutions.",
    whyChoose: ["Automated channel manager sync across Booking.com, Airbnb, Agoda", "Zero-commission direct booking engines", "Property Management System (PMS) integration", "Automated dynamic rate pricing engines"],
    technologies: ["Node.js", "React", "Python", "Stripe Connect", "Channel Manager APIs", "PostgreSQL"],
    whatWeOffer: [
      { title: "OTA Listing Management", desc: "Multi-channel distribution keeping calendars and rates synchronized in real-time." },
      { title: "Property Management System (PMS)", desc: "Comprehensive hotel, resort, and vacation rental front-desk & housekeeping software." },
      { title: "Direct Hotel Booking Engine", desc: "Frictionless direct reservation system saving up to 20% in OTA commissions." },
      { title: "Revenue & Dynamic Pricing Engine", desc: "AI algorithms adjusting room rates based on market demand and local events." }
    ],
    process: [
      { step: "01", title: "Property Audit", desc: "Analyzing current channel setup, PMS tools, and revenue leaks." },
      { step: "02", title: "System Setup", desc: "Connecting API channel managers and setting up custom direct booking widgets." }
    ],
    benefits: ["Higher profit margins with direct bookings", "Eliminate double-booking errors", "Automated guest check-in & communications"],
    faqs: [
      { q: "Can you integrate with our existing hotel PMS?", a: "Yes, we support API integrations with Opera, Cloudbeds, Guesty, and custom PMS systems." },
      { q: "How does your solution help reduce OTA commission fees?", a: "By deploying a frictionless, mobile-friendly direct booking engine on your website, guests book directly with you, saving 15% to 25% in OTA commissions." },
      { q: "Is the hospitality software suitable for single properties and chains?", a: "Yes, our systems are multi-property ready, allowing central management of rates, reservations, and analytics across all your locations." }
    ]
  },
  "ota-listing-management": {
    title: "OTA Listing Management Services",
    subtitle: "Boost your property's online visibility and booking opportunities with Graytus Technologies. We provide professional OTA listing setup and management services for hotels, resorts, guest houses, and vacation rentals.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Hospitality Services",
    intro: "Eliminate double-booking headaches and maximize occupancy. Our OTA listing management system connects your hotel or vacation rental to top global OTAs in real time.",
    whyChoose: ["OTA Property Listing & Setup", "Room Rates & Availability Management", "Property Content Optimization", "Multi-Platform Listing Management"],
    technologies: ["Node.js", "iCal / Channel Manager APIs", "PostgreSQL", "React", "Stripe"],
    whatWeOffer: [
      { title: "2-Way OTA Channel Synchronization", desc: "Automatic rate and availability updates across all booking channels." },
      { title: "Centralized Reservation Dashboard", desc: "Single inbox and calendar view for all incoming guest stays." }
    ],
    howWeWorkTitle: "How Our OTA Listing Process Works",
    howWeWorkSubtitle: "Get Your Property Listed with Graytus Technologies!",
    process: [
      { step: "01", title: "Client Details Collection", desc: "We collect property details, room information, photos, amenities, pricing, and required documents from the client.", icon: "ClipboardList" },
      { step: "02", title: "OTA Listing Setup", desc: "We create and configure property listings on two selected OTA platforms based on the client's requirements.", icon: "Layout" },
      { step: "03", title: "Listing Goes Live", desc: "We verify the listing details, complete the required platform procedures, and help get the property live and ready to receive bookings.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "01. Client Details Collection", desc: "We collect property details, room information, photos, amenities, pricing, and required documents from the client.", icon: "ClipboardList" },
      { step: "02", title: "02. OTA Listing Setup", desc: "We create and configure property listings on two selected OTA platforms based on the client's requirements.", icon: "Layout" },
      { step: "03", title: "03. Listing Goes Live", desc: "We verify the listing details, complete the required platform procedures, and help get the property live and ready to receive bookings.", icon: "Rocket" }
    ],
    benefits: ["Zero double-bookings", "Increased OTA search ranking", "Save hours of manual calendar updates daily"],
    faqs: [
      { q: "Which OTAs do you support?", a: "We support Booking.com, Airbnb, Agoda, Expedia, Vrbo, TripAdvisor, and custom iCal feeds." },
      { q: "How do you prevent overbooking and double-booking errors?", a: "Our 2-way real-time calendar synchronization instantly closes dates across all connected platforms the moment a reservation is confirmed on any channel." },
      { q: "Do you help optimize property descriptions and photos for higher rankings?", a: "Yes, we optimize listing titles, amenities checklists, high-resolution imagery order, and keyword placement to maximize your property's visibility." }
    ]
  },
  "property-management-system": {
    title: "Property Management",
    subtitle: "Simplify your property operations with Graytus Technologies. We help hotels, resorts, and guest houses manage bookings, room rates, availability calendars, and social media through reliable property management systems",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Hospitality Services",
    intro: "Empower front desk teams and property managers with a centralized cloud PMS. Manage check-ins, housekeeping, folios, and guest communication from any browser or smartphone.",
    whyChoose: ["Booking Notifications Timely reservation updates.", "Rates Management Room price updates.", "Calendar Management Availability and booking updates.", "Social Media Handling and page management."],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Twilio", "Stripe"],
    whatWeOffer: [
      { title: "Custom PMS Dashboard", desc: "Intuitive front-desk grid showing occupied, clean, and dirty rooms in real time." },
      { title: "Guest Portal & Digital Check-In", desc: "Contactless digital check-in and keyless room access options." }
    ],
    howWeWorkTitle: "How Our Property Management Works",
    howWeWorkSubtitle: "A streamlined approach to handling bookings, rates, availability, and owner updates.",
    process: [
      { step: "01", title: "Property Onboarding", desc: "Collect property details and understand your requirements.", icon: "ClipboardList" },
      { step: "02", title: "Daily Management", desc: "Monitor bookings, update room rates and availability, and manage social media content.", icon: "Layout" },
      { step: "03", title: "Booking Updates", desc: "Inform property owners about new reservations and important booking changes.", icon: "Rocket" }
    ],
    howWeWork: [
      { step: "01", title: "Step 01 — Property Onboarding", desc: "Collect property details and understand your requirements.", icon: "ClipboardList" },
      { step: "02", title: "Step 02 — Daily Management", desc: "Monitor bookings, update room rates and availability, and manage social media content.", icon: "Layout" },
      { step: "03", title: "Step 03 — Booking Updates", desc: "Inform property owners about new reservations and important booking changes.", icon: "Rocket" }
    ],
    benefits: ["Streamlined front desk operations", "Better guest satisfaction scores", "Clear financial reporting"],
    faqs: [
      { q: "Is the PMS cloud based?", a: "Yes, it is 100% cloud-based and accessible securely from desktop computers, tablets, and smartphones without server installations." },
      { q: "Can front desk and housekeeping staff have separate access levels?", a: "Yes, our PMS includes granular role-based permissions for front desk, housekeeping, accounting, and managers." },
      { q: "Can the system generate daily revenue and occupancy reports?", a: "Yes, managers can view real-time occupancy rates, ADR (Average Daily Rate), RevPAR, and export automated financial summaries." }
    ]
  },
  "direct-hotel-booking-engine": {
    title: "Direct Hotel Booking Engine Solutions",
    subtitle: "Commission-free direct guest reservation & payment system built into your website.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Hospitality Services",
    intro: "Stop paying 15-25% commissions to online travel agencies. Our direct booking engine lets guests check room availability and pay securely directly on your website.",
    whyChoose: ["Zero percentage commission per booking", "Mobile-optimized booking flow", "Instant credit card & UPI/PayPal checkout", "Promo code and discount manager"],
    technologies: ["React", "Node.js", "Stripe", "PayPal API", "PostgreSQL"],
    whatWeOffer: [
      { title: "Direct Reservation Engine Widget", desc: "Embeddable widget displaying instant live rates and dates." },
      { title: "Add-On Services Upselling", desc: "Allowing guests to add breakfast, airport pickup, or spa packages during checkout." }
    ],
    process: [
      { step: "01", title: "Rate Plan Setup", desc: "Configuring room packages, seasonal rates, and deposit rules." },
      { step: "02", title: "Website Integration", desc: "Embedding seamless checkout forms into your hotel site." }
    ],
    benefits: ["Save thousands in OTA commission fees", "Own guest relationship & contact data", "Boost direct brand loyalty"],
    faqs: [
      { q: "How do payments work?", a: "Payments go directly into your merchant account via Stripe, PayPal, Razorpay, or your preferred gateway with zero middleman holding fees." },
      { q: "Can guests book on mobile phones easily?", a: "Yes, the direct booking widget is engineered specifically for fast, 2-step mobile reservations with instant confirmation emails and SMS." },
      { q: "Can we offer seasonal discount codes and promo rates?", a: "Yes, you have full control to create promo codes, early bird discounts, minimum night stays, and package bundles." }
    ]
  },
  "revenue-dynamic-pricing": {
    title: "Revenue & Dynamic Pricing Engine",
    subtitle: "Automated occupancy and demand-based dynamic rate optimization software.",
    heroImage: "/images/hero-dashboard.jpg",
    category: "Hospitality Services",
    intro: "Maximize your RevPAR (Revenue Per Available Room). Our dynamic pricing engine automatically adjusts room prices based on seasonal demand, competitor rates, and local events.",
    whyChoose: ["Automated daily rate updates", "Competitor price tracking", "Demand forecasting algorithms", "Custom minimum stay rules"],
    technologies: ["Python", "Pandas", "Scikit-Learn", "Node.js", "PostgreSQL"],
    whatWeOffer: [
      { title: "Dynamic Pricing Engine", desc: "Algorithmic room pricing that increases during high demand and fills unsold rooms." },
      { title: "RevPAR Analytics Dashboard", desc: "Real-time metrics tracking occupancy rate, ADR, and RevPAR growth." }
    ],
    process: [
      { step: "01", title: "Historical Data Audit", desc: "Analyzing past occupancy trends and seasonal spikes." },
      { step: "02", title: "Algorithm Calibration", desc: "Setting floor rates, ceiling prices, and rule triggers." }
    ],
    benefits: ["Up to 20% increase in annual hotel revenue", "Eliminate manual pricing guesswork", "Automatic adjustment for local events"],
    faqs: [
      { q: "Can I set a minimum price threshold?", a: "Yes, you have complete control to set floor prices and ceiling caps so room rates never drop below your specified baseline." },
      { q: "How does the dynamic pricing algorithm determine rates?", a: "It factors in current occupancy, days until check-in, historical booking trends, competitor pricing, and local festival/holiday demand." },
      { q: "Can I manually override automated prices at any time?", a: "Absolutely. You can override individual dates or entire date ranges with one click from your control dashboard." }
    ]
  }
};

ALL_SERVICES_DETAILS["custom-software-development"] = ALL_SERVICES_DETAILS["software-development"];

export const WHY_CHOOSE_US = [
  { 
    id: "01", 
    title: "Complete Digital Solutions", 
    desc: "From websites and mobile applications to custom software, we provide end-to-end technology solutions under one roof.", 
    icon: "Layers" 
  },
  { 
    id: "02", 
    title: "Business-Focused Development", 
    desc: "We understand your business requirements and create practical digital solutions designed around your goals, customers, and operations.", 
    icon: "TrendingUp" 
  },
  { 
    id: "03", 
    title: "Modern & Scalable Technology", 
    desc: "We use modern technologies and development practices to build fast, secure, responsive, and scalable digital products.", 
    icon: "Zap" 
  },
  { 
    id: "04", 
    title: "Customized Solutions", 
    desc: "Every business is different. We develop customized websites, apps, software, and hospitality solutions based on your specific requirements.", 
    icon: "Code2" 
  },
  { 
    id: "05", 
    title: "User-Friendly Experiences", 
    desc: "We focus on simple, intuitive, and engaging experiences that make your website, application, software, or hospitality service easy to use.", 
    icon: "UserCheck" 
  },
  { 
    id: "06", 
    title: "Quality & Reliable Delivery", 
    desc: "We follow a structured development process with proper testing and quality checks to deliver stable and reliable solutions.", 
    icon: "ShieldCheck" 
  },
  { 
    id: "07", 
    title: "Hospitality Industry Expertise", 
    desc: "Our hospitality solutions help businesses manage their digital presence, listings, customer engagement, and online operations more effectively.", 
    icon: "Building2" 
  },
  { 
    id: "08", 
    title: "Long-Term Support", 
    desc: "Our relationship doesn't end after delivery. We provide ongoing technical support, maintenance, updates, and improvements as your business grows.", 
    icon: "Headphones" 
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discovery", desc: "In-depth research into your business goals, target audience, technical requirements, and competitor landscape." },
  { step: "02", title: "Strategy", desc: "Architecting the technical blueprint, selecting optimized stacks, mapping user journeys, and establishing milestones." },
  { step: "03", title: "UI/UX Design", desc: "Crafting modern, intuitive wireframes and interactive visual design prototypes aligned with your brand." },
  { step: "04", title: "Development", desc: "Agile sprint execution writing clean, secure, modular code with continuous integration." },
  { step: "05", title: "Testing", desc: "Rigorously testing performance, security, responsiveness, and cross-browser stability." },
  { step: "06", title: "Deployment", desc: "Seamless zero-downtime release to cloud environments with security and SSL hardening." },
  { step: "07", title: "Support", desc: "Continuous post-launch maintenance, analytics tracking, and roadmap feature upgrades." }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: "corporate-website-development",
    title: "Corporate Website Architecture",
    category: "Web Development",
    categoryTag: "Web Development",
    servicePath: "/services/website-development",
    badge: "Concept Project",
    client: "Corporate Technology Architecture Demo",
    image: corporateWebImg,
    imagePosition: "center 30%",
    description: "Professional business websites with responsive layouts, intuitive navigation, and search-friendly page structures.",
    overview: "A comprehensive digital corporate website model engineered to showcase modern brand positioning, responsive multi-device accessibility, and fast load speeds for growing businesses.",
    clientRequirements: "A modern, high-performance web presence communicating corporate capabilities with intuitive navigation, accessible user flows, clear lead CTAs, and robust search engine crawlability.",
    challenge: "Businesses frequently struggle with outdated monolithic website templates with sluggish mobile rendering, poor SEO structure, and high bounce rates.",
    solution: "We designed a lightweight component-driven architecture using React, semantic HTML5, responsive CSS grid, and structured JSON-LD schema for search engines.",
    technologies: ["React", "Bootstrap 5", "HTML5", "CSS3", "JavaScript", "Vite"],
    features: [
      "Responsive layout optimized for mobile, tablet, and desktop viewports",
      "Semantic HTML5 page hierarchy with structured metadata for SEO",
      "Intuitive header navigation with quick-action contact triggers",
      "High-speed image compression and lazy-loading asset pipeline"
    ],
    relatedServices: ["Web Development", "UI/UX Design", "SEO & Optimization"]
  },
  {
    id: "mobile-application-development",
    title: "Mobile Application Workflow Suite",
    category: "App Development",
    categoryTag: "App Development",
    servicePath: "/services/mobile-app-development",
    badge: "Concept Project",
    client: "Cross-Platform Mobile Architecture Demo",
    image: mobileAppImg,
    imagePosition: "center",
    description: "User-friendly mobile applications designed around customer needs, business workflows, and required functionality.",
    overview: "A cross-platform mobile application design built to streamline customer onboarding, real-time status updates, and interactive notifications on iOS and Android.",
    clientRequirements: "An intuitive mobile interface providing friction-free user onboarding, biometric login, offline data synchronization, and push notification engagement.",
    challenge: "Developing disparate native apps for iOS and Android often leads to inconsistent user experiences, higher maintenance costs, and slow feature delivery cycles.",
    solution: "Architected a single-codebase cross-platform mobile application using Flutter and Dart, backed by clean RESTful APIs and secure local device caching.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Node.js"],
    features: [
      "Cross-platform compilation for iOS and Android devices",
      "Biometric authentication (TouchID & FaceID) and encrypted session storage",
      "Instant push notifications and real-time status telemetry",
      "Offline-first local cache for essential data and workflows"
    ],
    relatedServices: ["Mobile App Development", "UI/UX Design", "API Integration"]
  },
  {
    id: "custom-business-software",
    title: "Custom Business Operations Software",
    category: "Software Development",
    categoryTag: "Software Development",
    servicePath: "/services/custom-software-development",
    badge: "Concept Project",
    client: "Internal Business Operations Demo",
    image: softwareImg,
    imagePosition: "center",
    description: "Tailored software solutions that help businesses organize information and streamline operational workflows.",
    overview: "An enterprise workflow management dashboard engineered to replace manual spreadsheets with automated validation, centralized databases, and role-based access.",
    clientRequirements: "A centralized software portal that streamlines operational handoffs between departments, automates approval workflows, and provides secure audit trails.",
    challenge: "Fragmented spreadsheets and disjointed tools create data redundancy, delayed handoffs, and vulnerability to human data-entry errors.",
    solution: "Engineered a modular web application with PostgreSQL relational data structures, automated business logic validation, and granular role permissions.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Docker", "REST APIs"],
    features: [
      "Role-based access control (RBAC) with granular department permissions",
      "Automated multi-step approval pipelines and task assignment",
      "Centralized relational database with immutable audit logs",
      "Exportable operational reports in CSV, Excel, and PDF formats"
    ],
    relatedServices: ["Software Development", "Database Solutions", "Cloud Deployment"]
  },
  {
    id: "saas-platform-development",
    title: "Multi-Tenant SaaS Platform",
    category: "SaaS",
    categoryTag: "SaaS",
    servicePath: "/services/saas-development",
    badge: "Concept Project",
    client: "Scalable Cloud SaaS Architecture Demo",
    image: saasImg,
    imagePosition: "center",
    description: "Scalable software platforms built around product requirements, user management, and business workflows.",
    overview: "A production-ready SaaS software platform designed for multi-tenant customer onboarding, subscription management, user workspace isolation, and automated telemetry.",
    clientRequirements: "A secure cloud platform supporting self-service workspace registration, team collaboration, subscription tier enforcement, and external developer webhooks.",
    challenge: "Architecting cloud SaaS platforms requires balancing tenant data isolation with elastic scalability, low database latency, and zero-downtime rolling updates.",
    solution: "Delivered a containerized microservices architecture with isolated tenant schemas, automated workspace provisioning, and centralized billing hooks.",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
    features: [
      "Multi-tenant data partitioning ensuring complete customer privacy",
      "Self-service tenant onboarding with automated workspace creation",
      "Tiered feature gatekeeping and subscription lifecycle management",
      "High-speed Redis caching for session tokens and frequent queries"
    ],
    relatedServices: ["SaaS Development", "Backend Development", "Cloud Architecture"]
  },
  {
    id: "erp-development-system",
    title: "Enterprise Resource Planning (ERP) System",
    category: "ERP",
    categoryTag: "ERP",
    servicePath: "/services/erp-development",
    badge: "Concept Project",
    client: "Enterprise Resource Management Demo",
    image: erpImg,
    imagePosition: "center",
    description: "Business management solutions for inventory, sales, operations, reporting, and other required workflows.",
    overview: "A comprehensive ERP software ecosystem unifying procurement, multi-warehouse inventory levels, customer orders, and executive reporting in a single interface.",
    clientRequirements: "An integrated business management platform that eliminates software silos between procurement, warehouse staff, sales managers, and executive leaders.",
    challenge: "Disconnected inventory and sales systems lead to stockouts, delayed fulfillment, and lack of real-time operational visibility.",
    solution: "Built a centralized ERP portal featuring automated stock reconciliation, purchase order lifecycles, and interactive KPI dashboards.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Bootstrap 5", "Docker"],
    features: [
      "Multi-warehouse inventory tracking with real-time stock notifications",
      "Automated purchase order workflows and vendor management",
      "Sales pipeline tracking from quotation to invoice generation",
      "Interactive executive dashboards with operational health metrics"
    ],
    relatedServices: ["ERP Development", "Custom Software", "Database Solutions"]
  },
  {
    id: "ecommerce-website-development",
    title: "eCommerce Storefront & Catalog Solution",
    category: "eCommerce",
    categoryTag: "eCommerce",
    servicePath: "/services/ecommerce-website",
    badge: "Concept Project",
    client: "Modern Digital Commerce Demo",
    image: ecommerceImg,
    imagePosition: "center",
    description: "Online shopping experiences with product catalogs, responsive interfaces, and suitable checkout integrations.",
    overview: "A high-conversion digital commerce storefront engineered for smooth product discovery, responsive shopping carts, and streamlined multi-step checkout.",
    clientRequirements: "A modern, responsive eCommerce storefront offering dynamic category filters, persistent cart states, and seamless checkout integrations.",
    challenge: "High cart abandonment occurs when eCommerce sites have slow initial load times, cluttered navigation, or clunky mobile checkout steps.",
    solution: "Engineered a lightweight, component-driven storefront featuring instant client-side filtering, touch-optimized product galleries, and clean checkout forms.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "Bootstrap 5", "MongoDB"],
    features: [
      "Dynamic faceted search and filtering by price, category, and tags",
      "Persistent cart state across browsing sessions and responsive slide-out cart",
      "Mobile-optimized product detail views and image galleries",
      "Clean checkout flow with address validation and payment placeholders"
    ],
    relatedServices: ["eCommerce Development", "UI/UX Design", "Web Development"]
  },
  {
    id: "hospitality-technology-solutions",
    title: "Hospitality & Property Management System",
    category: "Hospitality",
    categoryTag: "Hospitality",
    servicePath: "/services/property-management-system",
    badge: "Concept Project",
    client: "Hospitality Technology Architecture Demo",
    image: propertyImg,
    imagePosition: "center 30%",
    description: "Hospitality websites, property listing assistance, room information management, and booking-related digital solutions.",
    overview: "A specialized digital platform designed for hotels, resorts, and property operators to manage room listings, showcase amenities, and streamline booking inquiries.",
    clientRequirements: "A professional hospitality web portal enabling property managers to display room specifications, manage seasonal rates, and accept direct booking inquiries.",
    challenge: "Independent hospitality properties often rely on disjointed inquiry forms and external OTAs with high commission fees and lack of direct brand connection.",
    solution: "Delivered a dedicated hospitality web solution featuring interactive room galleries, real-time availability calendars, and direct inquiry capture.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap 5"],
    features: [
      "Interactive room and suite showcases with amenity highlights",
      "Live availability calendar and direct reservation request workflow",
      "Property management administrative dashboard for reservation handling",
      "Mobile-first guest experience with instant directions and local guides"
    ],
    relatedServices: ["Property Management System", "Hospitality Services", "Custom Software"]
  },
  {
    id: "ota-listing-management-system",
    title: "Multi-Channel OTA Listing Management",
    category: "Hospitality",
    categoryTag: "Hospitality",
    servicePath: "/services/ota-listing-management",
    badge: "Concept Project",
    client: "Hotel & Vacation Rental OTA Sync Demo",
    image: otaImg,
    imagePosition: "center",
    description: "Multi-platform distribution connecting properties to Booking.com, Airbnb, Agoda, and Expedia in real time.",
    overview: "A specialized hospitality distribution system synchronizing availability calendars, rates, and guest bookings across top global online travel agencies.",
    clientRequirements: "Seamless 2-way OTA synchronization preventing double-bookings, centralizing reservations, and automating room availability updates.",
    challenge: "Property managers wasting hours updating rates manually on multiple extranets leading to overbooking errors and lost revenue.",
    solution: "Engineered automated channel manager integrations with 2-way XML feeds and a unified reservation calendar dashboard.",
    technologies: ["React", "Node.js", "Channel Manager APIs", "PostgreSQL", "Bootstrap 5"],
    features: [
      "Real-time 2-way rate and availability calendar synchronization",
      "Centralized multi-channel reservation inbox and calendar view",
      "Automated double-booking prevention across global OTAs",
      "Unified property amenity, photography, and room rate management"
    ],
    relatedServices: ["OTA Listing Management", "Hospitality Services", "Custom Software"]
  },
  {
    id: "dynamic-web-application",
    title: "Dynamic Cloud Portal Architecture",
    category: "Web Development",
    categoryTag: "Web Development",
    servicePath: "/services/dynamic-website",
    badge: "Concept Project",
    client: "Modern Web Application Architecture Demo",
    image: cloudImg,
    imagePosition: "center",
    description: "Interactive cloud web portals with user dashboards, dynamic content management, and responsive interfaces.",
    overview: "A responsive cloud web portal featuring secure member authentication, interactive dashboards, and streamlined content workflows.",
    clientRequirements: "A unified web platform allowing users to access secure dashboards, manage personal profiles, and submit data in real time.",
    challenge: "Ensuring smooth page interactions and secure user sessions across varying devices and modern web browsers.",
    solution: "Implemented a responsive single-page web application powered by React and modern REST APIs with JSON web token security.",
    technologies: ["React", "JavaScript", "Node.js", "Express", "Bootstrap 5"],
    features: [
      "Authenticated user workspace with interactive overview widgets",
      "Real-time form validations and instant status notifications",
      "Mobile-responsive grid adapting cleanly across all screen sizes",
      "RESTful API endpoints with structured JSON communication"
    ],
    relatedServices: ["Web Development", "UI/UX Design", "Backend Development"]
  }
];

export const BLOG_POSTS = [
  {
    slug: "future-of-generative-ai-in-enterprise",
    title: "How Enterprise Companies Are Leveraging Generative AI in 2026",
    category: "AI",
    date: "October 2, 2026",
    readTime: "6 min read",
    author: "David Vance, Chief AI Architect",
    image: "/images/blog-ai.jpg",
    excerpt: "Discover how Fortune 500 companies are moving beyond basic LLM prompts to build autonomous RAG agents that automate complex business workflows.",
    content: `
      <h2>The Shift to Autonomous AI Infrastructure</h2>
      <p>Generative AI has evolved rapidly from simple chatbots into mission-critical enterprise infrastructure. Today, forward-thinking enterprises are building domain-specific RAG (Retrieval-Augmented Generation) systems that securely connect internal knowledge bases with private AI models.</p>
      
      <h3>Key Trends Driving Enterprise AI Adoption</h3>
      <ul>
        <li><strong>Autonomous Workflow Agents:</strong> AI agents capable of querying databases, sending API requests, and generating executive reports independently.</li>
        <li><strong>Private Cloud Model Deployment:</strong> Organizations are deploying open-source models like Llama 3 on private AWS/Azure clusters to ensure complete data sovereignty.</li>
        <li><strong>Multimodal Processing:</strong> Processing unstructured PDFs, video streams, and audio logs simultaneously to extract actionable insights.</li>
      </ul>

      <blockquote>"The real competitive advantage in 2026 is not access to public AI, but how effectively you integrate private data with domain-specific AI agents."</blockquote>

      <h2>Building a Future-Proof AI Strategy</h2>
      <p>To successfully integrate AI into your tech stack, start with a targeted proof-of-concept that addresses a high-friction operational bottleneck. Ensure your data pipeline is cleaned and vector-indexed before scaling to enterprise-wide automation.</p>
    `
  },
  {
    slug: "react-vs-flutter-mobile-dev-2026",
    title: "React Native vs Flutter: The Ultimate Mobile Engineering Guide",
    category: "Mobile App Development",
    date: "September 28, 2026",
    readTime: "8 min read",
    author: "Elena Rostova, Lead Mobile Engineer",
    image: "/images/portfolio-health.jpg",
    excerpt: "An in-depth technical comparison of React Native and Flutter for building high-performance cross-platform iOS and Android apps.",
    content: `
      <h2>Choosing the Right Cross-Platform Framework</h2>
      <p>Cross-platform mobile development has reached near-parity with native Swift and Kotlin engineering. Both Flutter and React Native offer exceptional performance, but their architectural philosophy differs significantly.</p>
      
      <h3>Flutter Advantages</h3>
      <p>Flutter compiles directly to native ARM code, rendering its own UI canvas. This delivers pixel-perfect consistency across iOS and Android with zero UI rendering discrepancies.</p>

      <h3>React Native Advantages</h3>
      <p>React Native leverages native bridge components, allowing web engineering teams familiar with React to quickly build cross-platform mobile apps while sharing logic between web and mobile repositories.</p>
    `
  },
  {
    slug: "scalable-cloud-architecture-best-practices",
    title: "Architecting Scalable Microservices on AWS & Docker",
    category: "Software Development",
    date: "September 20, 2026",
    readTime: "7 min read",
    author: "Marcus Chen, VP of Cloud Infrastructure",
    image: "/images/blog-cloud.jpg",
    excerpt: "Best practices for designing fault-tolerant, auto-scaling cloud microservices capable of handling millions of concurrent users.",
    content: `
      <h2>Designing for High Availability</h2>
      <p>Modern enterprise applications must handle sudden traffic spikes without degraded performance. Implementing stateless microservices orchestrated via Kubernetes or AWS ECS is key to maintaining 99.99% uptime.</p>
    `
  },
  {
    slug: "building-modern-saas-mvp",
    title: "How to Build and Launch a Scalable SaaS MVP in 90 Days",
    category: "Web Development",
    date: "September 14, 2026",
    readTime: "5 min read",
    author: "Sarah Jenkins, Product Strategy Director",
    image: "/images/hero-dashboard.jpg",
    excerpt: "A practical step-by-step roadmap for software founders to design, develop, and launch an enterprise-ready SaaS MVP fast.",
    content: `
      <h2>Focusing on Core Value</h2>
      <p>Building a successful SaaS product requires ruthlessly prioritizing the core feature that solves your user's primary pain point. Avoid scope creep during the MVP phase.</p>
    `
  },
  {
    slug: "ui-ux-trends-digital-products",
    title: "UI/UX Design Trends Defining Modern Software Interfaces",
    category: "UI/UX",
    date: "September 08, 2026",
    readTime: "4 min read",
    author: "Alex Morgan, Head of Design",
    image: "/images/about-workspace.jpg",
    excerpt: "From micro-interactions and dark mode ergonomics to glassmorphic depth, explore the UI/UX trends shaping enterprise digital products.",
    content: `
      <h2>Ergonomic Design for Enterprise Productivity</h2>
      <p>Great UI/UX design is not just visual polish; it directly reduces task completion times and user cognitive load.</p>
    `
  },
  {
    slug: "cybersecurity-essentials-for-web-apps",
    title: "Cybersecurity Essentials Every Web Application Must Implement",
    category: "Technology",
    date: "August 30, 2026",
    readTime: "6 min read",
    author: "Robert Sterling, Security Lead",
    image: "/images/portfolio-fintech.jpg",
    excerpt: "Protect your corporate web applications against OWASP top vulnerabilities, SQL injection, and unauthorized data breaches.",
    content: `
      <h2>Securing Your Modern Web Stack</h2>
      <p>Security must be integrated into the development lifecycle from day one, not added as an afterthought prior to launch.</p>
    `
  }
];

export const TECHNOLOGIES_STACK = [
  {
    category: "Frontend",
    items: [
      { name: "React JS", level: "Expert", desc: "Dynamic component architecture" },
      { name: "JavaScript (ES6+)", level: "Expert", desc: "Modern asynchronous web scripting" },
      { name: "Bootstrap 5", level: "Expert", desc: "Responsive layout grid systems" },
      { name: "HTML5 / CSS3", level: "Expert", desc: "Semantic structural web markup" },
      { name: "Next.js", level: "Advanced", desc: "Server side rendering & static generation" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Expert", desc: "High throughput asynchronous runtime" },
      { name: "Express.js", level: "Expert", desc: "Lightweight RESTful API framework" },
      { name: "Python", level: "Expert", desc: "AI pipelines, FastAPI & Django" },
      { name: "Java / Spring", level: "Enterprise", desc: "Robust microservices architecture" }
    ]
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: "Expert", desc: "High performance multiplatform Dart apps" },
      { name: "React Native", level: "Expert", desc: "Native component bridge mobile apps" },
      { name: "Swift", level: "Native", desc: "Pure iOS native engineering" },
      { name: "Kotlin", level: "Native", desc: "Modern Android native engineering" }
    ]
  },
  {
    category: "Database & Cloud",
    items: [
      { name: "PostgreSQL", level: "Relational", desc: "ACID compliant relational storage" },
      { name: "MongoDB", level: "NoSQL", desc: "Scalable document storage" },
      { name: "Amazon Web Services", level: "Cloud", desc: "EC2, S3, RDS, ECS cloud infra" },
      { name: "Firebase", level: "Realtime", desc: "Realtime database & authentication" }
    ]
  },
  {
    category: "AI & Innovation",
    items: [
      { name: "OpenAI API", level: "LLM", desc: "GPT-4o fine-tuning & embeddings" },
      { name: "LangChain", level: "Framework", desc: "AI agent orchestration" },
      { name: "Pinecone", level: "Vector DB", desc: "High speed semantic vector search" },
      { name: "TensorFlow", level: "ML", desc: "Custom machine learning models" }
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Arthur Pendelton",
    role: "Chief Technology Officer",
    company: "Vanguard FinTech Group (USA)",
    review: "Graytus Technologies delivered our enterprise banking application on schedule with exceptional code quality. Their engineering discipline and proactive communication set them apart from other technology partners.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Dr. Sarah Lin",
    role: "Head of Product",
    company: "Pulse Health Inc. (Canada)",
    review: "The mobile app Graytus developed for our health telemetry sensors has received rave reviews from our medical providers. Sub-second data synchronization and stunning UI!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
  },
  {
    name: "Michael Thorne",
    role: "Managing Director",
    company: "Nexus Supply Chain (UK)",
    review: "Rebuilding our ERP platform with Graytus Technologies transformed our logistics dispatch. We reduced fuel overheads by 22% within three months of deployment.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  }
];

export const CLIENT_LOGOS = [
  { name: "Apex Financial", logo: "APEX FINTECH" },
  { name: "Pulse Health", logo: "PULSE HEALTHCARE" },
  { name: "Aura Lifestyle", logo: "AURA LUXURY" },
  { name: "Nexus Logistics", logo: "NEXUS GLOBAL" },
  { name: "Vanguard Tech", logo: "VANGUARD" },
  { name: "OmniCloud Systems", logo: "OMNICLOUD" }
];

export const INDUSTRIES = [
  { name: "Hotel", icon: "Building2", desc: "Direct booking engines, OTA channel synchronization, guest portals & custom PMS systems." },
  { name: "Business", icon: "Briefcase", desc: "Custom CRM/ERP workflows, operations automation, client portals & business software." },
  { name: "Real Estate", icon: "Home", desc: "Property listing platforms, virtual tours, lead management & agent dashboards." },
  { name: "Healthcare", icon: "Activity", desc: "Patient appointment scheduling, EHR/EMR integrations, telehealth portals & clinical solutions." },
  { name: "Fitness Center", icon: "Dumbbell", desc: "Gym membership management, workout tracking apps, trainer scheduling & class booking." },
  { name: "Education", icon: "GraduationCap", desc: "LMS platforms, student management systems, interactive course portals & online examinations." },
  { name: "Company Website", icon: "Globe", desc: "High-converting corporate websites, brand storytelling, service architectures & lead funnels." },
  { name: "Travels", icon: "Plane", desc: "Tour booking systems, itinerary management, holiday packages & integrated travel payment gateways." },
  { name: "Media", icon: "Film", desc: "High-throughput audio/video streaming, news & editorial CMS platforms, and digital media portals." }
];
