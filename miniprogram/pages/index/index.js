// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://cat.erpnext.vip/files/c.png',
      'https://cat.erpnext.vip/files/d.png',
    ],
    indicatorDots: false, //	是否显示面板指示点
    autoplay: true, //是否自动切换
    circular: true, //是否采用衔接滑动
    vertical: false, //滑动方向是否为纵向
    interval: 5000, //自动切换时间间隔
    duration: 150, //滑动动画时长
    items: [
              {'mark':4.5, 'name':'Lisggk', 'image':'https://cat.erpnext.vip/files/e.png'}
           ]
  }
})
