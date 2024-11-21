import React from "react";

const SignOut = ({ setUser }) => {
  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    alert("You have been signed out.");
  };

  return (
    <button onClick={handleSignOut}>
      Sign Out
    </button>
  );
};

export default SignOut;
