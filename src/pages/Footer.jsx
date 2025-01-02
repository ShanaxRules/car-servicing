import logo from "../assets/logo.svg"
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-gray-800 text-base-content p-10">
                <aside>
                    <img src={logo} alt="" />
                   
                    <p className="text-white">
                        Shan Industries Ltd.
                        <br />
                        Providing reliable car solutions to you
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title text-white">Services</h6>
                    <a className="link link-hover text-white">Branding</a>
                    <a className="link link-hover text-white">Design</a>
                    <a className="link link-hover text-white">Marketing</a>
                    <a className="link link-hover text-white">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Company</h6>
                    <a className="link link-hover text-white">About us</a>
                    <a className="link link-hover text-white">Contact</a>
                    <a className="link link-hover text-white">Jobs</a>
                    <a className="link link-hover text-white">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white">Legal</h6>
                    <a className="link link-hover text-white">Terms of use</a>
                    <a className="link link-hover text-white">Privacy policy</a>
                    <a className="link link-hover text-white">Cookie policy</a>
                </nav>
            </footer>


        </div>
    );
};

export default Footer;