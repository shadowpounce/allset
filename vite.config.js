import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `// fonts
$instrument: 'Instrument Sans', serif;

// colors
$grey47: #474747;
$grey4b: #4b5058;
$greya5: #a5a4ab;
$grey1a: #1a1a1a;
$navy07: #071641;
$navy0a: #0a1d54;
$primary: #6f7af6;
$pinkd9: #d9dcfa;
$pinka7: #a78dfb;
$pinked: #ede5ff;
$pinkf0: #f0f0f7;
$whitef7: #f7f7fd;
$dark: #0d091f;


// breakpoints
$laptop_big: 1760px;
$laptop: 1440px;
$laptop_small: 1280px;
$tablet_big: 1140px;
$tablet: 768px;
$tablet_small: 656px;
$mobile_big: 565px;
$mobile: 465px;
$mobile_small: 376px;

@function get-d($target) {
  $vw-context: calc((1512 * 0.01) * 1px);
  @return calc(($target / $vw-context) * 1vw);
}
`,
      },
    },
  },
})
