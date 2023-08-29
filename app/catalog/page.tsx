import React from "react";
import "./page.css"
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
            <div className={""}>
                <p>Product Line</p>
                <p>Name</p>
            </div>
            <div>
                <Product devices={devices}/>
            </div>
        </div>
    );
}