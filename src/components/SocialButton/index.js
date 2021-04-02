import "./styles.scss";

export function SocialButton({ type, children }) {
  return (
    <button type={type} className="btn btn-social">
      {children}
    </button>
  );
}
