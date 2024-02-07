import { useState, createContext } from "react";

const LandingPageContext = createContext({})

export function LandingPageProvider({ children }) {
    const [showLandingSheet, setLandingVisible] = useState(false);
    return (
        <LandingPageContext.Provider
            value={{showLandingSheet, setLandingVisible}}
        >
            {children}
        </LandingPageContext.Provider>
    )
}

export default LandingPageContext 

