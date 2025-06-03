import UGCScroll from "@/src/components/home/HorizontalScroll"
import MarqueeBanner from "@/src/components/home/MarqueeBanner"
import FAQSection from "@/src/components/shop/FAQ"
import ProductCarousel from "@/src/components/shop/ProductCarousel"
import ShopHero from "@/src/components/shop/ShopHero"

const Page = () => {
  return (
    <>
    <ShopHero />
    <MarqueeBanner />
    <ProductCarousel />
    <UGCScroll />
    <FAQSection />
    </>
  )
}

export default Page