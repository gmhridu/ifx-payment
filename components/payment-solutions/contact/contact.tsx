"use client";

import { LinkButton } from "@/components/common/link-button";
import {
  Field,
  SelectInput,
  TextInput,
} from "@/components/home/contact/contact";

export function Contact() {
  return (
    <section id="contact" className="px-3 sm:px-6 py-12">
      <div className="mx-auto max-w-355 overflow-hidden rounded-[28px] bg-linear-to-br from-[#050818] via-[#0a1535] to-[#103a8a] px-6 py-14 text-white sm:px-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="items-center bg-[linear-gradient(107.3deg,rgb(0,6,22)_13.28%,rgb(5,66,160)_103.49%)] box-border caret-transparent text-white gap-x-2 inline-flex tracking-[0.2px] leading-[normal] gap-y-2 no-underline text-nowrap mb-8 pl-2 pr-5 py-2 rounded-[50px]">
              Contact our experts{" "}
            </span>
            <h2 className="mt-8 text-[44px] sm:text-[56px] font-extrabold leading-none text-white">
              Ready to transform the way you move money globally?
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/80">
              Leave your details, and one of our team will get in touch to
              understand how you currently move money across borders, where the
              pain points are, and how our platform could make things simpler,
              clearer, and more efficient for your business.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="First name" required>
              <TextInput type="text" />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Business email address" required>
                <TextInput type="email" />
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

            <div className="grid grid-cols-2 gap-4">
              <Field label="Company name">
                <TextInput type="text" />
              </Field>

              <Field label="Phone number" required>
                <TextInput type="tel" placeholder="+44" />
              </Field>
            </div>

            <label className="flex items-start gap-3 pt-1 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-accent"
              />
              <span className="text-[12.5px] leading-snug text-white/80">
                Please tick this box if you would like to receive marketing
                materials, the latest product updates and company news from IFX
                Payments. Please click here to read our{" "}
                <a href="#" className="text-accent underline">
                  Privacy Policy
                </a>{" "}
                to see how we collect and store your information.
              </span>
            </label>

            <p className="text-[12px] leading-relaxed text-white/65">
              By submitting this form, you consent to our collection, use, and
              storage of your personal information in accordance with our
              Privacy Policy. For more details on how we protect your data,
              please review our{" "}
              <a href="#" className="text-[#36e7d5] underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex justify-end pt-2">
               <div className="flex justify-end pt-2">
              <LinkButton type="submit" buttonText="Submit" />
            </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
