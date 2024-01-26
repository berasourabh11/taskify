import { Medal } from "lucide-react";
import Title from "@/components/marketing/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Title />
      <Button className="mt-6" size="lg">
        <Link href="/sign-up">
          Get Taskify for free
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
