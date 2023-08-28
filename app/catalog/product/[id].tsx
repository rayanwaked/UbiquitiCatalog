import * as React from "react";
import {useRouter} from "next/router";
import {getData, ProductProps} from "@/app/catalog/data";

// Fetch the data and create a mapping of products by ID
async function fetchProducts() {
    const data = await getData();
    const productsMap: Record<string, ProductProps['devices'][0]> = {}; // Specify the correct type

    data.devices.forEach((device: ProductProps['devices'][0]) => { // Annotate the type of 'device'
        if (device.line && device.line.id) {
            productsMap[device.line.id] = device;
        }
    });

    return productsMap;
}

const ProductPage: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;

    if (typeof id !== "string") {
        return <div>Loading...</div>;
    }

    // Fetch product data based on the ID
    const product = fetchProducts(id); // Implement your data fetching logic

    if (!product) {
        return <div>Product not found.</div>;
    }

    return (
        <div>
        </div>
    );
};

export default ProductPage;
