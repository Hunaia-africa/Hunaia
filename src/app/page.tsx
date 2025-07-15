import { JSX } from "react";
import ComingSoonPage from "./coming_soon/page";
import Maintenance from "./maintenance/page";
import LandingPage from "./(unauthed)/home/page";
import Navbar from "@/components/navigation/appBar";

const Home: ({}) => Promise<JSX.Element> = async ({}) => {
  
  //variables to set maintenance mode or coming soon page
  // Ensure one is always true and other is false
  // When both are false, ensure home page is rendered
  const maintenance: boolean = false;
  const comingSoon: boolean = true;

  return (
    <>
      {comingSoon && !maintenance ? (
        <ComingSoonPage />
      ) : maintenance && !comingSoon ? (
        <Maintenance />
      ) : (
        <>
        <Navbar />
        <LandingPage />
        </>
      )}
    </>
  );
};

export default Home;
