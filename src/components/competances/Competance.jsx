import React from 'react';
import "./competance.css";
import Techno1 from '../../img/languages1.png';
import Techno2 from '../../img/languages2.png';
import Techno3 from '../../img/languages3.png';
import Techno5 from '../../img/languages5.png';




export const Competance = () => {
    return (
        <section class="languages ">

            <div class="container">
                <div class="language">
                    <img src={Techno1} alt="" />
                </div>
                <div class="language">
                    <img src={Techno2} alt="" />
                </div>
                <div class="language">
                    <img src={Techno3} alt="" />
                </div>
                <div class="language">
                    <img src={Techno5} alt="" />
                </div>

            </div>
        </section>
    );
};
