import { useState } from "react";
import Button2 from "../ui/Button2";
import Input from "../ui/Input";

const Step3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const options = [
        "Only me",
        "2 - 5",
        "6 - 10",
        "11 - 20",
        "21 - 40",
        "41 - 50",
        "51 - 100",
        "101 - 500",
    ];

    return (
        <div className="w-full flex flex-col gap-5">
            <Input
                label="Your Company’s Name"
                placeholder="Company’s Name"
                type="text"
                inputClassName=" w-full"
            />
            <Input
                label=" Business Direction"
                placeholder="IT and programming"
                type="text"
                inputClassName=" w-full"
            />
            <label className="input-label text-[#7D8592] font-bold text-[14px]">
                How many people in your team?
            </label>
            <div className="w-full grid grid-cols-4 gap-3">
                {options.map((option, index) => (
                    <Button2
                        key={option}
                        onClick={() => setActiveIndex(index)}
                        buttonClassName={
                            activeIndex === index
                                ? "!bg-blue-500 !text-white"
                                : ""
                        }
                    >
                        {option}
                    </Button2>
                ))}
            </div>
        </div>
    );
};

export default Step3;
