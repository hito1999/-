// pages/addpost/addpost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:""
  },
  change(e){
      var that=this;
      that.setData({
        content:e.detail.value
      })
  },
  back(){
    wx.navigateTo({
      url: '/pages/demo3/demo3',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  submit(e){
    console.log(this.data.content);
    if(this.data.content=='')
    {
      wx.showToast({

      title: '内容不能为空！',
 
      icon: 'none',
 
      duration: 2000//持续的时间
 
    })
    }
    
    else
    {
      //此部分为将发送请求将信息存入
      this.data.content='';
      wx.navigateBack({
        delta: 1
      });
      wx.showToast({

        title: '成功',
   
        icon: 'success',
   
        duration: 2000//持续的时间
   
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})