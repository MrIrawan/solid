"use client";

import InputGroup from "@/components/InputGroup/InputGroup";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUsPage() {
    return (
        <>
            <section className="w-full h-screen lg:flex lg:items-center lg:justify-center">
                <Separator orientation="vertical" className="hidden lg:block"/>
                    <div className="container mx-auto lg:mx-0 h-full flex items-center justify-center lg:flex-col">
                        <Separator orientation="horizontal" className="hidden lg:block"/>
                        <div className="w-fit h-fit flex flex-col gap-6 px-6 py-6">
                            <div className="flex flex-col items-center gap-3">
                                <div className="w-fit px-6 py-1.5 bg-custom-accent rounded-full">
                                    <p className="text-base font-main-semibold text-custom-primary">contact us</p>
                                </div>
                                <h2 className="text-4xl font-main-bold text-center">let's get in touch</h2>
                                <p className="text-base font-main-medium text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, animi.</p>
                            </div>
                            <form action="" className="w-full flex flex-col gap-4">
                                <div className="flex flex-col gap-1">
                                    <InputGroup
                                        htmlFor="full_name"
                                        labelStyle="text-base font-main-semibold text-custom-primary flex items-center gap-1"
                                        inputStyle="ring ring-custom-accent font-main-regular placeholder:font-main-regular rounded-full focus-visible:ring-2 focus-visible:ring-custom-accent focus-visible:outline-none"
                                        placeholder="enter your full name..."
                                        type="text"
                                    >
                                        full name <span className="text-destructive">*</span>
                                    </InputGroup>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <InputGroup
                                        htmlFor="email_adress"
                                        labelStyle="text-base font-main-semibold text-custom-primary flex items-center gap-1"
                                        inputStyle="ring ring-custom-accent font-main-regular placeholder:font-main-regular rounded-full focus-visible:ring-2 focus-visible:ring-custom-accent focus-visible:outline-none"
                                        placeholder="enter your email..."
                                        type="email"
                                    >
                                        email adress <span className="text-destructive">*</span>
                                    </InputGroup>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <InputGroup
                                        htmlFor="company_name"
                                        labelStyle="text-base font-main-semibold text-custom-primary flex items-center gap-1"
                                        inputStyle="ring ring-custom-accent font-main-regular placeholder:font-main-regular rounded-full focus-visible:ring-2 focus-visible:ring-custom-accent focus-visible:outline-none"
                                        placeholder="enter your company name..."
                                        type="text"
                                    >
                                        company name <span className="text-destructive">*</span>
                                    </InputGroup>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Label 
                                        htmlFor="message" 
                                        className="text-base font-main-semibold text-custom-primary"
                                    >
                                        your message
                                    </Label>
                                    <Textarea 
                                        placeholder="enter your message..." 
                                        className="font-main-regular ring ring-custom-accent focus-visible:ring-2 focus-visible:ring-custom-accent focus-visible:outline-none placeholder:font-main-regular max-h-32"
                                    />
                                    <p className="font-main-regular text-muted-foreground text-sm">Your message will be copied to the support team.</p>
                                </div>
                                <div className="w-full flex items-center justify-center mt-6">
                                    <Button 
                                        className="w-full text-base font-main-medium rounded-full text-custom-base"
                                        size={"lg"}
                                    >
                                        send your message
                                    </Button>
                                </div>
                            </form>
                        </div>
                        <Separator orientation="horizontal" className="hidden lg:block"/>
                    </div>
                <Separator orientation="vertical" className="hidden lg:block"/>
            </section>
        </>
    );
}