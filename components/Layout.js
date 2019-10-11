import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>Inspire Academy</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </Head>
            <Header />
            {props.children}
            <Footer />
            <style jsx>
                {`
                    .sectionWrapper {

                    }
                    .sectionHeader {
                        background:yellow;
                    }
                    .sectionContent {
                        
                    }
                `}
            </style>
        </div>
    )
}