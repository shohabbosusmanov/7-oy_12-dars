import { useEffect, useState } from "react";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import { Step4 } from "../components/steps/Step4";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStepAuth from "../components/ui/progress-step-auth";
import useStepProgressAuth from "../hooks/requests/useStepProgressAuth";
import PreviousButton from "../components/ui/PreviousButton";
import Illustration from "../assets/images/signUpImages/Illustration.svg";

const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const { progressData, setProgressData } = useStepProgressAuth();
    const handleSavePreviusStep = () => {
        const findStep = progressData.find(
            (step) => step.step === currentStep - 1
        );
        findStep.isSuccess = true;
        setProgressData([...progressData]);
    };
    const incrementCurrentStep = () => {
        if (currentStep <= 4) {
            setCurrentStep((prevState) => prevState + 1);
        }
    };

    const decrementCurrentStep = () => {
        if (currentStep > 0) {
            setCurrentStep((prevState) => prevState - 1);
        }
    };

    const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />];

    useEffect(() => {
        if (currentStep !== 1) {
            handleSavePreviusStep();
        }
    }, [currentStep]);
    return (
        <section className="w-full h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
            {currentStep <= progressData.length ? (
                <div className="flex h-full gap-x-8">
                    <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
                        <div className="flex flex-col gap-y-14 h-full items-start">
                            <div className="mt-4 text-white gap-x-8">
                                <Icon.logo />
                            </div>
                            <p className="description text-white text-[40px] max-w-[400px]">
                                Get started
                            </p>
                            <ProgressStepAuth
                                steps={progressData}
                                currentStep={currentStep}
                            />
                        </div>
                    </div>
                    <div className="w-[100%] max-w-[75%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
                        <div className="flex flex-col max-w-[403px] h-[80%] mx-auto items-center gap-5 pt-[40px]">
                            <span className="text-[14px] text-[#3F8CFF] font-[700]">
                                STEP{" "}
                                {currentStep > progressData.length
                                    ? progressData.length
                                    : currentStep}
                                /{progressData.length}
                            </span>
                            <h2 className="text-[22px] text-[#0A1629] font-[700]">
                                {progressData[currentStep - 1]?.title}
                            </h2>

                            {steps[currentStep - 1]}
                        </div>
                        <hr className="mb-5 mt-10 text-[#E4E6E8]" />
                        <div className="flex p-4 items-end justify-between w-full">
                            {currentStep > 1 ? (
                                <PreviousButton
                                    onClick={() => decrementCurrentStep()}
                                    className="p-btn cursor-pointer h-fit flex gap-2"
                                >
                                    <Icon.leftArrowIcon /> Previous
                                </PreviousButton>
                            ) : (
                                <div></div>
                            )}
                            <Button
                                className="h-fit flex gap-2"
                                onClick={() => incrementCurrentStep()}
                                variant="small"
                            >
                                Next Step <Icon.rightArrowIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full h-full pt-[100px] bg-white rounded-[24px]">
                    <img
                        className="w-[500] h-auto m-auto"
                        src={Illustration}
                        alt="Illustration"
                    />
                    <h2 className="w-fit m-auto pt-15 pb-6 font-[600] text-[22px]">
                        You are successfully registered!
                    </h2>
                    <Button className="h-fit flex gap-2 m-auto" variant="small">
                        Let's Start <Icon.rightArrowIcon />
                    </Button>
                </div>
            )}
        </section>
    );
};

export default SignUpPage;
