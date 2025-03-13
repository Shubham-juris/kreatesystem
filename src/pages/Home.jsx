import BusinessNeed from "../components/Home/BusinessNeed";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio";

import ServiceCard from "../components/Home/ServiceCard";
import WelcomeSection from "../components/Home/WelcomeSection";



const Home = () => {
    return (
        <>
           
            <Hero />
            <ServiceCard />
            <WelcomeSection/>
            <BusinessNeed />
            <Portfolio/>
            {/* <ContactWithUs/> */}

        </>
    );
};

export default Home;
