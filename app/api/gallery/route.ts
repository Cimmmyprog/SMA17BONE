// app/api/gallery/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const gallery = await prisma.gallery.findMany({
      orderBy: {
        id: 'desc', // Sort by most recent first
      },
      include: {
        post: true, // Include related post data if needed
      },
    });

    return NextResponse.json({
      status: 'success',
      data: gallery,
    });
  } catch (error) {
    console.error('Failed to fetch gallery images:', error);
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to fetch gallery images',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}