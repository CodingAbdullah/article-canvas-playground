import { v4 as uuidv4 } from 'uuid';
import ArticleType from '../../types/ArticleType';
import getSupabaseClient from '../supabase_client/SupabaseClient';

// Use this function to update an article into the Supabase database
export default async function insertArticle(article: ArticleType) {
    // Update article content into Supabase database
    const { data, error } = await getSupabaseClient()
        .from('Article')
        .update([
            {
                id: uuidv4(),
                title: article.name,
                content: article.content,
            }
        ])
        .eq('id', article.id!);

    // Conditionally return data based on Supabase query result    
    if (error) {
        throw error;
    }
    
    return data;
}