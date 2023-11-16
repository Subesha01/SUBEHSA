const Menu = ({ activeCategory, handleAddToCart }) => {
  return (
    <div>
      <h1>{activeCategory.title}</h1>
      {activeCategory.items.map((item, index) => (
        <div key={index}>
          <p>
            {item.name}&emsp;$ {item.price}
            <button
              style={{ backgroundColor: "lightblue" }}
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
