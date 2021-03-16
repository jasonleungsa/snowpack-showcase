const injectEnv = require('@snowpack/plugin-dotenv');
const httpProxy = require('http-proxy');

injectEnv();

const proxy = httpProxy.createServer({ target: 'https://www.seek.com.au/api/chalice-search', changeOrigin: true });

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  extends: '@snowpack/app-scripts-react',
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: ['@snowpack/plugin-postcss'],
  routes: [
    {
      src: '/search',
      dest: (req, res) => {
        proxy.web(req, res);
      },
    },
  ],
  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
    polyfillNode: true,
  },
  devOptions: {
    port: parseInt(process.env.PORT, 10) || 3000,
    open: 'none',
  },
};
