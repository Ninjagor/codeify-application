import BannerCta from "./components/banner-cta"
import Hero from "./components/Hero/hero"
import Navbar from "./components/Navbar/navbar"

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
    </>
  )
}

export default Home