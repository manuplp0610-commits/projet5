import "../collapse/collapse.scss";
import { useState } from "react";

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-title">
        {title}
        <button className="collapse-btn" onClick={() => setOpen(!open)}>
          {open ? "▲" : "▼"}
        </button>
      </div>
      <p
        className={`collapse-description ${open ? "collapse-description--open" : ""}`}
      >
        {description}
      </p>
    </div>
  );
}
