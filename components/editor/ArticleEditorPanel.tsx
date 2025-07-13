'use client';

import fetchArticle from "@/utils/functions/crud/fetchArticle";
import ArticleType from "@/utils/types/ArticleType";
import ArticleMetricsType from "@/utils/types/ArticleMetricsType";
import Navbar from "../Navbar";
import EditorStatusBar from "./EditorStatusBar";
import EditorDownloadPanel from "./EditorDownloadPanel";
import { v4 as uuidv4 } from 'uuid';
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useEffect, useMemo, useState } from 'react';

// Article Editor Panel custom component
export default function ArticleEditorPanel(props: { aID?: string }) {
    const [articleTitle, updateArticleTitle] = useState<string>('');
    const [articleContent, updateArticleContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ID, setArticleID] = useState<string>('0');
    const [isNewArticle, updateNewArticleStatus] = useState(false);
    
    const articleMetrics: ArticleMetricsType = useMemo(() => ({
        wordCount: String(articleContent.trim().split(/\s+/).length || 0),
        characterCount: String(articleContent.length)
    }), [articleContent]);
    
    // Upon loading page, check if article exists and load the appropriate fields
    useEffect(() => {
        const loadArticle = async () => {
            // Conditionally run to check if ID value is provided
            // If none is provided, generate a new article ID
            // If so, run a check to test validity, otherwise throw error
            // If valid, proceed to loading article content
            if (!props.aID) {
                const articleID = uuidv4();
                setArticleID(articleID);
                updateNewArticleStatus(true);
                return;
            }

            try {
                setIsLoading(true);
                const article: ArticleType = await fetchArticle(props.aID);
                updateArticleTitle(article.name || '');
                updateArticleContent(article.content || '');
                setArticleID(props.aID);
                setIsLoading(false);
            } 
            catch {
                throw new Error("Could not load the requested article");
            } 
        };

        loadArticle();
    }, [props.aID]);
    
    // Loading state (only show if we're actually loading an article)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-kings-white">Loading article...</div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <h1 className="pt-5 flex justify-center text-4xl md:text-6xl font-bold gradient-text leading-tight mb-6">
                Editor
            </h1>
            <EditorDownloadPanel article={{ id: ID, name: articleTitle, content: articleContent }} articleStatus={ isNewArticle } />
            {/* Editor Content */}
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="frosted rounded-xl overflow-hidden">
                    {/* Title Input */}
                    <div className="p-6 border-b border-white/10">
                        <Input
                            placeholder="Article title..."
                            value={articleTitle}
                            onChange={(e) => updateArticleTitle(e.target.value)}
                            className="text-2xl font-bold bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 focus:ring-0"
                        />
                    </div>                
                    {/* Main Content Textarea - Medium-style */}
                    <div className="p-6">
                        <Textarea
                            placeholder="Tell your story..."
                            value={articleContent}
                            onChange={(e) => updateArticleContent(e.target.value)}
                            className="min-h-[600px] text-lg leading-relaxed bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 focus:ring-0 resize-none"
                            style={{
                                lineHeight: '1.8',
                                fontSize: '18px',
                            }}
                        />
                    </div>
                </div>   
                <EditorStatusBar articleMetrics={articleMetrics} />             
            </div>
        </>
    )
}