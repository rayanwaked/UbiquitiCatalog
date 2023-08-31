import React, {createContext, useContext, useState} from "react";

interface SearchContextType {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({children}: { children: React.ReactNode }) {
    const [searchValue, setSearchValue] = useState<string>("");

    return (
        <SearchContext.Provider value={{searchValue, setSearchValue}}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearchValue() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearchValue must be used within a SearchProvider");
    }
    return context;
}
