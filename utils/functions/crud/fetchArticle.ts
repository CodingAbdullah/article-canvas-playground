// GET an article
const fetchArticle = async (articleID: string) => {
    const response = await fetch('/api/article/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: articleID })
    });
    
    const data = await response.json();
    
    // Check if data is empty/null/undefined
    if (!data || Object.keys(data).length === 0) {
        throw new Error('Article not found');
    }
    
    return data;
};

export default fetchArticle;