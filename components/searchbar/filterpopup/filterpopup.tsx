import CustomCheckbox from "@/components/checkbox/checkbox";
import React, {useState} from "react";
import "./filterpopup.css"

export default function FilterPopup() {
    const checkboxStateInitial: { [key: string]: boolean } = {
        "UniFi": false,
        "UniFi LTE": false,
        "UniFi Protect": false,
        "UniFi Access": false,
        "airMax": false,
        "EdgeMax": false,
    };

    const [checkboxState, setCheckboxState] = useState(checkboxStateInitial);

    const handleCheckboxChange = (checkboxName: string) => {
        setCheckboxState({
            ...checkboxState,
            [checkboxName]: !checkboxState[checkboxName],
        });
    };

    const filteredItems = Object.keys(checkboxState).filter((checkboxName) => checkboxState[checkboxName]);

    return (
        <div className="searchBarFilterPopup">
            {filteredItems.map((item) => (
                <div key={item} className={"filterTypeContainer"}>
                    <CustomCheckbox
                        isChecked={checkboxState[item]}
                        onChange={() => handleCheckboxChange(item)}
                    />
                    <p>{item}</p>
                </div>
            ))}
        </div>
    );
}
