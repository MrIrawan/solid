import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
    labelStyle: string;
    htmlFor: string;
    children: React.ReactNode;
    inputStyle: string;
}

export interface MessageBoxProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: React.ReactNode;
    labelStyle: string;
}