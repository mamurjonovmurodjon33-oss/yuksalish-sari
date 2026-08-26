import { Route, Routes, useLocation } from "react-router"
import Home from "./Home"
import Portfolio from "./Portfolio"
import About from "./About"
import Galeria from "./Galeria"
import Pages from "./Pages"
import Apply from "./Apply"
import Decision from "./Decision"
import { AnimatePresence } from "framer-motion"
import Photos from "./Photos"
import Videos from "./Videos"
import Info from "./Info"
import Test from "./Test"
// import Resurs from "./Resurs"

function Main() {
  const location = useLocation();
  return (
    <>
    <main className="main">
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/galeria" element={<Galeria/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/apply" element={<Apply/>}/>
            <Route path="/info" element={<Info/>}/>
            <Route path="/test" element={<Test/>}/>
            {/* <Route path="/resurs" element={<Resurs/>}/> */}
            <Route path="/decision" element={<Decision/>}/>
            <Route path="/galeria/photos" element={<Photos />} />
        <Route path="/galeria/videos" element={<Videos />} />
        </Routes>
        </AnimatePresence>
    </main>
    </>
  )
}

export default Main
