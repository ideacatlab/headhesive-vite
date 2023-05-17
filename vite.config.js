import { defineConfig } from "vite";

export default defineConfig({
    build: {
        lib: {
            entry: "src/headhesive-vite.js",
            name: "HeadhesiveVite",
            fileName: "headhesive-vite",
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
