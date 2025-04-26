import { NextRequest,NextResponse } from "next/server";
const imagex = [
  {
    "id": 1,
    "src": "/img/bagsket.jpg",
    "alt": "Kegiatan Olahraga"
  },
  {
    "id": 2,
    "src": "/img/sepak bola.jpg",
    "alt": "Kegiatan Olahraga"
  },
  {
    "id": 3,
    "src": "/img/3.jpg",
    "alt": "Praktek Laboratorium"
  }
]

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if(id){
    const image = imagex.find((img) => img.id === Number(id));
    if(image){
      return NextResponse.json({status : 200, massess : 'Success', data : image});
    }
    return NextResponse.json({status : 404, massess : 'not found', data : {}});
  }
  return NextResponse.json({status : 200, massess : ' not found', data : imagex});
}