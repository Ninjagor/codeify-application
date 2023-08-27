import BannerCta from "./components/banner-cta"
import Cta from "./components/CTA/cta"
import Footer from "./components/Footer/footer"
import Hero from "./components/Hero/hero"
import Navbar from "./components/Navbar/navbar"
import QuickAbout from "./components/QuickAbout/quick-about"


const Home = () => {
  return (
    <>
    <BannerCta 
    callContent="Summer courses are here!"
    actionContent="Take me"
    url="/courses"
    closable
    />

    <Navbar />
    <Hero />
    <QuickAbout />
    <Cta />
    {/* <Footer /> */}
    </>
  )
}

export default Home