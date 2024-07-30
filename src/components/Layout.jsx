import About from './About'
import Banner from './Banner'
import Features from './Features'
import Navbar from './Navbar'
import Services from './Services'

export default function Layout() {
    return (
        <>
            <Navbar />
            <Banner />
            <Features />
            <About />
            <Services />
        </>
    )
}
