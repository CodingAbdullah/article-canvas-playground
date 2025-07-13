import { 
    FileText,
    Download, 
    Github, 
    Headphones
} from "lucide-react";
import UseCaseType from "../types/UseCaseType";

// Use Case list constant
const UseCaseList: UseCaseType[] = 
[
    { title: "Bloggers", description: "Create engaging content with Medium-style formatting", icon: FileText },
    { title: "Technical Writers", description: "Carefully detail and document technicalities with Markdown format", icon: Github },
    { title: "Content Creators", description: "Seamlessly generate audio content from articles", icon: Headphones },
    { title: "Publishers", description: "Distribute article content in multiple formats", icon: Download }
]

export default UseCaseList;