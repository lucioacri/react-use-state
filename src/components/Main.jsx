import { useState } from "react";
import languages from "../data/languages";
import Card from "./Card";

export default function Main() {
  const [clickedLanguage, setClickedLanguage] = useState(0);
  // const [card, setCard] = useState(false);

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
                    setClickedLanguage(index);
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

      <Card language={languages[clickedLanguage]} />
    </main>
  );
}
