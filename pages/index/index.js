//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    showLittle: 'showLittle',
    showSwiper: 'showSwiper',
    showClick: 'showClick',
    motto: 'showOnClick',
    showMsg: 'nothing',
    showMove: 'showMove',
    showSocket:'showSocket',
    showSelect:'showSelect',
    hidden: true,
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  bindOnClick:function(e){
    if (this.data.showMsg == 'nothing') {
      this.setData({
        hidden: false,
        showMsg: 'onClick!'
      })
    } else {
      this.setData({
        showMsg: 'nothing',
        hidden: true
      })
    }
  },
  bindShowLittle:function(e){
    wx.navigateTo({
      url: '/pages/index/lite/lite'
    })
  },
  bindSwiperOnClick: function (e) {
    wx.navigateTo({
      url: '/pages/index/swiper/swiper'
    })
  },

  bindClickOnClick: function (e) {
    wx.navigateTo({
      url: '/pages/index/click/click'
    })
  },

  bindMoveOnClick: function (e) {
    wx.navigateTo({
      url: '/pages/index/move/move'
    })
  },
  bindShowSocket: function (e) {
    wx.navigateTo({
      url: '/pages/index/socket/socket'
    })
  },
  bindShowSelect: function (e) {
    wx.navigateTo({
      url: '/pages/index/select/select'
    })
  }


})
