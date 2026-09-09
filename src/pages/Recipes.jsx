import { useState } from "react";
import { Helmet } from "react-helmet-async";
import RecipeCard from "../components/RecipeCard";

function Recipes() {

  
  const [category, setCategory] = useState("All");
  const recipes = [
  
    { image :"/palaka.jpg",
      alt: "Filipino",
      category: "Filipino",
      title: "Palakang Adobo",
      time: "30 min",
      description:
        "Tender frog legs cooked in a savory blend of soy sauce, vinegar, garlic, and spices."
    },
    {
      image :"/papaitan.jpg",
      alt: "Filipino",
      category: "Filipino",
      title: "Papaitan",
      time: "1 hours",
      description:
        "A flavorful and savory Filipino soup made with tender meat and a rich, slightly bitter broth."
    },
    {
      image :"/bolinao.jpg",
      alt: "Filipino",
      category: "Filipino",
      title: "Kinilaw na Bolinao",
      time: "25 min",
      description:
        "Fresh Bolinao fish marinated in vinegar, onions, ginger, and spices for a refreshing and flavorful taste."
    },
    {
  image: "/adobo.jpg",
  alt: "Filipino",
  category: "Filipino",
  title: "Adobo",
  time: "1 hour",
  description:
    "Pork marinated and simmered in soy sauce, vinegar, garlic, and spices. It has a savory, tangy, and slightly sweet flavor.",

},
    { image :"/sisig.jpg",
      alt: "Filipino",
      category: "Filipino",
      title: "Chicken Sisig",
      time: "30 min",
      description:
        "Crispy and savory chopped meat mixed with onions, chili, and seasonings for a flavorful Filipino favorite."
    },
    { image :"/pares.jpg",
      alt: "Filipino",
      category: "Filipino",
      title: "Pares ni Diwata",
      time: "30 min",
      description:
        "Tender, flavorful beef simmered in a rich, sweet-savory sauce, served hot and satisfying with every bite. Perfect for anyone craving a comforting Filipino favorite!."
    },
    
    { image :"/spag.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Filipino Spaghetti",
      time: "40 min",
      description:
        "Sweet-style spaghetti with banana ketchup, tomato sauce, ground meat, and sliced hotdogs.."
    },
    {  image :"/creamy.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Filipino Style Carbonara ",
      time: "30 min",
      description:
        "Creamy pasta with bacon or ham, mushrooms, and cheese"
    },
    {  image :"/maca.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Filipino Sweet-Style Macaroni",
      time: "30 min",
      description:
        "Creamy macaroni with cheese, milk, and sometimes ham or hotdogs."
    },
    {  image :"/tuna.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Filipino-Style Tuna Pasta",
      time: "30 min",
      description:
        "Pasta with canned tuna, garlic, cream, and cheese"
    },
     {  image :"/palabok.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Pancit Palabok ",
      time: "30 min",
      description:
        "Rice noodles topped with savory shrimp sauce, pork, shrimp, egg, and crispy toppings."
    },
    {  image :"/pancit.jpg",
      alt: "Pasta",
      category: "Pasta",
      title: "Pancit Canton ",
      time: "20 min",
      description:
        "Filipino-style egg noodles with vegetables, meat or seafood, and savory seasoning."
    },
    {
      image :"/Lech flan.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Leche Flan ",
      time: "30 min",
      description:
        "Creamy and smooth caramel custard with a rich, sweet flavor."
    },
    { image :"/Halo-Halo.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Halo-Halo",
      time: "20 min",
      description:
        "A refreshing mix of shaved ice, milk, sweet fruits, and delicious toppings."
    },
    { image :"/Mango Float.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Mango Float ",
      time: "50 min",
      description:
        "Creamy layers of ripe mangoes, graham crackers, and sweet cream."
    },
    { image :"/Ube Halaya.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Ube Halaya",
      time: "30 min",
      description:
        "Smooth and rich purple yam dessert with a sweet, creamy taste."
    },
    { image :"/Turon.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Turon",
      time: "20 min",
      description:
        "Crispy fried banana rolls coated with caramelized sugar"
    },
    { image :"/Buko Pandan.jpg",
      alt: "Dessert",
      category: "Dessert",
      title: "Buko Pandan",
      time: "30 min",
      description:
        " A creamy and refreshing dessert made with young coconut, pandan jelly, and sweet cream"
    },
  
    {image :"/mango.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: "Mango Smoothie",
      time: "20 min",
      description:
        "A refreshing mango drink perfect for warm afternoons."
    },
    {
      image :"/sunset.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: " Philippine Sunset Cooler",
      time: "20 min",
      description:
        "A refreshing blend of mango, calamansi, and coconut water with a beautiful sunset-like color."
    },
     {
      image :"/ube.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: "Ube Coconut Cloud",
      time: "20 min",
      description:
        "A creamy purple ube drink topped with coconut foam, showcasing the unique Filipino flavor of ube."
    },
    {
      image :"/barako.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: "Ube Barako Latte",
      time: "20 min",
      description:
        "A rich coffee drink combining strong Kapeng Barako with sweet and creamy ube."
    },
    {
      image :"/shake.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: "Turon Shake",
      time: "20 min",
      description:
        "A sweet banana-caramel milkshake inspired by the popular Filipino snack, turon."
    },
    {
      image :"/gulaman.jpg",
      alt: "Drinks",
      category: "Drinks",
      title: "Sagot Gulaman",
      time: "20 min",
      description:
        "resh Philippine mango blended with ice and milk; sweet and refreshing."
    },
{ image :"/letson.jpg",
      alt: "Main",
      category: "Main",
      title: "Lechon",
      time: "3 hours",
      description:
        "Crispy, golden-brown roasted pork with juicy, tender meat."
    },
  

{
  image: "/Sin.jpg",
  alt: "Main",
  category: "Main",
  title: "Sinigang",
  time: "1 hour",
  description:
    "A comforting Filipino soup made with meat or seafood and vegetables in a sour tamarind-based broth."
},
{
  image: "/kare.jpg",
  alt: "Main",
  category: "Main",
  tItle: "Kare-Kare",
  time: "3 hours",
  description:
    "A creamy Filipino stew made with meat, vegetables, and rich peanut sauce."
},


{
  image: "/lupak.jpg",
  alt: "Main",
  Category: "Main",
  title: "Nilupak na Saging",
  time: "20 min",
  description:
    "A sweet Filipino snack made from mashed ripe bananas, often mixed with sugar and coconut."
},
{
  image: "/ubod.jpg",
  alt: "Main",
 category: "Main",
  title: "Ubod ng Saging with Manok",
  time: "45 min",
  description:
    "A Filipino dish made from banana pith (ubod ng saging) cooked with chicken in a flavorful savory sauce."
},
{
  image: "/bibingka.jpg",
  alt: "Main",
  category: "Main",
  title: "Bibingka",
  time: "40 min",
  description:
    "A soft, slightly sweet rice cake traditionally cooked in banana leaves and often topped with butter, sugar, cheese, or salted egg."
},

{
  image: "/calamansi.jpg",
  alt: "Main",
  category: "Main",
  title: "Calamansi Juice",
  time: "10 min",
  description:
    "A refreshing citrus drink made from calamansi, water, and sugar. It has a bright, sweet-and-sour flavor."
},
{
  image: "/monggo.jpg",
  alt: "Main",
  category: "Main",
  title: "Monggo",
  time: "30 min",
  description:
    "A savory Filipino dish made with mung beans, pork or shrimp, and leafy vegetables."
},
{
  image: "/buko.jpg",
  alt: "Main",
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
  <>
    <Helmet>
      <title>Easy Filipino Recipes | Taste with Lauds</title>

      <meta
        name="description"
        content="Explore easy Filipino recipes, pasta dishes, desserts, main dishes, and refreshing drinks from Taste with Lauds."
      />
    </Helmet>

    <div className="page">

      <section className="page-header">
        <p className="section-label">FROM THE KITCHEN</p>

        <h1>Our Recipes</h1>

        <p>
          Explore easy Filipino recipes, pasta dishes, desserts,
          main dishes, and refreshing drinks from Taste with Lauds.
        </p>
      </section>

      <section className="recipe-page-section">

        <div className="category-buttons">
  {categories.map((item) => (
    <button
      key={item}
      className={category === item ? "category-active" : ""}
      onClick={() => setCategory(item)}
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
  </>
);

}

export default Recipes;