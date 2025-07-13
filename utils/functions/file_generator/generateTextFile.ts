import ArticleType from '../../types/ArticleType';

// Function for generating a text file from article content
export default async function generateTextFile(article: ArticleType): Promise<void> {
  try {
    // Create the text content from the article
    const textContent = `${article.name}\n\n${article.content}`;
    
    // Create a blob with the text content
    const blob = new Blob([textContent], { type: 'text/plain' });
    
    // Create download link
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${article.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    // Clean up
    URL.revokeObjectURL(url);
  } 
  catch (error) {
    throw new Error('Failed to generate text file');
  }
}