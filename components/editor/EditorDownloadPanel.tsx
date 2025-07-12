'use client';

import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { Database, Download, Volume2 } from 'lucide-react';
import { Button } from '../ui/button';
import ArticleType from '@/app/utils/types/ArticleType';

// Editor Download Panel custom component
export default function EditorDownloadPanel(props: { article: ArticleType }) {

    const handleDownload = (type: string) => {

    }

    const handleSaveToSupabase = (type: string) => {

    }
    
    const handleGenerateAudio = (type: string) => {

    }


    return (
        <div className="flex justify-center pt-5 space-x-2">
            {/* Download Options */}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="border-kings-silver/30">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => handleDownload('pdf')}>
                        Download as PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownload('docx')}>
                        Download as DOCX
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownload('md')}>
                        Download as Markdown
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDownload('txt')}>
                        Download as Text
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* Save to Supabase */}
            <Button
                variant="outline" 
                size="sm"
                className="border-kings-silver/30"
            >               
                <Database className="w-4 h-4 mr-2" />
                Save
            </Button>

            {/* Audio Generation */}
            <Button 
                variant="outline" 
                size="sm"
                className="border-kings-silver/30"
            >
                <Volume2 className="w-4 h-4 mr-2" />
                Audio
            </Button>
        </div>
    )
}