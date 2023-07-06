import { useRef } from "react";
import { useState } from "react";
import "./Home.css";
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [textareaText, setTextareaText] = useState("");
  const textAreaRef = useRef(null);
  const copyToClipboard = (value) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log("Text copied to clipboard:", value);
      })
      .catch((error) => {
        console.error("Error copying text:", error);
      });
  };

  const handleClear = () => {
    console.log("Clear");
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleLink = () => {
    let sliceLink = "";
    if (inputValue.endsWith("g")) {
      sliceLink = inputValue.slice(32, -17);
    } else {
      sliceLink = inputValue.slice(32, -20);
    }
    console.log(sliceLink);
    let link = "";
    if (sliceLink) {
      link = "https://drive.google.com/uc?export=download&id=" + sliceLink;
    }
    console.log(link);
    setTextareaText(link);
    copyToClipboard(link);
  };
  console.log(inputValue);
  return (
    <div className="grid place-items-center bg-svg">
      <h1 className="text-xl md:py-[55px] py-7 font-mono font-bold text-center md:w-full w-[240px]">
        Direct google drive link generator
      </h1>{" "}
      <div className="md:w-3/4">
        <label className="font-mono">Enter Link</label>
        <input
          value={inputValue}
          onChange={handleChange}
          className="bg-pink-200 rounded-lg p-5 block w-full md:h-[75px] mt-2"
          type="text"
          name="link"
        />
        <div className="py-[15px]">
          <button
            onClick={handleLink}
            className="btn btn-outline mt-2 font-mono"
          >
            Generate and Copy
          </button>
          <button
            onClick={handleClear}
            className="btn btn-outline mt-2 font-mono ml-2"
          >
            Clear Link
          </button>
        </div>
        <label className="font-mono">Direct link will popup here</label>
        <textarea
          ref={textAreaRef}
          value={textareaText}
          className="block bg-pink-200 rounded-lg mt-3 p-5 w-full md:h-[95px]"
          name=""
          id=""
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
