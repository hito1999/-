// components/Lists/Lists.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       one:{
         type:Object,
         value:''
       },
       bbb:{
         type:String,
         value:''
       }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      one(e){
        console.log(e);
      }
  }
})
