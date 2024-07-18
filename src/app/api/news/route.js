import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news' });
  }
}