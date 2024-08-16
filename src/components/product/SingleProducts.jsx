import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import master from "../../assets/icon/Mastercard-logo.svg.png";
import paypal from "../../assets/icon/Paypal_2014_logo.png";
import binance from "../../assets/icon/bitcoin.webp";
const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Payment Method</h2>
        <p className="mb-4">Select your preferred payment method:</p>

        <div className="flex flex-col gap-5">
          <label className="flex  font-montserrat font-bold border-b border-t border-gray-300 py-3">
            <input type="radio" name="payment" value="visa"  />
            Credit or Debit Card
            <img src={master} alt="Visa" className="w-5 ml-[100px] " />
          </label>

          <label className="flex font-montserrat font-bold border-b border-t border-gray-300 py-3">
            <input type="radio" name="payment" value="paypal" />
            PayPal
            <img src={paypal} alt="Visa" className="w-5 ml-[200px]" />
          </label>
          <label className="flex font-montserrat font-bold border-b border-t border-gray-300 py-3">
            <input type="radio" name="payment" value="crypto" />
            Crypto
            <img src={binance} alt="Visa" className="w-5 ml-[197px]" />
          </label>
        </div>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const SingleProducts = () => {
  const [datas, setDatas] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, [productId]);

  if (!datas) return <h1>LOADING...</h1>;

  const handleBuyNowClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center font-montserrat text-3xl font-bold text-gray-600 pt-20">
        PRODUCT DETAIL
      </h1>
      <Link to="/products" className="font-bold underline">
        Go Back
      </Link>
      <div className="single-product flex flex-col sm:flex-row justify-around container mx-auto p-4">
        <div className="single-product-image pt-20 mt-9 w-25 h">
          <img src={datas.image} width={300} alt={datas.title} />
        </div>
        <div className="single-product-content w-1/2 pt-9">
          <h1 className="text-5xl px-9 pt-9">{datas.title}</h1>
          <h2 className="text-5xl px-9 py-5">${datas.price}</h2>
          <button className="bg-blue-950 rounded-md px-6 py-2 mx-9 my-4 text-white transform transition-transform duration-300 hover:scale-105">
            Add To Cart
          </button>
          <button
            onClick={handleBuyNowClick}
            className="bg-green-500 rounded-md px-6 py-2  text-white transform transition-transform duration-300 hover:scale-105"
          >
            Buy Now
          </button>
          <p className="text-gray-700 px-9 pr-9 whitespace-wrap">
            {datas.description}
          </p>
        </div>
      </div>
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default SingleProducts;

