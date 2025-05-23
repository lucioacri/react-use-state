import Button from "./Button";
import { useState } from "react";

export default function Main() {
  const [card, showCard] = useState(false);
  return (
    <main>
      <div className="container text-center">
        <div className="row justify-content-center">
          <Button text={"HTML"} onClick={() => showCard(!card)} />
          {/* <Button text={"CSS"} />
          <Button text={"JavaScript"} />
          <Button text={"Node.js"} />
          <Button text={"Express"} />
          <Button text={"React.js"} /> */}
        </div>
      </div>
      {card && (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
