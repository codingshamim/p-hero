import Engredient from "../Engredient/Engredient";

const Blog = ({ blogs, handleCookDetails }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_id,
  } = blogs;

  return (
    <div className="border-2 rounded-2xl space-y-1 p-5">
      <div>
        <img className="w-full h-48 rounded-2xl" src={recipe_image} alt="" />
      </div>
      <h3>{recipe_name}</h3>
      <p>{short_description}</p>
      <h5>Ingredients: {ingredients.length}</h5>
      {ingredients.map((ingredient, idx) => (
        <Engredient key={idx} ingredient={ingredient}></Engredient>
      ))}
      <div className="flex justify-between">
        <p>{preparing_time}</p>
        <p>{calories}</p>
      </div>
      <button
        onClick={() => handleCookDetails(blogs)}
        className="bg-green-300 p-2 text-sm"
      >
        Want To Cook
      </button>
    </div>
  );
};

export default Blog;
