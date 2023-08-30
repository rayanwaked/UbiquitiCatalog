'use client'

import React, {useState} from "react";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";
import GridComponent from "@/app/catalog/grid/grid";

// Present the data to the user
export default function CatalogPage() {
    document.title = "Ubiquiti Catalog"
    
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");

    return (
        <div>
            <SearchBar onViewModeChange={setViewMode}/>
            {viewMode === "list" && <ListComponent/>}
            {viewMode === "grid" && <GridComponent/>}
        </div>
    );
}
