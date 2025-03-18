import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import convene from "../../Assets/Projects/convene.png";
import checkout from "../../Assets/Projects/checkout.png";
import HDiet from "../../Assets/Projects/HDiet.png";
import techsterverse from "../../Assets/Projects/techster.png";
import blissResturant from "../../Assets/Projects/bliss.png";
import Winnov8 from "../../Assets/Projects/winnov8.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Winnov8}
              isBlog={false}
              title="Winnov8"
              description="Winnov8 is a website that is focused on driving technology collaboration and innovation.
              It offers services and expertise to help businesses scale their operations, innovate,
              and leverage new technologies. The company aims to facilitate growth by supporting tech
              solutions and collaborations.The website is built using standard web technologies such as
               HTML, CSS, and JavaScript. the website utilizes modern frameworks and content management 
               systems to enhance functionality and user experience.
               "
              // ghLink="https://github.com//.git"
              demoLink="https://www.winnov8hq.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HDiet}
              isBlog={false}
              title="Healthy Diet For All"
              description="Healthy Diets is a personalized nutrition platform
               that connects users with a Registered Dietician to help them achieve
                their dietary goals and improve their health. The process involves
                 three main steps: filling out a form about personal goals and lifestyle,
                  receiving tailored guidance from the dietician, and making sustainable
                   changes to adopt healthier habits. It offers
                     both virtual consultations and customized menu plans for users looking to
                      improve their nutrition.It's Built with (React and Vite)."
              ghLink="https://github.com/EmmanuelOsademe/healthy-diets.git"
              demoLink="https://healthy-diets.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blissResturant}
              isBlog={false}
              title="Bliss-Resturant"
              description="Bliss Restaurant is focused on promoting healthy nutritious
               and delicious food options. It highlights a variety of dishes including a kid's
                and vegan menu, while emphasizing the importance of a healthy lifestyle through
                 good food. It also offers a welcoming atmosphere with details about dining options,
                  reservations, and blog posts. The website mentions special offers like happy hours,
                    and it encourages visitors to enjoy their meals for both physical and 
                    mental wellness. Languages used for the website are HTML CSS and JavaScript."

              ghLink="https://github.com/Ukwuezepascaline/bliss-restaurant-.git"
              demoLink="https://blissresturant.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={checkout}
              isBlog={false}
              title="Checkout-page"
              description="checkout page for purchasing a subscription to WP Pusher,
               a tool designed to simplify WordPress deployment. It offers a Freelancer
                Plan priced at $99 per year, which renews automatically and provides access
                 to 5 client sites, private repositories, and email support. The page also 
                 includes a testimonial from a customer, Kirk Beard, who highlights WP Pusher's 
                 advantage over FTP and praises its customer support. The checkout form collects
                  basic information (name and email) and payment details (credit card). Additionally,
                   there is an option to upgrade to an Agency Plan if more client sites are needed. Built with 
                   HTML, CSS and Javascript."

              ghLink="https://github.com/Ukwuezepascaline/Checkout.git"
              demoLink="https://mycheckoutform.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description=" Quiz App designed to test users' proficiency in JavaScript.
               It offers a quiz where users answer questions within 15 seconds each.
                Points are awarded based on correct answers, and users can replay the
                 quiz or quit once completed. The quiz is interactive, with a countdown 
                 timer and feedback for completion. It's Built with HTML,CSS AND Javascript"
              ghLink="https://github.com/Ukwuezepascaline/Quiz-app.git"
              demoLink="https://quiz-app-ukwuezepascaline.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techsterverse}
              isBlog={false}
              title="Techsterverse"
              description="Techsterverse is a platform designed for developers to connect,
               collaborate, and work on projects. It provides a space for developers to team
                up, develop new skills, and build valuable connections within the tech community
                Key features include collaboration on projects,skill development, networking opportunities,
              potential participation in tournaments. The platform is open to developers and sponsors
                who share its vision for the future of tech. Users are encouraged to sign up and get involved
                in the community. It's Built with React."

              ghLink="https://github.com/Ukwuezepascaline/Tech-ster-verse.git"
              // demoLink="https://techsterverse.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={convene}
              isBlog={false}
              title="Convene"
              description="Convene is a platform designed to help meetup organizers
               crowdsource and prioritize questions for their events. It allows users
                to submit questions and vote on them, helping organizers determine which
                 questions are most popular or important. The most voted questions are 
                 displayed at the top, ensuring that the most relevant or interesting 
                 topics are addressed during the meetup. This tool helps streamline the
                  event's Q&A session by organizing questions based on community interest.
                 It's Built with React."
              ghLink="https://github.com/Ukwuezepascaline/Convene.git"
              // demoLink="https://con-vene.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
