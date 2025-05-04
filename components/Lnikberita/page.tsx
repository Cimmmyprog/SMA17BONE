import { Inter } from "next/font/google";
import Link from "next/link";

const getinter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
})
export default function LinkBerita(){

    return (
        <section className={`bg-blue-800 py-9 mb-2 w-full${getinter.className}`}>
            <Link href="/Kabar">
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full font-semibold">
                        Lihat Berita Lainnya
                    </button>
                </div>
            </Link>
        </section>
    )
}