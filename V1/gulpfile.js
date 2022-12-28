const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const prefix = require("gulp-autoprefixer");
const minify = require("gulp-clean-css");
const terser = require("gulp-terser");
const imagewebp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const browsersync = require("browser-sync").create();

function compilescss() {
  return src("src/scss/*.scss")
    .pipe(sass())
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(prefix("last 2 versions"))
    .pipe(minify())
    .pipe(dest("dist/css"));
}

function optimizeimg() {
  return src("src/raw_images/*.{jpg,png}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 2 }),
      ])
    )
    .pipe(dest("dist/images"));
}

function webpImage() {
  return src("dist/images/*.{jpg,png}")
    .pipe(imagewebp())
    .pipe(dest("dist/images"));
}

function transferSVG() {
  return src("src/images/*.svg").pipe(dest("dist/images"));
}

function jsmin() {
  return src("src/js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

function fontFiles() {
  return src("src/fonts/*").pipe(dest("dist/fonts"));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    [
      "src/scss/**/*.scss",
      "src/js/*.js",
      "src/raw_images/*.{jpg,png}",
      "src/images/*.{jpg,png}",
      "src/images/*.svg",
      "src/fonts/*",
    ],
    series(
      compilescss,
      jsmin,
      optimizeimg,
      webpImage,
      transferSVG,
      fontFiles,
      browsersyncReload
    )
  );
}

exports.default = series(
  compilescss,
  jsmin,
  optimizeimg,
  webpImage,
  transferSVG,
  fontFiles,
  browsersyncServe,
  watchTask
);
