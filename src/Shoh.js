import React from 'react';
import "./Shoh.css";
import Rasm1 from './Photo/Rasm1.jpg'
import Rasm2 from './Photo/Rasm2.jpg'
import Rasm3 from './Photo/Rasm3.jpg'
import Rasm4 from './Photo/Rasm4.jpg'
import Rasm5 from './Photo/Rasm5.jpg'
import Rasm6 from './Photo/Rasm6.jpg'


function Shoh(){
    return (
        <div className='Shoh'>
            <ul> 
                <div className='picture'>
                    <div>
                        <img className='img1' src={Rasm1} height={200} width={250} />
                        <p className='img1'> Eng go'zal sohil <br/> Located in Somali </p>
                    </div>
                    <div>
                        <img className='img2' src={Rasm2} height={200} width={250} />
                        <p className='img2'> Eng chiroyli dala hovli <br/> Located in Miami</p>
                    </div>
                    <div>
                        <img className='img3' src={Rasm3} height={200} width={250} />
                        <p className='img3'> Eng chiroyli uy <br/> Located in Russia</p>
                    </div>
                </div>
            </ul>
            <ul> 
                <div className='picture'>
                    <div>
                        <img className='img4' src={Rasm4} height={200} width={250} />
                        <p className='img4'> Eng mashxur dala hovli <br/> Located in Madacasgar</p>
                    </div>
                    <div>
                        <img className='img5' src={Rasm5} height={200} width={250} />
                        <p className='img5'> Eng so'nggi sohil <br/> Located in Havai</p>
                    </div>
                    <div>
                        <img className='img6' src={Rasm6} height={200} width={250} />
                        <p className='img6'> Eng chiroyli rasm <br/> Created by Leonardo da Vinci</p>
                    </div>
                </div>
            </ul>
        </div>
    );
};


export default Shoh;