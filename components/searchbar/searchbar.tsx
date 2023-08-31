'use client'

import "./searchbar.css";
import Image from "next/image";
import React, {useState} from "react";
import SearchIcon from "../../public/searchicon.svg";
import ListIcon from "../../public/listicon.svg";
import ListIconActive from "../../public/listiconactive.svg"
import GridIcon from "../../public/gridicon.svg";
import GridIconActive from "../../public/gridiconactive.svg"
import {GridVisibleRowsCountWrapper} from "@/app/catalog/grid/grid";
import {ListVisibleRowsCountWrapper} from "@/app/catalog/list/list";

export type ViewModeChangeHandler = (mode: "list" | "grid") => void;

export default function SearchBar({onViewModeChange}: {
    onViewModeChange: ViewModeChangeHandler
}) {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const visibleGridRowsCount = GridVisibleRowsCountWrapper();
    const visibleListRowsCount = ListVisibleRowsCountWrapper();


    function handleFilter(event: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = event.target.value;
        setSearchValue(inputValue); // Update the search value state
    }

    function togglePopup() {
        setFilterVisible(!isFilterVisible);
    }

    function handleViewModeChange(mode: "list" | "grid") {
        setViewMode(mode);
        onViewModeChange(mode);
    }

    return (
        <div className={"searchBarContainer"}>
            <div className={"searchBarAndCount"}>
                <div className={"searchBar"}>
                    <Image className={"searchBarIcon"} src={SearchIcon} alt={"Icon"} width={14} height={14}/>
                    <input
                        placeholder={"Search"}
                        value={searchValue}
                        onChange={handleFilter}
                    />
                </div>
                <p className={"searchBarCount"}>{viewMode === "list" ? visibleListRowsCount : visibleGridRowsCount}</p>
            </div>

            <div className={"spacer"}/>

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
                </div>
                {isFilterVisible && (
                    <div className="searchBarFilterPopup"></div>
                )}
            </div>
        </div>
    );
}
