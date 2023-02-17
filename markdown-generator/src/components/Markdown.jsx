import { setText } from "../redux/markdownSlice";
import { useDispatch, useSelector } from "react-redux";

function Markdown() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.markdown.text);

  return (
    <div class="card">
      <div class="card-header">Markdown</div>
      <div class="card-body">
        <div class="card-text">
          <textarea
            name="markdownText"
            id="textarea"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => dispatch(setText(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default Markdown;
