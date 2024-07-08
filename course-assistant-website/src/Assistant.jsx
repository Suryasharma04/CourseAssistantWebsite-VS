import { useState } from "react";
import ask from "../doAsk";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Assistant = ({ account, aType }) => {
  const [resp, setResp] = useState("<p>No Response Yet!</p>");
  const [loading, setLoading] = useState(false);

  const askAssistant = async () => {
    setLoading(true);
    const quest = document.getElementById('question').value;
    const temp = await ask(account, aType, quest);
    setResp(temp);
    setLoading(false);
  };

  return (
    <div>
      <h2>{aType} Assistant</h2>
      <div className="form">
        <h2>Ask a question:</h2>
        <input type="text" id="question" name="question" defaultValue="Question" /><br /><br />
        <button type="button" className="button" onClick={askAssistant}>
          Ask Question
        </button>
        <h2>Response:</h2>
        <div className="response" dangerouslySetInnerHTML={{ __html: resp }} />
      </div>
      <PacmanLoader
        color={"blue"}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading!"
        data-testid="loader"
      />
    </div>
  );
};

export default Assistant;
