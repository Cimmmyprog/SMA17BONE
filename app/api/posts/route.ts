import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { creatdAt: 'desc' }, // ✅ fix typo: "creatdAt" → "createdAt"
    });

    return NextResponse.json({ data: posts });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
};


