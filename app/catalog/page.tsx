import React from "react";
import "./catalog.css"
import {getData, ProductProps} from "@/app/catalog/data";
import ClickableDevice from "@/app/catalog/device";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Ubiquiti Products",
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
            <table className={"productTable"}>
                <thead>
                <tr className={"productTableHeader"}>
                    <th className={"productTableColumnOne"}></th>
                    <th className={"productTableColumnTwo"}>Product Line</th>
                    <th className={"productTableColumnThree"}>Name</th>
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