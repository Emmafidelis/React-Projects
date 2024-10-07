import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 20 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChar);

  return (
    <p>
      {text}...
      <button
        className="btn btn-success"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
