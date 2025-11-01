import Banner from "@/component/Banner";
import BrandItems from "@/component/BrandItems";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import ImagePair from "@/component/ImagePair";
import InfBanner from "@/component/InfBanner";
import SliderMeno from "@/component/SliderMeno";





export default function Home() {
  return (
   <div>
      <div className="bg-secondery">
        <Header />
      </div>
      <div>
        <SliderMeno />
      </div>
      <div>
        <ImagePair />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <BrandItems />
      </div>
      <div>
        <InfBanner />
      </div>
   </div>
  );
}
