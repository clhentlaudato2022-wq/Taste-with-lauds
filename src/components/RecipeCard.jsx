import { Link } from "react-router-dom";

function RecipeCard({
  image,
  category,
  title,
  time,
  description,
  showViewRecipe = true
}) {
  const slugify = (text) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleClick = () => {
    sessionStorage.setItem(
      "recipeScrollPosition",
      window.scrollY.toString()
    );
  };

  return (
    <article className="recipe-card">

      <div className="recipe-image">
        {image ? (
          <img
            src={image}
            alt={`Filipino ${title} dish`}
          />
        ) : (
          <div className="image-placeholder">
            <span>📷</span>
            <p>Recipe Photo</p>
          </div>
        )}
      </div>

      <div className="recipe-content">

        <span className="recipe-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <div className="recipe-footer">

          <span>⏱️ {time}</span>

          {showViewRecipe && (
            <Link
              to={`/recipes/${slugify(title)}`}
              className="small-link"
              onClick={handleClick}
            >
              View Recipe →
            </Link>
          )}

        </div>

      </div>

    </article>
  );
}

export default RecipeCard;