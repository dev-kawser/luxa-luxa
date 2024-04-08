
const Footer = () => {
    return (
        <footer className="footer mt-20 p-10 bg-base-200 text-base-content">
            <aside>
                <img className="w-20" src="https://i.ibb.co/NyD9m1y/lll.png" alt="" />
                <p>LuxuriaLuxe Industries Ltd.<br />Providing reliable service since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Penthouse</a>
                <a className="link link-hover">Villa</a>
                <a className="link link-hover">Resort</a>
                <a className="link link-hover">Mansion</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Rent</a>
                <a className="link link-hover">Buy</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;