import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import photo from "../../assets/icon/contact-Photoroom.png";
import "./contact.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee5f7cc3-f95e-4738-8136-540081884e41");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        icon: "Success",
        title: "Message sent successful!",
        timer: 1500,
      });
    }
  };
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contact h-[90vh]  w-full pt-10">
      <motion.h1
        initial={{ opacity: 0, y: +50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center font-ubuntu font-bold text-[30px]"
      >
        HAVE SOME QUESTIONS?
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: +50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1 }}
        className="flex font-montserrat pt-7 justify-center "
      >
        <BiWorld className="mt-1" /> <h5>Albania</h5> : Brigada 123, Therand,
        23000,Kosovo
      </motion.div>
      <div className=" lg:flex justify-center items-center gap-20 pt-9">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          src={photo}
          className="sm:mt-9 h-[450px], lg:w-[800px] h-[600px]"
          alt="contact-photo"
        />
        <div>
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <motion.input
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.5 }}
              className="bg-white rounded-3xl font-montserrat w-[300px] py-2 px-5"
              placeholder="First Name"
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              name="name"
              required
            />
            <motion.input
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="bg-white rounded-3xl font-montserrat py-2 px-5"
              placeholder="Last Name"
              value={lastname}
              onChange={(evt) => setLastname(evt.target.value)}
              name="lastname"
              required
            />
            <motion.input
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-3xl font-montserrat py-2 px-5"
              placeholder="Email"
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              name="email"
              required
            />
            <motion.textarea
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="bg-white rounded-3xl font-montserrat py-2 px-5"
              placeholder="Enter your message"
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
              name="message"
              required
            />
            <motion.button
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              type="submit"
              className="bg-gradient-to-r from-custom-blue-start to-custom-blue-end rounded-3xl py-2 px-5 text-white font-montserrat"
            >
              SEND MESSAGE
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
