export default function Button({ text, onClick }) {
  return (
    <div className="col gx-3">
      <button className="btn btn-primary" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
