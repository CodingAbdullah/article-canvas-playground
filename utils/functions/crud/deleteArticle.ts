// Client-side call to delete an article
const deleteArticle = async (articleID: string) => {
    const response = await fetch('/api/article/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: articleID })
    });
    return response.json();
};

export default deleteArticle;