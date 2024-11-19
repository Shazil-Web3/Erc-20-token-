import React, { useContext } from "react";

// INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { ICOContext } from "../../../../context/ERC20ICO";
import Image from "next/image";
import loader from "../../../../assets/loder.gif";

const NavBar = () => {
  const { account, accountBallanc, userId, completed } = useContext(ICOContext);

  // Copy UserId to Clipboard
  const copyToClipboard = (text) => {
    console.log("Copy function triggered with text:", text); // Debugging log
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("User ID copied to clipboard: " + text);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy User ID. Please try again.");
      });
  };

  return (
    <div className={Style.navBar}>
      {completed && (
        <div className={Style.loder}>
          <div className={Style.loder_box}>
            <Image src={loader} alt="loader" width={200} height={200} />
          </div>
        </div>
      )}

      <div className={Style.navBar_box}>
        <div className={Style.navBar_box_left}>
          <h1> FUNNY Token</h1>
        </div>
        <div className={Style.navBar_box_right}>
          {/* Token Balance */}
          <p>
            Token Balance &nbsp;&nbsp;<span>{accountBallanc}</span>
          </p>

          {/* User ID with Copy Button */}
          <p>
            <span>UserId #{userId}</span>&nbsp;&nbsp;{account}
            <button
              className={Style.copyButton}
              onClick={() => copyToClipboard(userId)}
            >
              Copy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
