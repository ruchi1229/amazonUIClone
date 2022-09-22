import React, { useContext, useState } from "react";

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useTheme() {
    return useContext(UserContext)
}

export function useThemeUpdate() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
    const [username, setUsername] = useState("")
    
    function updateUsername(newUsername) {
        setUsername(newUsername)
    }

    return (
        <UserContext.Provider value={username}>
            <UserUpdateContext.Provider value={updateUsername}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}