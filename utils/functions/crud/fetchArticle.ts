// GET an article
const fetchArticle = async (articleID: string) => {
    const response = await fetch('/api/article/fetch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: articleID })
    });

    if (!response.ok) {
        throw new Error("Failed to fetch article");
    }

    const data = await response.json();
    return data;
};

export default fetchArticle;