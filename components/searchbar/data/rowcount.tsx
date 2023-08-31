import {ProductProps} from "@/app/catalog/data/data";
import {useEffect, useState} from "react";

export function useVisibleRowsCount(devices: ProductProps['devices']) {
    const [visibleRowsCount, setVisibleRowsCount] = useState(0);

    useEffect(() => {
        const calculateVisibleRows = () => {
            const rows = devices.length;
            setVisibleRowsCount(rows);
        };

        calculateVisibleRows();
        window.addEventListener('resize', calculateVisibleRows);

        return () => {
            window.removeEventListener('resize', calculateVisibleRows);
        };
    }, [devices]);
    
    return visibleRowsCount;
}