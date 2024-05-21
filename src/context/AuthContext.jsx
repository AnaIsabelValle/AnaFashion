
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

/**
 * 1. useState and useEffect:
 * useState is used to manage the state of the user and isAuthenticated variables.
 *  useEffect runs after the component mounts or when the specified dependencies change (in this case, isAuthenticated and user). In this component, it’s used to save or remove user information in local storage (localStorage) based on whether the user is authenticated or not.
 * 2. AuthProvider: 
 * This component wraps other components with the authentication context.
 * It provides the authentication state (isAuthenticated) and user information (user) through the context.
 * It also defines the loginUser and logoutUser functions to handle login and logout actions.
 * 3. loginUser:
 * This function is called when a user successfully logs in.
 * It securely sets the authentication token in a cookie (jwt).
 * It updates the user state with user information and sets isAuthenticated to true.
 * 4. logoutUser:
 * This function is called when a user logs out.
 * It removes the authentication cookie (jwt).
 * It sets user to null and isAuthenticated to false.
 * 5. value:
 * This object is provided as the value to the context.
 * It contains properties for user, isAuthenticated, loginUser, and logoutUser.
 **/