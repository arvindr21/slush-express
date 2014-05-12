/*
 * slush-express
 * https://github.com/arvindr21/slush-express
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

gulp.task('default', function (done) {
    var prompts = [{
        type: 'list',
        name: 'enginename',
        message: 'Select a View Engine',
        choices: [{
            name: "Jade",
            value: "jade"
          }, {
            name: "Ejs",
            value: "ejs"
          }, {
            name: "Hogan",
            value: "hjs"
          }

        ],
        default: 'jade'
      },
      {
        type: 'list',
        name: 'styleengine',
        message: 'Select a Stylesheet Engine',
        choices: [{
            name: "CSS",
            value: "css"
          }, {
            name: "LESS",
            value: "less"
          }, {
            name: "Stylus",
            value: "stylus"
          }
          , {
            name: "SCSS",
            value: "scss"
          }
        ],
        default: 'css'
      },

      ];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.styleengine) {
                return done();
            }

            // View Engines
            if(answers.enginename == 'jade')
            {
                gulp.src(__dirname + '/templates/jade/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }
            if(answers.enginename == 'ejs')
            {
                gulp.src(__dirname + '/templates/ejs/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }
            if(answers.enginename == 'hjs')
            {
                gulp.src(__dirname + '/templates/hjs/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }

            // Style Engines
            if(answers.styleengine == 'css')
            {
                gulp.src(__dirname + '/templates/css/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }
            if(answers.styleengine == 'less')
            {
                gulp.src(__dirname + '/templates/less/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }
            if(answers.styleengine == 'stylus')
            {
                gulp.src(__dirname + '/templates/stylus/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }
            if(answers.styleengine == 'scss')
            {
                gulp.src(__dirname + '/templates/scss/**')
                    .pipe(conflict('./'))
                    .pipe(gulp.dest('./'));
            }

            gulp.src(__dirname + '/templates/static/**')
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'));

            gulp.src(__dirname + '/templates/app/**')
                .pipe(template(answers))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
