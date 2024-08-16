import React, { useState } from "react";

const LoginForm = ({ setIsLogin, toggleModal, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!username || !password) {
      setError("Both fields are required");
      return;
    }

    const usersString = localStorage.getItem("users");
    if (!usersString) {
      setError("No users registered");
      return;
    }

    const users = JSON.parse(usersString);
    const user = users.find(
      (user) => user.email === username && user.password === password
    );

    if (user) {
      setError("");
      setIsSubmitted(true);
      setIsLoggedIn(true); // Set user as logged in
      setUserData(user); // Save user data for profile display
    } else {
      setError("Invalid username or password");
    }
  };

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="text-center">
          <p className="text-lg font-bold pb-3">
            Congratulations! You are logged in.
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-5"
            onClick={toggleModal}
          >
            OK
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={handleProfileClick}
          >
            Profile
          </button>
          {showProfile && userData && (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg">
              <h3 className="text-xl font-semibold">Profile Information</h3>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Name:</strong> {userData.name}
              </p>
              <p>
                <strong>Surname:</strong> {userData.surname}
              </p>
              <p>
                <strong>Date of birth:</strong> {userData.dateofbirth}
              </p>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Username"
            id="username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <input
            placeholder="Password"
            id="password"
            value={password}
            type="password"
            onChange={(evt) => setPassword(evt.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Log in
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}

          <p className="text-center">
            Don't have an account?{" "}
            <a
              onClick={() => setIsLogin(false)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Register now!
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginForm;


// import React, { useState } from "react";

// const LoginForm = ({ setIsLogin, toggleModal, setIsLoggedIn, setUserData }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showProfile, setShowProfile] = useState(false);
//   const [userData, setUserData] = useState(null);

//   const handleSubmit = (evt) => {
//     evt.preventDefault();

//     if (!username || !password) {
//       setError("Both fields are required");
//       return;
//     }

//     const usersString = localStorage.getItem("users");
//     if (!usersString) {
//       setError("No users registered");
//       return;
//     }

//     const users = JSON.parse(usersString);
//     const user = users.find((user) => user.email === username && user.password === password);

//     if (user) {
//       setError("");
//       setIsSubmitted(true);
//       setIsLoggedIn(true); // Set user as logged in
//       setUserData(user); // Save user data for profile display
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   const handleProfileClick = () => {
//     setShowProfile(!showProfile);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
//       {isSubmitted ? (
//         <div className="text-center">
//           <p className="text-lg font-bold pb-3">Congratulations! You are logged in.</p>
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 mr-5"
//             onClick={toggleModal}
//           >
//             OK
//           </button>
//           <button
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//             onClick={handleProfileClick}
//           >
//             Profile
//           </button>
//           {showProfile && userData && (
//             <div className="mt-4 p-4 border border-gray-300 rounded-lg">
//               <h3 className="text-xl font-semibold">Profile Information</h3>
//               <p><strong>Email:</strong> {userData.email}</p>
//               <p><strong>Name:</strong> {userData.name}</p>
//               <p><strong>Surname:</strong> {userData.surname}</p>
//               <p><strong>Date of birth:</strong> {userData.dateofbirth}</p>
//             </div>
//           )}
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             placeholder="Username"
//             id="username"
//             value={username}
//             onChange={(evt) => setUsername(evt.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           />
//           <input
//             placeholder="Password"
//             id="password"
//             value={password}
//             type="password"
//             onChange={(evt) => setPassword(evt.target.value)}
//             className="w-full p-2 border border-gray-300 rounded-lg"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
//           >
//             Log in
//           </button>
//           {error && <p style={{ color: "red" }}>{error}</p>}
//           <p className="text-center">
//             Don't have an account?{" "}
//             <a onClick={() => setIsLogin(false)} className="text-blue-500 cursor-pointer hover:underline">
//               Register now!
//             </a>
//           </p>
//         </form>
//       )}
//     </div>
//   );
// };

// export default LoginForm;
