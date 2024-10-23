const Menu = () => {
  const dishes = [
    { name: "Dish 1", description: "Delicious dish 1", price: "$10" },
    { name: "Dish 2", description: "Tasty dish 2", price: "$15" },
    // Add more dishes here
  ];

  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        {dishes.map((dish, index) => (
          <li key={index}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <span>{dish.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
