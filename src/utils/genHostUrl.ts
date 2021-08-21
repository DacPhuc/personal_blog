const generateHostParam = (): string => {
  if (process.env.NODE_ENV === "production") {
    return "https://api.dacphucng.com";
  } else {
    return "http://localhost:3001";
  }
};

export default generateHostParam;
