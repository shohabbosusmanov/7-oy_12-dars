import { Select } from "antd";
import "antd/dist/antd.css";

const CustomSelect = ({
    options,
    placeholder,
}: {
    options: any;
    placeholder: string;
}) => {
    return (
        <Select
            size="large"
            placeholder={placeholder}
            className="custom-ant-select w-full"
            dropdownClassName="custom-ant-dropdown"
            options={options}
        />
    );
};

export default CustomSelect;
