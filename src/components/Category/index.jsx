import { Container } from "./styles";

import { motion } from "framer-motion";

import { useState, useEffect, useRef } from "react";

export function Category ({title, children, ...rest}) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);


  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <Container
      {...rest}
    >
      <h3>{title}</h3>

      <motion.main 
        ref = {carousel} 
        whileTap={{cursor: "grabbing"}}
      >
        <motion.div 
          drag = "x"
          dragConstraints = {{right: 0, left : -width}}
          
        >
          {children}
        </motion.div>
      </motion.main>
    </Container>
  )
}