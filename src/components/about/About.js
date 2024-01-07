import './about.scss';
import aboutMe from '../../assets/about-me.png';

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__title">
                    <span>О себе</span>
                </div>
                <div className="about__body">
                    <div className="about__img">
                        <img src={aboutMe} alt="" />
                    </div>
                    <div className="about__content">
                        <span>Привет! Меня зовут Глеб и я junior frontend разработчик.<br />
                            В своё свободное время делаю свои PET-проекты и обучаюсь чему-то новому :)<br />
                            Занимаюсь уже более 2-х лет и за это время успел сделать парочку<br />
                            приятных проектов, часть которых указана здесь, а другие<br />
                            ты можешь посмотреть здесь - ТЫК</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;