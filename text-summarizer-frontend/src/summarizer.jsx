import React, { useState } from "react";
import axios from "axios";

function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const summarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/summarize", {
        text: text,
      });
      setSummary(res.data.summary);
    } catch (error) {
      console.error("Error summarizing:", error);
      setSummary("Failed to summarize. Check if the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "auto", padding: "2rem" }}>
      <h2>Text Summarizer</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        cols={80}
        placeholder="Paste your text here..."
        style={{ width: "100%", padding: "10px" }}
      />
      <br />
      <button onClick={summarize} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div
          style={{ marginTop: "2rem", background: "#f4f4f4", padding: "1rem" }}
        >
          <h3>Summary</h3>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}

export default Summarizer;
