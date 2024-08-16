import React, { useState } from "react";

const RegisterForm = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const validateEmail = (email) => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    };

    const validatePassword = (password) => {
      const isLengthValid = password.length >= 6;
      const isFirstLetterUppercase = /^[A-Z]/.test(password);
      return isLengthValid && isFirstLetterUppercase;
    };

    if (
      !email ||
      !password ||
      !confirmpassword ||
      !name ||
      !surname ||
      !dateofbirth
    ) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters long and start with an uppercase letter"
      );
      return;
    }

    if (password !== confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    const usersString = localStorage.getItem("users");
    let users = usersString ? JSON.parse(usersString) : [];

    if (users.some((user) => user.email === email)) {
      setError("Email already registered");
      return;
    }
    const newUser = {
      name: name,
      surname: surname,
      email: email,
      password: password,
      dateofbirth: dateofbirth,
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setDateofbirth("");
    setError("");
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {isSubmitted ? (
        <div>
          <h2>Congratulations! Welcome!</h2>
          <p>Your registration was successful.</p>
          <button
            onClick={() => setIsLogin(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            OK
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Surname"
            value={surname}
            onChange={(evt) => setSurname(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Create password"
            value={password}
            type="password"
            required
            onChange={(evt) => setPassword(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Confirm password"
            value={confirmpassword}
            type="password"
            onChange={(evt) => setConfirmPassword(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Date of birth"
            value={dateofbirth}
            type="date"
            required
            onChange={(evt) => setDateofbirth(evt.target.value)}
            className="w-full p-2 my-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Register
          </button>
          {error && <p className="text-red-500">{error}</p>}
          <p>
            Already have an account?{" "}
            <a
              onClick={() => setIsLogin(true)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Log in!
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;
