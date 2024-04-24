import { createContext, useState } from "react";

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState({
        searchText: '',
        option: 'people', // Defina a opção padrão aqui
        searchResults: null,
        error: false,
    });

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}