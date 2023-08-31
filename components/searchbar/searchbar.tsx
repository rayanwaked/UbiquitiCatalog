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
import FilterPopup from "@/components/searchbar/filterpopup/filterpopup";

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

    function togglePopup() {
        setFilterVisible(!isFilterVisible);
    }

    function handleViewModeChange(mode: "list" | "grid") {
        setViewMode(mode);
        onViewModeChange(mode);
    }

    function handleSearchInputChange(value: string) {
        setSearchInputLocal(value);
        setSearchInput(value);
    }

    return (
        // Search Field
        <div className={"searchBarContainer"}>
            <div className={"searchBarAndCount"}>
                <div className={"searchBar"}>
                    <Image className={"searchBarIcon"} src={SearchIcon} alt={"Icon"} width={14} height={14}/>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => handleSearchInputChange(e.target.value)}
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
                </div>
                {isFilterVisible && (
                    FilterPopup()
                )}
            </div>
        </div>
    );
}
