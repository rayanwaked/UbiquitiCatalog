'use client'

import "./searchbar.css";
import Image from "next/image";
import React, {useState} from "react";
import SearchIcon from "../../public/searchicon.svg";
import ListIcon from "../../public/listicon.svg";
import GridIcon from "../../public/gridicon.svg";

export default function SearchBar() {
    const [isFilterVisible, setFilterVisible] = useState(false);
    const [filters, setFilters] = useState({
        // Initialize filter options here
    });

    function handleFilter() {
        // Apply filters to your data here
        // You can use the 'filters' state to access filter options
    }

    function togglePopup() {
        setFilterVisible(!isFilterVisible);
    }

    return (
        <div className={"searchBarContainer"}>
            <div className={"searchBarAndCount"}>
                <div className={"searchBar"}>
                    <Image className={"searchBarIcon"} src={SearchIcon} alt={"Icon"} width={14} height={14}/>
                    <input
                        placeholder={"Search"}
                        onChange={handleFilter}
                    />
                </div>
                <p className={"searchBarCount"}>{}</p>
            </div>

            <div className={"spacer"}/>

            <div className={"searchBarControlsAndFilter"}>
                <div className={"searchBarControls"}>
                    <Image className={"searchBarIcon"} src={ListIcon} alt={"Icon"} width={14} height={14}/>
                    <Image className={"searchBarIcon"} src={GridIcon} alt={"Icon"} width={14} height={14}/>
                    <button onClick={togglePopup}>Filter</button>
                </div>
                {isFilterVisible && (
                    <div className="searchBarFilterPopup"></div>)}
            </div>
        </div>
    );
}
