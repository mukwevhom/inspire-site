import Layout from '../components/Layout.js';
import Hero from '../components/sections/hero';
import Connect from '../components/sections/connect';
import AboutUs from '../components/sections/aboutUs';
import Services from '../components/sections/services';

// import '../assets/styles/styles.scss';

export default function Blog() {
    return (
        <Layout>
            <Hero/>
            <AboutUs />
            <Services />
            <Connect/>
        </Layout>
    );
}