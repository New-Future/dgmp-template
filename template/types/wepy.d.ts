declare module 'wepy' {
    class App {
        //生命周期函数--监听小程序初始化	当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
        onLaunch(options?: PlainObject): any | void;

        //onShow	Function	生命周期函数--监听小程序显示	当小程序启动，或从后台进入前台显示，会触发 onShow
        onShow(options?: PlainObject): any | void;

        //onHide	Function	生命周期函数--监听小程序隐藏	当小程序从前台进入后台，会触发 onHide
        onHide(options?: PlainObject): any | void;

        //onError	Function	错误监听函数	当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
        onError(options?: PlainObject): any | void;

        //onPageNotFound	Function	页面不存在监听函数	当小程序出现要打开的页面不存在的情况，会带上页面信息回调该函数，详见下文
        onPageNotFound(options?: PlainObject): any | void;
    }


    class WepyComponent {
        $name: String;//组件名称。
        $isComponent: Boolean;//是否是组件，如果是页面，此值为false。
        $wxpage: Object;//小程序原生page。
        $root: page;//组件所在的Page对象，如果当前组件是Page对象，那么$root的值就是自己本身。
        $coms: Array<component>;//组件的子组件列表。
        $mixins: Array<mixin>;//组件所注入的Mixin对象。
        data: Object;//组件需要绑定的数据。
        methods: Array<Function>;//组件需要响应的事件列表。
        props: Array<Props>;//组件允许传递的props列表。
        events: Array<Function>;//组件通信时所需要的事件表现。

        ///对原有小程序的setData的封装
        setData(key: String | Object, value?: Object);

        ///相当于全局方法getCurrentPages()。
        getCurrentPages();

        $apply(func?: Function);//发起脏检查。
        $nextTick(func?: Function);//组件数据绑定完成后的回调事件，v1.6.1以上可用
    }


    export class app extends App {
        $wxapp: App;
        $pages: Array<page>;
        $interceptors: Array<Object>;
        use(middleWare: String | Function): void;
        // 拦截原生 api
        intercept(api: string, provider: PlainObject): void;
    }


    export class component extends WepyComponent {

        $parent: page;//组件的父组件，如果当前是组件是Page对象，那么$parent的值为App对象。


        ///通过组件名称路径查找组件对象。
        $getComponent(com: String);

        ///调用另一组件的方法
        $invoke(com: String | component);

        $broadcast(eventName: String, args?: any);//组件发起一个广播事件。

        $emit(eventName: String, args?: any);//组件发起一个冒泡事件。

    }

    export class page extends WepyComponent {
        $parent: app;//组件的父组件，如果当前是组件是Page对象，那么$parent的值为App对象。

        ///给页面加载preload数据
        $preload(key: String | Object, value?: Object);

        $redirect(url: String | Object, params?: Object);//wx.redirectTo的封装方法

        $navigate(url: String | Object, params?: Object);//wx.navigateTo的封装方法
        $switch(url: String | Object);//wx.switchTab的封装方法
    }


    export interface event {

        //事件名称
        //当事件为小程序原生事件时，如tap，change等，name值为system。 当事件为用户自定事件或者组件通信事件时，如$emit，$broadcast等，name值为自定事件的名称。
        name: String;

        source: component;//事件来源组件 
        //无论是小程序原生事件还是自定事件，都会有对应的事件来源组件。

        type: String;//事件类型
        //$emit事件中，type值为emit。bindtap事件中，type值为tap。

        // 方法

        //终止事件传播
        //在$emit或者$broadcast事件中，调用$destroy事件终止事件的传播。
        $destroy();

        //将内部小程序事件的属性传递到当前事件。        
        $transfor(wxevent: Object);
    }

    export class mixin {
        data?: PlainObject;
        methods?: Object;
    }

    // export const $createApp: any;//base.$createApp;
    // $createPage: any;//base.$createPage;

    // $isEmpty: any;// util.$isEmpty;
    // $isEqual: any;// util.$isEqual;
    // $isDeepEqual: any;// util.$isDeepEqual;
    // $has: any;// util.$has;
    // $extend: any;//util.$extend;
    // $isPlainObject: any;//util.$isPlainObject;
    // $copy: any;//util.$copy;

    // // wepy 对部分原生 api 进行 Promise 处理，需先执行 this.use('promisify')
    export function getUserInfo(): Promise<any>;// wx.getUserInfo;
    export function request(Object): Promise<any>;// wx.getUserInfo;
    type Props = any;
}


interface PlainObject {
    [key: string]: any
}

