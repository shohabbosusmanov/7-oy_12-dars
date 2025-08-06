import { Link } from "react-router-dom";
import Input from "../ui/Input";
import Icon from "../ui/Icon";

export const Step4 = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <Input
                label="Member’s Email"
                type="text"
                inputClassName="w-full"
                placeholder="memberemail@gmail.com"
            />
            <Link
                className="text-base text-[#3F8CFF] flex gap-2 items-center"
                to={""}
            >
                <Icon.plusIcon /> Add another Member
            </Link>
        </div>
    );
};
