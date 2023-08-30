import React from "react";
import "./catalog.css";
import {Metadata} from "next";
import SearchBar from "@/components/searchbar/searchbar";
import ListComponent from "@/app/catalog/list/list";

export const metadata: Metadata = {
    title: "Ubiquiti Catalog",
    description: "Browse and learn about Ubiquiti's products",
}

// Present the data to the user
export default async function CatalogPage() {
    return (
        <div>
            <SearchBar/>
            <ListComponent/>
        </div>
    );
}