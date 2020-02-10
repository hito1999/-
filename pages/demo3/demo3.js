// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        one:[
          {
            id:1,
            person:"小明",
            content:"代取中通快递，下午六点前送达",
            time:"2020年2月1日"
          },
          {
            id: 2,
            person: "小h",
            content: "邮政快递下午六点前送达",
            time: "2020年2月1日"
          }
        ]
  },
  addpost(){
    wx.navigateTo({
      url: '/pages/addpost/addpost',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //一般在此处发布异步请求来初始化页面数据
  },

  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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