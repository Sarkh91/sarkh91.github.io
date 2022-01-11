import React, {createContext, useState} from "react";

export const TestContext = createContext({
    name: '',
    setNameHandler: (name:string) => {}
})

const ContextCreator:React.FC = ({ children }) => {
    const [name, setName] = useState('')
    const setNameHandler = (name:string) => setName(name)

    return (
        <>
            <TestContext.Provider value={{name, setNameHandler}}>
                <p>{name}</p>
                {children}
            </TestContext.Provider>
        </>
    )
}

export default ContextCreator