import "./intro.css";
import Profile from "../../img/achraf.jpg";
import Instagram from "../../img/i.png";
import Youtube from "../../img/y.png";
import Linkedin from "../../img/l.png";
import Twitter from "../../img/t.png";




const Intro = () => {
    return (
        <div className="infoIntro">
            <div className="rightIntro">
                <div className="intro_photo">
                    <img src={Profile} alt="" style={{width:'700px',margin:'20px'}}/>
                </div>
            </div>
            <div className="leftIntro">
                <div className="leftIntro_Separation">
                    <h1 className="name">Im Achraf ETTGHARSSI and im a developper Full Stack . </h1>
                    <div className="Slide">
                        <div className="SlideAnimation">
                            <p className="slideIthem">Web Developer</p>
                            <p className="slideIthem">UI/UX Designer</p>
                            <p className="slideIthem">Backend Developper</p>
                            <p className="slideIthem">Front-end Developper</p>
                            <p className="slideIthem">Artist</p>
                        </div>
                    </div>


                    <div className="reseauIntro">
                    </div>

                    <div className="reseauIthem">
                        <a href="https://www.instagram.com/achraf_ettgharssi/?hl=fr"> <img src={Instagram} alt="" /></a>
                        <a href="https://www.linkedin.com/in/achraf-ettgharssi-75264b192/"> <img src={Linkedin} alt="" /></a>
                        <a href=""> <img src={Youtube} alt="" /></a>
                        <a href=""> <img src={Twitter} alt="" /></a>

                    </div>

                </div>

            </div>
            
        </div>



    );
};

export default Intro;
