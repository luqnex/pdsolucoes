import { ReactNode } from "react";
import { Card } from "./styles";

interface CardProps {
    children: ReactNode
}


export function CardComponent({ children }: CardProps) {
    return (
        <Card>
            <div className="content">
                {children}
            </div>
        </Card>
    )
}