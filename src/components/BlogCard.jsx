import { Link } from "react-router-dom";

function BlogCard({ image, category, title, description }) {
  return (
    <article className="blog-card">

      <div className="blog-image">

        {/* PUT BLOG PHOTO HERE */}

        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">
            <span>📷</span>
            <p>Blog Photo</p>
          </div>
        )}

      </div>

      <div className="blog-content">

        <span className="blog-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <Link to="/blog" className="read-more">
          Read More →
        </Link>

      </div>

    </article>
  );
}

export default BlogCard;