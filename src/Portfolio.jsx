import "./style.css";
import Sticker from "./Sticker";
import { stickers } from "../images/stickers/stickers.jsx";
import { projects } from "../images/work/projects.jsx";

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
            coding has been one of my passions since i was 13 years old. like a
            true millennial,{" "}
            <strong>my first coding experience was on myspace</strong>. but my
            first professional experience started when my friends would ask me
            to create fan blogs for our favourite musicians.{" "}
            <strong>that’s how i taught myself html and css</strong>.
            <br />
            <br />
            <strong>writing code was such a fun hobby</strong> that only when a
            family friend told me — a very lost teenager — “choose a job that
            won't make you dread waking up on monday mornings” did it click.{" "}
            <strong>i had to become a professional web developer</strong>.
            <br />
            <br />i took a{" "}
            <strong>
              technological specialisation course in information systems
              programming
            </strong>
            , and by far my favourite subjects were those related to web
            programming.
            <br />
            <br />
            <i>mick jagger once said “you can’t always get what you want”</i>,
            and life took me in a different path.{" "}
            <strong>
              i worked as a social media manager / content creator for 10 years
            </strong>
            . and as much as it was a fun and creative job, something was
            missing. so{" "}
            <strong>i went back to coding, and took a shecodes workshop</strong>
            . and the most fun i had at my job was working on my portfolio
            during lunch breaks.
            <br />
            <br />
            <i>
              <strong>well, that's my life!</strong> thank you so much for
              spending time with me. i hope you enjoyed it because i know i did.
            </i>
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
                    <div className="sticker-wrapper">
                      <img src={project.img} alt={project.alt} />
                    </div>
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
            <p>
              📧{" "}
              <a
                href="mailto:hello@sarahatesyou.pt"
                target="_blank"
                rel="noreferrer"
              >
                hello@sarahatesyou.pt
              </a>
            </p>
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
