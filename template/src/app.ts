import wepy from 'wepy'
import 'wepy-async-function'

export default class extends wepy.app {
    config = {
        pages: [
            'pages/index'
        ],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: 'WeChat',
            navigationBarTextStyle: 'black'
        }
    }

    globalData = {
        userInfo: null
    }

    constructor() {
        super()
        this.use('requestfix')
    }
}
