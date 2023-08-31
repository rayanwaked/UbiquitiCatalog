import React, {useState} from 'react';
import './checkbox.css';

const CustomCheckbox: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <span className="checkmark"></span>
        </label>
    );
};

export default CustomCheckbox;
