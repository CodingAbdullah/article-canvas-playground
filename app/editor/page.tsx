'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Download, 
  Database, 
  Volume2, 
  Play,
  Pause
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

interface EditorState {
  title: string;
  content: string;
  htmlContent: string; // Add this for rich text editor
  format: 'markdown' | 'text' | 'medium';
}

export default function EditorPage() {
  const [editorState, setEditorState] = useState<EditorState>({
    title: '',
    content: '',
    htmlContent: '', // Initialize this
    format: 'medium'
  });
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [articleId, setArticleId] = useState<string | null>(null);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-save functionality
  useEffect(() => {
    const autoSave = setTimeout(() => {
      if (editorState.title || editorState.content) {
        handleAutoSave();
      }
    }, 5000);

    return () => clearTimeout(autoSave);
  }, [editorState]);

  const handleAutoSave = async () => {
    try {
      // Simulate auto-save to Supabase
      console.log('Auto-saving...', editorState);
    } 
    catch (error) {
      console.error('Auto-save failed:', error);
    }
  };

  const handleSaveToSupabase = async () => {
    setIsSaving(true);
    try {
      // Simulate saving to Supabase
      const mockArticleId = Math.random().toString(36).substr(2, 9);
      setArticleId(mockArticleId);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(`Article saved! URL: /editor/${mockArticleId}`);
      
      // Update URL without page reload
      window.history.pushState({}, '', `/editor/${mockArticleId}`);
    } 
    catch (error) {
      toast.error('Failed to save article');
    } 
    finally {
      setIsSaving(false);
    }
  };

  const handleDownload = (format: 'pdf' | 'docx' | 'md' | 'txt') => {
    try {
      let content = '';
      let filename = '';
      let mimeType = '';

      switch (format) {
        case 'md':
          content = `# ${editorState.title}\n\n${editorState.content}`;
          filename = `${editorState.title || 'article'}.md`;
          mimeType = 'text/markdown';
          break;
        case 'txt':
          content = `${editorState.title}\n\n${editorState.content}`;
          filename = `${editorState.title || 'article'}.txt`;
          mimeType = 'text/plain';
          break;
        case 'pdf':
          toast.info('PDF generation would integrate with a PDF library');
          return;
        case 'docx':
          toast.info('DOCX generation would integrate with a document library');
          return;
      }

      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success(`Downloaded ${format.toUpperCase()} file`);
    } 
    catch (error) {
      toast.error('Download failed');
    }
  };

  const handleGenerateAudio = async () => {
    setIsGeneratingAudio(true);
    try {
      // Simulate audio generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Create a mock audio URL (in real app, this would come from TTS service)
      const mockAudioUrl = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT';
      setAudioUrl(mockAudioUrl);
      
      toast.success('Audio generated successfully!');
    } 
    catch (error) {
      toast.error('Audio generation failed');
    } 
    finally {
      setIsGeneratingAudio(false);
    }
  };

  const toggleAudioPlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } 
      else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Navbar */}
      <Navbar />
      <h1 className="pt-5 flex justify-center text-4xl md:text-6xl font-bold gradient-text leading-tight mb-6">
        Editor
      </h1>
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
          onClick={handleSaveToSupabase}
          disabled={isSaving}
          variant="outline" 
          size="sm"
          className="border-kings-silver/30"
        >
          <Database className="w-4 h-4 mr-2" />
          {isSaving ? 'Saving...' : 'Save'}
        </Button>

        {/* Audio Generation */}
        <Button 
          onClick={handleGenerateAudio}
          disabled={isGeneratingAudio}
          variant="outline" 
          size="sm"
          className="border-kings-silver/30"
        >
          <Volume2 className="w-4 h-4 mr-2" />
          {isGeneratingAudio ? 'Generating...' : 'Generate Audio'}
        </Button>

        {/* Audio Player */}
        {audioUrl && (
          <Button 
            onClick={toggleAudioPlayback}
            variant="outline" 
            size="sm"
            className="border-green-500/30 text-green-400"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
        )}
      </div>
      {/* Editor Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="frosted rounded-xl overflow-hidden">
          {/* Title Input */}
          <div className="p-6 border-b border-white/10">
            <Input
              placeholder="Article title..."
              value={editorState.title}
              onChange={(e) => setEditorState(prev => ({ ...prev, title: e.target.value }))}
              className="text-2xl font-bold bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 focus:ring-0"
            />
          </div>
          
          {/* Main Content Textarea - Medium-style */}
          <div className="p-6">
            <Textarea
              placeholder="Tell your story..."
              value={editorState.content}
              onChange={(e) => setEditorState(prev => ({ ...prev, content: e.target.value }))}
              className="min-h-[600px] text-lg leading-relaxed bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 focus:ring-0 resize-none"
              style={{
                lineHeight: '1.8',
                fontSize: '18px',
              }}
            />
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="mt-4 flex items-center justify-between text-sm text-kings-silver/60">
          <div className="flex items-center space-x-4">
            <span>{editorState.content.length} characters</span>
            <span>{editorState.content.split(' ').filter(word => word.length > 0).length} words</span>
            <span>Auto-save enabled</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}