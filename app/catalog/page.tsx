'use client'

import React, {useEffect, useState} from "react";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";
import GridComponent from "@/app/catalog/grid/grid";

// Present the data to the user
export default function CatalogPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const [searchInput, setSearchInput] = useState("");
    const [filters, setFilters] = useState<string[]>([]);

    const handleFilterChange = (selectedFilters: string[]) => {
        setFilters(selectedFilters);
    };

    useEffect(() => {
        document.title = "Ubiquiti Catalog";
    }, []);

    return (
        <div>
            <SearchBar
                onViewModeChange={setViewMode}
                setSearchInput={setSearchInput}
                onFilterChange={handleFilterChange}
            />

            {viewMode === "list" && <ListComponent searchInput={searchInput} filters={filters}/>}
            {viewMode === "grid" && <GridComponent searchInput={searchInput} filters={filters}/>}
        </div>
    );
}
