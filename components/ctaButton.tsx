import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  color?: "black" | "white";
}

const CTAButton = ({ 
  text = "시작하기",
  color = "black" 
}: CTAButtonProps) => {
  return (
    <Link
      href="https://tally.so/r/m6W0Ge"
      className={`
        px-5 py-2 rounded-full transition-all duration-200 hover:scale-105
        ${color === "black" 
          ? "bg-black text-white" 
          : "bg-white text-black"
        }
      `}
    >
      {text}
    </Link>
  );
};

export default CTAButton;

