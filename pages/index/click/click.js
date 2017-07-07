

var count1 = 0;
var count2 = 0;

var pre_message='我是';
var middle_message='，我被点击了';
var suff_message='次！';

var param = {

  data:{
    message1: '我是message1，我被点击了0次！',
    message2: '我是message2，我被点击了0次！',
    button1: '按钮1',
    button2: '按钮2'
  },

  onClick:function(e){
    console.log(e);
    var id = e.currentTarget.id;
    if (id=='button1'){
      count1++;
      param.data.message1 = pre_message + id + middle_message + count1 + suff_message;
      this.setData(param.data);
    } else if (id == 'button2'){
      count2++;
      param.data.message2 = pre_message + id + middle_message + count2 + suff_message;
      this.setData(param.data);
    }
  }





};


Page(param)