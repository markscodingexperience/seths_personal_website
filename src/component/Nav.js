import { motion, useCycle, AnimatePresence, MotionConfig, easeIn } from 'framer-motion';
import { Link } from 'react-router-dom';

const Nav = () => {
    
  const [mobileNav, toggleMobileNav] = useCycle(false, true)
  const [hoverLine, toggleHoverLine] = useCycle(false, true)
  const [aboutHoverLine, toggleAboutHoverLine] = useCycle(false, true)
  const [contactHoverLine, toggleContactHoverLine] = useCycle(false, true)

  const navlinks = [
    {
      name: "Gallery",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    },

  ]
    
      return (
        <nav className="top-0 h-16 inset-x-0 z-30 my-10 mx-5 lg:mx-36">
            <div className="container mx-auto h-full w-full flex items-center justify-between md:py-10">
                <h4 className="text-3xl font-normal md:text-4xl tracking-wide">Seth Ayao</h4>
                <div className='hidden md:flex'>
                  <ul className='flex space-x-5'>
                      <motion.li 
                        onHoverStart={() => toggleHoverLine()}
                        onHoverEnd={() => toggleHoverLine()} 
                        animate={hoverLine ? "line" : "unline"}
                        whileHover={{
                          scale: 1.1, color: "#4f46e5"
                        }}
                        whileTap={{scale: 0.9, color: "rgb(47 135 254)"}}
                        >
                          <Link to="/">Gallery</Link>
                          <motion.span
                            variants={{
                              line: { x: 0, width: "100%", opacity: 1 },
                              unline: { x: 1, width: 0, opacity: 0 }
                            }} 
                            transition={{ type: "tween", duration: .5 }}
                            className="w-full h-px block bg-gray-500"></motion.span>
                      </motion.li>

                      <motion.li 
                        onHoverStart={() => toggleAboutHoverLine()} 
                        onHoverEnd={() => toggleAboutHoverLine()} 
                        animate={aboutHoverLine ? "lines" : "unlines"}
                        whileHover={{
                          scale: 1.1, color: "#4f46e5"
                        }}
                        whileTap={{scale: 0.9, color: "rgb(47 135 254)"}}
                        >
                          <Link to="/about">About</Link>
                          <motion.span
                            initial="lines"
                            variants={{
                              lines: { x: 0, width: "100%", opacity: 1 },
                              unlines: { x: 0, width: 0, opacity: 1 }
                            }} 
                            transition={{ type: "tween", duration: 0.5, flip: true }}
                            className="w-full h-px block bg-gray-500"></motion.span>
                      </motion.li>


                      <motion.li 
                        onHoverStart={() => toggleContactHoverLine()} 
                        onHoverEnd={() => toggleContactHoverLine()} 
                        animate={contactHoverLine ? "line" : "unline"}
                        whileHover={{
                          scale: 1.1, color: "#4f46e5"
                        }}
                        whileTap={{scale: 0.9, color: "rgb(47 135 254)"}}
                        >
                          <Link to="/contact">Contact</Link>
                          <motion.span
                            variants={{
                              line: { x: 0, width: "100%", opacity: 1 },
                              unline: { x: 1, width: 0, opacity: 0 }
                            }} 
                            transition={{ type: "tween", duration: 0.5 }}
                            className="w-full h-px block bg-gray-500"></motion.span>
                      </motion.li>

                  </ul>
                </div>
                
                {/* mobile button */}
                <div className="relative z-40 md:hidden">
                  <motion.button 
                    animate={mobileNav ? "open" : "closed"}
                    className="flex flex-col space-y-1 p-2" 
                    onClick={() => toggleMobileNav()}>
                      <motion.span 
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: 45, y: 5 }
                        }} 
                        className="w-5 h-px block bg-gray-700 "></motion.span>
                      <motion.span 
                        variants={{
                          closed: { opacity: 1 },
                          open: { opacity: 0 }
                        }}
                        className="w-5 h-px block bg-gray-700"></motion.span>
                      <motion.span
                        variants={{
                          closed: { rotate: 0, y: 0 },
                          open: { rotate: -45, y: -5 }
                        }} 
                        className="w-5 h-px block bg-gray-700"></motion.span>
                  </motion.button>
                </div>
            </div>
            <AnimatePresence>
            {mobileNav && 
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.25
                }}>
                <motion.div 
                  variants={{
                    open: { 
                      y: "0%",
                      transition: {
                        type: "spring",
                        bounce: 0.25,
                        when: "beforeChildren",
                        staggerChildren: .5
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
                  className="fixed inset-0 bg-neutral-200 space-y-10 p-6 mx-auto flex flex-col justify-center items-center z-30">
                  <motion.div variants={{
                      open: {
                        y: "0%",
                        opacity: 1
                      },
                      closed: {
                        y: "25%",
                        opacity: 0
                      }
                    }}>
                    <ul className="space-y-5">
                      {navlinks.map((button, index) => 
                        <motion.li
                          variants={{
                            open: {
                              y: "0%",
                              opacity: 1,
                            },
                            closed: {
                              y: "25%",
                              opacity: 0, 
                            }
                          }}
                          initial="closed"
                          animate="open"
                          transition={{ type: "spring", bounce: 0.5 }}
                          >
                          <Link to={button.link} onClick={() => toggleMobileNav()} className='text-3xl '>{button.name}</Link>
                        </motion.li>
                      )}
                    </ul>
                  </motion.div>
                  <motion.div variants={{
                      open: {
                        y: "0%",
                        opacity: 1
                      },
                      closed: {
                        y: "25%",
                        opacity: 0
                      }
                    }} className="w-full bg-white h-px"></motion.div>
                  <motion.div variants={{
                      open: {
                        y: "0%",
                        opacity: 1
                      },
                      closed: {
                        y: "25%",
                        opacity: 0
                      }
                    }}>
                    <ul className='flex items-center gap-x-5 justify-center'>
                      <li>
                        <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                      </li>
                      <li>
                        <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                      </li>
                      <li>
                        <div className="w-10 h-10 bg-gray-100 rounded-lg"></div>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </MotionConfig>
              }
            </AnimatePresence>
        </nav>
    );
}
 
export default Nav;