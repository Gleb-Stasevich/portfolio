import Contacts from '../contacts/Contacts';
import './header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Contacts />
            <div className="header__container">
                <div className="header__body">
                    <h1>Глеб Стасевич</h1>
                    <h2>Junior Frontend Developer</h2>
                </div>
            </div>
        </header>
    )
}

export default Header;