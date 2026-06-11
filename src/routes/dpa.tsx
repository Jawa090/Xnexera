import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/dpa")({
  head: () => ({
    meta: [
      { title: "Data Processing Agreement — Nexera" },
      { name: "description", content: "Nexera data processing agreement." },
    ],
  }),
  component: DPAPage,
});

function DPAPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.25]" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-gradient">Data Processing Agreement</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 11, 2026</p>

          <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">1. Introduction</h2>
              <p className="mt-3">
                This Data Processing Agreement ("DPA") is entered into between Nexera, Inc. ("Processor") and the customer ("Controller") and forms part of the Terms of Service. It sets out the terms for processing personal data in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">2. Definitions</h2>
              <p className="mt-3">
                Terms used in this DPA shall have the meanings given to them under applicable data protection laws, including the GDPR where applicable. "Personal Data", "Processing", "Controller", "Processor", and "Data Subject" shall have the same meanings as in the GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">3. Processing Details</h2>
              <p className="mt-3">
                Nexera processes personal data on behalf of the Controller to provide AI voice and chat agent services, including lead management, appointment scheduling, and CRM integration.
              </p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li><strong>Subject matter:</strong> Provision of AI communication services</li>
                <li><strong>Duration:</strong> For the term of the subscription agreement</li>
                <li><strong>Nature and purpose:</strong> Automated voice and chat interactions, data synchronization</li>
                <li><strong>Types of data:</strong> Contact information, call transcripts, appointment data</li>
                <li><strong>Categories of data subjects:</strong> End customers and leads of the Controller</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">4. Processor Obligations</h2>
              <p className="mt-3">
                ContractorAI shall process personal data only on documented instructions from the Controller, ensure confidentiality, implement appropriate security measures, and assist the Controller in responding to data subject requests.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">5. Subprocessors</h2>
              <p className="mt-3">
                ContractorAI may engage subprocessors to assist in providing services. A current list of subprocessors is available upon request. We will notify the Controller of any intended changes to subprocessors.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">6. Data Security</h2>
              <p className="mt-3">
                We implement technical and organizational security measures appropriate to the risk, including encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">7. Data Deletion</h2>
              <p className="mt-3">
                Upon termination of services, ContractorAI will delete or return all personal data to the Controller, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">8. Contact</h2>
              <p className="mt-3">
                For questions about this DPA, contact us at dpa@nexera.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
