import { useEffect, useState } from "react"
import d3Mobile from "../../assets/images/mobile.png";
import otpVerify from "../../assets/images/otp_verify.png";
import indFlag from "../../assets/images/ind-flag.png";
import "animate.css"
import { sendOtp } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import SuccessAnime from "./SuccessAnime";


const LoginStepForm = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [mobileInput, setMobileInput] = useState("");
    const [otpInput, setOtpInput] = useState("");
    const [decodedOtp, setDecodedOtp] = useState(""); // New state for decoded OTP

    const [isClicked, setIsClicked] = useState(false);

    const handleMobileInput = (e) => {
        setMobileInput(e.target.value);
    };

    const { data: otpSent, isLoading, isError: otpSentError } = useQuery({
        queryKey: ["otp-sent-data", mobileInput],
        queryFn: () => sendOtp(mobileInput),
        enabled: isClicked,
    });

    useEffect(() => {
        if (otpSent) {
            toast.success("OTP sent successfully");
            setIsClicked(false);
            console.log("oto sent", atob(otpSent.otp));
            setDecodedOtp(atob(otpSent.otp));
            
            
            setCurrentStep(2);
        } else if (otpSentError) {
            toast.error("OTP not sent, Something went wrong!!");
            setIsClicked(false);
        }
    }, [otpSent, otpSentError]);

    const handleSendOtp = () => {
        setIsClicked(true);
    };

    const handleValidateOtp = () => {
        if (otpInput === decodedOtp) {
            setCurrentStep(3); // Proceed to next step (successful login)
        } else {
            toast.error("Invalid OTP, please try again.");
        }
    };

    const handleOtpInput = (e) => {
        setOtpInput(e);
    };

    // console.log("Decoded otp", decodedOtp);
    // console.log("Otp Typed", otpInput);

    return (
        <>
            <Toaster position="bottom-center"
                reverseOrder={false} />
            <div className="login-form h-[400px] flex justify-center items-center overflow-hidden">
                {
                    currentStep === 1 &&
                    <div className="login-step-1 px-10 py-5 animate__animated animate__fadeIn">
                        <img src={d3Mobile} alt="3d-mobile" className="w-[80px] mx-auto" />
                        <div className="phone-number-section">
                            <p className="text-center text-xl font-semibold text-darkGreen mt-3">Phone Number Verification</p>
                            <p className="text-center mt-2 text-sm">We will send you a <strong>One Time Password</strong> on this number to verify it's you</p>
                            <div className="input-phone-number mt-5">
                                <div className="country-telecode bg-whitesmoke px-5 py-2 rounded-lg flex">
                                    <span className="inline-block border-e pe-5 font-bold">+91</span>
                                    <span className="block text-center w-full"><img src={indFlag} alt="ind-flag" className="w-5 mb-1 inline" /> India</span>
                                </div>
                                <input type="tel" id="phone" name="phone" placeholder="Enter 10 digit phone number"
                                    className="block w-full  border-b text-lg text-center outline-none p-2 focus:border-darkGreen placeholder:text-lg mt-2"
                                    onChange={handleMobileInput}
                                    value={mobileInput}
                                    pattern="^[0-9]{10}$"
                                    required />
                                <small className="block my-2 text-center text-sm text-green-700 valid-msg">All Right !!! Good to go 👍👍</small>
                                <small className="block my-2 text-center invalid-msg text-red-600 text-sm">Phone number must be exactly 10 digits.</small>
                                <div className="text-center mt-4">
                                    <button type="button" className="enter-number bg-gradient-green px-5 py-2 rounded-3xl text-white"

                                        onClick={handleSendOtp}>
                                        {
                                            isLoading ? "Sending OTP...":"Request OTP"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {
                    currentStep === 2 &&
                    <div className="login-step-1 p-10 animate__animated animate__fadeIn">
                        <img src={otpVerify} alt="3d-mobile" className="w-[100px] mx-auto" />
                        <div className="otp-verify-section">
                            <p className="text-center text-xl font-semibold text-darkGreen mt-3">OTP Verification</p>
                            <p className="text-center mt-3">Enter the <strong>One Time Password</strong> you got on your number</p>
                            <div className="otp-input-section flex justify-center my-3">
                                <InputOTP maxLength={6} onChange={handleOtpInput}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                        <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} />
                                        <InputOTPSlot index={4} />
                                        <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                            </div>
                            <div className="text-center mt-4">
                                {
                                    otpInput.split('').length === 6 ?
                                        <button type="button" className="enter-number bg-gradient-green px-5 py-2 rounded-3xl text-white"

                                            onClick={handleValidateOtp}>
                                            Validate OTP
                                        </button> : null
                                }

                            </div>
                        </div>
                    </div>
                }

                {
                    currentStep === 3 &&
                    <div className="login-step-1 p-10 animate__animated animate__pulse">
                        <div className="login-succesful">
                            <SuccessAnime />
                            <p className="text-center text-green-500 text-xl " >You are successfully logged in !!!!</p>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default LoginStepForm
