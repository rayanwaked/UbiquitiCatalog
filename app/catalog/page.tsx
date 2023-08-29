import React from "react";
import "./catalog.css"
import {getData, ProductProps} from "@/app/catalog/data";
import ClickableDevice from "@/app/catalog/device";
import {Metadata} from "next";
import SearchBar from "@/components/searchbar";

export const metadata: Metadata = {
    title: "Ubiquiti Catalog",
    description: "Browse and learn about Ubiquiti's products",
}

// Iterate through the data using ProductProps and display the data
export function Product({devices}: ProductProps) {
    return (
        <div className={"productLine"}>
            {devices.map((device, index) => (
                <ClickableDevice key={index} device={device}/>
            ))}
        </div>
    );
}

// Present the data to the user
export default async function CatalogPage() {
    const {devices} = await getData(); // Access the devices array

    return (
        <div>
            <SearchBar/>
            <table className={"catalogTable"}>
                <thead>
                <tr className={"catalogTableHeader"}>
                    <th className={"catalogTableColumnOne"}></th>
                    <th className={"catalogTableColumnTwo"}>Product Line</th>
                    <th className={"catalogTableColumnThree catalogNameColor"}>Name</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td className={"deviceTableRow"}><Product devices={devices}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}