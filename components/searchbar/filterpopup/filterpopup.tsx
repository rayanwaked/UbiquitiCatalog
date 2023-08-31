import CustomCheckbox from "@/components/checkbox/checkbox";
import React, {useState} from "react";
import "./filterpopup.css"

interface FilterPopupProps {
    onFilterChange: (selectedFilters: string[]) => void;
}

export default function FilterPopup({onFilterChange}: FilterPopupProps) {
    const checkboxStateInitial: {
        [key: string]: boolean
    } = {
        "UniFi": false,
        "UniFi LTE": false,
        "UniFi Protect": false,
        "UniFi Access": false,
        "airMAX": false,
        "EdgeMAX": false,
    };

    const [checkboxState, setCheckboxState] = useState(checkboxStateInitial);

    const handleCheckboxChange = (checkboxName: string) => {
        const updatedCheckboxState = {
            ...checkboxState,
            [checkboxName]: !checkboxState[checkboxName],
        };

        setCheckboxState(updatedCheckboxState);

        // Convert the updatedCheckboxState object into an array of selected filters
        const selectedFilters = Object.keys(updatedCheckboxState).filter(
            filterName => updatedCheckboxState[filterName]
        );

        onFilterChange(selectedFilters);
    };

    const resetFilters = () => {
        const resetCheckboxState = {...checkboxStateInitial};
        setCheckboxState(resetCheckboxState);

        const selectedFilters = Object.keys(resetCheckboxState).filter(
            filterName => resetCheckboxState[filterName]
        );

        onFilterChange(selectedFilters);
    };

    const areAllUnchecked = Object.values(checkboxState).every(value => !value);

    return (
        <div className="searchBarFilterPopup">
            <p className={"filterHeader"}>Product line</p>
            {Object.keys(checkboxState).map((item) => (
                <div key={item} className={"filterTypeContainer"}>
                    <CustomCheckbox
                        isChecked={checkboxState[item]}
                        onChange={() => handleCheckboxChange(item)}
                    />
                    <p>{item}</p>
                </div>
            ))}
            <button
                className={`filterReset ${areAllUnchecked ? 'inactiveFilterReset' : ''}`}
                onClick={resetFilters}
            >
                Reset
            </button>
        </div>
    );
}
