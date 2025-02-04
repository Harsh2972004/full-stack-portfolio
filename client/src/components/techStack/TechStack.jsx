import "./techStack.css";
import CodeIcon from "@mui/icons-material/Code";
import DataObjectIcon from "@mui/icons-material/DataObject";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const TechStack = () => {
  return (
    <div className="tech-stack">
      <div className="tech-stack-row1">
        <div className="frontend-part">
          <div className="heading">
            <CodeIcon
              sx={{
                bgcolor: "#79d7be",
                borderRadius: "100%",
                padding: "10px",
                fontSize: "72px",
                boxShadow: "2px 2px rgba(40, 36, 36, 0.654)",
              }}
            />
            <h3>Frontend Development</h3>
          </div>
          <div className="content">
            <h5>Languages / Frameworks / libraries i use:</h5>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascrpit</p>
            <p>Git / Github</p>
            <p>ReactJs</p>
            <p>bootstrap / tailwind</p>
          </div>
        </div>
        <div className="backend-part">
          <div className="heading">
            <DataObjectIcon
              sx={{
                bgcolor: "#79d7be",
                borderRadius: "100%",
                padding: "10px",
                fontSize: "72px",
                boxShadow: "2px 2px rgba(40, 36, 36, 0.654)",
              }}
            />
            <h3>Backend Development</h3>
          </div>
          <div className="content">
            <h5>Languages / Frameworks / libraries i use:</h5>
            <p>Javascript</p>
            <p>Node.Js</p>
            <p>MongoDB</p>
            <p>Express</p>
            <p>Mongoose</p>
          </div>
        </div>
      </div>
      <div className="tech-stack-row2">
        <LaptopMacIcon
          sx={{
            bgcolor: "#79d7be",
            borderRadius: "100%",
            padding: "10px",
            fontSize: "72px",
            boxShadow: "2px 2px rgba(40, 36, 36, 0.654)",
          }}
        />
        <h2>Tech Stack </h2>
        <p className="stack-desc">
          I use MERN stack for my full stack Web Development Projects as its one
          of the best stacks to work with.
        </p>
        <ul>
          <li>MongoDB</li>
          <li>ExpressJs</li>
          <li>ReactJs</li>
          <li>NodeJs</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;
