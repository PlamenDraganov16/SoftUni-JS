import BigFeatures from "./components/BigFeatures.jsx"
import Blog from "./components/Blog.jsx"
import Contact from "./components/Contact.jsx"
import CounterParallax from "./components/CounterParallax.jsx"
import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import HomeParallax from "./components/HomeParallax.jsx"
import Preloader from "./components/Preloader.jsx"
import PricingPlans from "./components/PricingPlans.jsx"
import Testimonials from "./components/Testimonials.jsx"
import WelcomeArea from "./components/WelcomeArea.jsx"

function App() {

    return (
        <>
            <Preloader />

            <Header />

            <WelcomeArea />

            <Features />

            <BigFeatures
                title="Let’s discuss about you project"
                content="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
                img="/assets/images/left-image.png"
            />

            <BigFeatures
                title="We can help you to grow your business"
                content="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
                img="/assets/images/right-image.png"
                reverse
            />

            <HomeParallax />

            <Testimonials />

            <PricingPlans />

            <CounterParallax />

            <Blog />

            <Contact />

            <Footer />
        </>

    )
}

export default App
