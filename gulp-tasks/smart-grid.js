"use strict";

import gulp from "gulp";
const smartgrid = require("smart-grid");

gulp.task("smart-grid", (cb) => {
    smartgrid("./src/styles/vendor/import/", {
        outputStyle: "scss",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "30px", // gutter width
        mobileFirst: false,
        mixinNames: {
            container: "container"
        },
        container: {
            fields: "15px" // side fields
        },
        breakPoints: {
            xs: {
                width: "320px"
            },
            sm: {
                width: "668px"
            },
            md: {
                width: "768px"
            },
            lg: {
                width: "992px"
            },
            mlg : {
                width: "1200px"
            },
            xl: {
                width: "1600px"
            },
            xxl: {
                width: "1920px"
            }
        }
    });
    cb();
});