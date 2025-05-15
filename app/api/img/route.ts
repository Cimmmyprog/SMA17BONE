import { NextRequest, NextResponse } from "next/server";

const fasilitas = [
  {
    id: 1,
    title: "Perpustakaan",
    img: "f.jpeg",
    deskripsi:
      "Perpustakaan adalah tempat yang menyediakan berbagai sumber informasi, seperti buku, majalah, dan media digital, untuk mendukung pembelajaran dan penelitian.",
  },
  {
    id: 2,
    title: "Laboratorium",
    img: "3.jpg",
    deskripsi:
      "Laboratorium adalah ruang yang dilengkapi dengan peralatan dan bahan untuk melakukan eksperimen, penelitian, dan pembelajaran praktis di bidang sains dan teknologi.",
  },
  {
    id: 3,
    title: "Lapangan Olahraga",
    img: "c.jpeg",
    deskripsi:
      "Lapangan olahraga adalah area terbuka yang dirancang untuk berbagai aktivitas fisik dan olahraga, seperti sepak bola, basket, dan atletik.",
  },
  {
    id: 4,
    title: "Ruang Komputer",
    img: "b.jpeg",
    deskripsi:
      "Ruang komputer adalah ruang yang dilengkapi dengan komputer dan perangkat lunak untuk mendukung pembelajaran, penelitian, dan pengembangan keterampilan teknologi informasi.",
  },
  {
    id: 5,
    title: "Ruang aula",
    img: "d.jpeg",
    deskripsi:
      "Ruang aula adalah ruang besar yang digunakan untuk pertemuan, acara, dan kegiatan sekolah, seperti seminar, konser, dan upacara.",
  },
  {
    id: 6,
    title: "Mesjid",
    img: "a.jpeg",
    deskripsi:
      "Mesjid adalah tempat ibadah bagi umat Islam, yang digunakan untuk melaksanakan shalat, pengajian, dan kegiatan keagamaan lainnya.",
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
