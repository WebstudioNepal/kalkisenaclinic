"use client";

import AppIcon from "@/components/Icon";
import {
  contactEnquiryOptions,
  contactFormLabels,
  contactHumanVerificationLabel,
} from "@/data/contact";

const fieldClassName =
  "mt-2 w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-base text-white outline-none placeholder:text-white/40";

export default function ContactUsForm() {
  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="block">
        <span className="text-sm text-white">{contactFormLabels.fullName}</span>
        <input
          type="text"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Enter your full name"
          className={fieldClassName}
        />
      </label>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm text-white">{contactFormLabels.email}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Enter your email"
            className={fieldClassName}
          />
        </label>

        <label className="block">
          <span className="text-sm text-white">{contactFormLabels.phone}</span>
          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="Enter your phone number"
            className={fieldClassName}
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="text-sm text-white">{contactFormLabels.enquiry}</span>
        <div className="relative mt-2">
          <select
            name="enquiry"
            required
            defaultValue=""
            className={`${fieldClassName} appearance-none pr-10`}
          >
            {contactEnquiryOptions.map((option) => (
              <option key={option.value || "placeholder"} value={option.value} disabled={!option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <AppIcon
            icon="mdi:chevron-down"
            width={20}
            height={20}
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-white/60"
          />
        </div>
      </label>

      <label className="mt-4 block">
        <span className="text-sm text-white">{contactFormLabels.message}</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Type your message here..."
          className={`${fieldClassName} resize-none`}
        />
      </label>

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 size-4 shrink-0 rounded border-white/30 accent-[#002CCC]"
        />
        <span className="text-sm leading-normal text-white/80">
          Please confirm you{" "}
          <span className="text-[#002CCC]">consent</span> to your personal
          information being processed and shared with third parties.
        </span>
      </label>

      <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/20 bg-white/5 px-4 py-3">
        <input
          type="checkbox"
          id="human-verification"
          name="humanVerification"
          className="size-4 shrink-0 rounded border-white/30 accent-[#002CCC]"
        />
        <label htmlFor="human-verification" className="text-sm text-white/80">
          {contactHumanVerificationLabel}
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 h-[51px] w-full rounded-lg bg-[#002CCC] text-base font-medium text-white transition hover:bg-[#0024b3]"
      >
        {contactFormLabels.submit}
      </button>
    </form>
  );
}
