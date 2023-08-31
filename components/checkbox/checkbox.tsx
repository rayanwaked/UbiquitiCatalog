import "./checkbox.css"

const CustomCheckbox: React.FC<{ isChecked: boolean; onChange: () => void }> = ({isChecked, onChange}) => {
    return (
        <label className="custom-checkbox">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <span className="checkmark"></span>
        </label>
    );
};

export default CustomCheckbox;
