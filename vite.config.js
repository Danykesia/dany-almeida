import { resolve } from 'path';

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainPt: resolve(__dirname, 'pt/index.html'),
        homeMate: resolve(__dirname, 'home-mate/index.html'),
        metalForEveryone: resolve(__dirname, 'metal-for-everyone/index.html'),
      }
    }
  }
}
