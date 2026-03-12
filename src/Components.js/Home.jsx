import Products from "./Products";
import { useState, useEffect } from "react";


const Home = () => {

  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          setShowBanner(false);
          return 0;
        }
        return prev - 1;
      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);



  return (
    <>
    <div>
      {showBanner && (
        <div style={{
          background: "red",
          color: "white",
          padding: "15px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold"
        }}>
          🔥 Flash Sale! 50% OFF – Ends in {timeLeft}s
        </div>
      )}
    </div>

      <Products />
    </>
  );
};

export default Home;
