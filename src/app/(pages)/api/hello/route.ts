import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, name, content, phone } = await request.json();

    return NextResponse.json({ success: true, message: 'Message sent' });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Bad request' });
  }
}
