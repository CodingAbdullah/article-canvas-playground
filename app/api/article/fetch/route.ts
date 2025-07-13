import { NextRequest, NextResponse } from "next/server";
import getSupabaseClient from "@/utils/functions/supabase_client/SupabaseClient";

// POST request function used for fetching articles
export async function POST(request: NextRequest){
    try {
        const body = await request.json();
        const { id } = body;
    
        const { data, error } = await getSupabaseClient()
          .from('Article')
          .select('*')
          .eq('id', id)
          .single();
        
        if (error) {
          return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
        }
    
        return NextResponse.json(data);
      } 
      catch (error) {
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
      }
}