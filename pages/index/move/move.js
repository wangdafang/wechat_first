var screenLeftBorder=0;//屏幕左边界
var screenRightBorder=0;//屏幕右边界
var screenTopBorder=0;//屏幕上边界
var screenBottomBorder=0;//屏幕下边界

var startMove = false;

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
    imageHeight: 50//人物大小-高度
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
      screenRightBorder = rect.width;
      screenBottomBorder = rect.height;
    }).exec();
    this.setData(param.data);
  },

  /**
   * 触碰滑动绑定函数
   * 负责计算滑动坐标举例圆心的方向距离，来计算人物跑动的距离和加速度
   */
  bindTouchMove: function (e) {
    while (startMove){
      var touchesX = e.touches[0].clientX;
      var touchesY = e.touches[0].clientY;
      //计算触碰位置距离左侧控制区的角度
      var deviation = angleCalculation(touchesX, touchesY, param.data.posLeftConsoleCenterX, param.data.posLeftConsoleCenterY);

      var displacementX = checkDirection(touchesX, param.data.posLeftConsoleCenterX);
      var displacementY = checkDirection(touchesY, param.data.posLeftConsoleCenterY);

      var x_pos = param.data.posX + displacementX * 1;
      var y_pos = param.data.posY + displacementY * deviation;

      var borderCheckPos = checkBorderImpact(x_pos, y_pos);

      param.data.posX = borderCheckPos.posX;
      param.data.posY = borderCheckPos.posY;
      this.setData(param.data);
    }
  },

  /**
   * 点击事件开始：即手指点击屏幕的瞬间触发
   * 设置startMove为true
   */
  bindTouchStart:function(e){
    console.log('点击事件开始');
    startMove = true;
  },

  /**
  * 点击事件结束：即手指离开屏幕
  *  设置startMove为false
  */
  bindTouchEnd: function (e) {
    console.log('点击事件结束');
    startMove = false;
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
 * 方向选择
 * 传入两个值，如果前者大则返回1，如果后者大则返回-1，如果相等则返回0
 */
function checkDirection(firstNum,secondNum){
  if (firstNum > secondNum){
    return 1;
  } else if (firstNum < secondNum){
    return -1;
  } else {
    return 0;
  }
}

/**
 * 边界碰撞检测
 */
function checkBorderImpact(posX,posY){
  if (posX < screenLeftBorder){
    //碰撞屏幕左边界
    posX = screenLeftBorder + 1;
  } else if (posX > screenRightBorder){
    //碰撞屏幕右边界
    posX = screenRightBorder - 1;
  }

  if (posY < screenTopBorder){
    //碰撞屏幕上边界
    posY = screenTopBorder + 1;
  } else if (posY > screenBottomBorder){
    //碰撞屏幕下边界
    posY = screenBottomBorder - 1;
  }
  return {posX,posY};
}


/**
 * 触碰点距离左侧控制区圆心的角度计算
 * 
 * 计算方法：计算触摸点与左侧控制区的圆心之间的角度tan值
 */
function angleCalculation(touchesX, touchesY, posLeftConsoleCenterX, posLeftConsoleCenterY){
  var deviation = Math.abs((touchesX - posLeftConsoleCenterX) / (touchesY - posLeftConsoleCenterY))
  if (deviation>0.1){
    deviation = 0.1;
  }
  return deviation;
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