export default function Buttons({ title, onClick }) {
  return (
    <div className="col">
      <button className="btn btn-primary" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
