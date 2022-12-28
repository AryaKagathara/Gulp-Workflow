<p align="center">
  <a href="https://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
  <p align="center">The streaming build system</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Azure Pipelines Build Status][azure-pipelines-image]][azure-pipelines-url] [![Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![OpenCollective Backers][backer-badge]][backer-url] [![OpenCollective Sponsors][sponsor-badge]][sponsor-url] [![Gitter chat][gitter-image]][gitter-url]


## What is gulp?

- **Automation** - gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.
- **Platform-agnostic** - Integrations are built into all major IDEs and people are using gulp with PHP, .NET, Node.js, Java, and other platforms.
- **Strong Ecosystem** - Use npm modules to do anything you want + over 3000 curated plugins for streaming file transformations.
- **Simple** - By providing only a minimal API surface, gulp is easy to learn and simple to use.


## Process
#
#### JS -> JS (Minified)
```mermaid
graph TD;
    src/js/*.js-->dist/js/*.js-minfied;
```
#
#### SCSS -> CSS (Minified)
```mermaid
graph TD;
    src/scss/*.scss-->dist/css/*.css-minfied;
```
#
#### Raw_images(JPG/PNG) -> Images (Compressed JPG/PNG) -> WebP Images (Converted)
```mermaid
graph TD;
    src/raw_images/*.png/jpg-->dist/images/*.png/jpg-compressed-->dist/images/*.webp-WEBPconverted;
```
