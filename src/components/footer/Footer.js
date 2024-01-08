import './footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className="footer__nav wow animate__animated animate__fadeInUp">
                <ul className="footer__ul">
                    <li><a className="footer__link" href="https://github.com/Gleb-Stasevich" target="_blank">github</a></li>
                    <li><a className="footer__link" href="https://www.instagram.com/m_e_f_i_s_t/" target="_blank">instagram</a></li>
                    <li><a className="footer__link" href="mailto:gfox.12@mail.ru" target="_blank">email</a></li>
                    <li><a className="footer__link" href="tel:375336372287">telephone</a></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;