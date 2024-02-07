import { useState, createContext } from "react";

const LandingPageContext = createContext({})

export function LandingPageProvider({ children }) {
    const [showLandingSheet, setLandingVisible] = useState(false);
    const [selectedData, setSelectedData] = useState(false);
    return (
        <LandingPageContext.Provider value={{
            showLandingSheet,
            setLandingVisible,
            selectedData,
            setSelectedData,
        }} >
            {children}
        </LandingPageContext.Provider>
    )
}

export default LandingPageContext

