import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nexera" },
      { name: "description", content: "Nexera privacy policy." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-gradient">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 11, 2026</p>

          <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">1. Overview</h2>
              <p className="mt-3">
                Nexera, Inc. ("we", "us", or "our") operates the Nexera platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">2. Information We Collect</h2>
              <p className="mt-3">
                We collect information you provide directly to us, such as when you create an account, request a demo, or contact us. This may include your name, email address, phone number, company name, and payment information.
              </p>
              <p className="mt-3">
                We also automatically collect certain information about your device and usage of our services, including IP address, browser type, operating system, and pages viewed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">3. How We Use Your Information</h2>
              <p className="mt-3">
                We use the information we collect to provide, maintain, and improve our services, process transactions, communicate with you, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">4. Data Sharing</h2>
              <p className="mt-3">
                We do not sell your personal information. We may share data with trusted service providers who assist us in operating our platform, subject to confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">5. Security</h2>
              <p className="mt-3">
                We implement appropriate technical and organizational measures to protect your data. However, no method of transmission over the internet is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">6. Support & Contact</h2>
              <p className="mt-3">
                For customer support, please reach out to us at <a href="mailto:support@xnexera.com" className="text-primary hover:text-primary/80 transition-colors font-medium">📧 support@xnexera.com</a>
              </p>
              <p className="mt-3">
                If you have questions about this Privacy Policy, please contact us at privacy@nexera.com.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
