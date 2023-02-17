import React from "react";
import { useSelector } from "react-redux";
import { markdown } from "markdown";

function Html() {
  const text = useSelector((state) => state.markdown.text);
  const convertedText = markdown.toHTML(text);

  return (
    <div class="card">
      <div class="card-header">HTML</div>
      <div class="card-body">
        <div class="card-text">{convertedText}</div>
      </div>
    </div>
  );
}

export default Html;
