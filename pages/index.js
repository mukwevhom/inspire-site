import Layout from '../components/Layout.js';
import Hero from '../components/sections/hero';
import AboutUs from '../components/sections/aboutUs';
import Services from '../components/sections/services';
import JoinUs from '../components/sections/joinUs';

// import '../assets/styles/styles.scss';

export default function Index() {
    return (
        <Layout>
            <Hero/>
            <AboutUs />
            <Services />
            <JoinUs />
        </Layout>
    );
}