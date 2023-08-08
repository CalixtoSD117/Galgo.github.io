import React from 'react';

const CardUser = ({ text, img }) => {
  return (
    <div className="md:w-56 md:h-72 lg:w-80 lg:h-60 relative rounded-md shadow-md hover:shadow-xl transition-all ease-in-out m-2">
      <div className="w-full h-3/5">
        <img className="w-full h-full object-cover rounded-t-md" src={img} alt="" />
      </div>
      <div className="p-3 text-sm">
        {text}
      </div>
    </div>
  );
};

export default CardUser;
