import { FC } from "react";
import UnlockTheMagicSection from "./(sections)/unlockTheMagic";
import GallerySection from "./(sections)/gallery";
import ExploreKenyaSection from "./(sections)/exploreKenya";

const LandingPage: FC = () => {
  return (
    <>
      <UnlockTheMagicSection />
      <GallerySection />
      <ExploreKenyaSection />
    </>
  );
};

export default LandingPage;
