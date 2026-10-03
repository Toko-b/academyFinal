import React from "react";
import { useLang } from "../libs/LangContext";

export default function Header() {
  const { t, LangChange } = useLang();
  console.log(t)
  return (
    <div>
      <button type="button" onClick={() => LangChange("ka")}>
        Ka
      </button>
      <button type="button" onClick={() => LangChange("en")}>
        En
      </button>
      <h3>
        {t.welcome}
      </h3>
    </div>
  );
}
// useNavigate