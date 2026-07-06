import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
function DPAPage() {
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
      /* @__PURE__ */ jsx("h1", { className: "mt-8 text-4xl font-semibold tracking-tight text-gradient", children: "Data Processing Agreement" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Last updated: June 11, 2026" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "1. Introduction" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: 'This Data Processing Agreement ("DPA") is entered into between Nexera, Inc. ("Processor") and the customer ("Controller") and forms part of the Terms of Service. It sets out the terms for processing personal data in compliance with applicable data protection laws.' })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "2. Definitions" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: 'Terms used in this DPA shall have the meanings given to them under applicable data protection laws, including the GDPR where applicable. "Personal Data", "Processing", "Controller", "Processor", and "Data Subject" shall have the same meanings as in the GDPR.' })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "3. Processing Details" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Nexera processes personal data on behalf of the Controller to provide AI voice and chat agent services, including lead management, appointment scheduling, and CRM integration." }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 list-disc pl-5 space-y-2", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Subject matter:" }),
              " Provision of AI communication services"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Duration:" }),
              " For the term of the subscription agreement"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nature and purpose:" }),
              " Automated voice and chat interactions, data synchronization"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Types of data:" }),
              " Contact information, call transcripts, appointment data"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Categories of data subjects:" }),
              " End customers and leads of the Controller"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "4. Processor Obligations" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "ContractorAI shall process personal data only on documented instructions from the Controller, ensure confidentiality, implement appropriate security measures, and assist the Controller in responding to data subject requests." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "5. Subprocessors" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "ContractorAI may engage subprocessors to assist in providing services. A current list of subprocessors is available upon request. We will notify the Controller of any intended changes to subprocessors." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "6. Data Security" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "We implement technical and organizational security measures appropriate to the risk, including encryption, access controls, and regular security assessments." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "7. Data Deletion" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "Upon termination of services, ContractorAI will delete or return all personal data to the Controller, except where retention is required by law." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-foreground tracking-tight", children: "8. Contact" }),
          /* @__PURE__ */ jsx("p", { className: "mt-3", children: "For questions about this DPA, contact us at dpa@nexera.com." })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  DPAPage as component
};
