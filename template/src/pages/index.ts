import wepy from "wepy";

export default class Index extends wepy.page {
    config = {
        navigationBarTitleText: '页面标题'
    }

    data = {
        msg: "loading"
    }

    onShow() {
        this.msg = "it works!";
    }

}