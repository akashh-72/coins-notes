import { NextRequest, NextResponse } from 'next/server';

// POST - Handle contact form submission
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Send an email notification
    // 2. Save to database
    // 3. Send auto-reply to user

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will get back to you soon.',
        success: true
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

