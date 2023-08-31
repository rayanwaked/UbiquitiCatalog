import {ProductProps} from "@/app/catalog/data/data";
import {useEffect, useState} from "react";

export function useVisibleRowsCount(devices: ProductProps['devices'], searchInput: string, filters: string[]) {
    const [visibleRowsCount, setVisibleRowsCount] = useState(0);

    useEffect(() => {
        const calculateVisibleRows = () => {
            const filteredDevices = devices.filter((device: ProductProps["devices"][0]) => {
                const deviceNameMatch = device.product?.name?.toLowerCase().includes(searchInput.toLowerCase());
                const lineNameMatch = filters?.length === 0 || filters?.includes(device.line?.name || "");
                return deviceNameMatch || lineNameMatch;
            });
            const rows = filteredDevices.length;
            setVisibleRowsCount(rows);
        };

        calculateVisibleRows();
        window.addEventListener('resize', calculateVisibleRows);

        return () => {
            window.removeEventListener('resize', calculateVisibleRows);
        };
    }, [devices, searchInput, filters]);

    return visibleRowsCount;
}
