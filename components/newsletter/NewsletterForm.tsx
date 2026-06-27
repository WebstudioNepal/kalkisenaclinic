"use client";

import {
  newsletterInputLabel,
  newsletterSubmitLabel,
} from "@/data/newsletter";

export default function NewsletterForm() {
  return (
    <form
      className="w-full max-w-md lg:ml-auto"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="block">
        <span className="text-sm text-white">{newsletterInputLabel}</span>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="mt-2 w-full border-b border-white bg-transparent pb-2 text-base text-white outline-none placeholder:text-white/60"
        />
      </label>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="h-[51px] rounded-lg bg-black px-6 text-base font-medium text-white transition hover:bg-black/90"
        >
          {newsletterSubmitLabel}
        </button>
      </div>
    </form>
  );
}
