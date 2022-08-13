import common from '../../utils/public.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    majorArr: [{
        picUrl: '/iamges/kecheng1.png',
        text: "平面设计",
        src: "/pages/ps/ps",
        openType: "navigate"
      },
      {
        picUrl: '/iamges/kecheng2.png',
        text: "室内设计",
        src: "/pages/works/works",
        openType: "switchTab"
      },
      {
        picUrl: '/iamges/kecheng3.png',
        text: "UI设计"
      },
      {
        picUrl: '/iamges/kecheng4.png',
        text: "影视后期"
      },
      {
        picUrl: '/iamges/kecheng5.png',
        text: "Web前端"
      }
    ],
    workArr: [{
      picImg: '/iamges/xszp1.jpg',
      title: 'UI设计作品'
    }, {
      picImg: '/iamges/xszp2.jpg',
      title: '平面学员作品'
    }, {
      picImg: '/iamges/xszp3.jpg',
      title: '电商学院作品'
    }, {
      picImg: '/iamges/xszp4.jpg',
      title: '室内设计作品'
    }, {
      picImg: '/iamges/xszp5.jpg',
      title: '电商设计作品'
    }, {
      picImg: '/iamges/xszp6.jpg',
      title: '影视后期作品'
    }, {
      picImg: '/iamges/xszp7.jpg',
      title: '建筑景观作品'
    }, {
      picImg: '/iamges/xszp8.jpg',
      title: '三维仿真作品'
    }],
    dynewLists: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      success: res => {
        res.data.forEach(item => {
          // let time = item.posttime * 1000
          // let d = new Date(time)
          // let year = d.getFullYear()
          // let moth = d.getMonth() + 1>10?d.getMonth():'0'+d.getMonth()
          // let day = d.getDate()>10?d.getDate():'0'+d.getDate()
          // item.posttime = `${year}-${moth}-${day}`
          item.posttime = common.getMyDate(Number(item.posttime),'.')
        })
        this.setData({
          dynewLists: res.data
        })
      }
    })
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