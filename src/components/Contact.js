import React from 'react'

import './Contact.css'

const Contact =()=>{
    return(
       <div className="contact">
            <h1>Contact Me</h1>
                <div className="contact__container">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <textarea cols="30" rows="5">Questions/ comments</textarea>
                        <button type="submit">Send Message</button>

                    </form>
                </div>
            </div>
        )
    }
export default Contact