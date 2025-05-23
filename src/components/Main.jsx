import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";

export default function Main() {
  const [clickedLanguage, setClickedLanguage] = useState(0);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            {languages.map((language, index) => {
              return (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (clickedLanguage === index) {
                      setClickedLanguage(-1);
                    } else {
                      setClickedLanguage(index);
                    }
                  }}
                  key={language.id}
                >
                  {language.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {clickedLanguage >= 0 && <Card language={languages[clickedLanguage]} />}
    </main>
  );
}
