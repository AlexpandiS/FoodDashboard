import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlinePauseCircle } from "react-icons/ai";

function Total({ total }) {
  return (
    <div>
      <div className="main_right ms-3">
        <div className="cart_total fw-bold d-flex  me-2">
          <span className="ms-3">Payable Amount:</span>
          <span className="me-3 ms-5 total_no">${total.toFixed(2)}</span>
        </div>

        <div className="ms-3 mt-3 ">
          <span>
            <button className=" p-2  gr_or_btn1"><AiOutlinePauseCircle></AiOutlinePauseCircle> Hold Order</button>
          </span>
          <span>
            <button className=" p-2 ms-2  gr_or_btn2"><BsArrowRightCircle></BsArrowRightCircle> Proceed</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Total;
