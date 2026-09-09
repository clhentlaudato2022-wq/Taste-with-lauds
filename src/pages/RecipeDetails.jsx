import { useParams, Link, useNavigate } from "react-router-dom";
function RecipeDetails() {
  const { recipeName } = useParams();
  const navigate = useNavigate();

const closeRecipe = () => {
  const savedPosition = sessionStorage.getItem("recipeScrollPosition");

  navigate("/recipes", {
    state: {
      scrollPosition: savedPosition ? Number(savedPosition) : 0,
    },
  });
};

  const recipes = {
    adobo: {
      title: "Adobo",
      ingredients: [
        "1 kg Pork",
        "1/2 cup soy sauce",
        "1/2 cup vinegar",
        "4 cloves garlic",
        "1 teaspoon black pepper",
        "2 bay leaves",
        "1 cup water",
      ],
      instructions: [
        "Marinate the Pork in soy sauce, garlic, and black pepper.",
        "Heat a pan and cook the Pork until lightly browned.",
        "Add the remaining marinade, vinegar, bay leaves, and water.",
        "Bring to a boil, then lower the heat.",
        "Simmer for about 20 minutes or until the Pork is tender.",
        "Serve hot with steamed rice.",
      ],
    },

    "palakang-adobo": {
      title: "Palakang Adobo",
      ingredients: [
        "Frog ",
        "Soy sauce",
        "Vinegar",
        "Garlic",
        "Black pepper",
        "Bay leaves",
      ],
      instructions: [
        "Marinate the frog legs with soy sauce, garlic, and pepper.",
        "Heat a pan and cook until lightly browned.",
        "Add vinegar and bay leaves.",
        "Simmer until tender.",
        "Serve hot with rice.",
      ],
    },

    "pancit-canton": {
      title: "Pancit Canton",
      ingredients: [
        "Pancit canton noodles",
        "Carrots",
        "Cabbage",
        "Chicken or pork",
        "Soy sauce",
        "Garlic",
      ],
      instructions: [
        "Cook the meat until tender.",
        "Add garlic and vegetables.",
        "Add the noodles and seasonings.",
        "Mix everything together.",
        "Cook until the noodles are tender.",
        "Serve hot.",
      ],
    },

    "mango-float": {
      title: "Mango Float",
      ingredients: [
        "2 ripe mangoes",
        "2 packs graham crackers",
        "2 cups all-purpose cream",
        "1 can condensed milk",
      ],
      instructions: [
        "Mix all-purpose cream and condensed milk.",
        "Arrange a layer of graham crackers in a container.",
        "Add a layer of cream mixture.",
        "Add sliced mangoes.",
        "Repeat the layers.",
        "Chill for at least 4 hours before serving.",
      ],
    },
    "papaitan": {
  title: "Papaitan",
  ingredients: [
    "1 kg beef or goat innards",
    "1/2 cup bile",
    "1 onion, chopped",
    "5 cloves garlic, minced",
    "2 tablespoons ginger, minced",
    "2 tablespoons fish sauce",
    "1 teaspoon black pepper",
    "6 cups water",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Clean and boil the innards until tender.",
    "Cut the cooked innards into small pieces.",
    "Sauté garlic, onion, and ginger in oil.",
    "Add the innards and cook for a few minutes.",
    "Add water, fish sauce, and black pepper.",
    "Add the bile gradually and adjust according to taste.",
    "Simmer for 15–20 minutes and serve hot.",
  ],
},

"kinilaw-na-bolinao": {
  title: "Kinilaw na Bolinao",
  ingredients: [
    "500 g fresh bolinao fish, cleaned and sliced",
    "1/2 cup vinegar",
    "1 onion, sliced",
    "1 thumb-sized ginger, julienned",
    "2 green chilies, sliced",
    "1 teaspoon salt",
    "1/2 teaspoon black pepper",
    "1 tablespoon calamansi juice",
  ],
  instructions: [
    "Clean and slice the fresh bolinao into bite-sized pieces.",
    "Place the fish in a bowl and add vinegar.",
    "Add onion, ginger, and green chilies.",
    "Season with salt, pepper, and calamansi juice.",
    "Mix gently and let it marinate for 10–15 minutes.",
    "Serve chilled or immediately.",
  ],
},

"chicken-sisig": {
  title: "Chicken Sisig",
  ingredients: [
    "1 kg chicken",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "3 tablespoons soy sauce",
    "2 tablespoons calamansi juice",
    "2 green chilies, sliced",
    "1/2 teaspoon black pepper",
    "2 tablespoons mayonnaise",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Boil or grill the chicken until fully cooked.",
    "Chop the chicken into small pieces.",
    "Sauté garlic and onion in oil.",
    "Add the chopped chicken and cook until lightly crispy.",
    "Add soy sauce, calamansi juice, black pepper, and chilies.",
    "Mix in mayonnaise and cook for another 2 minutes.",
    "Serve hot.",
  ],
},

"pares-ni-diwata": {
  title: "Pares ni Diwata",
  ingredients: [
    "1 kg beef, cut into cubes",
    "1 onion, chopped",
    "5 cloves garlic, minced",
    "1/2 cup soy sauce",
    "2 tablespoons brown sugar",
    "1 teaspoon black pepper",
    "3 cups beef broth",
    "2 tablespoons cooking oil",
    "1 star anise",
  ],
  instructions: [
    "Sauté garlic and onion in oil.",
    "Add the beef and brown on all sides.",
    "Add soy sauce, brown sugar, pepper, and star anise.",
    "Pour in the beef broth and bring to a boil.",
    "Lower the heat and simmer until the beef is tender.",
    "Adjust the seasoning according to taste.",
    "Serve with steamed rice.",
  ],
},

"filipino-spaghetti": {
  title: "Filipino Spaghetti",
  ingredients: [
    "500 g spaghetti noodles",
    "500 g ground pork or beef",
    "1 cup Filipino-style tomato sauce",
    "1/2 cup banana ketchup",
    "1/4 cup sugar",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1 cup sliced hotdogs",
    "1 cup grated cheese",
  ],
  instructions: [
    "Cook the spaghetti noodles according to the package instructions.",
    "Sauté garlic and onion, then add the ground meat.",
    "Cook until the meat is browned.",
    "Add tomato sauce, banana ketchup, and sugar.",
    "Add the sliced hotdogs and simmer for 10–15 minutes.",
    "Pour the sauce over the cooked spaghetti.",
    "Top with grated cheese and serve.",
  ],
},

"filipino-style-carbonara": {
  title: "Filipino Style Carbonara ",
  ingredients: [
    "500 g spaghetti noodles",
    "250 g bacon, chopped",
    "1 cup all-purpose cream",
    "1 cup evaporated milk",
    "1 cup grated cheese",
    "1 onion, chopped",
    "3 cloves garlic, minced",
    "1/2 teaspoon black pepper",
  ],
  instructions: [
    "Cook the spaghetti noodles until tender.",
    "Fry the bacon until crispy and set aside.",
    "Sauté garlic and onion using the bacon oil.",
    "Add all-purpose cream and evaporated milk.",
    "Add cheese and black pepper and stir until creamy.",
    "Add the cooked spaghetti and mix well.",
    "Top with crispy bacon and serve hot.",
  ],
},

"filipino-sweet-style-macaroni": {
  title: "Filipino Sweet-Style Macaroni",
  ingredients: [
    "500 g elbow macaroni",
    "1 can condensed milk",
    "1 cup mayonnaise",
    "1 cup all-purpose cream",
    "1 cup grated cheese",
    "1 cup fruit cocktail, drained",
    "1/2 cup raisins",
    "1/2 cup diced ham",
  ],
  instructions: [
    "Cook the macaroni according to the package instructions.",
    "Drain and let it cool.",
    "Combine condensed milk, mayonnaise, and all-purpose cream.",
    "Add macaroni, cheese, fruit cocktail, raisins, and ham.",
    "Mix everything until well combined.",
    "Chill in the refrigerator for at least 1 hour.",
    "Serve cold.",
  ],
},

"filipino-style-tuna-pasta": {
  title: "Filipino-Style Tuna Pasta",
  ingredients: [
    "500 g pasta",
    "2 cans tuna, drained",
    "1 cup all-purpose cream",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "1/2 cup grated cheese",
    "1/2 teaspoon black pepper",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Cook the pasta according to the package instructions.",
    "Sauté garlic and onion in oil.",
    "Add the tuna and cook for 2–3 minutes.",
    "Add the all-purpose cream and black pepper.",
    "Stir in the grated cheese.",
    "Add the cooked pasta and mix well.",
    "Serve hot.",
  ],
},

"pancit-palabok": {
  title: "Pancit Palabok ",
  ingredients: [
    "500 g palabok noodles",
    "250 g shrimp",
    "200 g ground pork",
    "2 tablespoons annatto powder",
    "4 cloves garlic, minced",
    "1 onion, chopped",
    "4 cups water or broth",
    "3 tablespoons fish sauce",
    "2 tablespoons cornstarch",
    "2 boiled eggs, sliced",
    "1/2 cup crushed chicharon",
    "2 tablespoons calamansi juice",
  ],
  instructions: [
    "Cook the palabok noodles according to the package instructions.",
    "Sauté garlic, onion, and ground pork.",
    "Add shrimp and cook until done.",
    "Add broth, annatto powder, and fish sauce.",
    "Mix cornstarch with water and add to the sauce.",
    "Simmer until the sauce thickens.",
    "Pour the sauce over the noodles.",
    "Top with shrimp, boiled eggs, chicharon, and calamansi.",
  ],
},

"leche-flan": {
  title: "Leche Flan ",
  ingredients: [
    "10 egg yolks",
    "1 can condensed milk",
    "1 can evaporated milk",
    "1 teaspoon vanilla extract",
    "1 cup sugar",
  ],
  instructions: [
    "Melt sugar in a pan until it becomes golden caramel.",
    "Pour the caramel into a leche flan mold.",
    "Mix egg yolks, condensed milk, evaporated milk, and vanilla.",
    "Pour the mixture into the caramel-lined mold.",
    "Cover and steam for about 30–40 minutes.",
    "Let it cool completely.",
    "Refrigerate, then turn the flan onto a serving plate.",
  ],
},

"halo-halo": {
  title: "Halo-Halo",
  ingredients: [
    "1 cup shaved ice",
    "2 tablespoons sweetened beans",
    "2 tablespoons nata de coco",
    "2 tablespoons kaong",
    "2 tablespoons sweetened banana",
    "2 tablespoons jackfruit",
    "1/2 cup evaporated milk",
    "1 scoop ube ice cream",
    "1 tablespoon leche flan",
  ],
  instructions: [
    "Place the sweetened fruits and beans in a tall glass.",
    "Add a generous amount of shaved ice.",
    "Pour evaporated milk over the ice.",
    "Top with ube ice cream and leche flan.",
    "Add additional toppings if desired.",
    "Mix everything together before eating.",
  ],
},


"ube-halaya": {
  title: "Ube Halaya",
  ingredients: [
    "1 kg purple yam, boiled and mashed",
    "1 can condensed milk",
    "1 can evaporated milk",
    "1/2 cup sugar",
    "1/2 cup butter",
    "1 teaspoon ube flavoring",
  ],
  instructions: [
    "Mash the cooked purple yam until smooth.",
    "Melt butter in a large pan.",
    "Add mashed ube, condensed milk, and evaporated milk.",
    "Add sugar and ube flavoring.",
    "Cook over low heat while stirring continuously.",
    "Continue cooking until thick and smooth.",
    "Transfer to a container and let it cool.",
  ],
},

"turon": {
  title: "Turon",
  ingredients: [
    "6 ripe bananas, sliced lengthwise",
    "12 spring roll wrappers",
    "1 cup brown sugar",
    "1 cup jackfruit, sliced",
    "2 cups cooking oil",
  ],
  instructions: [
    "Place banana and jackfruit on a spring roll wrapper.",
    "Sprinkle brown sugar over the banana.",
    "Roll tightly and seal the wrapper with water.",
    "Heat the cooking oil in a pan.",
    "Fry the turon until golden brown and crispy.",
    "Drain on paper towels.",
    "Serve warm.",
  ],
},

"buko-pandan": {
  title: "Buko Pandan",
  ingredients: [
    "2 cups young coconut strips",
    "1 cup pandan jelly, cubed",
    "1 cup nata de coco",
    "1 cup all-purpose cream",
    "1/2 cup condensed milk",
    "1/2 cup evaporated milk",
    "1 teaspoon pandan flavoring",
  ],
  instructions: [
    "Combine young coconut, pandan jelly, and nata de coco.",
    "Add all-purpose cream, condensed milk, and evaporated milk.",
    "Add pandan flavoring and mix well.",
    "Chill for at least 2 hours.",
    "Serve cold.",
  ],
},

"mango-smoothie": {
  title: "Mango Smoothie",
  ingredients: [
    "2 ripe mangoes",
    "1 cup fresh milk",
    "1/2 cup ice",
    "2 tablespoons sugar",
    "1/2 cup yogurt",
  ],
  instructions: [
    "Peel and cut the mangoes into pieces.",
    "Place mangoes, milk, yogurt, sugar, and ice in a blender.",
    "Blend until smooth and creamy.",
    "Add more milk if needed.",
    "Pour into a glass and serve cold.",
  ],
},

"philippine-sunset-cooler": {
  title: " Philippine Sunset Cooler",
  ingredients: [
    "1 cup orange juice",
    "1/2 cup pineapple juice",
    "1/4 cup grenadine syrup",
    "1/2 cup ice",
    "Orange slices for garnish",
  ],
  instructions: [
    "Fill a tall glass with ice.",
    "Pour in the orange juice and pineapple juice.",
    "Slowly pour grenadine syrup down the side of the glass.",
    "Do not stir so the colors create a sunset effect.",
    "Garnish with an orange slice.",
    "Serve immediately.",
  ],
},

"ube-coconut-cloud": {
  title: "Ube Coconut Cloud",
  ingredients: [
    "2 tablespoons ube halaya",
    "1 cup coconut milk",
    "1/2 cup fresh milk",
    "1 tablespoon condensed milk",
    "1/2 cup ice",
    "1/4 cup whipped cream",
  ],
  instructions: [
    "Blend ube halaya, coconut milk, fresh milk, condensed milk, and ice.",
    "Blend until smooth and creamy.",
    "Pour into a tall glass.",
    "Top with whipped cream.",
    "Add a small amount of ube halaya on top.",
    "Serve cold.",
  ],
},

"ube-barako-latte": {
  title: "Ube Barako Latte",
  ingredients: [
    "2 tablespoons ube halaya",
    "1 shot espresso or strong barako coffee",
    "1 cup fresh milk",
    "1 tablespoon condensed milk",
    "1/2 cup ice",
  ],
  instructions: [
    "Mix ube halaya and condensed milk until smooth.",
    "Add ice to a glass.",
    "Pour in the fresh milk.",
    "Add the ube mixture.",
    "Slowly pour the barako coffee over the milk.",
    "Stir well before drinking.",
  ],
},

"turon-shake": {
  title: "Turon Shake",
  ingredients: [
    "2 pieces turon",
    "1 cup fresh milk",
    "1/2 cup vanilla ice cream",
    "1 tablespoon brown sugar",
    "1/2 cup ice",
  ],
  instructions: [
    "Cut the turon into small pieces.",
    "Place turon, milk, ice cream, brown sugar, and ice in a blender.",
    "Blend until smooth.",
    "Pour into a glass.",
    "Top with a small piece of turon if desired.",
    "Serve cold.",
  ],
},

"sagot-gulaman": {
  title: "Sagot Gulaman",
  ingredients: [
    "1 cup cooked tapioca pearls",
    "1 cup gulaman, cubed",
    "4 cups water",
    "1 cup brown sugar",
    "1 teaspoon vanilla extract",
    "1/2 cup evaporated milk, optional",
    "Ice cubes",
  ],
  instructions: [
    "Boil water and brown sugar until the sugar dissolves.",
    "Add vanilla extract and let the syrup cool.",
    "Place cooked sago and gulaman in a glass.",
    "Add ice cubes.",
    "Pour in the brown sugar syrup.",
    "Add evaporated milk if desired.",
    "Stir well and serve cold.",
  ],
},

"lechon": {
  title: "Lechon",
  ingredients: [
    "1 whole dressed pig",
    "2 stalks lemongrass",
    "1 cup garlic",
    "2 cups green onions",
    "1/2 cup salt",
    "2 tablespoons black pepper",
    "1/2 cup soy sauce",
  ],
  instructions: [
    "Clean the pig thoroughly and pat it dry.",
    "Season the inside with salt, pepper, and soy sauce.",
    "Stuff the belly with lemongrass, garlic, and green onions.",
    "Secure the belly opening.",
    "Roast slowly over charcoal while turning regularly.",
    "Continue roasting until the skin is golden and crispy and the meat is fully cooked.",
    "Rest before chopping and serving.",
  ],
},

"sinigang": {
  title: "Sinigang",
  ingredients: [
    "1 kg pork",
    "1 packet tamarind soup mix",
    "1 onion, quartered",
    "2 tomatoes, quartered",
    "1 radish, sliced",
    "1 eggplant, sliced",
    "1 cup string beans",
    "2 cups water spinach",
    "6 cups water",
    "2 tablespoons fish sauce",
  ],
  instructions: [
    "Boil the pork in water until tender.",
    "Add onion and tomatoes.",
    "Add radish and eggplant and cook until tender.",
    "Add string beans and water spinach.",
    "Add tamarind soup mix and fish sauce.",
    "Simmer for a few more minutes.",
    "Serve hot with steamed rice.",
  ],
},

"kare-kare": {
  title: "Kare-Kare",
  ingredients: [
    "1 kg beef or oxtail",
    "1/2 cup peanut butter",
    "1/4 cup ground peanuts",
    "1/4 cup annatto water",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "1 eggplant, sliced",
    "1 cup string beans",
    "2 cups pechay",
    "6 cups water",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Boil the beef or oxtail until tender.",
    "Sauté garlic and onion in oil.",
    "Add the cooked meat and annatto water.",
    "Add peanut butter and ground peanuts.",
    "Add some meat broth and simmer until the sauce thickens.",
    "Add eggplant, string beans, and pechay.",
    "Cook until the vegetables are tender.",
    "Serve with bagoong on the side.",
  ],
},

"nilupak-na-saging": {
  title: "Nilupak na Saging",
  ingredients: [
    "6 ripe saba bananas, boiled",
    "1/2 cup condensed milk",
    "1/4 cup butter",
    "1/2 cup grated coconut",
    "1/4 cup sugar",
  ],
  instructions: [
    "Boil the saba bananas until soft.",
    "Peel and mash the bananas while warm.",
    "Add butter, condensed milk, and sugar.",
    "Mix until smooth and well combined.",
    "Add grated coconut and mix again.",
    "Shape into small portions or place on a serving plate.",
    "Serve warm or chilled.",
  ],
},

"Ubod ng Saging with Manok": {
  title: "Ubod ng Saging with Manok",
  ingredients: [
    "500 g chicken breast, sliced",
    "2 cups banana pith (ubod), sliced",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "1/2 cup coconut milk",
    "1 tablespoon fish sauce",
    "1/2 teaspoon black pepper",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Heat oil and sauté garlic and onion.",
    "Add the chicken and cook until lightly browned.",
    "Add the sliced ubod and stir-fry for a few minutes.",
    "Season with fish sauce and black pepper.",
    "Simmer until the chicken and ubod are tender.",
    "Serve hot with rice.",
  ],
},

"bibingka": {
  title: "Bibingka",
  ingredients: [
    "2 cups rice flour",
    "1/2 cup all-purpose flour",
    "1 cup coconut milk",
    "1/2 cup sugar",
    "2 eggs",
    "1 teaspoon baking powder",
    "1/2 cup grated coconut",
    "1/2 cup grated cheese",
    "Banana leaves",
  ],
  instructions: [
    "Preheat the oven to 180°C.",
    "Mix rice flour, all-purpose flour, sugar, and baking powder.",
    "Add coconut milk and eggs and mix until smooth.",
    "Line a baking pan with banana leaves.",
    "Pour the batter into the pan.",
    "Top with grated cheese and coconut.",
    "Bake for about 20–25 minutes or until cooked.",
    "Serve warm.",
  ],
},

"calamansi-juice": {
  title: "Calamansi Juice",
  ingredients: [
    "10 calamansi fruits",
    "4 cups water",
    "1/2 cup sugar",
    "1 cup ice",
  ],
  instructions: [
    "Cut the calamansi in half and squeeze out the juice.",
    "Strain the juice to remove seeds.",
    "Mix the calamansi juice with water.",
    "Add sugar and stir until dissolved.",
    "Add ice.",
    "Serve cold.",
  ],
},

"monggo": {
  title: "Monggo",
  ingredients: [
    "1 cup mung beans",
    "250 g pork, sliced",
    "1 onion, chopped",
    "4 cloves garlic, minced",
    "2 tomatoes, chopped",
    "5 cups water",
    "1 cup malunggay leaves",
    "2 tablespoons fish sauce",
    "2 tablespoons cooking oil",
  ],
  instructions: [
    "Boil the mung beans in water until soft.",
    "Sauté garlic, onion, and tomatoes in oil.",
    "Add the pork and cook until lightly browned.",
    "Add the cooked mung beans and broth.",
    "Season with fish sauce.",
    "Simmer for 10–15 minutes.",
    "Add malunggay leaves and cook for another 2 minutes.",
    "Serve hot with rice.",
  ],
},

"buko-juice": {
  title: "Buko Juice",
  ingredients: [
    "2 young coconuts",
    "2 cups coconut water",
    "1 cup young coconut meat",
    "2 tablespoons sugar, optional",
    "1 cup ice",
  ],
  instructions: [
    "Open the young coconuts and collect the coconut water.",
    "Scoop out the young coconut meat and slice it into strips.",
    "Combine the coconut water and coconut meat.",
    "Add sugar if desired.",
    "Add ice and mix well.",
    "Serve cold.",
  ],
},

    
  };

    const recipe = recipes[recipeName];

  if (!recipe) {
    return (
      <div className="recipe-modal-overlay">
        <div className="recipe-modal">

          <button onClick={closeRecipe} className="recipe-close">
         ×
          </button>

          <div className="recipe-modal-content">
            <h1>Recipe Not Found</h1>

            <Link to="/recipes" className="back-button">
              ← Back to Recipes
            </Link>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="recipe-modal-overlay">

      <div className="recipe-modal">

        <button
  onClick={closeRecipe}
  className="recipe-close"
>
  ×
</button>

        <div className="recipe-modal-content">

          <h1>{recipe.title}</h1>

          <div className="recipe-section">
            <h2>Ingredients</h2>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h2>Instructions</h2>

            <ol>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>
                  {instruction}
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>

    </div>
  );
}

export default RecipeDetails;