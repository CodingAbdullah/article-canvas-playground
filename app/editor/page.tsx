'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Download, 
  Database, 
  Volume2, 
  Bold, 
  Italic, 
  Quote, 
  Image, 
  Link2, 
  List, 
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Code,
  Save,
  Play,
  Pause,
  FileText
} from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

  const applyFormatting = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (contentRef.current) {
      setEditorState(prev => ({
        ...prev,
        htmlContent: contentRef.current?.innerHTML || '',
        content: contentRef.current?.textContent || '' // Also update plain text for word count
      }));
    }
  };

  const insertImage = () => {
    const url = prompt('Enter image URL:');
    if (url) {
      applyFormatting('insertImage', url);
    }
  };

  const insertLink = () => {
    const url = prompt('Enter link URL:');
    if (url) {
      applyFormatting('createLink', url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <header className="frosted border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-kings-silver" />
                <span className="text-kings-white font-semibold">NoteCanvas Editor</span>
              </div>
              {articleId && (
                <span className="text-kings-silver/60 text-sm">
                  /editor/{articleId}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
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
          </div>
        </div>
      </header>

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

          {/* Format Tabs */}
          <Tabs value={editorState.format} onValueChange={(value) => setEditorState(prev => ({ ...prev, format: value as any }))}>
            <div className="px-6 py-4 border-b border-white/10">
              <TabsList className="bg-kings-black/50">
                <TabsTrigger value="medium">Medium Style</TabsTrigger>
                <TabsTrigger value="markdown">Markdown</TabsTrigger>
                <TabsTrigger value="text">Plain Text</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="medium" className="m-0">
              {/* Medium-style Toolbar */}
              <div className="px-6 py-4 border-b border-white/10">
                <div className="flex items-center space-x-2 flex-wrap gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('formatBlock', 'h1')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Heading1 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('formatBlock', 'h2')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Heading2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('formatBlock', 'h3')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Heading3 className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-white/10" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('bold')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Bold className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('italic')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Italic className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('formatBlock', 'blockquote')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Quote className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-white/10" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('insertUnorderedList')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('insertOrderedList')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <ListOrdered className="w-4 h-4" />
                  </Button>
                  <div className="w-px h-6 bg-white/10" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={insertImage}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={insertLink}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Link2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => applyFormatting('formatBlock', 'pre')}
                    className="text-kings-silver hover:text-kings-white"
                  >
                    <Code className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Rich Text Editor */}
              <div className="p-6">
                <div
                  ref={contentRef}
                  contentEditable
                  className="min-h-[500px] text-kings-white prose prose-invert max-w-none focus:outline-none"
                  style={{
                    lineHeight: '1.8',
                    fontSize: '18px',
                  }}
                  onInput={(e) => {
                    setEditorState(prev => ({
                      ...prev,
                      htmlContent: e.currentTarget.innerHTML,
                      content: e.currentTarget.textContent || '' // Also update plain text for word count
                    }));
                  }}
                  dangerouslySetInnerHTML={{ __html: editorState.htmlContent }}
                />
              </div>
            </TabsContent>

            <TabsContent value="markdown" className="m-0">
              <div className="p-6">
                <Textarea
                  placeholder="Write your markdown here..."
                  value={editorState.content}
                  onChange={(e) => setEditorState(prev => ({ ...prev, content: e.target.value }))}
                  className="min-h-[500px] bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 resize-none focus:ring-0 font-mono"
                />
              </div>
            </TabsContent>

            <TabsContent value="text" className="m-0">
              <div className="p-6">
                <Textarea
                  placeholder="Write your plain text here..."
                  value={editorState.content}
                  onChange={(e) => setEditorState(prev => ({ ...prev, content: e.target.value }))}
                  className="min-h-[500px] bg-transparent border-none text-kings-white placeholder:text-kings-silver/50 resize-none focus:ring-0"
                />
              </div>
            </TabsContent>
          </Tabs>
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
      
      {/* Hidden audio element for playback */}
      {audioUrl && (
        <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} />
      )}
    </div>
  );
}