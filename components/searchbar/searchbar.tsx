'use client'

import "./searchbar.css";
import Image from "next/image";
import React, {useState} from "react";
import Autosuggest from 'react-autosuggest';
import SearchIcon from "../../public/searchicon.svg";
import ListIcon from "../../public/listicon.svg";
import ListIconActive from "../../public/listiconactive.svg"
import GridIcon from "../../public/gridicon.svg";
import GridIconActive from "../../public/gridiconactive.svg"
import {GridVisibleRowsCountWrapper} from "@/app/catalog/grid/grid";
import {ListVisibleRowsCountWrapper} from "@/app/catalog/list/list";
import FilterPopup from "@/components/searchbar/filterpopup/filterpopup";
import {getData, ProductProps} from "@/app/catalog/data/data";


export type ViewModeChangeHandler = (mode: "list" | "grid") => void;

export default function SearchBar({onViewModeChange, setSearchInput}: {
    onViewModeChange: ViewModeChangeHandler,
    setSearchInput: React.Dispatch<React.SetStateAction<string>>
}) {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [searchInput, setSearchInputLocal] = useState("");
    const [isFilterVisible, setFilterVisible] = useState(false);
    const visibleGridRowsCount = GridVisibleRowsCountWrapper({searchInput});
    const visibleListRowsCount = ListVisibleRowsCountWrapper({searchInput});
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    function togglePopup() {
        setFilterVisible(!isFilterVisible);
    }

    function handleViewModeChange(mode: "list" | "grid") {
        setViewMode(mode);
        onViewModeChange(mode);
    }

    async function fetchSuggestions(inputValue: string) {
        const {devices} = await getData();

        const newSuggestions = devices
            .filter((suggestion: ProductProps["devices"][0]) =>
                suggestion.product?.name?.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((suggestion: ProductProps["devices"][0]) => {
                const name = suggestion.product!.name!.toLowerCase();
                return `${name}`;
            });

        setSuggestions(newSuggestions);
    }


    function handleSearchInputChange(value: string) {
        setSearchInputLocal(value);
        setSearchInput(value);
        fetchSuggestions(value);
        setShowSuggestions(true);
    }

    return (
        // Search Field
        <div className={"searchBarContainer"}>
            <div className={"searchBarAndCount"}>
                <div className={"searchBar"}>
                    <Image className={"searchBarIcon"} src={SearchIcon} alt={"Icon"} width={14} height={14}/>
                    <Autosuggest
                        suggestions={showSuggestions && suggestions.length > 0 ? suggestions : []}
                        onSuggestionsFetchRequested={({value}) => fetchSuggestions(value)}
                        onSuggestionsClearRequested={() => setSuggestions([])}
                        getSuggestionValue={suggestion => suggestion}
                        renderSuggestion={suggestion => <div className="autosuggest-suggestion">{suggestion}</div>}
                        inputProps={{
                            placeholder: "Search",
                            value: searchInput,
                            onChange: (event, {newValue}) => handleSearchInputChange(newValue),
                            autoCorrect: "off"
                        }}
                        onSuggestionSelected={(event, {suggestionValue}) => {
                            handleSearchInputChange(suggestionValue);
                            setShowSuggestions(false);
                        }}
                    />
                </div>
                <p className={"searchBarCount"}>{viewMode === "list" ? visibleListRowsCount : visibleGridRowsCount}</p>
            </div>

            <div className={"spacer"}/>

            {/*Search Controls*/}
            <div className={"searchBarControlsAndFilter"}>
                <div className={"searchBarControls"}>
                    <button onClick={() => handleViewModeChange("list")}>
                        <Image className={"searchBarIcon"} src={viewMode === "list" ? ListIconActive : ListIcon}
                               alt={"Icon"} width={14} height={14}/>
                    </button>
                    <button onClick={() => handleViewModeChange("grid")}>
                        <Image className={"searchBarIcon"} src={viewMode === "grid" ? GridIconActive : GridIcon}
                               alt={"Icon"}
                               width={14} height={14}/>
                    </button>
                    <button onClick={togglePopup}>Filter</button>
                    {isFilterVisible && <FilterPopup/>}
                </div>
            </div>
        </div>
    );
}
