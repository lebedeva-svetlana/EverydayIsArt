import Logo from '../../assets/images/icon.svg';

import './About.scss';

function About() {
    return (
        <div className="about">
            <img src={Logo} alt="EverydayIsArt Logo" className="about-logo"></img>
            <div className="about-text">
                <h2 className="about-title">Discover new things with
                    <span className="about-project-name-green"> Everyday</span>
                    Is
                    <span className="about-project-name-green">Art!</span>
                </h2>
                <p className="about-info">Select the gallery from the menu and get a random artwork from its collection.</p>
            </div>
        </div>
    );
}

export default About;