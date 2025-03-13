import Navbar from "../components/common/Navbar";
import BusinessNeed from "../components/Home/BusinessNeed";
import ContactUs from "../components/Home/ContactUs";
import Hero from "../components/Home/Ho";
import Portfolio from "../components/Home/Portfolio";
import Service from "../components/Home/Se";
import WelcomeSections from "../components/Home/WelcomeSections";


const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Service />
            <WelcomeSections/>
            <BusinessNeed />
            <Portfolio/>
            <ContactUs/>
        </>
    );
};

export default Home;
