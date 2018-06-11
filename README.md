# dgmp-template

## Quick Start

1. `npm install wepy-cli -g` 安装wepy-cli (如果安装过跳过此步骤);
2. `wepy init NewFuture/dgmp-template demo` 根据提示填写必要信息(demo 为项目名);
3. `cd demo` 切换到项目目录;
4.  `npm i` 安装依赖;
5. `npm run dev`开发模式编译;
6.  打开调试工具，将此项目目录添加进去即可预览效果;


## Multi App (多版本小程序编译)

* `npm run build` 默认编译生成环境版本
* `npm run build:int` 编译Integration集成环境版本
* `npm run build:edog` 编译Edog 测试环境版本

可以在配置文件 [`multiapp.json`](template/multiapp.json)中修改对应appid的配置

**输出目录暂不支持修改**
