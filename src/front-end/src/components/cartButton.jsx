import React from "react";

const CartButton = (props) => {
  const { onClick } = props;

  return (
    <button
      className="h-[40px] w-[40px] pl-[7px] flex items-center bg-[#F4F2EC] rounded-full hover:bg-[#E5E5E5] transition-transform duration-500 ease-in-out hover:scale-[1.02]"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M24.9726 5.2541C24.6564 5.12504 24.3214 5.06935 23.9868 5.09016H11.1714C10.6785 5.09016 10.0447 5.0082 9.55182 5.17213C9.24944 5.25225 8.97973 5.45047 8.78757 5.73381C8.59541 6.01715 8.49237 6.36853 8.4956 6.72951C8.4956 7.16429 8.64397 7.58126 8.90808 7.8887C9.17218 8.19614 9.53039 8.36885 9.90389 8.36885H22.6489L21.5223 15.2541C21.451 15.6268 21.2726 15.9599 21.0165 16.1984C20.7604 16.4369 20.442 16.5665 20.114 16.5656H9.55182C9.22672 16.5541 8.91362 16.42 8.65964 16.1834C8.40566 15.9469 8.22454 15.6208 8.14353 15.2541L5.89026 3.12295C5.75375 2.38928 5.40816 1.73089 4.90962 1.25472C4.41108 0.778545 3.78888 0.512572 3.14409 0.5H2.15829C1.78479 0.5 1.42658 0.672716 1.16248 0.980153C0.898373 1.28759 0.75 1.70456 0.75 2.13934C0.75 2.57413 0.898373 2.9911 1.16248 3.29854C1.42658 3.60597 1.78479 3.77869 2.15829 3.77869H3.14409L5.39736 15.9098C5.81985 18.2049 7.5098 19.7623 9.55182 19.7623H20.114C21.804 19.7623 23.5643 18.4508 24.0572 16.5656C24.4093 15.2541 24.6205 13.7787 24.8318 12.4672C25.043 11.0738 25.3247 9.68033 25.5359 8.36885C25.6165 8.10494 25.6639 7.82887 25.6768 7.54918C25.735 7.28153 25.7587 7.00528 25.7472 6.72951C25.7472 6.07377 25.4655 5.41803 24.9726 5.2541ZM6.38316 23.041C6.38316 23.6932 6.60572 24.3186 7.00188 24.7798C7.39804 25.2409 7.93535 25.5 8.4956 25.5C9.05585 25.5 9.59316 25.2409 9.98932 24.7798C10.3855 24.3186 10.608 23.6932 10.608 23.041C10.608 22.3888 10.3855 21.7634 9.98932 21.3022C9.59316 20.841 9.05585 20.582 8.4956 20.582C7.93535 20.582 7.39804 20.841 7.00188 21.3022C6.60572 21.7634 6.38316 22.3888 6.38316 23.041ZM19.0578 23.041C19.0578 23.5273 19.1817 24.0028 19.4138 24.4071C19.6459 24.8115 19.9758 25.1267 20.3618 25.3128C20.7478 25.4989 21.1726 25.5476 21.5823 25.4527C21.9921 25.3579 22.3685 25.1237 22.6639 24.7798C22.9594 24.4359 23.1606 23.9977 23.2421 23.5207C23.3236 23.0437 23.2817 22.5493 23.1219 22.1C22.962 21.6506 22.6912 21.2666 22.3438 20.9964C21.9964 20.7262 21.588 20.582 21.1702 20.582C20.61 20.582 20.0727 20.841 19.6765 21.3022C19.2803 21.7634 19.0578 22.3888 19.0578 23.041Z"
          fill="#0D3745"
        />
      </svg>
    </button>
  );
};

export default CartButton;