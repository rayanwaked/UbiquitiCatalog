import {ProductProps} from "@/app/catalog/data/data";
import {useEffect, useState} from "react";

export function useVisibleRowsCount(devices: ProductProps['devices'], searchInput: string) {
    const [visibleRowsCount, setVisibleRowsCount] = useState(0);

    useEffect(() => {
        const calculateVisibleRows = () => {
            const filteredDevices = devices.filter((device: ProductProps["devices"][0]) => {
                if (device && device.product?.name) {
                    return device.product?.name.toLowerCase().includes(searchInput.toLowerCase());
                }
                return false;
            });
            const rows = filteredDevices.length;
            setVisibleRowsCount(rows);
        };

        calculateVisibleRows();
        window.addEventListener('resize', calculateVisibleRows);

        return () => {
            window.removeEventListener('resize', calculateVisibleRows);
        };
    }, [devices, searchInput]);

    return visibleRowsCount;
}
