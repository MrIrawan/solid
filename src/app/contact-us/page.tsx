"use client";

import InputGroup from "@/components/InputGroup/InputGroup";
import MessageBox from "@/components/MessageBox/MessageBox";

import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="p-10 bg-custom-base from-custom-base to-custom-accent">
      <form className="space-y-6">
        <div className="flex flex-col gap-2">
          <InputGroup
            type="text"
            labelStyle="text-sm font-main-semibold text-black"
            inputStyle="placeholder:font-main-medium font-main-regular px-3 py-5 rounded-sm"
            htmlFor="full_name"
          >
            full name
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <InputGroup
            type="email"
            labelStyle="text-sm font-main-semibold text-black"
            inputStyle="placeholder:font-main-medium font-main-regular px-3 py-5 rounded-sm"
            htmlFor="email_address"
          >
            email address
          </InputGroup>
        </div>

        <div className="flex flex-col gap-2">
          <InputGroup
            type="text"
            labelStyle="text-sm font-main-semibold text-black"
            inputStyle="placeholder:font-main-medium font-main-regular px-3 py-5 rounded-sm"
            htmlFor="company_name"
          >
            company / organization name
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <InputGroup
            type="text"
            labelStyle="text-sm font-main-semibold text-black"
            inputStyle="placeholder:font-main-medium font-main-regular px-3 py-5 rounded-sm"
            htmlFor="subject_message"
          >
            subject message
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <MessageBox
            labelStyle="text-sm font-main-semibold text-black"
            className="min-h-44 max-h-60"
          >
            your message
          </MessageBox>
        </div>

        <Button className="w-full h-11 text-base font-main-medium">
          send your message
        </Button>
      </form>
    </div>
  );
}
