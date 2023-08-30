'use client'

import React, {useEffect, useState} from "react";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";
import GridComponent from "@/app/catalog/grid/grid";

// Present the data to the user
export default function CatalogPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");

    useEffect(() => {
        document.title = "Ubiquiti Catalog";
    }, []);

    return (
        <div>
            <SearchBar onViewModeChange={setViewMode}/>
            {viewMode === "list" && <ListComponent/>}
            {viewMode === "grid" && <GridComponent/>}
        </div>
    );
}
