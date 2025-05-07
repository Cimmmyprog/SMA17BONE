import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ status: 400, message: 'Invalid ID', data: {} });
  }

  try {
    const data = await prisma.post.findMany({
      where: {
        id: Number(id),
      },
      orderBy: { creatdAt: 'desc' },
    });

    if (data.length > 0) {
      return NextResponse.json({ status: 200, message: 'Success', data });
    }

    return NextResponse.json({ status: 404, message: 'Not found', data: data });
  } catch (error) {
    return console.log(error);
  }
};
