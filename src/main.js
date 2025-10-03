import {
	createSSRApp
} from "vue";
import App from "./App.vue";

// 定义全局数据  通过vue的原型来实现
export function createApp() {
	const app = createSSRApp(App);
    app.config.globalProperties.baseurl = "www.baidu.com";


    return {
		app,
	};
}
