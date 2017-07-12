var param={
  data:{
    view1:'view1',
    view2:'view2',
    buttonName:'selectButton'
  },
  bindSelectOnClick:function(e){
    // var query = wx.createSelectorQuery()

    // wx.createSelectorQuery().select('#viewId1').boundingClientRect(function (rect) {
    //   console.log(rect.id); // 节点的ID
    //   console.log(rect.dataset); // 节点的dataset
    //   // rect.left    // 节点的左边界坐标
    //   // rect.right   // 节点的右边界坐标
    //   // rect.top     // 节点的上边界坐标
    //   // rect.bottom  // 节点的下边界坐标
    //   // rect.width   // 节点的宽度
    //   // rect.height  // 节点的高度
    // }).exec();
  }
  // ,
  // onLoad:function(){
  //   // wx.createSelectorQuery().select('#viewId1').boundingClientRect(function (rect) {
  //   //   console.log(rect.left); // 节点的左边界坐标
  //   //   console.log(rect.top); // 节点的上边界坐标
  //   //   console.log(rect.width); // 节点的宽度
  //   //   console.log(rect.height); // 节点的高度
  //   // }).exec();
  // }
}

Page(param)