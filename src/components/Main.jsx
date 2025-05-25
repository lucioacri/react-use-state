import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";
import Buttons from "./Buttons";

export default function Main() {
  const [clickedLanguageIndex, setClickedLanguageIndex] = useState(0);
  const handleButtonClick = (index) => {
    if (clickedLanguageIndex === index) {
      setClickedLanguageIndex(-1);
    } else {
      setClickedLanguageIndex(index);
    }
  };

  return (
    <main>
      <div className="container text-center">
        <div className="row">
          {languages.map((language, index) => (
            <Buttons
              key={language.id}
              title={language.title}
              onClick={() => handleButtonClick(index)}
            />
          ))}
        </div>
      </div>
      {clickedLanguageIndex >= 0 && (
        <Card language={languages[clickedLanguageIndex]} />
      )}
    </main>
  );
}
