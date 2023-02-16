import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchText } from "../redux/textSlice/textSlice";

export default function Form() {
  const [number, setNumber] = useState(0);
  const [format, setFormat] = useState("text");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${number}&format=${format}`;
    dispatch(fetchText(url));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="row form-row">
        <div class="form-group col">
          <label >Number of Paragraph</label>
          <input type="number" class="form-control" id="number" onChange={e => setNumber(e.target.value)}/>
        </div>
        <div class="form-group col">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option value="html" onClick={e => setFormat(e.target.value)}>HTML</option>
            <option value="text" onClick={e => setFormat(e.target.value)}>Text</option>
          </select>
        </div>
      </div>
      <div className="py-3">
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
