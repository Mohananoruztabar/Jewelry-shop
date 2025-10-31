"use client";
import React, { useState } from "react";


export default function AccordionMenu(props) {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="w-full max-w-md mx-auto ">
      {/* Panel 1 */}
      <div className="border border-trans ">
        <button
          onClick={() => togglePanel(1)}
          className="w-full flex justify-between items-center px-4 py-3 font-bold bg-ngray transition"
        >
          Product Information
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 1 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 1 && (
          <div className="divide-y divide-gray-300">
            <div className="grid grid-cols-2 px-6 py-2 bg-accent">
              <p className="">Material</p>
              <span className="span1">{props.material}</span>
            </div>
            <div className="grid grid-cols-2 px-6 py-2">
              <p className="">Brand </p>
              <span className="span1">{props.brand}</span>
            </div>
            <div className="grid grid-cols-2 px-6 py-2">
              <p className="">Color </p>
              <span className="span1">{props.color}</span>
            </div>
          </div>
        )}
      </div>

      {/* Panel 2 */}
      <div className="border border-trans">
        <button
          onClick={() => togglePanel(2)}
          className="w-full flex justify-between items-center px-4 py-3 font-bold bg-ngray transition"
        >
          Description
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 2 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 2 && (
          <div className="divide-y ">
            <p className="px-6 py-6">Crafted in stunning 9-carat yellow gold, this ring bears the timeless message of affection with its engraved declaration: "I Love You".</p>
          </div>
        )}
      </div>

      {/* Panel 3 */}
      <div className="border border-trans">
        <button
          onClick={() => togglePanel(3)}
          className="w-full flex justify-between items-center px-4 py-3 font-bold bg-ngray transition"
        >
          Features
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 3 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 3 && (
          <div className="divide-y divide-gray-300">
            <p className="px-4 py-2"><i className="ri-checkbox-circle-line text-pink"></i> Exquisite Craftsmanship</p>
            <p className="px-4 py-2"><i className="ri-checkbox-circle-line text-pink"> </i>Diverse Selection</p>
            <p className="px-4 py-2"><i className="ri-checkbox-circle-line text-pink"></i> Customization Options</p> 
            <p className="px-4 py-2"><i className="ri-checkbox-circle-line text-pink"></i> Exceptional Value</p>
          </div>
        )}
      </div>
    </div>
  );
}
