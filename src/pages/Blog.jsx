import { useState } from "react";

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    {
      image: "/5.png",
      alt: "Food Guide",
      title: "5 Filipino Dishes You Need to Try",
      description:
        "The Philippines has a rich and diverse food culture. Filipino cuisine is known for its bold flavors, creative use of local ingredients, and dishes that are often shared with family and friends. Here are five Filipino dishes and desserts that everyone should try",
      content: `1. Adobo

Adobo is one of the most popular Filipino dishes. It is usually made with chicken or pork cooked in soy sauce, vinegar, garlic, bay leaves, and peppercorns. The meat becomes tender and absorbs the savory, salty, and slightly sour flavors. Adobo is a common Filipino household meal and is usually served with steamed rice.

2. Sinigang

Sinigang is a comforting Filipino soup known for its distinct sour taste. It can be made with pork, shrimp, fish, or other meat and is cooked with vegetables such as tomatoes, string beans, radish, and leafy greens. Tamarind is commonly used to give the soup its sour flavor. Sinigang is especially enjoyable as a warm and satisfying family meal.

3. Kare-Kare

Kare-Kare is a rich Filipino stew made with a thick peanut-based sauce. It commonly includes beef, oxtail, or other meat along with vegetables such as eggplant and string beans. It is traditionally served with bagoong, which adds a salty and savory flavor that balances the creamy peanut sauce. Kare-Kare is often served during celebrations and special family gatherings.

4. Lechon

Lechon is a famous Filipino dish usually prepared by roasting a whole pig until the skin becomes crispy and golden brown while the meat remains tender and flavorful. It is commonly served during birthdays, fiestas, weddings, and other important celebrations. Lechon is considered a special food because of its delicious taste and its connection to Filipino gatherings and hospitality.

5. Halo-Halo

Halo-Halo is a popular Filipino dessert that is colorful, refreshing, and sweet. It is made by combining shaved ice and evaporated milk with ingredients such as sweetened beans, fruits, jelly, and other toppings. It is often topped with ube ice cream, leche flan, or other sweet treats. Halo-Halo is especially refreshing on hot days.

These five foods show the variety of Filipino cuisine, from savory dishes to refreshing desserts. Trying them is a delicious way to experience Filipino flavors, traditions, and culture.`,
    },

    { image: "/pp.jpg",
      alt: "Cooking Tips",
      title: "Simple Cooking Tips Everyone Should Know",
      description:
        "Cooking is more than simply following a recipe. It requires preparation, patience, proper techniques, and attention to detail. Whether you are a beginner or already have some cooking experience, following good cooking habits can help you prepare food that is safer, tastier, and more enjoyable. Here are some useful cooking tips that can improve your skills in the kitchen",
      content: `1. Read the Recipe Before Cooking

Before starting, read the entire recipe carefully. Check the ingredients, measurements, cooking time, and instructions. This prevents mistakes and helps you prepare everything you need.

2. Use Fresh Ingredients

Fresh and quality ingredients can greatly improve the flavor and texture of a dish. Whenever possible, use fresh vegetables, meat, herbs, and other ingredients. Fresh ingredients can also make meals more nutritious.

3. Keep Your Knife Sharp

A sharp knife makes cutting easier and more precise. Surprisingly, a properly maintained sharp knife can also be safer because it is less likely to slip when cutting. Always handle knives carefully and use a stable cutting board.

4. Avoid Overcooking Food

Overcooking can make food dry, tough, or less flavorful. Pay attention to cooking time and check the food while it cooks. Vegetables, for example, are often better when they retain some texture instead of becoming too soft.

5. Season Gradually

When adding salt, pepper, spices, or other seasonings, start with a small amount. Taste the food as you cook and gradually add more if necessary. This helps prevent over-seasoning because it is much easier to add seasoning than to remove it.

6. Use the Right Cooking Method

Different foods require different cooking methods. Sautéing, boiling, baking, grilling, steaming, and frying can produce different textures and flavors. Choosing the appropriate method can make a major difference in the final dish.

7. Let Meat Rest

After cooking meat, allow it to rest for several minutes before cutting. Resting gives the juices time to redistribute throughout the meat, helping it remain tender and flavorful.

8. Clean as You Cook

Cleaning utensils, cutting boards, and work surfaces while cooking keeps the kitchen organized and reduces unnecessary mess. It also makes cleaning up after the meal much easier.

9. Store Food Properly

Proper food storage helps maintain freshness and reduces the risk of foodborne illness. Keep perishable foods refrigerated and use clean, airtight containers when storing leftovers.

10. Be Patient and Enjoy Cooking

Good cooking takes practice. Do not be afraid of making mistakes because they can help you learn. Be patient, experiment with different ingredients, and enjoy the process. `,

    },
    {  image: "/kani.jpg",
      alt: "Desserts",
      title: "Easy Desserts for Your Sweet Cravings",
      description:
        "A simple and delicious Filipino dessert made from mashed ripe bananas, sugar, butter, and grated coconut. It is soft, sweet, and perfect for merienda or dessert.",
      content: `Nilupak na Saging

      Nilupak na Saging is a traditional Filipino sweet treat that is easy to prepare using simple and affordable ingredients. Ripe bananas are cooked until soft, mashed thoroughly, and mixed with sugar and butter or margarine. Grated coconut can also be added for extra flavor and texture. The mixture is shaped or served on a plate and topped with additional coconut or other toppings. Its naturally sweet banana flavor and soft texture make it a comforting dessert that can be enjoyed by the whole family.`,
    },

    {  image: "/7.png",
      alt: "Filipino Food",
      title: "A Beginner's Guide to Filipino Food",
      description:
        "Discover the delicious and diverse world of Filipino cuisine. Learn about popular dishes, unique ingredients, traditional flavors, and simple meals that are perfect for beginners",
      content: ` Filipino food is known for its rich flavors, comforting dishes, and variety of ingredients. Many Filipino meals combine salty, sweet, sour, and savory flavors, creating a unique taste in every dish. Popular foods such as Adobo, Sinigang, Kare-Kare, Monggo, and Nilupak na Saging and etc...are great examples of Filipino cooking.

For beginners, it is best to start with simple recipes and familiar ingredients. Rice is an important part of many Filipino meals and is commonly paired with meat, vegetables, or soup. Ingredients such as garlic, onions, tomatoes, soy sauce, vinegar, coconut, and bananas are also frequently used.

Filipino cooking is not only about the food—it is also about family, tradition, and sharing. Meals are often enjoyed together, making food an important part of Filipino culture. By trying different Filipino dishes, beginners can experience the flavors and traditions that make Filipino cuisine special.
      `,
    },

    {  image: "/8.png",
      category: "Comfort Food",
      title: "My Favorite Comfort Food Recipes",
      description:
        "Mango Float, Turon, and Halo-Halo are my favorite comfort foods because they are sweet, delicious, and remind me of enjoyable moments with family and friends. Each dessert has its own unique taste and brings a feeling of happiness and comfort.",
      content: `My favorite comfort foods are Mango Float, Turon, and Halo-Halo. I enjoy these Filipino desserts because they are delicious and satisfying, especially when I want something sweet. Mango Float is creamy and refreshing, with layers of ripe mangoes, graham crackers, and sweet cream. Turon is crispy and sweet, made with bananas wrapped in a spring-roll wrapper and fried until golden brown. Halo-Halo is refreshing and colorful, combining shaved ice, milk, fruits, sweet beans, and other toppings.

These desserts are special to me because they are not only enjoyable to eat but can also remind me of family gatherings, celebrations, and relaxing moments. For me, comfort food is more than just something that tastes good—it can bring back happy memories and make an ordinary day feel special.`,
    },

    { image: "/9.png",
      alt: "Food Adventures",
      title: "Discovering New Flavors",
      description:
        "Discover the unique flavors of Filipino cuisine through Papaitan and Kinilaw na Bolinao. These dishes offer bold, traditional tastes that showcase the creativity and diversity of Filipino cooking.",
      content: `Papaitan is a traditional Filipino soup known for its distinct bitter and savory flavor. It is commonly prepared with beef or goat offal, herbs, and spices. Its strong taste makes it a unique dish for those who want to explore traditional Filipino flavors.

Kinilaw na Bolinao is a fresh seafood dish made from raw Bolinao fish cured in vinegar and mixed with ingredients such as onions, ginger, and chili. It has a fresh, sour, and slightly spicy flavor. This dish is a great example of how Filipinos use fresh local seafood to create simple yet flavorful meals.

Both dishes are worth trying for anyone who wants to discover new and authentic Filipino flavors.`,
    },
  ];

  return (
    <div className="page">

      <section className="page-header">
        <p className="section-label">FOOD STORIES</p>

        <h1>Latest From the Blog</h1>

        <p>
          Recipes, cooking tips, food stories, and inspiration.
        </p>
      </section>

      <section className="blog-page-section">

        <div className="full-blog-grid">

          {posts.map((post, index) => (
            <article className="full-blog-card" key={index}>

              <div className="full-blog-image">
                {post.image ? (
                  <img src={post.image} alt={post.title} />
                ) : (
                  <div className="image-placeholder">
                    <span>📷</span>
                    <p>Blog Photo</p>
                  </div>
                )}
              </div>

              <div className="full-blog-content">

                <span className="blog-category">
                  {post.category}
                </span>

                <h2>{post.title}</h2>

                <small>{post.date}</small>

                <p>{post.description}</p>

                <button
                  className="read-more-button"
                  onClick={() => setSelectedPost(post)}
                >
                  Read Full Article →
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

      {selectedPost && (
  <div className="modal-overlay">

    <div className="blog-modal">

      <button
        className="modal-close"
        onClick={() => setSelectedPost(null)}
      >
        ×
      </button>

      {selectedPost.image && (
        <img
          src={selectedPost.image}
          alt={selectedPost.title}
          className="blog-modal-image"
        />
      )}

      <div className="blog-modal-content">

        <span className="blog-category">
          {selectedPost.category}
        </span>

        <h2>{selectedPost.title}</h2>

        <small>{selectedPost.date}</small>

       <div className="modal-content">
  {selectedPost.content.split("\n\n").map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}
</div>
      </div>

    </div>

  </div>
)}

    </div>
  );
}

export default Blog;