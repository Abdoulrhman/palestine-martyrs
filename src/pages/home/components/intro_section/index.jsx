import "./index.scss";

const IntroSection = () => {
  return (
    <div className="intro-section">
      <div className="text-content">
        <h1>
          This text is an example of text that can be replaced in the same
          space.
        </h1>
        <p>
          This text is an example of text that can be replaced in the same
          space. This text was generated from the Arabic text generator, where
          you can generate such text or many other texts in addition to
          increasing the number of letters that the application generates. If
          you need a larger number of Paragraphs provides you with an Arabic
          text generator
        </p>
        <a href="#" className="more-link">
          More ›
        </a>
      </div>
      <div className="image-content">
        <img
          src="https://cdn.vectorstock.com/i/1000x1000/02/82/many-children-happy-family-group-and-sunrise-sky-vector-20180282.webp"
          alt="Family"
        />
      </div>
    </div>
  );
};

export default IntroSection;
