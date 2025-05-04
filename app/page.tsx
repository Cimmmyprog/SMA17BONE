

// import Facilities from "@/components/about/page";
import Kegiatan from "@/components/kegiatan/page";
import Baner from "@/components/hero/page";
import Content from "@/components/Content/page";
import StatSection from "@/components/Jumlah/page";
import LinkBerita from "@/components/Lnikberita/page";
import Footer from "@/components/Footer/page";

export default function Home() {
  return (
   
  <div>
    <Baner/>
    <Kegiatan/>
    <StatSection/>
    <LinkBerita/>
    <Content/>
     <Footer/>
  </div>
  )
}
