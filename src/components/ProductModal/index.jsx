"use client";

import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addProduct, updateProduct } from "../../lib/features/products";
import Modal from "../Modal";
import ProductSchema from "./product.schema";

export default function ProductModal({ isOpen, onClose, initialData }) {
  const dispatch = useDispatch();
  const isEdit = Boolean(initialData);

  return (
    <Modal
      title={isEdit ? "Edit Product" : "Add New Product"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        initialValues={
          initialData || {
            name: "",
            description: "",
            category: "",
            price: "",
            image: "https://picsum.photos/seed/sPhbY37/1025/1536",
          }
        }
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          if (isEdit) {
            dispatch(updateProduct({ ...values, id: initialData.id }));
          } else {
            dispatch(addProduct({ ...values, id: Date.now() }));
          }
          onClose();
        }}
      >
        {({ errors, touched }) => (
          <Form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-light text-gray-500 mb-2">
                  <span className="text-red-500 me-1">*</span>Name
                </label>
                <Field
                  name="name"
                  placeholder="Product name"
                  className="border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
                />
                {errors.name && touched.name && (
                  <div className="text-red-500 text-xs mt-2 text-end">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-light text-gray-500 mb-2">
                  <span className="text-red-500 me-1">*</span>Category
                </label>
                <Field
                  name="category"
                  placeholder="Category"
                  className="border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
                />
                {errors.category && touched.category && (
                  <div className="text-red-500 text-xs mt-2 text-end">
                    {errors.category}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-light text-gray-500 mb-2">
                <span className="text-red-500 me-1">*</span>Description
              </label>
              <Field
                as="textarea"
                rows="3"
                name="description"
                placeholder="Enter description"
                className="border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
              />
              {errors.description && touched.description && (
                <div className="text-red-500 text-xs mt-2 text-end">
                  {errors.description}
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-light text-gray-500 mb-2">
                  <span className="text-red-500 me-1">*</span>Price
                </label>
                <Field
                  type="number"
                  name="price"
                  placeholder="$ 9.99"
                  className="border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
                />
                {errors.price && touched.price && (
                  <div className="text-red-500 text-xs mt-2 text-end">
                    {errors.price}
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-light text-gray-500 mb-2">
                  <span className="text-red-500 me-1">*</span>Image URL
                </label>
                <Field
                  name="image"
                  placeholder="Image URL"
                  className="border-1 border-gray-300 px-5 text-sm py-3 rounded-md text-gray-800 placeholder-gray-500"
                />
                {errors.image && touched.image && (
                  <div className="text-red-500 text-xs mt-2 text-end">
                    {errors.image}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {isEdit ? "Update Product" : "Add Product"}
            </button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}
