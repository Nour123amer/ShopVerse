import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import SubmitBtn from "~/components/form/SubmitBtn";
import { Input } from "~/components/ui/input";
import { verifyOTP, verifyValidation } from "~/services/auth.service";



export default function VerifyOtp() {

  const [phoneNumber, setPhoneNumber] =
    useState<string>("");
  const navigate = useNavigate()
  const [errors, setErrors] = useState<
    Record<string, string[]>
  >({});

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  useEffect(()=>{
    const storedNumber = localStorage.getItem("phoneNumber");
    if(storedNumber?.startsWith("+20")){
      setPhoneNumber(storedNumber.slice(2))
    }
    
  },[phoneNumber])

  const handleOtpChange = (
    value: string,
    index: number
  ) => {

    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];

    newOtp[index] = value.slice(-1);

    setOtp(newOtp);

    // auto focus next input
    if (value && index < 5) {

      const nextInput =
        document.getElementById(
          `otp-${index + 1}`
        );

      nextInput?.focus();
    }
  };

  const handleVerifyOTP = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const otpCode = otp.join("");

    const validateVerification =
      verifyValidation.safeParse({
        phoneNumber,
        code: otpCode,
      });

    if (!validateVerification.success) {

      setErrors(
        validateVerification.error.flatten()
          .fieldErrors
      );

      return;
    }

    try {

      const result = await verifyOTP({
        phoneNumber,
        code: otpCode,
      });

      console.log(
        "verify otp result =>",
        result
      );

      if (result.ok) {
        toast.success("Account is verified");
        navigate("/sign-in")
     }

      if (!result.ok) {
        const errorMessage =
          result?.data?.errors?.[0]
            ?.message;

        if (errorMessage) {
          toast.error(errorMessage);
        }
      }

    } catch (error) {

      console.log("error =>", error);

      toast.error(
        "Something went wrong"
      );
    }
  };
 console.log(errors)
  return (

    <div className="bg-[#f5f5f5] p-6 min-h-screen">

      <h2 className="mb-6 text-[#182232] font-bold">
        <Link to="/">ShopVerse</Link>
      </h2>

      <form
        onSubmit={handleVerifyOTP}
        className="
          w-full
          lg:w-3/4
          mx-auto
          flex
          flex-col
          justify-center
          my-8
          bg-white
          rounded-lg
          p-6
        "
      >

        <div className="text-center mb-6">

          <h2 className="text-2xl font-semibold text-[#182232]">
            Verify OTP
          </h2>

          <p className="text-[#45474C] mt-2">
            Enter your phone number
            and the 6-digit code
          </p>

        </div>


        <div className="mb-5">

          <Input
            type="tel"
            placeholder="01012345678"
            value={phoneNumber}
            onChange={(e)=>{setPhoneNumber(e.target.value)}}
            className="
              bg-white
              text-[#182232]
            "
          />

          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-2">
              {errors.phoneNumber[0]}
            </p>
          )}
        </div>


        <div className="
          flex
          items-center
          justify-center
          gap-3
          mb-6
        ">

          {otp.map((digit, index) => (

            <Input
              key={index}

              id={`otp-${index}`}

              type="text"

              maxLength={1}

              value={digit}

              onChange={(e) =>
                handleOtpChange(
                  e.target.value,
                  index
                )
              }

              className="
                w-12
                h-12
                text-center
                text-lg
                font-semibold
                bg-white
                border
                border-gray-300
                rounded-xl
                focus:border-[#182232]
              "
            />
          ))}
        </div>


        {errors.code && (
          <p className="
            text-red-500
            text-sm
            text-center
            mb-4
          ">
            {errors.code[0]}
          </p>
        )}


        <SubmitBtn
          type="submit"
          className="
            text-white
            bg-[#182232]
            cursor-pointer
          "
        >
          Verify OTP
        </SubmitBtn>

      </form>
    </div>
  );
}