import React from "react";

function Button(props) {
  const { className, text } = props;
  return (
    <button
      className={`bg-black px-6 py-3 font-medium border-2 text-white border-white hover:bg-blue-gray-900 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
