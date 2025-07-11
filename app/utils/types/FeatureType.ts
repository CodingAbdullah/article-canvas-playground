import { LucideIcon } from "lucide-react"

// Feature custom data type
export default interface FeatureType {
    icon: LucideIcon,
    title: string,
    description: string,
    benefits: string[],
    gradient: string
}