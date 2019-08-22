const util = require('../../utils/toast.js')
Page({
  data: {
      action:'',
      isShow:false
  },
  onLoad:function(){
    this.setData({
       index:"list-1"
    })
  },
  onShow:function(){
    this.myComponent = this.selectComponent('#myComponent')
    // util.showToast();
     //fadeInDown fadeOutUp
  },
  toast(){
    let myComponent = this.myComponent;
    myComponent.showToast(5000);
  }
})
