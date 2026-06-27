"use client";

import {
  getInTouchEmailLabel,
  getInTouchMobileLabel,
  getInTouchNameLabel,
  getInTouchSubmitLabel,
} from "@/data/getInTouch";

const inputClassName =
  "mt-2 w-full border-b border-white bg-transparent pb-2 text-base text-white outline-none placeholder:text-white/60";

export default function GetInTouchForm() {
  return (
    <form
      className="w-full max-w-md lg:ml-auto"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="block">
        <span className="text-sm text-white">{getInTouchNameLabel}</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className={inputClassName}
        />
      </label>

      <label className="mt-6 block">
        <span className="text-sm text-white">{getInTouchEmailLabel}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputClassName}
        />
      </label>

      <label className="mt-6 block">
        <span className="text-sm text-white">{getInTouchMobileLabel}</span>
        <input
          type="tel"
          name="mobile"
          required
          autoComplete="tel"
          className={inputClassName}
        />
      </label>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="h-[51px] rounded-lg bg-black px-6 text-base font-medium text-white transition hover:bg-black/90"
        >
          {getInTouchSubmitLabel}
        </button>
      </div>
    </form>
  );
}
