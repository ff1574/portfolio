import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion/dist/framer-motion";
import { useEffect } from "react";
import portrait from "../Assets/Images/portrait.png";
import GitHubIcon from "../Assets/Images/Icons/github.png";
import LinkedInIcon from "../Assets/Images/Icons/linkedin.webp";
import EmailIcon from "../Assets/Images/Icons/gmail.png";
import MeritPagesIcon from "../Assets/Images/Icons/merit.png";

export default function Header() {
  const titleIndex = useMotionValue(0);
  const titles = [
    "Full Stack Developer",
    "React.js",
    "Spring Boot",
    "React Native",
    "MSSQL",
  ];

  const baseTitle = useTransform(titleIndex, (latest) => titles[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayTitle = useTransform(rounded, (latest) =>
    baseTitle.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      animate(count, 60, {
        type: "tween",
        duration: 2,
        ease: "easeIn",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 1,
        onUpdate(latest) {
          if (updatedThisRound.get() === true && latest > 0) {
            updatedThisRound.set(false);
          } else if (updatedThisRound.get() === false && latest === 0) {
            if (titleIndex.get() === titles.length - 1) {
              titleIndex.set(0);
            } else {
              titleIndex.set(titleIndex.get() + 1);
            }
            updatedThisRound.set(true);
          }
        },
      });
    }, 3000); // delay the start of the text animation by 3 seconds
    return () => clearTimeout(timer); // clear the timer when the component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="header-div">
      <div className="title-div">
        <h1>Hi! My name is</h1>
        <motion.img
          src={portrait}
          alt="Portrait"
          className="portrait-image"
          initial={{ opacity: 0, x: 300 }} // start from the right
          animate={{ opacity: 1, x: 0 }} // end at the final position
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 200, // increase stiffness
            damping: 10, // decrease damping
          }} // more pronounced spring bounce effect
        />
        <h1>Franko</h1>
        <motion.h2 className="title-animation">{displayTitle}</motion.h2>
      </div>
      <div className="link-container">
        <div>
          <a href="https://github.com/ff1574">
            <img src={GitHubIcon} alt="GitHub" />
            GitHub
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/franko-fišter-b55621274">
            <img src={LinkedInIcon} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        <div>
          <a href="https://meritpages.com/ff1574 ">
            <img src={MeritPagesIcon} alt="Merit Pages" />
            Merit Page
          </a>
        </div>
        <div>
          <a href="mailto:franko.fister@gmail.com">
            <img src={EmailIcon} alt="Email" />
            Gmail
          </a>
        </div>
      </div>
    </header>
  );
}
