// componets/toast/toast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    time: {
      type: Number,
      value: 1000
    },
    show: {
      type: Boolean,
      value: true
    },
    text: {
      type: String,
      value: ""
    },
    type:{
      type: String,
      value: "erro"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true,
    action: '',
    style: [
      {
      type: "success",
      color: "#67C23A",
      background: "#F0F9EB",
      icon: "../../static/images/success.png"
      },
      {
        type: "warn",
        color: "#E6A23C",
        background: "#FDF6EC",
        icon: "../../static/images/warn.png"
      },
      {
        type: "erro",
        color: "#F56C6C",
        background: "#FEF0F0",
        icon: "../../static/images/err.png"
      },
      {
        type: "info",
        color: "#909399",
        background: "#EDF2FC",
        icon: "../../static/images/info.png"
      }
    ]
  },
  ready: function() {
    var config= this.properties
    console.log(config)
    if (!config.show) {
        return;
    }
    var arr=this.data.style;
    var that=this;
    arr.forEach((item, index, arry)=>{
       if(item.type==config.type){
           that.setData({
             text: config.text,
              info:item
           });
       }
    });
    console.log(that.data.info);
    that.showToast(config.time);
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showToast: function(time) {
      var that = this;
      that.data.action="fadeInDown";
      that.data.isShow=true;
      setTimeout(function() {
        that.setData({
          action: 'fadeOutUp'
        })
      }, time)
    }
  }
})