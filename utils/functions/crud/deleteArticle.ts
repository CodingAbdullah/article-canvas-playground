import getSupabaseClient from "../supabase_client/SupabaseClient";

// Delete an article from Supabase
export default async function deleteArticle(articleID: string) {
  const { data, error } = await getSupabaseClient()
    .from('Article')
    .delete()
    .eq('id', articleID.trim())

    // Conditionally return to the client, the result
    if (error) {
        throw new Error("Could not delete article");
    }
    else {
        return data;
    }
}