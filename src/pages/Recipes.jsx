import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

function Recipes() {

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollPosition !== undefined) {
      requestAnimationFrame(() => {
        window.scrollTo(
          0,
          location.state.scrollPosition
        );
      });
    }
  }, [location.state]);

  const categoryFromUrl = searchParams.get("category") || "All";

  const [category, setCategory] = useState(categoryFromUrl);

  const recipes = [
  
    { image :"/palaka.jpg",
      category: "Filipino",
      title: "Palakang Adobo",
      time: "30 min",
      description:
        "Tender frog legs cooked in a savory blend of soy sauce, vinegar, garlic, and spices."
    },
    {
      image :"/papaitan.jpg",
      category: "Filipino",
      title: "Papaitan",
      time: "1 hours",
      description:
        "A flavorful and savory Filipino soup made with tender meat and a rich, slightly bitter broth."
    },
    {
      image :"/bolinao.jpg",
      category: "Filipino",
      title: "Kinilaw na Bolinao",
      time: "25 min",
      description:
        "Fresh Bolinao fish marinated in vinegar, onions, ginger, and spices for a refreshing and flavorful taste."
    },
    {
  image: "/adobo.jpg",
  category: "Filipino",
  title: "Adobo",
  time: "1 hour",
  description:
    "Pork marinated and simmered in soy sauce, vinegar, garlic, and spices. It has a savory, tangy, and slightly sweet flavor.",

},
    { image :"/sisig.jpg",
      category: "Filipino",
      title: "Chicken Sisig",
      time: "30 min",
      description:
        "Crispy and savory chopped meat mixed with onions, chili, and seasonings for a flavorful Filipino favorite."
    },
    { image :"/pares.jpg",
      category: "Filipino",
      title: "Pares ni Diwata",
      time: "30 min",
      description:
        "Tender, flavorful beef simmered in a rich, sweet-savory sauce, served hot and satisfying with every bite. Perfect for anyone craving a comforting Filipino favorite!."
    },
    
    { image :"/spag.jpg",
      category: "Pasta",
      title: "Filipino Spaghetti",
      time: "40 min",
      description:
        "Sweet-style spaghetti with banana ketchup, tomato sauce, ground meat, and sliced hotdogs.."
    },
    {  image :"/creamy.jpg",
      category: "Pasta",
      title: "Filipino Style Carbonara ",
      time: "30 min",
      description:
        "Creamy pasta with bacon or ham, mushrooms, and cheese"
    },
    {  image :"/maca.jpg",
      category: "Pasta",
      title: "Filipino Sweet-Style Macaroni",
      time: "30 min",
      description:
        "Creamy macaroni with cheese, milk, and sometimes ham or hotdogs."
    },
    {  image :"/tuna.jpg",
      category: "Pasta",
      title: "Filipino-Style Tuna Pasta",
      time: "30 min",
      description:
        "Pasta with canned tuna, garlic, cream, and cheese"
    },
     {  image :"/palabok.jpg",
      category: "Pasta",
      title: "Pancit Palabok ",
      time: "30 min",
      description:
        "Rice noodles topped with savory shrimp sauce, pork, shrimp, egg, and crispy toppings."
    },
    {  image :"/pancit.jpg",
      category: "Pasta",
      title: "Pancit Canton ",
      time: "20 min",
      description:
        "Filipino-style egg noodles with vegetables, meat or seafood, and savory seasoning."
    },
    {
      image :"/Lech flan.jpg",
      category: "Dessert",
      title: "Leche Flan ",
      time: "30 min",
      description:
        "Creamy and smooth caramel custard with a rich, sweet flavor."
    },
    { image :"/Halo-Halo.jpg",
      category: "Dessert",
      title: "Halo-Halo",
      time: "20 min",
      description:
        "A refreshing mix of shaved ice, milk, sweet fruits, and delicious toppings."
    },
    { image :"/Mango Float.jpg",
      category: "Dessert",
      title: "Mango Float ",
      time: "50 min",
      description:
        "Creamy layers of ripe mangoes, graham crackers, and sweet cream."
    },
    { image :"/Ube Halaya.jpg",
      category: "Dessert",
      title: "Ube Halaya",
      time: "30 min",
      description:
        "Smooth and rich purple yam dessert with a sweet, creamy taste."
    },
    { image :"/Turon.jpg",
      category: "Dessert",
      title: "Turon",
      time: "20 min",
      description:
        "Crispy fried banana rolls coated with caramelized sugar"
    },
    { image :"/Buko Pandan.jpg",
      category: "Dessert",
      title: "Buko Pandan",
      time: "30 min",
      description:
        " A creamy and refreshing dessert made with young coconut, pandan jelly, and sweet cream"
    },
  
    {image :"/mango.jpg",
      category: "Drinks",
      title: "Mango Smoothie",
      time: "20 min",
      description:
        "A refreshing mango drink perfect for warm afternoons."
    },
    {
      image :"/sunset.jpg",
      category: "Drinks",
      title: " Philippine Sunset Cooler",
      time: "20 min",
      description:
        "A refreshing blend of mango, calamansi, and coconut water with a beautiful sunset-like color."
    },
     {
      image :"/ube.jpg",
      category: "Drinks",
      title: "Ube Coconut Cloud",
      time: "20 min",
      description:
        "A creamy purple ube drink topped with coconut foam, showcasing the unique Filipino flavor of ube."
    },
    {
      image :"/barako.jpg",
      category: "Drinks",
      title: "Ube Barako Latte",
      time: "20 min",
      description:
        "A rich coffee drink combining strong Kapeng Barako with sweet and creamy ube."
    },
    {
      image :"/shake.jpg",
      category: "Drinks",
      title: "Turon Shake",
      time: "20 min",
      description:
        "A sweet banana-caramel milkshake inspired by the popular Filipino snack, turon."
    },
    {
      image :"/gulaman.jpg",
      category: "Drinks",
      title: "Sagot Gulaman",
      time: "20 min",
      description:
        "resh Philippine mango blended with ice and milk; sweet and refreshing."
    },
{ image :"/letson.jpg",
      category: "Main",
      title: "Lechon",
      time: "3 hours",
      description:
        "Crispy, golden-brown roasted pork with juicy, tender meat."
    },
  

{
  image: "/Sin.jpg",
  category: "Main",
  title: "Sinigang",
  time: "1 hour",
  description:
    "A comforting Filipino soup made with meat or seafood and vegetables in a sour tamarind-based broth."
},
{
  image: "/kare.jpg",
  category: "Main",
  title: "Kare-Kare",
  time: "3 hours",
  description:
    "A creamy Filipino stew made with meat, vegetables, and rich peanut sauce."
},


{
  image: "/lupak.jpg",
  category: "Main",
  title: "Nilupak na Saging",
  time: "20 min",
  description:
    "A sweet Filipino snack made from mashed ripe bananas, often mixed with sugar and coconut."
},
{
  image: "/ubod.jpg",
  category: "Main",
  title: "Ubod ng Saging with Manok",
  time: "45 min",
  description:
    "A Filipino dish made from banana pith (ubod ng saging) cooked with chicken in a flavorful savory sauce."
},
{
  image: "/bibingka.jpg",
  category: "Main",
  title: "Bibingka",
  time: "40 min",
  description:
    "A soft, slightly sweet rice cake traditionally cooked in banana leaves and often topped with butter, sugar, cheese, or salted egg."
},

{
  image: "/calamansi.jpg",
  category: "Main",
  title: "Calamansi Juice",
  time: "10 min",
  description:
    "A refreshing citrus drink made from calamansi, water, and sugar. It has a bright, sweet-and-sour flavor."
},
{
  image: "/monggo.jpg",
  category: "Main",
  title: "Monggo",
  time: "30 min",
  description:
    "A savory Filipino dish made with mung beans, pork or shrimp, and leafy vegetables."
},
{
  image: "/buko.jpg",
  category: "Main",
  title: "Buko Juice",
  time: "10 min",
  description:
    "Fresh coconut water served chilled, sometimes with tender coconut meat. It is naturally sweet and refreshing."
}
  ];

  const categories = [
    "All",
    "Filipino",
    "Pasta",
    "Dessert",
    "Drinks"
  ];

  const filteredRecipes =
    category === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.category === category);

  return (
    <div className="page">

      <section className="page-header">

        <p className="section-label">FROM THE KITCHEN</p>

        <h1>Our Recipes</h1>

        <p>
         Explore easy Filipino recipes, pasta dishes, desserts, main dishes, and refreshing drinks from Taste with Lauds.
        </p>

      </section>


      <section className="recipe-page-section">

        <div className="category-buttons">

          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category-active" : ""}
              onClick={() => {
               setCategory(item);

             if (item === "All") {
             setSearchParams({});
             } else {
             setSearchParams({ category: item });
             }
              }}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="recipe-grid">

          {filteredRecipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              {...recipe}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Recipes;