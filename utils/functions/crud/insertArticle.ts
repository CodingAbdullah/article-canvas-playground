import ArticleType from '../../types/ArticleType';

// Client-side call for creating an article
const insertArticle = async (article: ArticleType) => {
    const response = await fetch('/api/article/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: article.id!, title: article.name, content: article.content })
    });
    
    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }

    const data = await response.json();
    return data;

};

export default insertArticle;