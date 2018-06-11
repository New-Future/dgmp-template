module.exports = {
    "helpers": {
        "if_or": function (v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this);
            }

            return options.inverse(this);
        }
    },
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "label": "Project name [仓库英文名称无空格]"
        },
        "description": {
            "type": "string",
            "required": true,
            "label": "Project description[小程序描述]",
            "default": "A DG wepy example"
        },
        "appid": {
            "type": "string",
            "required": true,
            "message": "AppId",
            "default": "touristappid"
        },
        "appid_int": {
            "type": "string",
            "required": false,
            "message": "Integration AppId [int环境AppID可在multiapp.json修改]",
        },
        "appid_edog": {
            "type": "string",
            "required": false,
            "message": "Edog AppId [edog环境AppID可在multiapp.json修改]",
        },
        "author": {
            "type": "string",
            "label": "Author"
        },
        "repository": {
            "type": "string",
            "required": false,
            "message": "repository url[仓库地址]"
        },
        "lint": {
            "type": "confirm",
            "message": "lint your code?",
            "default": true
        },
        // "web": {
        //     "type": "confirm",
        //     "message": "Use web transform feature in your project?",
        //     "default": false
        // },

    },
    "filters": {
        ".stylelintrc.js": "lint",
        ".tslint.json": "lint",
        // "src/index.template.html": "web",
    },
    "completeMessage": "{{#inPlace}}To get started:\n\n  npm i\n  npm run dev {{else}}To get started:\n\n  cd {{destDirName}}\n  npm i\n  npm run dev{{/inPlace}}"
}