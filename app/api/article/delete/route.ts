import { NextRequest, NextResponse } from "next/server";
import getSupabaseClient from "@/utils/functions/supabase_client/SupabaseClient";

// DELETE - Delete article (requires article ID in body)
export async function DELETE(request: NextRequest) {
    try {
      const body = await request.json();
      const { id } = body;
  
      if (!id) {
        return NextResponse.json({ error: 'Article ID is required' }, { status: 400 });
      }
  
      const { error } = await getSupabaseClient()
        .from('Article')
        .delete()
        .eq('id', id);
  
      if (error) {
        return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
      }
  
      return NextResponse.json({ message: 'Article deleted successfully' });
    } 
    catch (error) {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }