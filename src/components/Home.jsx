import React, { useRef } from 'react'
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {

    const projectCount = useRef(null);

    const animationProjectsCount = () => {
        animate(0, 10, {
          duration: 1,
          onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
        });
      };

    const animations = {
        h1: {
          initial: {
            x: "-100%",
            opacity: 0,
          },
          whileInView: {
            x: 0,
            opacity: 1,
          },
        },
        button: {
          initial: {
            y: "-100%",
            opacity: 0,
          },
          whileInView: {
            y: 0,
            opacity: 1,
          },
        },
      };


  return (
    <div id="home">
        <section>
            <div>
            <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Sonal Gupta
            </motion.h1>
            
            <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Problem-Solver"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
            />

            <div>
            <a href="mailto:sonalgup947@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
            </div>

            <aside>
            <article>
              <p className='shift'>
                +
                
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
                    10
                  </motion.span>
                
              </p>
              <span className='shift2'>Projects Done</span>
            </article>

            <article data-special>
              <p className='shift'>Contact</p>
              <span className='shift2'>sonalgup947@gmail.com</span>
            </article>
            </aside>

            </div>
        </section>

        <section>
        <img src={me} alt="Sonal" />
        </section>
        <BsChevronDown />
    </div>
  )
}

export default Home