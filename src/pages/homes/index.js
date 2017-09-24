import { GET, POST } from '../../libs/request.js';
import promisify from '../../libs/promisify.js';
var pageObject = {
  data: {
    primarySize: 'default',
    disabled: false,
    plain: true,
    loading: true
  },
  onLoad(options){
  	console.log("load");
  },
  onReady(){
  	console.log("load");
  },
  onShow(){
  	console.log("load");
  },
  onHide(){
  	console.log("load");
  },
  directTologin(){
  	wx.redirectTo({
  		url: "../login/login"
  	});
	wx.showToast({
	  title: '成功',
	  icon: 'success',
	  duration: 2000
	});
	promisify(wx.getLocation)({type:'wgs84'}).then(res => {
		console.log(res);
	})
	wx.request({
	  url: 'https://www.tuzilalala.top:8764/user/login', //仅为示例，并非真实的接口地址
	  // data: {
	  //    "name":"18363120004","password":"123456"
	  // },
	  method: 'POST',
	  header: {
	      'content-type': 'application/json' // 默认值
	  },
	  success: function(res) {
	    console.log(res.data)
	  }
	})
	POST('https://www.tuzilalala.top:8764/user/login',{"name":"18363120004","password":"123456"}).then(res => {
		console.log(res);
	})
  }
}
Page(pageObject);