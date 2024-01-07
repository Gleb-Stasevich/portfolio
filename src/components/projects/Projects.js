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
                    <span className="projects__title">Проекты</span>
                    <div>|</div>
                    <div>|</div>
                    <div>|</div>
                    <img className="projects__arrow" src={arrow}></img>
                </div>
                <div className="projects__body">
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                </div>
                <div className="projects__body">
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-img">
                            <img src={hello}></img>
                        </div>
                    </div>
                </div>
                <div className="more-projects">
                    <button>Больше</button>
                </div>
            </div>
        </div>
    )
}

export default Projects;