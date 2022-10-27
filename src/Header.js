import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.scss";

const headerData = {
  Home: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTawwiBPXjCEAVE55spQ0LfCEqDsc6WBfTL8Q&usqp=CAU",
  React: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
  "React Query":
    "https://raw.githubusercontent.com/TanStack/query/main/media/repo-dark.png",
  SWR: "https://res.cloudinary.com/practicaldev/image/fetch/s--6b7mvu9P--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vgncmlu98um8dw9ccrcb.jpg",
};

const headerLink = {
  Home: "/",
  React: "/react",
  "React Query": "/react-query",
  SWR: "/swr",
};
const Header = () => {
  const [selecteHeader, setSelectedHeader] = useState("Home");
  const navigate = useNavigate();
  const highLightHeader = (value) => {
    setSelectedHeader(value);
    navigate(headerLink[value]);
  };

  return (
    <ul className="headerDiv">
      <li>
        <img src={headerData[selecteHeader]} alt="" className="headerImg" />
      </li>
      {Object.keys(headerData).map((value, index) => {
        return (
          <li
            key={index}
            className={selecteHeader === value ? "highLightHeader" : ""}
            onClick={() => highLightHeader(value)}
          >
            {value}
          </li>
        );
      })}
      <li></li>
    </ul>
  );
};

export default Header;
