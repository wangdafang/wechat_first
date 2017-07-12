var param = {
  data:{
    consoleButton:'sendMessage'
  },
  bindConsoleOnClick:function(e){
    // sendMessage('Hello before');
    // createSocket();
    // sendMessage('Hello after');



  }
}

// var socketOpen = false;

// function createSocket(){
//   wx.connectSocket({
//     url: 'www.baidu.com',
//     data: {
//       msg:'Hello bat'
//     },
//     header: {
//       'content-type': 'application/json'
//     },
//     method: "GET"
//   })
// }

// wx.onSocketOpen(function (res) {
//   socketOpen = true;
// })

// function sendMessage(msg){
//   if (socketOpen){
//     console.log(msg);
//   }
// }

Page(param)