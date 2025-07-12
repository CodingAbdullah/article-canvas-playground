import getSupabaseClient from "../supabase_client/SupabaseClient";

// Fetch an article from Supabase
export default async function fetchArticle(articleID: string) {
    // Fetch operation
    const { data, error } = await getSupabaseClient()
        .from('Article')
        .select('*')
        .eq('id', articleID.trim())
        .single(); // A single record should suffice, if the slug is valid

    // Add more detailed logging
    if (error) {
        console.log('Error details:', {
            code: error.code,
            message: error.message,
            details: error.details,
            hint: error.hint
        });

        throw new Error("Could not fetch requested Article");
    }
  
    return data;
}