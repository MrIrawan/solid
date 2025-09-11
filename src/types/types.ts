import React, { InputHTMLAttributes } from "react";

export interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    labelStyle: string;
    htmlFor: string;
    children: React.ReactNode;
    inputStyle: string;
}