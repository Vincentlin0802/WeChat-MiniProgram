// pages/index/index.js
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js
const app = getApp()

Page({
  

  /**
   * Page initial data
   */
  data: {
    //這邊是頁面第一次加載時所有東西的變量
    //先設變量,初始為空,也可以設為別的
    latitude:"123",
    longtitude:"",
    result:[],
    info:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  callButton:function(options){
    //開一個對象叫做abc為釣用頁面本身
    var abc = this
    wx.getLocation({
      //下面一行把叫回來的東西 叫做res所以console出來會是這樣
      success: function(res) {
        //調用成功後 會跑到這裡
        console.log("-----success-----")
        console.log(res)
        abc.setData({
          latitude:res.latitude,
          result:res
        })
      }
    })
    },

    callLocationAPI:function(){
      //bcd是這個頁面的意思 因為下一行讓他復職成this(調用對象本身)
      var bcd = this;
      var myAmapFun = new amapFile.AMapWX({ key: '7755756bb1cce76491573ea46ff05546' });
      myAmapFun.getPoiAround({
        success: function (data) {
          //成功回调,回調內容叫做底下那行的變量data
          console.log(data)
          //把這個頁面設置appdata
          bcd.setData({
            //頁面initial中的data中的info 復職為回調回來的data中的poisData
            info:data.poisData
          })
        },
        fail: function (info) {
          //失败回调
          console.log(info)
        }
      })
    },
     callWeather:function(){
      var that = this;
       var myAmapFun = new amapFile.AMapWX({ key: '7755756bb1cce76491573ea46ff05546' });
    myAmapFun.getWeather({
      success: function (src) {
        //成功回调
        console.log(src)
        that.setData({
          city:src.city,
          search:src
        })
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  callWeatherForecast: function () {
    var def = this;
    var myAmapFun = new amapFile.AMapWX({ key: '7755756bb1cce76491573ea46ff05546' });
    myAmapFun.getWeather({
      type:"forecast",
      success: function (fct) {
        //成功回调
        console.log(fct)
        def.setData({
          forecast:fct.forecast,
          forecast:fct
        })
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  }
 
  
})

