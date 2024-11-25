import TopHeadSection from "./sections/TopHeadSection";
import MiddleHeadSection from "./sections/MiddleHeadSection";
import BottomHeadSection from "./sections/BottomHeadSection";



const Header = () => {
  
  return (
    <header className="header sticky w-full top-0 z-40" id="header">
      <TopHeadSection />
      <MiddleHeadSection />
      <BottomHeadSection />
    </header>
  );
};

export default Header;
