import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        <p className="para" style={{ marginBottom: "2rem" }}>
          {config.about.description}
        </p>
        <div className="about-details" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div className="detail-box">
            <h4 style={{ color: "#fff", marginBottom: "0.5rem", fontSize: "1.2rem" }}>Education</h4>
            <p style={{ color: "#aaa", fontSize: "1rem" }}>{config.education.degree}</p>
            <p style={{ color: "#aaa", fontSize: "1rem" }}>{config.education.period}</p>
            <p style={{ color: "#c2a4ff", fontSize: "1rem", fontWeight: "bold", marginTop: "0.2rem" }}>{config.education.cgpa}</p>
          </div>
          <div className="detail-box">
            <h4 style={{ color: "#fff", marginBottom: "0.5rem", fontSize: "1.2rem" }}>Competitive Programming</h4>
            <p style={{ color: "#aaa", fontSize: "1rem" }}>LeetCode: <span style={{ color: "#ffa116", fontWeight: "bold" }}>{config.competitive.leetcode}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
