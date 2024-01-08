import './projects.scss';
import hello from '../../assets/header-background.png';
import arrow from '../../assets/arrow-bottom.png';

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__container">
                <div className="projects__lines">
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                    <span className="projects__title wow animate__animated animate__backInDown">Проекты</span>
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                    <img className="projects__arrow" src={arrow}></img>
                </div>
                <div className="projects__icons-stars">
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                    <span className="icon-star"></span>
                </div>
                <div className="projects__body">
                    <div className="project wow animate__animated animate__backInLeft">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                    <div className="project wow animate__animated animate__backInDown">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                    <div className="project wow animate__animated animate__backInRight">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                </div>
                <div className="projects__body">
                    <div className="project wow animate__animated animate__backInLeft">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                    <div className="project wow animate__animated animate__backInUp">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                    <div className="project wow animate__animated animate__backInRight">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                        <div className='project-title'><span>Имя проекта</span></div>
                    </div>
                </div>
                <div className="more-projects">
                    <a href="https://github.com/Gleb-Stasevich" target="_blank">Больше</a>
                </div>
            </div>
        </div>
    )
}

export default Projects;