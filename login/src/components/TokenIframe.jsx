import { useEffect, useRef, useState } from "react";
const TokenIframe = () => {
  const iframeRef = useRef(null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

  const checkTokenInSessionStorage = () => {
    const newToken = sessionStorage.getItem("token");
    if (newToken !== token) {
      setToken(newToken || "");
    }
  };

  useEffect(() => {
    const interval = setInterval(checkTokenInSessionStorage, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [token]);

  useEffect(() => {
    if (token && iframeRef.current) {
      iframeRef.current.src = `http://127.0.0.1:80/api/v1/setToken?token=${encodeURIComponent(
        token
      )}`;

      setTimeout(() => {
        window.location.href = "http://localhost:5175";
      }, 2000);
    }
  }, [token]);

  return (
    <iframe ref={iframeRef} style={{ display: "none" }} title="Token Iframe" />
  );
};

export default TokenIframe;
