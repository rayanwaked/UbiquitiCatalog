import * as React from 'react';
import {getData, ProductProps} from "@/app/catalog/data";
import ClickableDevice from "@/app/catalog/device";

// Iterate through the data using ProductProps and display the data
export function Product({devices}: ProductProps) {
    // Check if devices is defined and is an array before using map
    if (!devices || !Array.isArray(devices)) {
        return <div>No devices found.</div>;
    }

    return (
        <div>
            {/*{devices.map((device, index) => (*/}
            {/*    <div key={index}>*/}
            {/*        <p>Line Name: {device.line?.name}</p>*/}
            {/*        <p>Id: {device.line?.id}</p>*/}
            {/*        <p>Name: {device.product?.name}</p>*/}
            {/*        <p>Shortname: {device.shortnames}</p>*/}
            {/*        <p>Max Power: {device.unifi?.network?.radios?.na?.maxPower} W</p>*/}
            {/*    </div>*/}
            {/*))}*/}
            {devices.map((device, index) => (
                <ClickableDevice key={index} device={device}/>
            ))}
        </div>
    );
}

// Present the data to the user
export default async function CatalogPage() {
    const {devices} = await getData(); // Access the 'devices' array

    return (
        <div>
            <h1>Catalog</h1>
            <div>
                <Product devices={devices}/>
            </div>
        </div>
    );
}