export default function Footer() {
    return (
        <footer>
            <div className="container text-center pt-3 pb-3">
                <h3>Inspire Academy</h3>
                <p>&copy; {new Date().getFullYear()} Inspire Academy. All rights reserved.</p>
            </div>
            <style jsx>
                {`
                    footer {
                        border-top: 2px solid #f3f3f3;
                        .container {
                            
                        }
                    }
                `}
            </style>
        </footer>
    
    )
}