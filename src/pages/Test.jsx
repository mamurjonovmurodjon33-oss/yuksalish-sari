import { motion } from "framer-motion";
import "../assets/styles/test.css";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export default function Test() {
  return (
    <motion.section
      className="test-page"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.45 }}
    >
      <div className="test-hero">
        <div className="container test-hero__inner">
          <span className="test-kicker">Public preview page</span>
          <h1>Yuksalish sari test website</h1>
          <p>
            This is a sample review page for checking new website updates before
            publishing them to the live home page.
          </p>
        </div>
      </div>

      <div className="container test-content">
        <section className="test-panel">
          <h2>Preview workflow</h2>
          <p>
            New content and layout updates will be placed here first. After the
            client approves the preview, the approved version can be moved to
            the main live website.
          </p>
        </section>

        <section className="test-grid" aria-label="Sample website sections">
          <article>
            <h3>Home content</h3>
            <p>Sample hero text, main message, and call-to-action area.</p>
          </article>
          <article>
            <h3>About section</h3>
            <p>Profile details, biography, and educational information.</p>
          </article>
          <article>
            <h3>Portfolio</h3>
            <p>PDF publications, books, articles, and research materials.</p>
          </article>
        </section>
      </div>
    </motion.section>
  );
}
