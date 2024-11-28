import React, { createContext, useContext, useState } from "react";

// Create a context with default values
export const UserContext = createContext({
    user: null,
    setUser: () => { },
});

// UserProvider component to provide user context to its children
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook to use the UserContext
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};