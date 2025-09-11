import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { InputGroupProps } from "@/types/types";

export default function InputGroup({
    children,
    htmlFor,
    labelStyle,
    inputStyle,
    ...props
} : InputGroupProps) {
    return (
        <>
            <Label className={labelStyle}>{ children }</Label>
            <Input 
                id={htmlFor}
                className={inputStyle}
                {...props}
            />
        </>
    )
}