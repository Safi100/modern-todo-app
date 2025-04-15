import { createContext, useState, useEffect } from "react";

export const FontContext = createContext();

export const FontProvider = ({ children }) => {
  const fontOptions = [
    { name: "System UI", value: "system-ui, sans-serif" },
    { name: "Serif", value: "Georgia, serif" },
    { name: "Monospace", value: "monospace" },
    { name: "Cursive", value: "cursive" },
    { name: "Fantasy", value: "fantasy" },
  ];

  const [font, setFont] = useState(() => {
    const savedFont = localStorage.getItem("font");
    return savedFont || fontOptions[0].value;
  });

  useEffect(() => {
    localStorage.setItem("font", font);
    document.documentElement.style.fontFamily = font;
  }, [font]);

  return (
    <FontContext.Provider value={{ font, setFont, fontOptions }}>
      {children}
    </FontContext.Provider>
  );
};
