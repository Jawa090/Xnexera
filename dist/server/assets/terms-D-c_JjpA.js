import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
function TermsPage() {
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
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-4xl font-semibold tracking-tight text-gradient", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Last updated: June 11, 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "1. Agreement to Terms" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "By accessing or using the Nexera platform and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "2. Use of Services" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, or impair the platform." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "3. Accounts" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "4. Payment and Billing" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Subscription fees are billed in advance on a recurring basis. You authorize us to charge your payment method. All fees are non-refundable unless otherwise stated." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "5. Intellectual Property" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "All content, features, and functionality on the platform are owned by Nexera, Inc. and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "6. Limitation of Liability" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "To the maximum extent permitted by law, Nexera shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the services." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "7. Governing Law" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "8. Changes to Terms" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We may modify these Terms at any time. Continued use of the services after changes constitutes acceptance of the revised Terms." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  TermsPage as component
};
