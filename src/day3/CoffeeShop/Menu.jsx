const Menu = ({ activeCategory, handleAddToCart }) => {
  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold">{activeCategory.title}</h1>
      {activeCategory.items.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-4">
          <p>
            {item.name}$ {item.price}
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
