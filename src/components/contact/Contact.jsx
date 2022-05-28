import React, { useRef,useState,useContext } from 'react';
import './contact.css'
import Phone from '../../img/phone.png';
import Address from '../../img/address.png';
import Email from '../../img/email.png';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
export const Contact = () => {
    const [loading,setLoading] = useState(false);
    const [done, setDone] = useState(false)
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
        emailjs.sendForm('service_w9j75ne', 'template_9hw9xcm', formRef.current, 'Nw_W-KxYWwiMgJozg')
            .then((result) => {
                console.log(result.text);
                formRef.current.reset();
                setDone(true);
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
            });
            
    }
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info-item">
                        <img src={Phone} alt="" className='c-icon' />
                        +1 123 556 74
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className='c-icon' />
                        contact@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className='c-icon' />
                        245 King Street, Touterie Victoria 8520 Australia
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode && '#333',color:darkMode && '#fff'}} type="text" placeholder='Name' name='user_name' />
                        <input style={{backgroundColor:darkMode && '#333',color:darkMode && '#fff'}} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor:darkMode && '#333',color:darkMode && '#fff'}} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor:darkMode && '#333',color:darkMode && '#fff'}} name="message" rows="5" placeholder='Message'></textarea>

                        {loading?<button>Sending..</button>:<button>Submit</button>}
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}
