import "./searchbar.css"

import React from "react"

export default function SearchBar() {
    return (
        <div className={"searchBarContainer"}>
            <div className={"searchBar"}>
                <p>Search</p>
            </div>
            <p className={"searchBarCount"}>123 Devices</p>
        </div>
    );
}