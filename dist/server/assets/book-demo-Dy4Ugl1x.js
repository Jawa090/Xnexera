import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { l as logoImg } from "./logo-CA2-MQhC.js";
import { ChevronDown, Check, ChevronUp, ArrowLeft, Sparkles, PhoneCall, ShieldCheck, Users, Globe, User, Mail, Phone, Building2, MessageSquare, ArrowRight, Calendar } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as SelectPrimitive from "@radix-ui/react-select";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number."
  }),
  company: z.string().min(2, {
    message: "Company name must be at least 2 characters."
  }),
  industry: z.string().min(1, {
    message: "Please select an industry."
  }),
  volume: z.string().min(1, {
    message: "Please select your call volume."
  }),
  message: z.string().optional()
});
function BookDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: {
      errors
    }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      industry: "",
      volume: "",
      message: ""
    }
  });
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmittedData(data);
    setIsSubmitted(true);
  };
  return /* @__PURE__ */ jsxs("main", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col justify-between", children: [
    /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 -z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-[0.2]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(235,125,2,0.06),transparent)]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(255,217,44,0.04),transparent)]" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "w-full border-b border-white/5 bg-black/10 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-6 py-4", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-2 group", children: /* @__PURE__ */ jsx("img", { src: logoImg, alt: "Nexera Logo", className: "h-9 w-auto object-contain transition-transform group-hover:scale-95" }) }),
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-muted-foreground hover:text-white uppercase transition-colors", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
        " Back to Home"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 mx-auto max-w-7xl w-full px-6 py-12 lg:py-20 grid lg:grid-cols-12 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 flex flex-col space-y-8", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6
        }, children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-[#eb7d02]/30 bg-[#eb7d02]/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#ffd92c] mb-6", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-3 w-3" }),
            " Live Walkthrough"
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight text-gradient", children: "See Nexera in action." }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Find out how our conversational AI voice agents answer inbound calls, qualify leads, and book meetings directly into your CRM." })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.6,
          delay: 0.15
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0", children: /* @__PURE__ */ jsx(PhoneCall, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Interactive Call Testing" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Experience a live custom call simulation tailored to your business during the demo." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Custom Playbook Design" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "We'll map out a custom conversational script logic based on your existing sales qualification flow." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 items-start", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-[#ffd92c] shrink-0", children: /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white", children: "Full-Stack CRM Integrations" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "See how Nexera automatically populates records in HubSpot, Salesforce, or custom webhooks." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 0.8,
          delay: 0.3
        }, className: "pt-6 border-t border-white/5 flex flex-wrap items-center gap-6 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
            " 99.99% Uptime Guarantee"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
            " HIPAA & GDPR Compliant"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 w-full flex justify-center", children: /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }, className: "w-full max-w-xl glass border-white/10 rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: !isSubmitted ? /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 1
      }, exit: {
        opacity: 0,
        y: -20
      }, transition: {
        duration: 0.3
      }, children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight text-white mb-2", children: "Schedule Your Demo" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-8", children: "Fill out the details below and our team will get in touch with you shortly." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "fullName", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(User, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
              " Full Name"
            ] }),
            /* @__PURE__ */ jsx(Input, { id: "fullName", type: "text", placeholder: "John Doe", className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.fullName ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`, ...register("fullName") }),
            errors.fullName && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.fullName.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
                " Work Email"
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "email", type: "email", placeholder: "john@company.com", className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.email ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`, ...register("email") }),
              errors.email && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.email.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
                " Phone Number"
              ] }),
              /* @__PURE__ */ jsx(Input, { id: "phone", type: "tel", placeholder: "(555) 000-0000", className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.phone ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`, ...register("phone") }),
              errors.phone && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.phone.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "company", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
              " Company Name"
            ] }),
            /* @__PURE__ */ jsx(Input, { id: "company", type: "text", placeholder: "Acme Corporation", className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.company ? "border-red-500/50 focus:border-red-500 focus:ring-red-500" : ""}`, ...register("company") }),
            errors.company && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.company.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "industry", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
                " Industry"
              ] }),
              /* @__PURE__ */ jsx(Controller, { name: "industry", control, render: ({
                field
              }) => /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.industry ? "border-red-500/50" : ""}`, children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Industry" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { className: "bg-[#121212] border-white/10 text-white rounded-xl", children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "healthcare", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "Healthcare" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "realestate", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "Real Estate" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "ecommerce", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "E-commerce" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "finance", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "Financial Services" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "other", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "Other" })
                ] })
              ] }) }),
              errors.industry && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.industry.message })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "volume", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx(PhoneCall, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
                " Inbound Calls / Mo"
              ] }),
              /* @__PURE__ */ jsx(Controller, { name: "volume", control, render: ({
                field
              }) => /* @__PURE__ */ jsxs(Select, { onValueChange: field.onChange, value: field.value, children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: `bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl h-11 transition-all px-4 ${errors.volume ? "border-red-500/50" : ""}`, children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select Volume" }) }),
                /* @__PURE__ */ jsxs(SelectContent, { className: "bg-[#121212] border-white/10 text-white rounded-xl", children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "under_100", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "< 100 calls" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "100_500", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "100 - 500 calls" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "500_1000", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "500 - 1,000 calls" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "1000_5000", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "1,000 - 5,000 calls" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "over_5000", className: "focus:bg-[#eb7d02]/10 focus:text-white cursor-pointer", children: "5,000+ calls" })
                ] })
              ] }) }),
              errors.volume && /* @__PURE__ */ jsx("p", { className: "text-xs text-red-400 font-medium mt-1", children: errors.volume.message })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "h-3.5 w-3.5 text-[#ffd92c]" }),
              " How can Nexera help?"
            ] }),
            /* @__PURE__ */ jsx(Textarea, { id: "message", placeholder: "Tell us about your current call routing challenges or specific goals...", rows: 3, className: "bg-white/[0.02] border-white/10 hover:border-white/20 focus:border-[#eb7d02] focus:ring-1 focus:ring-[#eb7d02] text-white rounded-xl transition-all p-4 resize-none", ...register("message") })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", disabled: isSubmitting, className: "w-full rounded-xl bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] hover:from-[#ffe04f] hover:to-[#f98d16] text-black font-semibold h-12 text-sm shadow-[0_4px_20px_rgba(235,125,2,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_4px_25px_rgba(235,125,2,0.3)] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer mt-8", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" }),
            "Processing Demo Request..."
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Book My Live Walkthrough ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] }, "form-step") : /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }, className: "flex flex-col items-center text-center py-12", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 bg-[#eb7d02]/10 border border-[#eb7d02]/30 text-[#ffd92c] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(235,125,2,0.15)] animate-bounce", children: /* @__PURE__ */ jsx(Check, { className: "h-8 w-8" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-extrabold text-white tracking-tight", children: "Demo Booking Request Received!" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed", children: [
          "Thank you, ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: submittedData?.fullName }),
          ". We've sent a confirmation email to ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: submittedData?.email }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full bg-white/[0.02] border border-white/5 rounded-2xl p-6 my-8 text-left space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-xs border-b border-white/5 pb-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground uppercase tracking-wider font-semibold", children: "Scheduled walkthrough" }),
            /* @__PURE__ */ jsxs("span", { className: "text-[#ffd92c] font-bold uppercase tracking-widest flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
              " Next 24 Hours"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            "One of our AI integration engineers will reach out to you at ",
            /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: submittedData?.phone }),
            " to conduct a live custom sandbox testing session."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-[#eb7d02]/5 border border-[#eb7d02]/20 rounded-xl flex items-start gap-3 mt-2", children: [
            /* @__PURE__ */ jsx(PhoneCall, { className: "h-4 w-4 text-[#ffd92c] shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-[#ffd92c] leading-normal font-medium", children: [
              "Keep an eye out for a call from a ",
              /* @__PURE__ */ jsx("strong", { children: "Nexera Voice Assistant" }),
              " to preview our high-fidelity custom text-to-speech engine."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "flex-1 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 text-sm font-semibold text-white h-11 flex items-center justify-center transition-all", children: "Return to Homepage" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+18005550199",
              className: "flex-1 rounded-xl bg-gradient-to-r from-[#ffd92c] to-[#eb7d02] text-sm font-bold text-black h-11 flex items-center justify-center transition-all hover:scale-[1.02] gap-1.5",
              children: [
                /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                " Try Voice Sandbox"
              ]
            }
          )
        ] })
      ] }, "success-step") }) }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "w-full border-t border-white/5 bg-black/10 py-6 text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Nexera, Inc. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx(Link, { to: "/terms", className: "hover:text-white transition-colors", children: "Terms of Service" })
      ] })
    ] }) })
  ] });
}
export {
  BookDemoPage as component
};
