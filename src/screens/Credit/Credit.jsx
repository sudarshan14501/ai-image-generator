import React from "react";
import "./style.css";

export const Credit = () => {
  return (
    <div className="credit">
      <div className="div-2">
        <img className="cross" alt="Cross" src="/img/cross-1.svg" />
        <div className="frame-12">
          <div className="text-wrapper-10">Credits</div>
          <div className="frame-13">
            <img className="coin-2" alt="Coin" src="/img/coin-1.svg" />
            <div className="text-wrapper-11">2 credits</div>
          </div>
        </div>
        <div className="frame-14">
          <div className="frame-15">
            <div className="frame-16">
              <div className="text-wrapper-12">Current credit limit per</div>
              <div className="frame-17">
                <img className="coin-2" alt="Coin" src="/img/coin-1.svg" />
                <div className="text-wrapper-13">5</div>
              </div>
              <div className="text-wrapper-12">daily</div>
            </div>
            <p className="text-wrapper-14">To increase your daily limit send your details in below form</p>
          </div>
          <div className="frame-18">
            <div className="frame-19">
              <div className="text-wrapper-15">Organization Name</div>
            </div>
            <div className="frame-19">
              <div className="text-wrapper-15">Website link</div>
            </div>
            <div className="frame-19">
              <div className="text-wrapper-15">No. of Employees</div>
            </div>
            <div className="frame-19">
              <div className="text-wrapper-15">Expected Daily Limits</div>
            </div>
            <div className="frame-20">
              <div className="text-wrapper-16">Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
