import { NextRequest, NextResponse } from "next/server";

const fasilitas = [
  {
    id: 1,
    title: "Perpustakaan",
    img: "9.jpeg",
  },
  {
    id: 2,
    title: "Laboratorium",
    img: "3.jpg",
  },
  {
    id: 3,
    title: "Lapangan Olahraga",
    img: "1.jpg",
  },
  {
    id: 4,
    title: "Ruang Komputer",
    img: "5.jpeg",
  },
  {
    id: 5,
    title: "Ruang aula",
    img: "8.jpeg",
  },
  {
    id: 6,
    title: "Mesjid",
    img: "7.jpeg",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const image = fasilitas.find((item) => item.id === Number(id));
    if (image) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: image,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: {},
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: fasilitas,
  });
}
