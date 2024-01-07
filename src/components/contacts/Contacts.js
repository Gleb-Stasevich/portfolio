import './contacts.scss';

const Contacts = () => {
    return (
        <div className="contacts">
            <nav className="contacts__nav">
                <ul className="contacts__ul">
                    <li className="contacts__txt"><a href="#">О себе</a></li>
                    <li className="contacts__txt"><a href="#">Резюме</a></li>
                    <li><a className="contacts__icon icon-inst" href="https://www.instagram.com/m_e_f_i_s_t/"></a></li>
                    <li><a className="contacts__icon icon-telephone" href="375336372287"></a></li>
                    <li><a className="contacts__icon icon-mail" href="#"></a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Contacts;