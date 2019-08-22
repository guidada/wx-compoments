var filters = {
  //字符串截取
  subStrCut: function (str, len) {
    return str.substring(0, len);
  },

  /**
   * 保留小数点位数
   */
  toFix: function (value, n) {
    var num = parseFloat(value);
    return num.toFixed(n);
  },
  showToast:function(){
    var that = this;
    that.setData({
      action: 'fadeInDown',
      isShow: true,
      src: "../../static/images/success.png",
      text: '成功'
    })
    setTimeout(function () {
      that.setData({
        action: 'fadeOutUp'
      })
    }, 3000)
  }
}
module.exports = {
  showToast: filters.showToast,
  subStrCut: filters.subStrCut
}