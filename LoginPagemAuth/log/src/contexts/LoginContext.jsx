import { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "user1",
      password: "ijkl",
      otp: "1234",
      email: "user1@gmail.com",
    },
    {
      id: 2,
      username: "user2",
      password: "text",
      otp: "4321",
      email: "user2@gmail.com",
    },
    {
      id: 3,
      username: "user3",
      password: "mnop",
      otp: "5678",
      email: "user3@gmail.com",
    },
  ]);
  // Store current authenticated user
  const [currentUser, setCurrentUser] = useState(null);
  // Login function for multiple modes
  const login = ({ username, password, otp }) => {
    const user = users.find(
      (u) =>
        u.username === username &&
        ((password && u.password === password) || (otp && u.otp === otp))
    );
    if (user) {
      setCurrentUser(user);
      return true; // Login successful
    }
    return false; // Login failed
  };
  const logout = () => setCurrentUser(null);

  // The provider should be returned here, not inside logout!
  return (
    <LoginContext.Provider value={{ users, currentUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);