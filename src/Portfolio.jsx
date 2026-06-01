import "./style.css";
import Sticker from "./Sticker";
import { stickers } from "../images/stickers/stickers.jsx";

const projects = [
  {
    href: "https://sadies-ai-recipe-generator.netlify.app/",
    img: "/images/work/eat.png",
    alt: "recipe app logo",
    title: "Recipe app",
    description:
      "A website that uses AI to create vegetarian recipes allows users to input a specific ingredient, then generates customized recipes featuring that ingredient. Built with HTML, CSS and JavaScript",
  },
  {
    href: "https://sadies-world-clock.netlify.app/",
    img: "/images/work/world-clock.png",
    alt: "world clock app logo",
    title: "World Clock app",
    description:
      "A website that displays the current time in various cities around the world, as well as the local time based on the user's current location. Built with HTML, CSS and JavaScript",
  },
  {
    href: "https://main--sadiesweatherapp.netlify.app/",
    img: "/images/work/weather.png",
    alt: "weather app logo",
    title: "Weather app",
    description:
      "A website that provides current weather conditions and a weekly forecast for a city specified by the user, offering up-to-date and accurate meteorological information. Built with HTML, CSS and JavaScript",
  },
  {
    href: "https://www.shecodes.io/contests/unforgettable-vacation-challenge/contest_entries/sara-cardinal-portuguese/preview",
    img: "/images/work/austria.png",
    alt: "unforgettable vacation challenge app logo",
    title: null,
    description:
      'My entry for the Unforgettable Vacation Challenge on SheCodes. The prompt was "Create a site showcasing your favorite vacation moment." and I placed 4th.',
  },
];

function SideTitle({ href, children }) {
  return (
    <div className="side-title">
      <a href={href}>{children}</a>
    </div>
  );
}

export default function SaraPortfolio() {
  return (
    <main className="container">
      {/* Intro */}
      <section className="section intro">
        <div className="main-content">
          <Sticker
            src={stickers[0]}
            alt="sticker pumpkin"
            initialX="30vw"
            initialY="6vh"
            rotation={-12}
          />
          <Sticker
            src={stickers[1]}
            alt="sticker fries"
            initialX="5vw"
            initialY="0vh"
            rotation={12}
          />
          <Sticker
            src={stickers[2]}
            alt="sticker padlock"
            initialX="70vw"
            initialY="20vh"
            rotation={-20}
          />
          <Sticker
            src={stickers[3]}
            alt="sticker cravo"
            initialX="70vw"
            initialY="40vh"
            rotation={-20}
          />
          <Sticker
            src={stickers[4]}
            alt="sticker crystal ball"
            initialX="65vw"
            initialY="60vh"
            rotation={8}
          />
          <Sticker
            src={stickers[5]}
            alt="sticker fire"
            initialX="0vw"
            initialY="25vh"
            rotation={8}
          />
          <Sticker
            src={stickers[6]}
            alt="sticker ghost"
            initialX="10vw"
            initialY="65vh"
            rotation={8}
          />
          <h1>
            hi, i'm <br />
            <span>sara</span>
          </h1>
          <p>front-end developer based in portugal</p>
        </div>
        <SideTitle href="#about">about me</SideTitle>
      </section>

      {/* About */}
      <section className="section about" id="about">
        <div className="main-content">
          <p>
            My passion for web coding <strong>began when I was 13</strong>,
            hand-crafting my MySpace page with HTML and CSS to make it uniquely
            mine (a true millennial rite of passage). I{" "}
            <strong>continued learning on my own</strong>, creating fan pages
            for my favourite musicians and experimenting with design.
            <br />
            <br />
            Later, I pursued a{" "}
            <strong>
              Higher Technical Professional Course in Information Systems
              Technologies and Programming at Universidade Europeia
            </strong>
            , where my interest in web development solidified.
            <br />
            <br />
            Life then took me in a different direction, and I{" "}
            <strong>
              built a career in social media management and content creation
            </strong>
            . Over seven years, I developed strong skills in digital
            communication, creativity, and adaptability.
            <br />
            <br />
            <strong>Recently, I decided to return to my original plan</strong>.
            After completing the <strong>SheCodes Front-End Course</strong>, I
            am now ready to transition into front-end development: combining my
            technical foundation with years of experience in storytelling and
            digital strategy. My core skills lie in{" "}
            <strong>building responsive web applications</strong> with a focus
            on <strong>clean</strong>,{" "}
            <strong>minimalist design principles</strong>. I strive to create
            web experiences that are not only aesthetically pleasing but also
            highly functional and intuitive for the user.
            <br />
            <br />
            Outside of work, you will often find me relaxing with my two dogs,
            enjoying live music at concerts, or watching a football match. I
            also have a soft spot for all things Halloween, which often fuels my
            sense of style and imagination.
          </p>
        </div>
        <SideTitle href="#work">my work</SideTitle>
      </section>

      {/* Work */}
      <section className="section work" id="work">
        <div className="main-content">
          <div className="grid">
            {projects.map((project, i) => (
              <>
                <div className="item" key={`img-${i}`}>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    <img src={project.img} alt={project.alt} />
                  </a>
                </div>
                <div className="item" key={`desc-${i}`}>
                  {project.title && (
                    <>
                      <strong>
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.title}
                        </a>
                      </strong>
                      <br />
                    </>
                  )}
                  {project.description}
                </div>
              </>
            ))}
          </div>
        </div>
        <SideTitle href="#contact">contact</SideTitle>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="main-content">
          <div className="content-block">
            <p>📧 hello@sarahatesyou.dev</p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/sarahatesyou"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://github.com/sarahatesyou/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </div>
          <footer>
            <small>
              Coded by sarahatesyou 🦇 and is open-sourced on{" "}
              <a
                href="https://github.com/sarahatesyou/"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </small>
          </footer>
        </div>
      </section>
    </main>
  );
}
