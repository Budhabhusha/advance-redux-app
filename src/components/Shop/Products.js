import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "My First Book",
    price: 6,
    description: "My First Book I ever wrote",
  },
  {
    id: "p2",
    title: "My Second Book",
    price: 8,
    description: "My second Book I ever wrote",
  },
  {
    id: "p3",
    title: "My Third Book",
    price: 10,
    description: "My Third Book I ever wrote",
  },
  {
    id: "p4",
    title: "My Fourth Book",
    price: 6,
    description: "My Fourth Book I ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) =>(
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
