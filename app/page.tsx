"use client";
import axios from "axios";
import { GET, GETContrubution } from "./api/route";
import Button from "./components/Button";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import CircularDotsLoader from "./components/CircularDotsLoader";
import { canvas, div } from "framer-motion/m";
import html2canvas from "html2canvas";

export default function Home() {
  const [inputText, setinputText] = useState("");
  const [UserData, setUserData] = useState();
  const [Loader, setLoader] = useState(false);

  const handleChange = (e: any) => {
    setinputText(e.target.value);
  };

  const handleSearch = async () => {
    try {
      setLoader(false);
      const res = await axios.get(`api?userName=${inputText}`);
      const data = res.data.data;
      setUserData(data);
      setLoader(true);
    } catch (err) {
      setLoader(false);
      console.log(err);
    }
  };

  const handleDownload = () => {
    const cardElement = document.getElementById("card");

    if (cardElement) {
      html2canvas(cardElement, {
        useCORS: true, // Enable CORS support
        // proxy: "https://your-proxy-server.com", // Set up your proxy if needed
      }).then((canvas) => {
        const link = document.createElement("a");
        link.download = "GitStatic.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center gap-10 h-[30vh] ">
        <Input change={handleChange} placeholder={"Enter username Get card"} />
        <Button value={"Search"} onClick={handleSearch} />
      </div>
      <div className="w-full flex  items-center justify-center h-screen">
        {UserData ? (
          <div>
            <div id="card">
              <Card Data={UserData} />
            </div>
            <div className="text-7xl animate-bounce text-center ">💀⬇️💀</div>
          </div>
        ) : (
          <CircularDotsLoader />
        )}
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-10 ">
        <Button value={"Download"} onClick={handleDownload} />
      </div>
    </>
  );
}
