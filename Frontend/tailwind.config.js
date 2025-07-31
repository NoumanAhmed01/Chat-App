module.exports = {
  // Use `module.exports` instead of `export default`
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Add DaisyUI plugin here
  ],
};
