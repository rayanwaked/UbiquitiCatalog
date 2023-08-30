'use client'

import React from "react";
import "./list.css";
import {getData, ProductProps} from "@/app/catalog/data/data";
import ClickableDevice from "@/app/catalog/list/device";

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
export default async function ListComponent() {
    const {devices} = await getData(); // Access the devices array

    return (
        <div>
            <div className={"catalogTableContainer"}>
                <table className={"catalogTable"}>
                    <thead className="fixedHeader">
                    <tr className={"catalogTableHeader"}>
                        <th className={"catalogTableColumnOne"}></th>
                        <th className={"catalogTableColumnTwo"}>Product Line</th>
                        <th className={"catalogTableColumnThree catalogNameColor"}>Name</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr className={"deviceTableRow"}>
                        <td tabIndex={0}><Product devices={devices}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}