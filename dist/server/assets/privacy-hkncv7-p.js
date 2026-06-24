import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
function PrivacyPage() {
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-[0.25]" }) }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-6 py-28", children: /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }, children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "text-sm text-muted-foreground hover:text-foreground transition-colors", children: "← Back to home" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-4xl font-semibold tracking-tight text-gradient", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Last updated: June 11, 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "1. Overview" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: 'Nexera, Inc. ("we", "us", or "our") operates the Nexera platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.' })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "2. Information We Collect" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We collect information you provide directly to us, such as when you create an account, request a demo, or contact us. This may include your name, email address, phone number, company name, and payment information." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We also automatically collect certain information about your device and usage of our services, including IP address, browser type, operating system, and pages viewed." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "3. How We Use Your Information" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and comply with legal obligations." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "4. Data Sharing" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We do not sell your personal information. We may share data with trusted service providers who assist us in operating our platform, subject to confidentiality obligations." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "5. Security" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "6. Support & Contact" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-3", children: [
            "For customer support, please reach out to us at ",
            /* @__PURE__ */ jsx("a", { href: "mailto:support@xnexera.com", className: "text-primary hover:text-primary/80 transition-colors font-medium", children: "📧 support@xnexera.com" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "If you have questions about this Privacy Policy, please contact us at privacy@nexera.com." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  PrivacyPage as component
};
