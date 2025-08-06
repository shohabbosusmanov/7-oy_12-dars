import { useState } from "react";
import Input from "../ui/Input";
import { IMaskInput } from "react-imask";
import OtpInput from "react-otp-input";

const Step1 = () => {
    const [otp, setOpt] = useState("");
    return (
        <div className="flex flex-col h-full justify-between">
            <label className="input-label text-[#7D8592] font-bold text-[14px]">
                Mobile Number
            </label>
            <IMaskInput
                className="rounded-[14px] pl-[18px] pr-0 py-[11px] border text-[#7D8592] font-[600] border-[#D8E0F0] focus:outline-none focus:border-[#3F8CFF]"
                mask={"{+998} 00 000 00 00"}
                defaultValue={"+998"}
                unmask={"+998000000000"}
                inputMode="tel"
            />
            <label className="input-label text-[#7D8592] font-bold text-[14px]">
                Code from SMS
            </label>
            <OtpInput
                value={otp}
                containerStyle={"gap-x-4"}
                inputStyle={
                    "!w-[58px] h-[50px] rounded-[14px] border border-[#D8E0F0] text-[#7D8592] outline-none focus:border-[#3F8CFF]"
                }
                onChange={setOpt}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
            />
            <Input
                type="email"
                label="Email Address"
                placeholder="youremail@gmail.com"
                inputClassName="w-full"
            />
            <Input
                type="password"
                label="Create Password"
                placeholder="••••••••"
                inputClassName="w-full"
            />
        </div>
    );
};

export default Step1;
