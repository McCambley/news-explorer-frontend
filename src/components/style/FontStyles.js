import * as styled from 'styled-components';
// Inter
import InterRegular from '../../fonts/Inter/Inter-Regular.ttf';
// Roboto
import RobotoBlack from '../../fonts/Roboto/Roboto-Black.ttf';
import RobotoBold from '../../fonts/Roboto/Roboto-Bold.ttf';
import RobotoMedium from '../../fonts/Roboto/Roboto-Medium.ttf';
import RobotoRegular from '../../fonts/Roboto/Roboto-Regular.ttf';
// Roboto Slab
import RobotoSlabBold from '../../fonts/Roboto_Slab/RobotoSlab-Bold.ttf';
import RobotoSlabRegular from '../../fonts/Roboto_Slab/RobotoSlab-Regular.ttf';
import RobotoSlabSemiBold from '../../fonts/Roboto_Slab/RobotoSlab-SemiBold.ttf';
// Source Sans Pro
import SourceSansProRegular from '../../fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';

const FontStyles = styled.createGlobalStyle`
  // Inter
  @font-face {
    src: url(${InterRegular}) format('truetype');
    font-family: 'Inter'; // sans-serif
    font-weight: 400;
  }
  // Roboto
  @font-face {
    src: url(${RobotoRegular}) format('truetype');
    font-family: 'Roboto'; // sans-serif
    font-weight: 400;
  }
  @font-face {
    src: url(${RobotoMedium}) format('truetype');
    font-family: 'Roboto'; // sans-serif
    font-weight: 500;
  }
  @font-face {
    src: url(${RobotoBold}) format('truetype');
    font-family: 'Roboto'; // sans-serif
    font-weight: 700;
  }
  @font-face {
    src: url(${RobotoBlack}) format('truetype');
    font-family: 'Roboto'; // sans-serif
    font-weight: 900;
  }
  // Roboto Slab
  @font-face {
    src: url(${RobotoSlabRegular}) format('truetype');
    font-family: 'Roboto Slab'; // serif
    font-weight: 400;
  }
  @font-face {
    src: url(${RobotoSlabSemiBold}) format('truetype');
    font-family: 'Roboto Slab'; // serif
    font-weight: 600;
  }
  @font-face {
    src: url(${RobotoSlabBold}) format('truetype');
    font-family: 'Roboto Slab'; // serif
    font-weight: 700;
  }
  // Source Sans Pro
  @font-face {
    src: url(${SourceSansProRegular}) format('truetype');
    font-family: 'Source Sans Pro'; // sans-serif
    font-weight: 400;
  }
`;

export default FontStyles;
