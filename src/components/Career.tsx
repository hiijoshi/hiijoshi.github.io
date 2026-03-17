import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* EDUCATION */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>Student</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Computer Science, focusing on
              programming, software development, and building practical
              real-world projects to strengthen core technical skills.
            </p>
          </div>

          {/* GOOGLE AMBASSADOR */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Student Ambassador</h4>
                <h5>Campus / Community</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Promoted Google technologies and tools among students,
              helped organize learning activities, and contributed to
              building a stronger technical community.
            </p>
          </div>

          {/* GDSC LEAD */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>GDSC Lead</h4>
                <h5>Mandsaur University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading student developer initiatives, conducting technical
              sessions, and helping peers in project building, collaboration,
              and real-world development practices.
            </p>
          </div>

          {/* PROJECT EXPERIENCE */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Developer</h4>
                <h5>Self / Practical Work</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Working on real-world projects like billing systems,
              automation tools, and modern web applications with focus
              on usability, performance, and practical implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;