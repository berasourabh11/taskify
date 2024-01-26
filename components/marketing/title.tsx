import { Medal } from "lucide-react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Title = () => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center flex-col",
          headingFont.className
        )}
      >
        <div className="flex items-center justify-center mb-2 sm:mb-3 md:mb-4 border shadow-sm p-2 sm:p-3 md:p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-2" />
          Best task management app of 2024
        </div>

        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          Taskify helps you get
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-yellow-500 to-pink-500 text-white px-4 py-2 rounded-md w-fit mx-auto">
          more done.
        </div>
      </div>

      {/* Desc */}
      <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center",textFont.className)}>
        Collaborate, manage projects, and reach new productivity peaks. From
        high rises to the home office, the way your team works is
        unique—accomplish it all with Taskify.
      </div>
    </>
  );
};

export default Title;
