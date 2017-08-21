const path = require('path');
module.exports = {
    entry: {
        app: './src/main.ts',
        styles: './src/styles/index.css',
        vendor: [
            'core-js',
            'zone.js/dist/zone',
            'zone.js/dist/long-stack-trace-zone',
            '@angular/core',
            '@angular/platform-browser-dynamic',
            '@angular/platform-browser',
            '@angular/common',
            "@angular/compiler",
            "@angular/forms",
            "@angular/router",
            "@angular/animations",
            "rxjs",
        ],

    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name]-chunk.js',
        path: path.resolve(__dirname, "../public")
    },
};