import { Image } from 'mdx-deck'
import styled from 'styled-components'

const HalfImage = styled(Image)`
  width: 100%;
`;

const ContainImage = styled(Image)`
  background-size: contain;
`;

export { HalfImage, ContainImage }