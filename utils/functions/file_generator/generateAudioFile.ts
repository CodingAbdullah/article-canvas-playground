import ArticleType from '../../types/ArticleType';

// Secure function for generating an audio file from text via API route
export default async function generateAudioFile(article: ArticleType): Promise<void> {
  try {
    // Call for generating audio file from a back-end API
    const response = await fetch('/api/generate-audio', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleInformation: article }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate audio');
    }

    // Get the audio data as blob
    const blob = await response.blob();
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp3`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up
    URL.revokeObjectURL(url);
  } 
  catch {
    throw new Error('Failed to generate audio file');
  }
}