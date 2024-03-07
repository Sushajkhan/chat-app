import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/user/profile"
        );
        // console.log(response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.log("Error fetching user details in profile", error);
      }
    };

    fetchUserDetails();
  }, [useAuth()]);

  return (
    <ProfileContext.Provider value={{ isAuthenticated, userDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
