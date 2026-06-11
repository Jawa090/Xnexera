import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Nexera" },
      { name: "description", content: "Nexera terms of service." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
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
          <h1 className="mt-8 text-4xl font-semibold tracking-tight text-gradient">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: June 11, 2026</p>

          <div className="mt-14 space-y-12 text-sm leading-relaxed text-muted-foreground">
            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">1. Agreement to Terms</h2>
              <p className="mt-3">
                By accessing or using the Nexera platform and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">2. Use of Services</h2>
              <p className="mt-3">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that could damage, disable, or impair the platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">3. Accounts</h2>
              <p className="mt-3">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">4. Payment and Billing</h2>
              <p className="mt-3">
                Subscription fees are billed in advance on a recurring basis. You authorize us to charge your payment method. All fees are non-refundable unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">5. Intellectual Property</h2>
              <p className="mt-3">
                All content, features, and functionality on the platform are owned by Nexera, Inc. and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">6. Limitation of Liability</h2>
              <p className="mt-3">
                To the maximum extent permitted by law, Nexera shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of the services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">7. Governing Law</h2>
              <p className="mt-3">
                These Terms shall be governed by the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground tracking-tight">8. Changes to Terms</h2>
              <p className="mt-3">
                We may modify these Terms at any time. Continued use of the services after changes constitutes acceptance of the revised Terms.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
