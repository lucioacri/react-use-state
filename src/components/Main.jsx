import { useState } from "react";
import languages from "../data/languages";

export default function Main() {
  const [clickedLanguage, setClickedLanguage] = useState(-1);

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
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h1>{languages[clickedLanguage].title}</h1>
              <h1>{languages[clickedLanguage].description}</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
