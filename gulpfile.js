var gulp = require("gulp"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  plumber = require("gulp-plumber"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function() {
  gulp
    .src("src/sass/main.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(rename("style.css"))
    .pipe(
      autoprefixer({
        browsers: ["last 20 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch", ["sass", "browser"], function() {
  gulp.watch("src/sass/**/*.scss", ["sass"]);
  gulp.watch("src/**/*.html", browserSync.reload);
  gulp.watch("src/scripts/**/*.js", browserSync.reload);
});

gulp.task("browser", function() {
  browserSync({
    server: {baseDir: "src"},
    notify: false
  });
});

gulp.task("build", function() {
  gulp.src(["src/css/*.css"]).pipe(gulp.dest("build/css"));
  gulp.src(["src/images/*.*"]).pipe(gulp.dest("build/images"));
  gulp.src("src/*.html").pipe(gulp.dest("build"));
  gulp.src("src/html/*.html").pipe(gulp.dest("build/html"));
  gulp.src("src/scripts/*.js").pipe(gulp.dest("build/scripts"));
});