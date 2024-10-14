import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import InstaIcon from "../assets/icons/instagram.svg";
import MessengerIcon from "../assets/icons/messenger.svg";
import TwitterIcon from "../assets/icons/twitter.svg";

const Nav = () => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);
  const [hoverLine, toggleHoverLine] = useCycle(false, true);
  const [aboutHoverLine, toggleAboutHoverLine] = useCycle(false, true);
  const [contactHoverLine, toggleContactHoverLine] = useCycle(false, true);

  const navlinks = [
    {
      name: "Gallery",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="top-0 h-16 inset-x-0 z-30 my-6 mx-5 lg:mx-36">
      <div className="container mx-auto h-full w-full flex items-center justify-between md:py-10">
        <h4 className="text-3xl font-bold font-baskerville md:text-4xl tracking-wide">
          Seth Ayao
        </h4>
        <div className="hidden md:flex">
          <ul className="flex space-x-5">
            <motion.li
              onHoverStart={() => toggleHoverLine()}
              onHoverEnd={() => toggleHoverLine()}
              animate={hoverLine ? "line" : "unline"}
              whileHover={{
                scale: 1.1,
                color: "#4f46e5",
              }}
              whileTap={{ scale: 0.9, color: "rgb(47 135 254)" }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-poppins underline underline-offset-8 decoration-indigo-500"
                    : "font-poppins"
                }
              >
                Gallery
              </NavLink>
              <motion.span
                variants={{
                  line: { x: 0, width: "100%", opacity: 1 },
                  unline: { x: 1, width: 0, opacity: 0 },
                }}
                transition={{ type: "tween", duration: 0.5 }}
                className="w-full h-px block bg-gray-500"
              ></motion.span>
            </motion.li>

            <motion.li
              onHoverStart={() => toggleAboutHoverLine()}
              onHoverEnd={() => toggleAboutHoverLine()}
              animate={aboutHoverLine ? "line" : "unline"}
              whileHover={{
                scale: 1.1,
                color: "#4f46e5",
              }}
              whileTap={{ scale: 0.9, color: "rgb(47 135 254)" }}
            >
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-poppins underline underline-offset-8 decoration-indigo-500"
                    : "font-poppins"
                }
              >
                About
              </NavLink>
              <motion.span
                variants={{
                  line: { x: 0, width: "100%", opacity: 1 },
                  unline: { x: 1, width: 0, opacity: 0 },
                }}
                transition={{ type: "tween", duration: 0.5 }}
                className="w-full h-px block bg-gray-500"
              ></motion.span>
            </motion.li>

            <motion.li
              onHoverStart={() => toggleContactHoverLine()}
              onHoverEnd={() => toggleContactHoverLine()}
              animate={contactHoverLine ? "line" : "unline"}
              whileHover={{
                scale: 1.1,
                color: "#4f46e5",
              }}
              whileTap={{ scale: 0.9, color: "rgb(47 135 254)" }}
            >
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-poppins underline underline-offset-8 decoration-indigo-500"
                    : "font-poppins"
                }
              >
                Contact
              </NavLink>
              <motion.span
                variants={{
                  line: { x: 0, width: "100%", opacity: 1 },
                  unline: { x: 1, width: 0, opacity: 0 },
                }}
                transition={{ type: "tween", duration: 0.5 }}
                className="w-full h-px block bg-gray-500"
              ></motion.span>
            </motion.li>
          </ul>
        </div>

        {/* mobile button */}
        <div className="relative z-40 md:hidden">
          <motion.button
            animate={mobileNav ? "open" : "closed"}
            className="flex flex-col space-y-1 p-2"
            onClick={() => toggleMobileNav()}
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 5 },
              }}
              className="w-5 h-px block bg-gray-700 "
            ></motion.span>
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-5 h-px block bg-gray-700"
            ></motion.span>
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -5 },
              }}
              className="w-5 h-px block bg-gray-700"
            ></motion.span>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.25,
            }}
          >
            <motion.div
              variants={{
                open: {
                  y: "0%",
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    when: "beforeChildren",
                    staggerChildren: 0.5,
                  },
                },
                closed: {
                  y: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.25,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-neutral-200 space-y-10 p-6 mx-auto flex flex-col justify-center items-center z-30"
            >
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="space-y-5">
                  {navlinks.map((button, index) => (
                    <motion.li
                      variants={{
                        open: {
                          y: "0%",
                          opacity: 1,
                        },
                        closed: {
                          y: "25%",
                          opacity: 0,
                        },
                      }}
                      initial="closed"
                      animate="open"
                      transition={{ type: "spring", bounce: 0.5 }}
                    >
                      <Link
                        to={button.link}
                        onClick={() => toggleMobileNav()}
                        className="text-3xl font-poppins"
                      >
                        {button.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
                className="w-full bg-white h-px"
              ></motion.div>
              <motion.div
                variants={{
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                }}
              >
                <ul className="flex items-center gap-x-5 justify-center">
                  {[
                    {
                      icon: MessengerIcon,
                      link: "https://www.facebook.com/Seth.Iris.009",
                    },
                    {
                      icon: InstaIcon,
                      link: "https://www.instagram.com/sesudesu009/",
                    },
                    { icon: TwitterIcon, link: "https://x.com/sesudesu009" },
                  ].map((icon) => (
                    <li>
                      <div className="w-10 h-10">
                        <a href={icon.link}>
                          <img src={icon.icon} alt="" />
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
