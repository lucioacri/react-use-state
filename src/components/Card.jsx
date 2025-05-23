export default function Card({ language }) {
  const { title, description } = language;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-title">
              <h1>{title}</h1>
            </div>
            <div className="card-content">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
