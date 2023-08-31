'use client'

import React, {useEffect, useState} from "react";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";
import GridComponent from "@/app/catalog/grid/grid";

// Present the data to the user
export default function CatalogPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        document.title = "Ubiquiti Catalog";
    }, []);

    return (
        <div>
            <SearchBar onViewModeChange={setViewMode} setSearchInput={setSearchInput}/>
            {viewMode === "list" && <ListComponent searchInput={searchInput}/>}
            {viewMode === "grid" && <GridComponent searchInput={searchInput}/>}
        </div>
    );
}
