import "./styles.scss";

export function DefaultButton({ type, children }) {
  return (
    <button type={type} className="btn btn-default">
      {children}
    </button>
  );
}
