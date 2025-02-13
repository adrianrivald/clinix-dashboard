import { useRouter } from "next/router";
import React, { useRef } from "react";

interface PinInputProps {
  length?: number;
  onComplete: (pin: string) => void;
}

const PinInput: React.FC<PinInputProps> = ({ length = 6, onComplete }) => {
  const [pin, setPin] = React.useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Only allow a single digit (0-9)

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);

    // Move focus to next input if a number is entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Call onComplete when all fields are filled
    if (newPin.every((num) => num !== "")) {
      //   TODO: Submit handler when PIN fields are filled
      onComplete(newPin.join(""));
      setTimeout(() => {
        router.push("/registration/step/1");
      }, 1000);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="mt-12 flex justify-between gap-8">
      {pin.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          className="border-b-2 border-green-500 w-10 h-14 focus:outline-none text-center text-4xl pb-6 font-bold"
        />
      ))}
    </div>
  );
};

export default PinInput;
