const Navbar = ({ category, handleClick }) => {
  return (
    <nav>
      {category.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => {
            handleClick(index);
            console.log(index);
          }}
        >
          {item.title}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
