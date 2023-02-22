import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col pt-28">
      <div className="flex justify-center items-center py-10 text-xl md:3xl tracking-wider font-Anton">
        <h2 className="text-xl md:text-3xl">Feel Free To Contact With Us</h2>
      </div>
      <div>
        {
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.917577579876!2d90.25809020116117!3d23.82152978447859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebad6e179769%3A0x3fe3e209605ca8e0!2sBank%20Town%2C%20Savar%20Union!5e0!3m2!1sen!2sbd!4v1675592834484!5m2!1sen!2sbd"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        }
      </div>
      <div className="container py-10">
        <form
          action="https://formspree.io/f/mjvdgnye"
          method="POST"
          className="flex flex-col justify-center items-center space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="username"
            required
            autoComplete="off"
            className="w-full lg:w-[600px] border-2 border-gray-300 pl-2 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="useremail"
            required
            autoComplete="off"
            className="w-full lg:w-[600px] border-2 border-gray-300 pl-2 py-2 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            id=""
            cols="30"
            rows="10"
            required
            autoComplete="off"
            className="w-full lg:w-[600px] border-2 border-gray-300 pl-2 rounded-md"
          ></textarea>
          <input
            type="submit"
            value="Send Us"
            className="btn w-full lg:w-[600px] text-white hover:text-black bg-violet-700 hover:bg-white duration-500"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
