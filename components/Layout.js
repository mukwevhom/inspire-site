import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Connect from './sections/connect';

export default function Layout(props) {
    return (
        <React.Fragment>
            <Head>
                <meta name="description" content="Inspire Academy is an education institution that exists for the cause of inspiring people to pursue and happily engage in endeavors that fulfill and inspire them." />
                <meta name="keywords" content="Inspire Academy, South Africa,education, tutorials, high school, grade 11, grade 12, private tutors, tutors, career guidance, coaching, inspiration, tutoring" />
                <title>Inspire Academy</title>
                <link rel="canonical" href="https://inspireacademy.co.za" />
                <link rel="shortcut icon" href="https://fileboxer.imgix.net/inspireacademy/IA_Color_Icon_fvnvwl.png" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                {/* <!-- Google Tag Manager --> */}
                <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NWHXW6Q');`}}/>
                {/* <!-- End Google Tag Manager --> */}
                
            </Head>
            <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NWHXW6Q" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
            <Header />
            {props.children}
            <Connect/>
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
        </React.Fragment>
    )
}