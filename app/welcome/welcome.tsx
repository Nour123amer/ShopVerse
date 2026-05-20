import BestSellers from "~/components/home/BestSellers";
import FeaturedCollections from "~/components/home/FeaturedCollections";
import HeroSection from "~/components/home/HeroSection";
import Newsletter from "~/components/home/Newsletter";
import RecommendedProducts from "~/components/home/RecommendedProducts";


export function Welcome() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <RecommendedProducts />
      <BestSellers />
      <Newsletter />
    </>
  );
}


