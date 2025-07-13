'use client';

import ArticleType from '@/utils/types/ArticleType';
import generateAudioFile from '@/utils/functions/file_generator/generateAudioFile';
import insertArticle from '@/utils/functions/crud/insertArticle';
import updateArticle from '@/utils/functions/crud/updateArticle';
import generateTextFile from '@/utils/functions/file_generator/generateTextFile';
import { useState } from 'react';
import { toast } from 'sonner';
import { Database, Download, Volume2 } from 'lucide-react';
import { Button } from '../ui/button';

// Editor Download Panel custom component
export default function EditorDownloadPanel(props: { article: ArticleType, articleStatus: boolean }) {
    const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
    const [isGeneratingSave, setIsGeneratingSave] = useState(false);
    const [isGeneratingText, setIsGeneratingText] = useState(false);

    // Function for handling the generation of a text file
    const handleDownload = async () => {
        // Generate a text file to be downloaded from the article page
        try {
            setIsGeneratingText(true);
            await generateTextFile(props.article);
            toast.success('Text file downloaded successfully!');
        } 
        catch (error) {
            toast.error('Failed to generate text file. Please try again.');
        }
        finally {
            setIsGeneratingText(false); // 
        }
    }

    // Function for handling the save operation to Supabase
    const handleSaveToSupabase = async () => {
        try {
            setIsGeneratingSave(true);
            
            // Determine whether to insert or update based on articleStatus
            if (props.articleStatus) {
                // Insert new article
                await insertArticle(props.article);
                const editorUrl = `/editor/${props.article.id!}`;
                toast.success(`Article saved successfully! View at ${editorUrl}`);
            } 
            else {
                // Update existing article
                await updateArticle(props.article);
                const editorUrl = `/editor/${props.article.id!}`;
                toast.success(`Article updated successfully! View at ${editorUrl}`);
            }
        } 
        catch {
            toast.error('Failed to save article. Please try again.');
        } 
        finally {
            setIsGeneratingSave(false);
        }
    }
    
    // Function for handling the generation of an audio file
    const handleGenerateAudio = async () => {
        try {
            setIsGeneratingAudio(true);
            
            // Generate and download the audio file
            // Generate a toast message indicating the status of delivery
            await generateAudioFile(props.article);
            toast.success('Audio file generated successfully!');
        } 
        catch (error){
            toast.error('Failed to generate audio file. Please try again.');
        } 
        finally {
            setIsGeneratingAudio(false);
        }
    }

    // Render the three different download options to the user
    return (
        <div className="flex justify-center pt-5 space-x-2">
            {/* Download Options */}
            <Button 
                onClick={handleDownload} 
                disabled={isGeneratingText}
                variant="outline" 
                size="sm" 
                className="border-kings-silver/30"
            >
                <Download className="w-4 h-4 mr-2" />
                { isGeneratingText ? 'Downloading...' : 'Download' }
            </Button>

            {/* Save to Supabase */}
            <Button 
                variant="outline" 
                size="sm"
                className="border-kings-silver/30"
                onClick={handleSaveToSupabase}
                disabled={isGeneratingSave}
            >               
                <Database className="w-4 h-4 mr-2" />
                { isGeneratingSave ? 'Saving...' : 'Save' }
            </Button>

            {/* Audio Generation */}
            <Button 
                variant="outline" 
                size="sm"
                className="border-kings-silver/30"
                onClick={handleGenerateAudio}
                disabled={isGeneratingAudio}
            >
                <Volume2 className="w-4 h-4 mr-2" />
                { isGeneratingAudio ? 'Generating...' : 'Audio' }
            </Button>
        </div>
    )
}