import React, { useState, useContext } from "react";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async (userId, navigate) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/get/user/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // You can set your authorization token here, if needed
          },
        }
      );
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        // navigate("/admin");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    user,
    getUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
