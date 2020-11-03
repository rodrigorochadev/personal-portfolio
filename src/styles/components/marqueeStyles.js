import styled, { keyframes } from 'styled-components'
import { SITE_CONFIG } from '../../constants'

const scrollLeft = keyframes`
0% {
      transform: translate3d(var(--move-initial), 0, 0);
  }

  100% {
      transform: translate3d(var(--move-final), 0, 0);
  }
`

export const MarqueeDiv = styled.div`
  position: relative;
  overflow: hidden;
  --offset: 0vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  height: 200px;
  padding: 150px 0;

  @media ${SITE_CONFIG.media.small} {
    padding: 300px 0;
  }
`

export const MarqueeText = styled.div`
  width: fit-content;
  display: flex;
  position: relative;
  transform: translate3d(var(--move-initial), 0, 0);
  animation: ${scrollLeft} 20s linear infinite;
  animation-play-state: running;
`
