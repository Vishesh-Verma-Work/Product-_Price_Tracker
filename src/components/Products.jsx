import React from 'react';

const ProductPage = () => {
  return (
    <div className="flex p-8 bg-white">
      {/* Left Side - Product Image */}
      <div className="w-1/2">
        <img
          src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-mbp14-space-m1-2021_GEO_CH?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1638575280000'
          alt="Product Image"
          className="w-full h-full object-cover shadow-lg rounded"
        />
      </div>
      <br /><br /> <br />

      {/* Right Side - Product Details, Description, Price, and Comparison Table */}
      <div className="w-1/2 p-8 mt-8 ml-auto bg-gray-100 rounded-lg">  {/* Adjusted margin top and right */}
        {/* Product Details */}
        <h1 className="text-3xl font-bold mb-4 text-orange-500">Microsoft Surface Book 3</h1>
        <p className="text-gray-600 mb-4">2-in-1 laptop with detachable display for flexibility. 13.5-inch PixelSense display, Intel Core i7 processor, 16GB RAM, 512GB SSD storage, NVIDIA GeForce GTX 1650 GPU. Adapt to any task with the Microsoft Surface Book 3.</p>
        <p className="text-2xl font-bold mb-4 text-orange-500">1,55,555</p>
<br /><br />
        {/* Comparison Table */}
        <div className="border-t-4 border-black-200 mt-8 pt-8">
          {/* Table Head */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-1/3 text-center border-10 border-black-700 pr-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png"
                alt="Site 1 Logo"
                className="w-24 h-24 object-contain rounded-full bg-grey-500"
              />
            </div>
            <div className="w-1/3 text-center border-r border-black-700 pr-4">
              <img
                src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
                alt="Site 2 Logo"
                className="w-24 h-24 object-contain rounded-full bg-grey-500"
              />
            </div>
            <div className="w-1/3 text-center">
              <img
                src="https://qph.cf2.quoracdn.net/main-qimg-e748b8006c86f5be09002f018a4e37ab"
                alt="Site 3 Logo"
                className="w-24 h-24 object-contain rounded-full bg-grey-500"
              />
            </div>
          </div>
<br />
          {/* Table Body - Sample Prices and Buttons */}
          <div className="flex items-center justify-between">
            <div className="w-1/3 text-center text-orange-500 border-r border-black-700 pr-4">
              <strong>1,55,555</strong> <br />
              <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded">Go to Site 1</button>
            </div>
            <div className="w-1/3 text-center text-orange-500 border-r border-black-700 pr-4">
              <strong>72999.99</strong> <br />
              <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded">Go to Site 2</button>
            </div>
            <div className="w-1/3 text-center text-orange-500">
              <strong>70999.99</strong> <br />
              <button className="bg-orange-500 text-white px-4 py-2 mt-2 rounded">Go to Site 3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;