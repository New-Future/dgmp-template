#! /usr/bin/env node

'use strict';

const $fs = require('fs');
const { exec } = require('child_process');
//  require('wepy');

const config = require('../project.config.json');
const setting = require('../multiapp.json');


const env = process.argv[2] || 'prod';
const more = process.argv[3] || '';
const outDir = (setting[env].output || 'dist');
const dist = outDir + '/project.config.json';

if (setting[env].appid) {
    config.appid = setting[env].appid;
}
config.miniprogramRoot = './';
process.env.NODE_ENV = 'production';


console.log('start to complie:');
exec(
    `wepy build --no-cache --target "${outDir}"${more ? " " + more : ""}`,
    function (err, stdout, stderr) {
        if (err) {
            console.error('complie error', err);
        } else {
            console.log('<' + config.appid + '> 正在保存 ' + dist)
            $fs.writeFile(
                dist,
                JSON.stringify(config),
                function (err) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.info('done!');
                        console.log(`\n小程序${env} 环境代码已输出到 ${outDir}/ 目录`);
                    }
                }
            );
        }
    }
).stdout.pipe(process.stdout);
