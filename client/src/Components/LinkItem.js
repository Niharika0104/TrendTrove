import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-has-content */
export default function LinkItem(props) {
  const { href, text } = props;
  return (
    <div className="flex flex-col">
      <div className="flex gap-1">
        <Link
          to={href}
          className="text-lg transition-all font-medium !hover:text-primary px-3"
        >
          {text}
        </Link>
      </div>
    </div>
  );
}
