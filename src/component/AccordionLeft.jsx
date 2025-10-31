"use client";

import React, { useState } from "react";

export default function AccordionLeft() {
  const [openPanel, setOpenPanel] = useState(null);

  const togglePanel = (panel) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <div className="w-full max-w-lg mx-auto ">
      {/* Panel 1 */}
      <div className=" my-2">
        <button
          onClick={() => togglePanel(1)}
          className="w-full flex justify-between items-center px-4 py-3 border font-bold transition"><img className="w-[40px]" src="/gift.svg" alt="" />
          Do you have my product in stock?
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 1 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 1 && (
          <div className="divide-y divide-gray-300">
            <div className="px-6 py-6 my-2 border border-trans">
              <p className="">On each individual product page there is a stock level indicator to show what is available. We do not display out of stock items. If you have seen something on our site and can no longer find it, or have ordered the item in the past, it’s always worth a phone call to find out when new stock will be arriving.</p>
            </div>
          </div>
        )}
      </div>

      {/* Panel 2 */}
      <div className="my-2">
        <button
          onClick={() => togglePanel(2)}
          className="w-full flex justify-between items-center px-4 py-3 border font-bold transition">
         Do you deliver the Next Day?
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 2 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 2 && (
          <div className="divide-y ">
            <div className="px-6 py-6 my-2 border border-trans">
              <p className="">We do! – Many of our products qualify for Next Day Delivery. In addition, we use a brilliant courier service who can send you a 1 hour delivery notification on the morning of your delivery as well as a  ‘You’re Next’ message when the driver is one delivery away!
               See the individual product page to identify what delivery service available. For more information about Delivery options click here.</p>
            </div>
          </div>
        )}
      </div>

      {/* Panel 3 */}
      <div className="my-2">
        <button
          onClick={() => togglePanel(3)}
          className="w-full flex justify-between items-center px-4 py-3 border font-bold transition"
        >
          What delivery options do you offer?
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 3 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 3 && (
          <div className="divide-y divide-gray-300">
            <div className="px-6 py-6 my-2 border border-trans">
              <p className="">On many of our tools. we have a few different delivery options to help you get your parcel whenever it’s convenient for you. We offer Next Day on many tools and 2 additional premium delivery services : one is “Next Day Delivery before 10.30am” and the other is “Saturday Delivery.”
              You can make your selection of delivery at checkout. For most of our deliveries we require a signature to ensure they arrive safely. Please ensure someone is available at your work or home to take in the delivery.</p>
            </div>
          </div>
        )}
      </div>
      <div className="my-2">
        <button
          onClick={() => togglePanel(4)}
          className="w-full flex justify-between items-center px-4 py-3 border font-bold transition"
        >
          How do I know when my order has been dispatched?
          <i
            className={`ri-arrow-down-s-line text-xl transition-transform duration-300 ${
              openPanel === 4 ? "rotate-180" : "rotate-0"
            }`}
          ></i>
        </button>
        {openPanel === 4 && (
          <div className="divide-y divide-gray-300">
            <div className="px-6 py-6 my-2 border border-trans">
              <p className="">When your goods have been dispatched you will receive a confirmation via email to the email address provided – it is important to provide us with an email address as this can be the quickest and most efficient way of us contacting you.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
