export default function Button({ text }) {
  return (
    <div className="col gx-3">
      <button className="btn btn-primary">{text}</button>
    </div>
  );
}
