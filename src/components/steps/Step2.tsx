import Input from "../ui/Input";

const Step2 = () => {
    return (
        <div className="w-full flex flex-col gap-5">
            <Input
                label="Why will you use the service?"
                placeholder="Work"
                inputClassName="w-full"
                type="text"
            />

            <Input
                label="What describes you best?"
                placeholder="Business Owner"
                inputClassName="w-full"
                type="text"
            />

            <label className="input-label text-[#7D8592] font-bold flex items-center justify-between text-[14px]">
                Why will you use the service?{" "}
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                        <input type="radio" name="service" value="yes" />
                        Yes
                    </label>

                    <label className="flex items-center gap-2">
                        <input type="radio" name="service" value="no" />
                        No
                    </label>
                </div>
            </label>
        </div>
    );
};

export default Step2;
