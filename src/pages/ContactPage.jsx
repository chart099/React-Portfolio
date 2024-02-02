import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const YOUR_SERVICE_ID = 'service_rkjzld8'
const YOUR_TEMPLATE_ID = 'template_9bf2fa8'
const YOUR_PUBLIC_KEY = 'rox0ZTOSfplw_2xGt'

export default function ContactPage () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <h2>Contact Me!</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name: </label>
      <input type="text" name="user_name" id="name"  />
      <label>Email: </label>
      <input id="email" type="email" name="user_email" />
      <label>Message: </label>
      <textarea name="message" id="message" rows="3" />
      <button type="submit" value="Send">Submit</button>
    </form>
    </>
  );
};
