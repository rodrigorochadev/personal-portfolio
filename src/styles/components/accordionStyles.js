import { motion } from "framer-motion"
import styled from "styled-components"

export const AccordionHeader = styled(motion.div)`
    color: var(--color-accent);
    height: 32px;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin: 8px 0;
    transition: 0.2s ease-out;

    &:hover {
        color: var(--color-text);
    }
`

export const AccordionContent = styled(motion.div)`
    overflow: hidden;
    padding-left: 40px;

    span {
        width: 100%;
        margin: 8px 0;
        font-size: .875rem;
        color: var(--color-text);
        display: block;
    }
`

export const AccordionIcon = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;

    span {
        width: 16px;
        height: 4px;
        background: var(--color-accent);
        transition: .1s ease-in-out;
    }
`