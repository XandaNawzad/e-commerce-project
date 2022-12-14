import React from 'react';
import { delimiter } from '../utils/delimiter';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="rounded-lg shadow-md hover:shadow-xl bg-white p-4 transition-all"
    >
      <img
        src={product.image}
        alt="product"
        className="h-60 w-full object-contain"
      />
      <h2 className="text-l font-medium mt-6 mb-2">
        {delimiter(product.title, 30)}
      </h2>
      <p className="text-sm text-gray-500 text-justify">
        {delimiter(product.description, 70)}
      </p>

      <div className="flex justify-between mt-8">
        <p className="text-2xl text-indigo-700 font-semibold">
          {product.price} $
        </p>

        <button className=" border border-indigo-600 rounded-xl text-indigo-600 text-xs p-1 ">
          {product.category.toUpperCase()}
        </button>
      </div>
    </Link>
  );
}
