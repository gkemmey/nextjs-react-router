module.exports = {
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      // {
      //   source: '/:path*',
      //   destination: '/',
      // },

      // should be unused rewrite
      {
        source: "/nothing-goes-here",
        destination: "/nothing-goes-here"
      }
    ];
  },
};
