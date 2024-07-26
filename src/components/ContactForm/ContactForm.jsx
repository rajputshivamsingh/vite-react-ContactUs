import styles from './Contact.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import {useState} from "react";
const ContactForm = () => {

  const  [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  

  const onSubmit = (event)=>{
    event.preventDefault();

    console.log("i am clicked");

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    // name = event.target[0].value;
    // email = event.target[1].value;
    // text = event.target[2].value;

    // console.log("name", event.target[0].value);
    // console.log("email", event.target[1].value);
    // console.log("text", event.target[2].value);
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>

        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>} />
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>} />
        </div>

        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>} />

        <form onSubmit={onSubmit}>

           <div className = {styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" name='name' />
           </div>

           <div className = {styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name='email' />
           </div>

           <div className = {styles.form_control}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={8}/>
           </div>

           <div style={{
                display:"flex",
                justifyContent:'end',
           }}>
           <Button text="SUBMIT BUTTON"  />
           </div>

           <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{text}</h3>
           </div>

        </form>

        </div>
      <div className={styles.contact_image}>
        <img style={{
          width:"512px",
        }}
         src="/image/image.svg" alt="image" />
      </div>
    </section>
  )
}

export default ContactForm
// VIA SUPPORT CHAT
// VIA CALL
// VIA EMAIL FORM
// Name
// E-Mail
// TEXT
// SUBMIT