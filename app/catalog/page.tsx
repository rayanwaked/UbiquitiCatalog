'use client'

import React, {useEffect, useState} from "react";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";
import GridComponent from "@/app/catalog/grid/grid";
import {SearchProvider} from "@/components/searchbar/data/searchcontext";

// Present the data to the user
export default function CatalogPage() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");

    useEffect(() => {
        document.title = "Ubiquiti Catalog";
    }, []);

    return (
        <div>
            <SearchProvider>
                <SearchBar onViewModeChange={setViewMode}/>
                {viewMode === "list" && <ListComponent/>}
                {viewMode === "grid" && <GridComponent/>}
            </SearchProvider>
        </div>
    );
}
