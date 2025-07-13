import { NextRequest, NextResponse } from "next/server";
import getSupabaseClient from "@/utils/functions/supabase_client/SupabaseClient";

// POST request function for inserting an article into Supabase
export async function PUT(request: NextRequest) {
    // Run a call to the Supabase database and check insert operation was successsful
    // Update an existing article
    try {
        const body = await request.json();
        const { id, title, content } = body;
    
        if (!id || !title || !content) {
            return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
        }
  
        const { data, error } = await getSupabaseClient()
        .from('Article')
        .update([
          {
            id,
            name: title,
            content,
          }
        ])
        .eq('id', id);
  
      if (error) {
        return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
      }
  
      return NextResponse.json(data, { status: 201 });
    } 
    catch (error) {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}