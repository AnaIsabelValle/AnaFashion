
import { createContext, useState, useEffect } from "react";
import Cookie from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(
        () => JSON.parse(localStorage.getItem('userInfo')) || null
    );
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => Cookie.get("jwt") != null
    );

    useEffect(() => {
        if (isAuthenticated) {
            localStorage.setItem('userInfo', JSON.stringify(user));
        } else {
            localStorage.removeItem('userInfo');
        }
    }, [isAuthenticated, user]);

    const loginUser = (userInfo) => {
        // to secure the token
        Cookie.set("jwt", userInfo.token, {
            expires: 14,
            secure: true,
            sameSite: "strict",
        });

        setUser(userInfo.user);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        Cookie.remove('jwt');
        setUser(null);
        setIsAuthenticated(false);
    };

    const value = {
        user,
        isAuthenticated,
        loginUser,
        logoutUser,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};


export default AuthProvider;