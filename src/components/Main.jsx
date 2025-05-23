import Button from "./Button";

export default function Main() {
  return (
    <main>
      <div className="container text-center">
        <div className="row justify-content-center">
          <Button text={"HTML"} />
          <Button text={"CSS"} />
          <Button text={"JavaScript"} />
          <Button text={"Node.js"} />
          <Button text={"Express"} />
          <Button text={"React.js"} />
        </div>
      </div>
    </main>
  );
}
