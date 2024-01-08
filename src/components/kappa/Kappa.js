import { useEffect } from 'react';

import './kappa.scss';
import kappaIMG from '../../assets/kappa.png';

const Kappa = () => {

    let centerX = window.innerWidth / 2;

    useEffect(() => {
        document.body.addEventListener('mousemove', getMouseCoords);
    }, []);

    const getMouseCoords = (e) => {
        let coordsX = e.clientX;
        coordsX > centerX ? document.querySelectorAll('.kappa__img').forEach(elem => elem.firstElementChild.style.transform = `rotate(${(coordsX - centerX) / 25}deg)`) :
            document.querySelectorAll('.kappa__img').forEach(elem => elem.firstElementChild.style.transform = `rotate(-${(centerX - coordsX) / 25}deg)`)
    }

    return (
        <div className="kappa">
            <div className="kappa__container">
                <div className="kappa__img wow animate__animated animate__fadeInLeft">
                    <img src={kappaIMG} alt="" />
                </div>
                <div className="kappa__img wow animate__animated animate__fadeInUp">
                    <img src={kappaIMG} alt="" />
                </div>
                <div className="kappa__img wow animate__animated animate__fadeInRight">
                    <img src={kappaIMG} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Kappa;