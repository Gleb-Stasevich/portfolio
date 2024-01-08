import './contacts.scss';
import rezume from './rezume.pdf';

const Contacts = () => {
    return (
        <div className="contacts">
            <nav className="contacts__nav">
                <ul className="contacts__ul wow animate__animated animate__bounceInRight">
                    <li className="contacts__txt"><a href="#about">О себе</a></li>
                    <li className="contacts__txt"><a href={rezume} target="_blank">Резюме</a></li>
                    <li><a className="contacts__icon icon-inst" href="https://www.instagram.com/m_e_f_i_s_t/" target="blank"></a></li>
                    <li><a className="contacts__icon icon-telephone" href="tel:+375336372287"></a></li>
                    <li><a className="contacts__icon icon-mail" href="mailto:gfox.12@mail.ru" target="_blank"></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Contacts;