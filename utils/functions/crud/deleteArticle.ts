// Client-side call to delete an article
const deleteArticle = async (articleID: string) => {
    const response = await fetch('/api/article/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: articleID })
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await response.json();
    return data;
};

export default deleteArticle;