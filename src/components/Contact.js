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
                        <textarea>Questions/ comments</textarea>
                        <button type="submit">Submit</button>

                    </form>
                </div>
            </div>
        )
    }
export default Contact