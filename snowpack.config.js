module.exports = {
  devOptions: {
    open: "none"
  },
  buildOptions: {
    out: "www",
    clean: true,
    sourceMaps: true
  },
  "mount": {
    public: "/",
    styles: '/_dist_',
    src: '/_dist_',
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-babel",
    [
      '@snowpack/plugin-sass',
      {
        /* see options below */
      },
    ],
    // [
    //   // TODO: replace with internal snowpack optimizations later
    //   "@snowpack/plugin-webpack",
    //   {
    //     sourceMap: true,
    //     manifest: true,
    //     extendConfig: (config) => {
    //       return config;
    //     },
    //   }
    // ]
  ],
};