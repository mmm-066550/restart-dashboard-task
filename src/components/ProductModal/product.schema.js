import * as Yup from "yup";

const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Description is required"),
  category: Yup.string().required("Category is required"),
  price: Yup.number().required("Price is required"),
  image: Yup.string()
    .url("Enter a valid URL")
    .required("Image URL is required"),
});

export default ProductSchema;
