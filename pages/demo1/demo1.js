// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     num:0
  },
  //输入框的input事件执行逻辑
  handleInput(e){
    console.log(e);
    this.setData({
      num:e.detail.value//value是一个字符串，所以之后num就是一个字符串
    })
  },
  handletap(e){
    console.log(e);
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      num: parseInt(this.data.num) +  operation
    })
  }
})