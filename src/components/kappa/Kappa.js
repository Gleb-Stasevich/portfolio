import './kappa.scss';
import kappaIMG from '../../assets/kappa.png';

const Kappa = () => {
    return (
        <div className="kappa">
            <div className="kappa__container">
                <div className="kappa__img">
                    <img src={kappaIMG} alt="" />
                </div>
                <div className="kappa__img">
                    <img src={kappaIMG} alt="" />
                </div>
                <div className="kappa__img">
                    <img src={kappaIMG} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Kappa;