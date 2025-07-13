import { NextRequest, NextResponse } from 'next/server';
import openaiClient from '@/utils/functions/openai_client/openAIClient';

// Back-end request handling the creation of audio content
export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body = await request.json();
        const { articleInformation } = body;
        
        if (!articleInformation.id! || !articleInformation.name || !articleInformation.content) {
            return NextResponse.json(
                { error: 'Article data is required' },
                { status: 400 }
            );
        }

        // Combine title and content for the audio generation
        const textToSpeak = `${articleInformation.name}. ${articleInformation.content}`;
        
        // Generate audio using OpenAI's text-to-speech API
        // Default options for TTS model and voice type for now
        const mp3 = await openaiClient.audio.speech.create({
            model: "tts-1",
            voice: "alloy",
            input: textToSpeak
        });

        // Convert the response to ArrayBuffer
        const arrayBuffer = await mp3.arrayBuffer();
        
        // Return the audio data as a response
        return new NextResponse(arrayBuffer, {
            headers: {
                'Content-Type': 'audio/mpeg',
                'Content-Disposition': `attachment; filename="${articleInformation.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.mp3"`,
            },
        });
    } 
    catch (error) {
        return NextResponse.json(
            { error: 'Failed to generate audio file' },
            { status: 500 }
        );
    }
} 