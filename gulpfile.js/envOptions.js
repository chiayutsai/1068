const srcPath = './app';
const distPath = './dist';
const nodePath = './node_modules';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/js/**/*.js`,
      `!${srcPath}/style/**/*.scss`,
      `!${srcPath}/style/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [
      `${srcPath}/**/*.html`,
    ],
    ejsSrc: [
      `${srcPath}/**/*.ejs`,
    ],
    path: distPath,
  },
  style: {
    src: [
      `${srcPath}/style/**/*.scss`,
      `${srcPath}/style/**/*.sass`,
    ],
    path: `${distPath}/style`,
  },
  javascript: {
    src: [
      `${srcPath}/js/**/*.js`
    ],
    concat: 'all.js',
    path: `${distPath}/js`,
  },
  vendors: {
    src: [
      `${nodePath}/jquery/dist/**/jquery.min.js`,
      `${nodePath}/lightgallery/dist/**/lightgallery.min.js`,
      `${nodePath}/lightgallery/modules/*.js`,

    ],
    concat: 'vendors.js',
    path: `${distPath}/js`,
  },
  bootstrap: {
    src: [
      `${nodePath}/bootstrap/dist/**/bootstrap.bundle.min.js`,
    ],
    concat: 'bootstrap.js',
    path: `${distPath}/js`,
  },
  img: {
    src: [
      `${srcPath}/images/**/*`,
    ],
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
