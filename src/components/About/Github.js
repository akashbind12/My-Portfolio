import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#196127", // Darkest shade of green
    grade3: "#239a3b",
    grade2: "#7bc96f",
    grade1: "#c6e48b",
    grade0: "#ebedf0", // Lightest shade of green
    light: ["#ebedf0", "#196127"], // Light theme colors
    dark: ["#0d1117", "#34d058"] // Dark theme colors
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px",paddingRight: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="akashbind12"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;