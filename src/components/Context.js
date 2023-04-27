const Context = createContext()

function ContextProvider(props) {
    const [theme, setTheme] = useState("dark")
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }
    
    return (
        <Context.Provider value={{theme, toggleTheme}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
