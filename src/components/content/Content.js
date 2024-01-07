import './content.scss';
import hrs from '../../assets/hrs.png';
import Projects from '../projects/Projects';
import About from '../about/About';
import Kappa from '../kappa/Kappa';

const Content = () => {
    return (
        <div className="content">
            <Projects />
            <div className="hrs">
                <img src={hrs} alt="" />
            </div>
            <About />
            <Kappa />
        </div>
    )
}

export default Content;