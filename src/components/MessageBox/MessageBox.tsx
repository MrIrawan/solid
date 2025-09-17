import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

import { MessageBoxProps } from "@/types/customComponentsTypes";

export default function MessageBox({
    children,
    labelStyle,
    ...props
} : MessageBoxProps) {
    return (
        <>
            <Label className={labelStyle}>{children}</Label>
            <Textarea {...props}/>
        </>
    )
}