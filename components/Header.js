import Link from 'next/link';

export default function Header() {
    return (
        <nav>
            <div className="container">
                <a href=""><img src="" /></a>
            </div>
            <style jsx>
                {`
                    nav {
                        background: #fffffffa;
                        box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
                        pointer-events: auto;
                        position: fixed;
                        width: 100%;
                        z-index: 1;
                    }

                    nav > div {
                        height:64px;
                    }
                `}
            </style>
        </nav>
    
    )
}