import React from "react";
import{ Container, Card } from 'react-bootstrap'

function Resume() {
  return (
    <section>
        <Container>
            <Card>
      <div>
        <h1>Krista McPherson</h1>
        <Card.Body>
        <Card.Text>Scottsdale, AZ 85250</Card.Text>
        <Card.Text>602.478.0038</Card.Text>
        <Card.Text>kmcpherson49@gmail.com</Card.Text>
        <Card.Link href="https://www.linkedin.com/in/kristamcpherson">LinkedIn</Card.Link>
        <Card.Link href="https://github.com/kmcpherson49">Github</Card.Link>
        </Card.Body>
      </div>
      <div>
        <Card.Title>Summary</Card.Title>
        <p>
          Full Stack Web Developer with a background in Social Media Marketing
          and passion for learning. Known for providing consistent work and
          finding creative, resourceful solutions.
        </p>
      </div>
      <div>
        <Card.Title>Technical Skills</Card.Title>
        <p>
          Node.Js | Express | JavaScript | jQuery | React.js | React | JSX | GIT
          | GitHub | MongoDB | MySQL | Mongoose | Handlebars | HTML5 | CSS3 |
          Bootstrap | Materialize | APIs | Heroku | Terminal | AJAX | Restful
          API | ES6 | React Hooks | JSON | Sequelize
        </p>
      </div>
      <div>
        <Card.Title>Education</Card.Title>
        <Card.Title>Full Stack Web Development Certificate</Card.Title>
        <Card.Subtitle>University of Arizona</Card.Subtitle> <Card.Subtitle>2021</Card.Subtitle>
        <h3>
          Bachelor of Science in Communication (Minor in Digital Audiences)
        </h3>
        <p>Arizona State University</p> <p>2020</p>
        <h3>Certificate in Social Media Marketing </h3>
        <p>Scottsdale Community College</p> <p>2019</p>
      </div>
      <div>
        <Card.Title>Experience</Card.Title>
        <h3>Marketing Associate </h3>
        <h3>Emerald Wealth</h3>
        <p>2020 - Present</p>
        <p>
          Redesigned and maintain current website for a user-friendly
          experience. Create content for Facebook and Linkedin. Serve as a FINRA
          approved manager of account records. Edit and film marketing videos
          and prepare scripts, and create copy and assets for email newsletters
          and invitations.
        </p>
        <h3>Social Media Marketing Specialist</h3>
        <h3>Scottsdale Pavilion Entertainment Complex</h3>
        <p>2018 - 2020</p>
        <p>
          Managed all social platforms. Created content for instagram, email
          newsletters, and Facebook. Enhanced sales growth by planning and
          executing social media campaigns and cultivating client relations.
        </p>
      </div>
      </Card>
      </Container>
    </section>
  );
}

export default Resume;
