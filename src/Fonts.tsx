import { Global } from "@emotion/react";

export const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'SSP-reg';
        font-style: normal;
        font-display: swap;
        src: url('./ffonts/Source_Sans_Pro/SourceSansPro-Regular.ttf');
      }
      @font-face {
        font-family: 'SSP-bold';
        font-style: bold;
        font-display: swap;
        src: url('./ffonts/Source_Sans_Pro/SourceSansPro-Bold.ttf');
      }
      `}
    />
);

export default Fonts;
