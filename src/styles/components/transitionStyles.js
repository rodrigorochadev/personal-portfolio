import { motion } from "framer-motion";
import styled from "styled-components";

export const TransitionPage = styled(motion.div)`
  height: 100vh;
  width: 20%;
  z-index: 999;
  background: var(--color-text);
  /* background: ${props => props.color} */
`

export const TransitionFlex = styled.div`
    display: flex;
`