import ArticleType from '../../types/ArticleType';

// Update an existing article
const updateArticle = async (article: ArticleType) => {
    const response = await fetch('/api/article/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: article.id!, title: article.name, content: article.content })
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await response.json();
    return data;
};

export default updateArticle;