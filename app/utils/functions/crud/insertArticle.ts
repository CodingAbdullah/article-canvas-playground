import { v4 as uuidv4 } from 'uuid';
import ArticleType from '../../types/ArticleType';
import getSupabaseClient from '../supabase_client/SupabaseClient';

// Use this function to insert an article into the Supabase database
export default async function insertArticle(article: ArticleType) {
    // Insert article into Supabase
    const { data, error } = await getSupabaseClient()
        .from('Article')
        .insert([
            {
                id: uuidv4(),
                title: article.name,
                content: article.content,
            }
        ]);

    // Conditionally return data based on Supabase query result    
    if (error) {
        throw error;
    }
    
    return data;
}