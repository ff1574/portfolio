import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../Assets/CSS/header.css";
import portrait from "../Assets/Images/portrait.png";
import resume from "../Assets/Franko_Fister_CV_Eng.pdf";
import GitHubIcon from "../Assets/Images/Icons/github.png";
import LinkedInIcon from "../Assets/Images/Icons/linkedin.webp";
import EmailIcon from "../Assets/Images/Icons/gmail.png";
import MeritPagesIcon from "../Assets/Images/Icons/merit.png";
import DownloadIcon from "../Assets/Images/Icons/download.png";

export default function Header() {
  const videoRef = useRef(null);

  // State to detect mobile devices and to manage click ripple effects
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorVariants = {
    default: {
      scale: 1.5,
      opacity: 1,
    },
    click: {
      scale: 1.2,
      opacity: 0.8,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  // Detect mobile devices based on window width
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Set the top margin of title-div to value of the height of video
  useEffect(() => {
    const videoElement = videoRef.current;
    const titleDiv = document.querySelector(".title-div");

    if (videoElement && titleDiv) {
      const resizeObserver = new ResizeObserver(() => {
        const videoHeight = videoElement.offsetHeight;
        titleDiv.style.marginTop = `${videoHeight}px`;
      });

      resizeObserver.observe(videoElement);

      // Clean up the observer when the component is unmounted
      return () => resizeObserver.disconnect();
    }
  }, []);

  const titleIndex = useMotionValue(0);
  const titles = [
    "Full Stack Engineer",
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
    }, 2000); // delay the start of the text animation by 2 seconds
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 400, stiffness: 10000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setCursorVariant("click");
    const handleMouseUp = () => setCursorVariant("default");

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, isMobile]);

  return (
    <header className="header-div">
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        variants={cursorVariants}
        animate={cursorVariant}
      />
      {/* <div className="flashy-title-container">
        <video
          className="flashy-title-video"
          ref={videoRef}
          src={flashyTitle}
          autoPlay
          muted
          loop
        />
      </div> */}
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
          }}
        />
        <h1>Franko</h1>
        <motion.h2 className="title-animation">{displayTitle}</motion.h2>
      </div>
      <div className="link-container">
        <div>
          <a href="mailto:franko.fister@gmail.com">
            <img src={EmailIcon} alt="Email" />
            <span>Gmail</span>
          </a>
        </div>
        <div>
          <a href="https://github.com/ff1574">
            <img src={GitHubIcon} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/franko-fišter-b55621274">
            <img src={LinkedInIcon} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div>
          <a href="https://meritpages.com/ff1574 ">
            <img src={MeritPagesIcon} alt="Merit Pages" />
            <span>Merit Page</span>
          </a>
        </div>
        <div>
          <a href={resume} download>
            <img src={DownloadIcon} alt="Download Resume / CV" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
