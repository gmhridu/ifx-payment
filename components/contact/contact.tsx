"use client"

import { ReactNode } from "react";


function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-white/90 mb-2">
        {label}
        {required && <span className="text-white">*</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-md bg-[#01153ae6] border border-gray-300 px-4 py-2.5 text-[14px] text-white placeholder-white/40 outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none transition"
    />
  );
}

function SelectInput({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-md border border-gray-300 px-4 py-2.5 text-[14px] font-medium text-white outline-none focus:border-accent focus:ring-1 focus:ring-accent appearance-none bg-[#01153ae6] bg-no-repeat bg-position-[right_1rem_center] pr-10"
    >
      {children}
    </select>
  );
}




export function Contact() {
  return (
    <section id="contact" className="px-3 sm:px-6 py-12">
      <div className="mx-auto max-w-355 overflow-hidden rounded-[28px] bg-linear-to-br from-[#050818] via-[#0a1535] to-[#103a8a] px-6 py-14 text-white sm:px-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="items-center bg-[linear-gradient(107.3deg,rgb(0,6,22)_13.28%,rgb(5,66,160)_103.49%)] box-border caret-transparent text-white gap-x-2 inline-flex tracking-[0.2px] leading-[normal] gap-y-2 no-underline text-nowrap mb-8 pl-2 pr-5 py-2 rounded-[50px]">
              Contact Us{" "}
            </span>
            <h2 className="mt-8 text-[44px] sm:text-[56px] font-extrabold leading-none text-white">
              Let's talk
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
              Ready to take the next step or just have a question?
              <br />
              Reach out and we'll connect you with the right person.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Subject of enquiry" required>
              <SelectInput defaultValue="">
                <option value="" disabled>
                  Please Select
                </option>
                <option>General enquiry</option>
                <option>Business FX</option>
                <option>Personal FX</option>
                <option>Partnerships</option>
              </SelectInput>
            </Field>

            <Field label="First name" required>
              <TextInput type="text" />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" required>
                <TextInput type="email" />
              </Field>
              <Field label="Phone number" required>
                <TextInput type="tel" />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Company name">
                <TextInput type="text" />
              </Field>
              <Field label="Country/Region" required>
                <SelectInput defaultValue="">
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Europe</option>
                  <option>Other</option>
                </SelectInput>
              </Field>
            </div>

            <Field label="Message">
              <textarea
                rows={4}
                className="w-full rounded-md bg-[#01153ae6] border border-gray-300 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-accent focus:bg-white/10 transition resize-none"
              />
            </Field>

            <Field label="How did you hear about us" required>
              <SelectInput defaultValue="">
                <option value="" disabled>
                  Please Select
                </option>
                <option>Search engine</option>
                <option>Social media</option>
                <option>Referral</option>
                <option>Event</option>
              </SelectInput>
            </Field>

            <label className="flex items-start gap-3 pt-1 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-accent"
              />
              <span className="text-[12.5px] leading-snug text-white/80">
                I would like to receive marketing materials, the latest product
                updates and company news from IFX Payments
              </span>
            </label>

            <p className="text-[12px] leading-relaxed text-white/65">
              By submitting this form, you consent to our collection, use, and
              storage of your personal information in accordance with our
              Privacy Policy. For more details on how we protect your data,
              please review our{" "}
              <a href="#" className="text-accent underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="rounded-full border-2 border-accent px-10 py-3 text-[14px] font-semibold text-white hover:bg-accent hover:text-navy-deep transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
