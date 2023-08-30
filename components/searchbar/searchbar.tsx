'use client'

import "./searchbar.css";
import Image from "next/image";
import React from "react";
import SearchIcon from "../../public/searchicon.svg";
import ListIcon from "../../public/listicon.svg"
import GridIcon from "../../public/gridicon.svg"

export default function SearchBar() {
    function handleFilter() {

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
                <p className={"searchBarCount"}>123 Devices</p>
            </div>
            <div className={"spacer"}/>
            <div className={"searchBarControls"}>
                <Image className={"searchBarIcon"} src={ListIcon} alt={"Icon"} width={14} height={14}/>
                <Image className={"searchBarIcon"} src={GridIcon} alt={"Icon"} width={14} height={14}/>
                <p>Filter</p>
            </div>
        </div>
    );
}