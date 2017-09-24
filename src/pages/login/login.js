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
  }
}
Page(pageObject);