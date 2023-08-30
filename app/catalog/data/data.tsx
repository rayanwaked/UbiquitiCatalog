// Get product information from JSON URL
export async function getData() {
    try {
        const res = await fetch("https://static.ui.com/fingerprint/ui/public.json");

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.status}`);
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        return {devices: []}; // Return an empty array as a default
    }
}

// Create a property type interface
export interface ProductProps {
    devices: Array<{
        sysids?: Array<string>;
        unifi?: {
            adoptability?: string;
            network?: {
                radios?: Record<string, {
                    gain?: number;
                    maxPower?: number;
                    maxSpeedMegabitsPerSecond?: number;
                }>;
                numberOfPorts?: number;
                ethernetMaxSpeedMegabitsPerSecond?: number;
                systemIdHexadecimal?: string;
                features?: {
                    [key: string]: boolean;
                };
                chipset?: string;
                type?: string;
                minimumFirmwareRequired?: string;
                deviceCapabilities?: Array<string>;
            };
        };
        icon?: {
            resolutions?: Array<[number, number]>;
            id?: string;
        };
        line?: {
            name?: string;
            id?: string;
        };
        guids?: Array<string>;
        ic?: string;
        fcc?: string;
        sysid?: string;
        product?: {
            abbrev?: string;
            name?: string;
        };
        shortnames?: Array<string>;
        triplets?: Array<Record<string, string>>;
    }>;
}