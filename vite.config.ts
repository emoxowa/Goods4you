import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

export default defineConfig(() => {
  return {
    base: "/Goods4you/",
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "src/assets/styles/mixins.scss";
            @import "src/assets/styles/variables.scss";`,
        },
      },
    },
  }
})
