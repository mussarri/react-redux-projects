import React from "react";
import { useSelector } from "react-redux";

export default function Text() {
  const value = useSelector((state) => state.text.value).split("\n");
  const isLoading = useSelector((state) => state.text.isLoading);
  const error = useSelector((state) => state.text.error);

  return (
    <div>
      {isLoading && "Loading"}
      {error && error}
      {!isLoading && !error && (
        <div>
          {value.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}
