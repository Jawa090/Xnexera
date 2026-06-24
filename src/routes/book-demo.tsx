import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import logoImg from "@/assets/logo.png";
import { 
  ArrowRight, Check, Sparkles, PhoneCall, Building2, 
  Calendar, Mail, User, ArrowLeft, ShieldCheck, 
  MessageSquare, Users, Globe, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  industry: z.string().min(1, { message: "Please select an industry." }),
  volume: z.string().min(1, { message: "Please select your call volume." }),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const Route = createFileRoute("/book-demo")({
  head: () => ({
    meta: [
      { title: "Book a Demo — Nexera AI Voice Agents" },
      { name: "description", content: "Schedule a personalized walkthrough of Nexera and see our AI voice and chat agents in action." },
    ],
  }),
  component: BookDemoPage,
});

function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      volume: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmittedData(data);
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col justify-between">
      {/* Background Gradients */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.2]" />
        <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(235,125,2,0.06),transparent)]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(255,217,44,0.04),transparent)]" />
      </div>

      {/* Header */}
      <header className="w-full border-b border-white/5 bg-black/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="Nexera Logo" className="h-9 w-auto object-contain transition-transform group-hover:scale-95" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground hover:text-white uppercase transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-7xl w-full px-6 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Value Prop & Trust */}
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eb7d02]/30 bg-[#eb7d02]/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#ffd92c] mb-6">
              <Sparkles className="h-3 w-3" /> Live Walkthrough
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gradient">
              See Nexera in action.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Find out how our conversational AI voice agents answer inbound calls, qualify leads, and book meetings directly into your CRM.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Interactive Call Testing</h3>
                <p className="text-sm text-muted-foreground mt-1">Experience a live custom call simulation tailored to your business during the demo.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Custom Playbook Design</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll map out a custom conversational script logic based on your existing sales qualification flow.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Full-Stack CRM Integrations</h3>
                <p className="text-sm text-muted-foreground mt-1">See how Nexera automatically populates records in HubSpot, Salesforce, or custom webhooks.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> 99.99% Uptime Guarantee</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> HIPAA & GDPR Compliant</span>
          </motion.div>
        </div>

        {/* Right Side: Interactive Form Card */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-xl glass border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form-step"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Schedule Your Demo</h2>
                  <p className="text-sm text-muted-foreground mb-8">Fill out the details below and our team will get in touch with you shortly.</p>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-[#ffd92c]" /> Full Name
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.fullName ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`}
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 font-medium mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Email & Phone side-by-side */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-[#ffd92c]" /> Work Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.email ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`}
                          {...register("email")}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 font-medium mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-[#ffd92c]" /> Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.phone ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`}
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-400 font-medium mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-[#ffd92c]" /> Company Name
                      </label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Acme Corporation"
                        className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.company ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`}
                        {...register("company")}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-400 font-medium mt-1">{errors.company.message}</p>
                      )}
                    </div>

                    {/* Industry & Monthly Inbound calls */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Industry */}
                      <div className="space-y-1.5">
                        <label htmlFor="industry" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-[#ffd92c]" /> Industry
                        </label>
                        <Controller
                          name="industry"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.industry ? "border-red-500/50" : ""}`}>
                                <SelectValue placeholder="Select Industry" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#121212] border-white/10 text-white rounded-xl">
                                <SelectItem value="healthcare" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">Healthcare</SelectItem>
                                <SelectItem value="realestate" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">Real Estate</SelectItem>
                                <SelectItem value="ecommerce" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">E-commerce</SelectItem>
                                <SelectItem value="finance" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">Financial Services</SelectItem>
                                <SelectItem value="other" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.industry && (
                          <p className="text-xs text-red-400 font-medium mt-1">{errors.industry.message}</p>
                        )}
                      </div>

                      {/* Inbound Call Volume */}
                      <div className="space-y-1.5">
                        <label htmlFor="volume" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                          <PhoneCall className="h-3.5 w-3.5 text-[#ffd92c]" /> Inbound Calls / Mo
                        </label>
                        <Controller
                          name="volume"
                          control={control}
                          render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger className={`bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.volume ? "border-red-500/50" : ""}`}>
                                <SelectValue placeholder="Select Volume" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#121212] border-white/10 text-white rounded-xl">
                                <SelectItem value="under_100" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">&lt; 100 calls</SelectItem>
                                <SelectItem value="100_500" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">100 - 500 calls</SelectItem>
                                <SelectItem value="500_1000" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">500 - 1,000 calls</SelectItem>
                                <SelectItem value="1000_5000" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">1,000 - 5,000 calls</SelectItem>
                                <SelectItem value="over_5000" className="focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer">5,000+ calls</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />
                        {errors.volume && (
                          <p className="text-xs text-red-400 font-medium mt-1">{errors.volume.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-[#ffd92c]" /> How can Nexera help?
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your current call routing challenges or specific goals..."
                        rows={3}
                        className="bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl transition-all p-4 resize-none"
                        {...register("message")}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] hover:from-[#ffe04f] hover:to-[#f98d16] text-black font-semibold h-12 text-sm shadow-[0_4px_20px_rgba(235,125,2,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(235,125,2,0.3)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer mt-8"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Processing Demo Request...
                        </>
                      ) : (
                        <>
                          Book My Live Walkthrough <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-step"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center py-12"
                >
                  <div className="h-16 w-16 bg-[#eb7d02]/10 border border-[#eb7d02]/30 text-[#ffd92c] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(235,125,2,0.15)] animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>

                  <h2 className="text-3xl font-extrabold text-white tracking-tight">Demo Booking Request Received!</h2>
                  <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{submittedData?.fullName}</span>. We've sent a confirmation email to <span className="font-semibold text-white">{submittedData?.email}</span>.
                  </p>

                  <div className="w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 my-8 text-left space-y-4">
                    <div className="flex justify-between text-xs border-b border-white/5 pb-3">
                      <span className="text-muted-foreground uppercase tracking-wider font-semibold">Scheduled walkthrough</span>
                      <span className="text-[#ffd92c] font-bold uppercase tracking-widest flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Next 24 Hours</span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      One of our AI integration engineers will reach out to you at <span className="text-white font-medium">{submittedData?.phone}</span> to conduct a live custom sandbox testing session.
                    </p>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      For immediate support, contact us at <a href="mailto:support@xnexera.com" className="text-[#ffd92c] hover:text-white transition-colors font-medium">📧 support@xnexera.com</a>
                    </p>

                    <div className="p-3 bg-[#eb7d02]/5 border border-[#eb7d02]/20 rounded-xl flex items-start gap-3 mt-2">
                      <PhoneCall className="h-4 w-4 text-[#ffd92c] shrink-0 mt-0.5" />
                      <span className="text-[11px] text-[#ffd92c] leading-normal font-medium">
                        Keep an eye out for a call from a <strong>Nexera Voice Assistant</strong> to preview our high-fidelity custom text-to-speech engine.
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full">
                    <Link
                      to="/"
                      className="flex-1 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-sm font-semibold text-white h-11 flex items-center justify-center transition-all"
                    >
                      Return to Homepage
                    </Link>
                    <a
                      href="tel:+18005550199" // Example phone number
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-sm font-bold text-black h-11 flex items-center justify-center transition-all hover:scale-[1.02] gap-1.5"
                    >
                      <Phone className="h-4 w-4" /> Try Voice Sandbox
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 bg-black/10 py-6 text-center text-xs text-muted-foreground">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Nexera, Inc. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
