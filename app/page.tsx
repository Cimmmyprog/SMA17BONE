import Hero from "@/components/Navbar/page";
import NewsSection from "@/components/Kabar/page";
// import Facilities from "@/components/about/page";
import Navbar from "@/components/hero/page";
import Kegiatan from "@/components/kegiatan/page";

export default function Home() {
  return (
   
  <div>
    <Navbar />
   <Hero />    
    
    <Kegiatan/>
    <NewsSection/>
  </div>
  )
}
