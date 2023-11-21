import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
    return defineConfig({
        build: {
            outDir: 'build',
        },
        plugins: [react()],
        base: '/flow-calculator/',
        define: {
            "process.env.NODE_ENV": `"${mode}"`,
        }
    })
}
