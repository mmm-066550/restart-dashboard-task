"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../lib/features/products";
import Image from "next/image";
import { MdEdit, MdDelete } from "react-icons/md";
import { deleteProduct } from "../../../lib/features/products";
import ProductModal from "@/components/ProductModal";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(
        "https://62fb62afe4bcaf5351837ac1.mockapi.io/product"
      );
      const data = await res.json();
      dispatch(setProducts(data));
    }
    fetchProducts();
  }, [dispatch]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const openAddModal = () => {
    setEditProductData(null);
    setModalOpen(true);
  };

  const openEditModal = (product) => {
    setEditProductData(product);
    setModalOpen(true);
  };

  return (
    <>
      <main className="p-8">
        <div className="bg-white flex items-center justify-between mb-15 p-6 rounded-lg shadow">
          <h1 className="text-2xl font-light">Products</h1>
          <button
            onClick={openAddModal}
            className="bg-blue-500 text-white px-6 py-3 rounded"
          >
            Add Product
          </button>
        </div>

        {products.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products
              ?.filter(
                (product) =>
                  !product?.image.includes("https://loremflickr.com") &&
                  !product?.image.includes("https://letsenhance.io")
              )
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-[680px]"
                >
                  <div className="relative w-full h-[500px] bg-gray-100">
                    <Image
                      fill
                      srcSet={`${product?.image} 2x`}
                      src={product?.image}
                      alt={product?.name}
                      className="object-cover p-6"
                    />
                  </div>
                  <div className="flex flex-col flex-grow p-5">
                    <h2 className="font-bold text-2xl mb-2 line-clamp-1 text-gray-800">
                      {product?.name}
                    </h2>
                    <span className="text-sm my-2 text-blue-600 font-medium capitalize">
                      {product?.category}
                    </span>
                    <p className="text-gray-600 text-sm mb-8 mt-6 line-clamp-3">
                      {product?.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-green-600">
                        ${product?.price}
                      </span>
                    </div>

                    <div className="mt-auto flex justify-end gap-3">
                      <button
                        className="p-2 rounded-full cursor-pointer bg-yellow-100 hover:bg-yellow-200 transition"
                        title="Edit"
                        onClick={() => openEditModal(product)}
                      >
                        <MdEdit className="text-yellow-600 text-lg" />
                      </button>
                      <button
                        className="p-2 cursor-pointer rounded-full bg-red-100 hover:bg-red-200 transition"
                        title="Delete"
                        onClick={() => dispatch(deleteProduct(product.id))}
                      >
                        <MdDelete className="text-red-600 text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </main>
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialData={editProductData}
      />
    </>
  );
}
