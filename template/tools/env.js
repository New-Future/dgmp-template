#! /usr/bin/env node

const $fs = require('fs');

const config = require('../project.config.json');
const setting = require('../multiapp.json');

const env = process.argv[2] || 'prod';
const dist = (setting[env].output || 'dist') + '/project.config.json';

if (setting[env].appid) {
    config.appid = setting[env].appid;
}
config.miniprogramRoot="./"

console.log('<' + config.appid + '> 正在保存 ' + dist)

$fs.writeFile(
    dist,
    JSON.stringify(config),
    function (err) {
        if (err) {
            console.error(err)
        } else {
            console.info('done!');
        }
    }
);