var param = {

  /**
   * 页面的初始数据
   */
  data: {
    posX: 0,//人物位置X坐标
    posY: 0,//人物位置Y坐标
    posLeftConsoleCenterX: 0,//左侧控制区圆心X坐标
    posLeftConsoleCenterY: 0,//左侧控制区圆心Y坐标
    posRightConsoleCenterX: 0,//右侧控制区圆心X坐标
    posRightConsoleCenterY: 0,//右侧控制区圆心Y坐标
    imageWidth: 50,//人物大小-宽度
    imageHeight: 50,//人物大小-高度
    screenLeftBorder : 0,//屏幕左边界
    screenRightBorder:0,//屏幕右边界
    screenTopBorder:0,//屏幕上边界
    screenBottomBorder:0//屏幕下边界
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //初始化人物初始位置
    param.data.posX=0;
    param.data.posY=0;
    //获取左控制区的圆心
    wx.createSelectorQuery().select('#leftConsole').boundingClientRect(function (rect) {
      param.data.posLeftConsoleCenterX = (rect.left + rect.width/2);
      param.data.posLeftConsoleCenterY = (rect.top + rect.height/2);
    }).exec();
    //获取右控制区的圆心
    wx.createSelectorQuery().select('#rightConsole').boundingClientRect(function (rect) {
      param.data.posRightConsoleCenterX = (rect.left + rect.width / 2);
      param.data.posRightConsoleCenterY = (rect.top + rect.height / 2);
    }).exec();
    //
    //获取屏幕边界
    wx.createSelectorQuery().select('.body').boundingClientRect(function (rect) {
      param.data.screenRightBorder = rect.width;
      param.data.screenBottomBorder = rect.height;
    }).exec();
    this.setData(param.data);
  },

  /**
   * 触碰滑动绑定函数
   * 负责计算滑动坐标举例圆心的方向距离，来计算人物跑动的距离和加速度
   */
  bindTouchMove: function (e) {
    var paramReturn = checkBorderImpact(e.touches[0].clientX, e.touches[0].clientY - 300);
    console.log(Math.sin(Math.PI/6));
    this.setData(paramReturn.data);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
}

/**
 * 边界碰撞检测
 */
function checkBorderImpact(posX,posY){
  if (posX < param.data.screenLeftBorder){
    //碰撞屏幕左边界
    posX = param.data.screenLeftBorder + 1;
  } else if (posX > param.data.screenRightBorder){
    //碰撞屏幕右边界
    posX = param.data.screenRightBorder - 1;
  }

  if (posY < param.data.screenTopBorder){
    //碰撞屏幕上边界
    posY = param.data.screenTopBorder + 1;
  } else if (posY > param.data.screenBottomBorder){
    //碰撞屏幕下边界
    posY = param.data.screenBottomBorder - 1;
  }
  param.data.posX = posX;
  param.data.posY = posY;
  return param;
}

/**
 * 触碰点距离左侧控制区圆心的角度计算
 * 
 * 计算方法：计算触摸点与左侧控制区的圆心之间的角度tan值
 */
function angleCalculation(touchesX, touchesY, posLeftConsoleCenterX, posLeftConsoleCenterY){
  return (touchesX - posLeftConsoleCenterX) / (touchesY - posLeftConsoleCenterY);
  //TODO 此处需要主要方向，因为一三象限得出的值均为正，所以可能会造成方向混乱，参考方式：可以选择取绝对值，将方向正负号保留，算出来最后步进长度之后，再加上符号
}

/**
 * 人物移动
 * 
 * 移动方法：
 * 采用计算触摸点与左侧控制区的圆心之间的角度tan值，得出的即为角度，使用该值乘以1，即每次以x轴1个单位进行步进，即可
 */
function boxMove(posX,posY,){

}


Page(param) 