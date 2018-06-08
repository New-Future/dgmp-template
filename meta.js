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
            "label": "Project name [小程序英文名称]"
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
        "author": {
            "type": "string",
            "label": "Author"
        },
        "lint": {
            "type": "confirm",
            "message": "Use ESLint to lint your code?",
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
    "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev.{{/inPlace}}"
}