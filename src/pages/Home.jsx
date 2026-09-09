import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RecipeCard from "../components/RecipeCard";
import BlogCard from "../components/BlogCard";

function Home() {

  const recipes = [
    {
      image: "/adobo.jpg",
      alt: "Filipino Adobo dish",
      title: "Adobo",
      time: "1 hour",
      description:
        "Pork marinated and simmered in soy sauce, vinegar, garlic, and spices. It has a savory, tangy, and slightly sweet flavor."
    },
    {
      image: "/letson.jpg",
      alt: "Filipino Lechon dish",
      title: "Lechon",
      time: "3 hours",
      description:
        "Crispy, golden-brown roasted pork with juicy, tender meat."
    },
    {
      image: "/Mango Float.jpg",
      alt: "Filipino Mango Float dessert",
      title: "Mango Float",
      time: "50 min",
      description:
        "Creamy layers of ripe mangoes, graham crackers, and sweet cream."
    }
  ];

  const blogs = [
    {
      image: "/5.png",
      alt: "Filipino dishes and food guide",
      title: "5 Filipino Dishes You Need to Try",
      description:
        "The Philippines has a rich and diverse food culture. Filipino cuisine is known for its bold flavors, creative use of local ingredients, and dishes that are often shared with family and friends. Here are five Filipino dishes and desserts that everyone should try"
    },
    {
      image: "/pp.jpg",
      alt: "Cooking tips for beginners",
      title: "Simple Cooking Tips Everyone Should Know",
      description:
        "Cooking is more than simply following a recipe. It requires preparation, patience, proper techniques, and attention to detail. Whether you are a beginner or already have some cooking experience, following good cooking habits can help you prepare food that is safer, tastier, and more enjoyable. Here are some useful cooking tips that can improve your skills in the kitchen"
    },
    {
      image: "/kani.jpg",
      alt: "Filipino dessert ideas",
      title: "Easy Desserts for Your Sweet Cravings",
      description:
        "A simple and delicious Filipino dessert made from mashed ripe bananas, sugar, butter, and grated coconut. It is soft, sweet, and perfect for merienda or dessert."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Filipino Recipes and Food Stories | Taste with Lauds</title>

        <meta
          name="description"
          content="Discover easy Filipino recipes, cooking tips, desserts, and food stories from Taste with Lauds."
        />
      </Helmet>

      <section className="hero">

        <div className="hero-container">

          <div className="hero-text">

            <p className="hero-label">
              WELCOME TO MY FOOD BLOG
            </p>

            <h1>
              GOOD FOOD.
              <br />
              <span>GOOD MOOD.</span>
            </h1>

            <h2>Welcome to Taste with Lauds</h2>

            <p className="hero-description">
             Discover easy Filipino recipes, cooking tips, desserts, and food stories from Taste with Lauds. Find delicious ideas for every craving.
            </p>

            <div className="hero-buttons">

              <Link to="/recipes" className="btn btn-primary">
                Explore Recipes
              </Link>

              <Link to="/blog" className="btn btn-secondary">
                Read Our Blog
              </Link>

            </div>

          </div>

          <div className="hero-image">


            <div className="hero-placeholder">
    <img src="/logo.png" alt="Delicious Filipino food" />
  </div>

          </div>

        </div>

      </section>



      <section className="craving-section">

        <div className="section-heading">

          <p className="section-label">
            FIND YOUR FAVORITE
          </p>

          <h2>What Are You Craving?</h2>

          <p>
            Choose a category and discover something delicious.
          </p>

        </div>

        <div className="craving-grid">

  <Link to="/recipes?category=Filipino" className="craving-card">
    <span>🍚</span>
    <h3>Filipino</h3>
    <p>Classic Filipino favorites</p>
  </Link>

  <Link to="/recipes?category=Pasta" className="craving-card">
    <span>🍝</span>
    <h3>Pasta</h3>
    <p>Creamy and delicious pasta</p>
  </Link>

  <Link to="/recipes?category=Dessert" className="craving-card">
    <span>🍰</span>
    <h3>Desserts</h3>
    <p>Sweet treats and desserts</p>
  </Link>

  <Link to="/recipes?category=Main" className="craving-card">
    <span>🍗</span>
    <h3>Main</h3>
    <p>Hearty main dishes</p>
  </Link>

  <Link to="/recipes?category=Drinks" className="craving-card">
    <span>🥤</span>
    <h3>Drinks</h3>
    <p>Refreshing beverages</p>
  </Link>

</div>
      
      </section>



      <section className="recipes-section">

        <div className="section-heading">

          <p className="section-label">
            FROM THE KITCHEN
          </p>

          <h2>Featured Recipes</h2>

          <p>
            Simple recipes made with love and good ingredients.
          </p>

        </div>

        <div className="recipe-grid">

          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              {...recipe}
              showViewRecipe={false}
            />
          ))}

        </div>

        <div className="center-button">

          <Link to="/recipes" className="btn btn-primary">
            View All Recipes →
          </Link>

        </div>

      </section>



      <section className="about-section">

        <div className="about-container">

          <div className="about-image">


            <div className="about-placeholder">
          <img src="/bring.jpg" alt="Food and family" />
        </div>

          </div>

          <div className="about-content">

            <p className="section-label">
              FROM LAUDS' KITCHEN
            </p>

            <h2>Food brings people together.</h2>

            <p>
              Taste with Lauds is a place for delicious recipes,
              food stories, and inspiration.
            </p>

            <p>
              Whether you're a beginner in the kitchen or someone
              who simply loves good food, you'll find something
              here to enjoy.
            </p>

            <Link to="/about" className="btn btn-primary">
              Discover More →
            </Link>

          </div>

        </div>

      </section>



      <section className="blog-section">

        <div className="section-heading">

          <p className="section-label">
            FOOD STORIES
          </p>

          <h2>Latest From the Blog</h2>

          <p>
            Stories, tips, ideas, and inspiration for food lovers.
          </p>

        </div>

        <div className="blog-grid">

          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
            />
          ))}

        </div>

        <div className="center-button">

          <Link to="/blog" className="btn btn-secondary">
            View All Blogs →
          </Link>

        </div>

      </section>


      <section className="newsletter-section">

        <div className="newsletter-container">

          <div>

            <p className="section-label">
              STAY CONNECTED
            </p>

            <h2>
              STAY IN THE TASTE LOOP ❤️
            </h2>

            <p>
              Get delicious recipes and food stories
              from Taste with Lauds.
            </p>

          </div>

          <form
            className="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >

            <input
              type="email"
              placeholder="Enter your email address"
              required
            />

            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>

          </form>

        </div>

      </section>

    </>
  );
}

export default Home;