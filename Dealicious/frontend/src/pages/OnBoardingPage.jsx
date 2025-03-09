import { useState } from "react";
import png0 from "../assets/png0.jpg";
import "../styles/OnBoardingPage.css";
import OnBoardingPart0 from "../components/OnBoardingPart0";
import OnBoardingPart1 from "../components/OnBoardingPart1";
import OnBoardingPart2 from "../components/OnBoardingPart2";
import OnBoardingPart3 from "../components/OnBoardingPart3";
import OnBoardingPart5 from "../components/OnBoardingPart5";

const OnBoardingPage = () => {
  const handlePartChange = (index) => {
    setCurrentPartIndex(index);
  };
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const parts = [
    <OnBoardingPart0 key={0} changePart={handlePartChange} />,
    <OnBoardingPart1 key={1} changePart={handlePartChange} />,
    <OnBoardingPart2 key={2} changePart={handlePartChange} />,
    <OnBoardingPart3 key={3} changePart={handlePartChange} />,
    <OnBoardingPart5 key={4} />,
  ];

  return (
    <div className="page0" style={{ backgroundImage: `url(${png0})` }}>
      <div className="part0">
        <div className="pPVp6" role="tablist" aria-label="Onboarding Steps">
          {currentPartIndex !== 4 &&
            parts.slice(0, parts.length - 1).map((_, index) => (
              <div
                className={currentPartIndex === index ? "A3j1o" : "ugqZD"}
                key={index}
                role="tab"
                aria-selected={currentPartIndex === index}
                aria-controls={`part-${index}`}
                id={`tab-${index}`}
                tabIndex={currentPartIndex === index ? 0 : -1}
                onClick={() => handlePartChange(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePartChange(index);
                  }
                }}
                onTouchStart={() => handlePartChange(index)}
              ></div>
            ))}
        </div>
        <div
          id={`part-${currentPartIndex}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentPartIndex}`}
        >
          {parts[currentPartIndex]}
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;