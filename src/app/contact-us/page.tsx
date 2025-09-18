"use client";

import InputGroup from "@/components/InputGroup/InputGroup";
import MessageBox from "@/components/MessageBox/MessageBox";

import { Button } from "@/components/ui/button";

import { useForm, SubmitHandler } from "react-hook-form";
import { ContactUsData } from "@/types/types";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ContactUsData>();

  const onSubmitHandler: SubmitHandler<ContactUsData> = (data) => {
    console.log(data)
  }

  return (
    <div className="p-10 bg-custom-base from-custom-base to-custom-accent">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="flex flex-col gap-2">
          <InputGroup
            type="text"
            labelStyle="text-sm font-main-semibold text-black"
            inputStyle="placeholder:font-main-medium font-main-regular px-3 py-5 rounded-sm"
            htmlFor="full_name"
            {...register("full_name", {required: "full name is required", minLength: 3})}
            aria-invalid={errors.full_name ? "true" : "false"}
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
            {...register("email", {required: "email is required"})}
            aria-invalid={errors.email ? "true" : "false"}
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
            {...register("company_name")}
            aria-invalid={errors.company_name ? "true" : "false"}
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
            {...register("subject_message", {required: "subject message is required", minLength: 5})}
            aria-invalid={errors.subject_message ? "true" : "false"}
          >
            subject message
          </InputGroup>
        </div>
        <div className="flex flex-col gap-2">
          <MessageBox
            labelStyle="text-sm font-main-semibold text-black"
            className="min-h-44 max-h-60"
            {...register("message", {required: "message is required", minLength: 10})}
            aria-invalid={errors.message ? "true" : "false"}
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
