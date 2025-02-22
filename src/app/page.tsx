import { JSX } from "react";
import ComingSoonPage from "./coming_soon/page";
import Maintenance from "./maintenance/page";

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
        <main></main>
      )}
    </>
  );
};

export default Home;
