import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <>
      <Helmet>
        <title>About Taste with Lauds | Filipino Food Blog</title>
        <meta
          name="description"
          content="Learn about Taste with Lauds, a Filipino food blog sharing recipes, food stories, cooking ideas, traditions, and good memories."
        />
      </Helmet>

      <div className="page">

        <section className="about-page-section">

          <div className="about-images">

            <div className="about-placeholder">
              <img
                src="/bring.jpg"
                alt="Filipino family sharing food together"
              />
            </div>

            <div className="about-placeholder">
              <img
                src="/AA.avif"
                alt="Traditional Filipino food"
              />
            </div>

          </div>

          <div className="about-text">

            <p className="section-label">
              FROM LAUDS' KITCHEN
            </p>

            <h2>Food brings people together.</h2>

            <p>
              Welcome to Taste with Lauds!
            </p>

            <p>
              Food has a special way of bringing people together, especially
              in Filipino culture. Sharing a meal is more than simply eating;
              it is an opportunity to spend time with family, friends, and
              loved ones. Filipino families often gather around the table
              during birthdays, fiestas, holidays, celebrations, and even
              ordinary days. These moments allow people to talk, laugh, share
              stories, and create memories while enjoying delicious food
              together.
            </p>

            <p>
              Food also helps preserve traditions and connect generations.
              Many Filipino recipes are passed down from grandparents to
              parents and then to children. Through cooking and sharing
              traditional dishes, younger generations can learn about their
              family’s culture and appreciate the customs that have been
              practiced for many years. Foods such as adobo, sinigang,
              kare-kare, and other homemade dishes can remind people of home
              and the people they love.
            </p>

            <p>
              Sharing food can also show kindness and hospitality. Filipinos
              are known for welcoming guests and offering food to visitors,
              even when the meal is simple. Preparing food for someone can be
              a way of showing care, gratitude, and friendship. It creates a
              sense of belonging and makes people feel welcome.
            </p>

            <p>
              Food can bring together people from different backgrounds as
              well. Trying another person’s traditional food can help us
              understand their culture, experiences, and way of life. A shared
              meal can create connections even when people have different
              languages or traditions.
            </p>

            <p>
              For me, food is not only about satisfying hunger. It is about
              love, family, friendship, culture, and memories. Every meal
              shared with others can become a meaningful experience. This is
              why food truly brings people together—it creates moments that
              people can enjoy, remember, and cherish.
            </p>

            <Link to="/recipes" className="btn btn-primary">
              Explore Our Recipes →
            </Link>

          </div>

        </section>

        <section className="values-section">

          <div className="section-heading">

            <p className="section-label">
              WHAT WE BELIEVE
            </p>

            <h2>Food Should Be Enjoyed</h2>

          </div>

          <div className="values-grid">

            <div className="value-card">
              <span>❤️</span>
              <h3>Made With Love</h3>
              <p>
                Good food becomes even better when it is made
                with care and passion.
              </p>
            </div>

            <div className="value-card">
              <span>🍴</span>
              <h3>Simple Recipes</h3>
              <p>
                Recipes should be easy to understand and
                enjoyable to prepare.
              </p>
            </div>

            <div className="value-card">
              <span>👨‍👩‍👧‍👦</span>
              <h3>Share Good Food</h3>
              <p>
                Food creates opportunities for people to
                connect and make memories.
              </p>
            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default About;