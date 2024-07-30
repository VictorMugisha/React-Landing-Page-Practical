import About from './About'
import Banner from './Banner'
import Features from './Features'
import Gallery from './Gallery'
import Navbar from './Navbar'
import Services from './Services'
import Team from './Team'
import Testimonials from './Testimonials'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Banner />
            <Features />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Team />
        </>
    )
}
