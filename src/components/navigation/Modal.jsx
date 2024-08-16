import React, { useState } from "react";
import LoginForma from "./LoginForm";
import RegisterForma from "./RegisterForm";
import { TfiClose } from "react-icons/tfi";

const Modal = ({ toggleModal, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal z-50  ">
      <div className="overlay  z-50 flex justify-center absolute items-center inset-0 bg-gray-500 bg-opacity-60 backdrop-filter backdrop-blur-lg ">
        <div className="modal-content   bg-white w-96 p-8  rounded-xl">
          <button
            className="absolut left-9 top-0  transform transition-transform duration-300 hover:scale-110"
            onClick={toggleModal}
          >
            <TfiClose />
          </button>
          <h1 className="text-center text-3xl  py-5">
            {isLogin ? "Login" : "Register"}
          </h1>
          {isLogin ? (
            <LoginForma
              setIsLoggedIn={setIsLoggedIn}
              setIsLogin={setIsLogin}
              toggleModal={toggleModal}
            />
          ) : (
            <RegisterForma setIsLogin={setIsLogin} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

