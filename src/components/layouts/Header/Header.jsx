import TopHeadSection from "./sections/TopHeadSection";
import MiddleHeadSection from "./sections/MiddleHeadSection";
import BottomHeadSection from "./sections/BottomHeadSection";

const Header = () => {
  return (
    <header className="header" id="header">
      <TopHeadSection />
      <MiddleHeadSection />
      <BottomHeadSection />
    </header>
  );
};

export default Header;
