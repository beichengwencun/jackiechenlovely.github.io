(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8e90ac78","chunk-ede950f6","chunk-7cc3a7c0"],{"1a7c":function(t,e,n){"use strict";n.r(e);var i={name:"ly-emotion",mounted:function(){var t=this,e=this.$el.innerHTML,n=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"].indexOf(e),i='<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'.concat(n,'.gif">');this.$nextTick(function(){t.$el.innerHTML=i})}},s=(n("e62d4"),n("2877")),a=function(t){t.options.__source="src/views/demo/components/Emotion/Emotion.vue"},o=Object(s.a)(i,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"ly-emotion"},[t._t("default")],2)},[],!1,null,"805a1896",null);"function"==typeof a&&a(o);e.default=o.exports},2677:function(t,e,n){},"374a":function(t,e,o){"use strict";o.r(e);o("a481"),o("7f7f");var n={name:"game",components:{Emotion:o("4b8a").default},data:function(){return{content:"",contentLen:0,replyIndex:0,uid:"",sendType:1,touristname:"",avater:"",temp_avater:"tianxian.jpg",active:0,avaterList:[{name:"tianxian.jpg"},{name:"boy.png"},{name:"girl.jpg"},{name:"jie.jpg"},{name:"meng.jpg"},{name:"tiao.png"}],type:2,showEmotion:!1,page:1,pageSize:5,count:0,data:[],dialogVisible:!1,tourist:""}},computed:{username:function(){return this.$store.state.d2admin.user.info.username}},mounted:function(){this.readMsg()},methods:{createReply:function(t,e){this.sendType=2,this.content="@".concat(t.touristname,":"),this.uid=t.id,this.replyIndex=e,this.contentLen=this.content.length},selectAvater:function(t,e){this.temp_avater=t.name,this.active=e},selectInfo:function(){this.tourist&&this.temp_avater&&(this.touristname=this.tourist,this.avater=this.temp_avater,this.type=2,this.dialogVisible=!1)},deleteReplay:function(t,e,n){var i=this;this.$http.post("/pc/deletereply",t).then(function(t){i.$message.success("删除回复成功"),i.data[e].reply.splice(n,1)})},deleteSentence:function(t,e){var n=this;this.$http.post("/pc/deletecomments",t).then(function(t){n.$message.success("删除评论成功"),n.data.splice(e,1)})},sendMsg:function(){var e=this;if(1===this.sendType){if(!this.content)return;if(this.username)this.type=1,this.touristname=this.username,this.avater="me.png";else if(!this.touristname||!this.avater)return void(this.dialogVisible=!0);this.$http.post("/pc/addcomments",{touristname:this.touristname,type:this.type,sentence:this.content,avater:this.avater}).then(function(t){e.$refs.scroll.scrollToTop(),e.content="",e.refresh()})}if(2===this.sendType){var t=this.content.substr(this.contentLen);if(!t.trim())return;this.$http.post("/pc/addreply",{uid:this.uid,sentence:t}).then(function(t){e.content="",e.sendType=1,e.readMsg()})}},readMsg:function(){var e=this;this.$http.get("/pc/readcomments",{params:{page:this.page,pageSize:this.pageSize}}).then(function(t){e.data=t.data,e.count=t.count})},handleSizeChange:function(t){this.page=1,this.pageSize=t,this.readMsg()},handleCurrentChange:function(t){this.page=t,this.readMsg()},refresh:function(){this.page=1,this.readMsg()},handleEmotion:function(t){this.content+=t},emotion:function(t){var e=t.replace(/\#|\;/gi,""),n=["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴","睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过","酷","冷汗","抓狂","吐","偷笑","可爱","白眼","傲慢","饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂","疑问","嘘","晕","折磨","衰","骷髅","敲打","再见","擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠","鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀","西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰","凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀","足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强","弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你","NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈","磕头","回头","跳绳","挥手","激动","街舞","献吻","左太极","右太极"].indexOf(e);return'<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/'.concat(n,'.gif" align="middle">')}}},i=(o("d289"),o("2877")),s=function(t){t.options.__source="src/views/demo/page4/index.vue"},a=Object(i.a)(n,function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("d2-container",{ref:"scroll",staticClass:"comments",attrs:{type:"ghost","better-scroll":""}},[a("template",{slot:"header"},[a("div",{staticClass:"header"},[s._v("留言板")])]),a("div",{staticClass:"listcontainer"},s._l(s.data,function(e,i){return a("div",{key:i,staticClass:"listitem"},[a("div",{staticClass:"listitem-time"},[s._v(s._s(s.dayjs(e.createtime).format("YYYY-MM-DD HH:mm:ss")))]),a("div",{staticClass:"listitem-tourists"},[a("div",{staticClass:"listitem-photo"},[a("img",{attrs:{src:o("7584")("./"+e.avater)}})]),a("div",[s._v(s._s(e.touristname)+"："),s.username?a("d2-icon",{attrs:{name:"trash"},nativeOn:{click:function(t){return s.deleteSentence(e,i)}}}):s._e()],1)]),a("div",{staticClass:"list-content",domProps:{innerHTML:s._s(e.sentence.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi,s.emotion))}}),"2"===e.type&&s.username?a("span",{staticClass:"reply",on:{click:function(t){return s.createReply(e,i)}}},[s._v("回复")]):s._e(),s._l(e.reply,function(e,n){return a("div",{key:n,staticClass:"replycontainer"},[a("div",{staticClass:"listitem-time"},[s._v(s._s(s.dayjs(e.createtime).format("YYYY-MM-DD HH:mm:ss")))]),a("div",{staticClass:"listitem-tourists"},[a("div",{staticClass:"listitem-photo"},[a("img",{attrs:{src:o("89bc")}})]),a("div",[s._v("站长回复："),s.username?a("d2-icon",{attrs:{name:"trash"},nativeOn:{click:function(t){return s.deleteReplay(e,i,n)}}}):s._e()],1)]),a("div",{staticClass:"list-content",domProps:{innerHTML:s._s(e.sentence.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi,s.emotion))}})])})],2)}),0),a("template",{slot:"footer"},[a("el-pagination",{attrs:{"current-page":s.page,"page-size":s.pageSize,"page-sizes":[5,10,15,20],layout:"sizes, prev, pager, next, jumper,total",total:s.count},on:{"size-change":s.handleSizeChange,"current-change":s.handleCurrentChange,"update:currentPage":function(t){s.page=t},"update:current-page":function(t){s.page=t}}}),a("div",{staticClass:"listinputcontainer"},[a("el-input",{class:[s.showEmotion?"defaut":""],attrs:{type:"textarea",placeholder:"请输入你想说的话",maxlength:"100",resize:"none","show-word-limit":"",rows:"3"},model:{value:s.content,callback:function(t){s.content="string"==typeof t?t.trim():t},expression:"content"}}),a("Emotion",{directives:[{name:"show",rawName:"v-show",value:s.showEmotion,expression:"showEmotion"}],on:{emotion:s.handleEmotion}}),a("el-button",{on:{click:function(t){s.showEmotion=!s.showEmotion}}},[a("d2-icon",{staticStyle:{"font-size":"20px"},attrs:{name:"smile-o"}})],1),a("el-button",{on:{click:s.sendMsg}},[s._v("发送")])],1)],1),a("el-dialog",{attrs:{title:"游客信息",modal:!1,visible:s.dialogVisible,width:"300px"},on:{"update:visible":function(t){s.dialogVisible=t}}},[a("el-input",{attrs:{size:"small",placeholder:"请输入游客名称"},model:{value:s.tourist,callback:function(t){s.tourist="string"==typeof t?t.trim():t},expression:"tourist"}}),a("el-row",{staticClass:"d2-mt d2-center",attrs:{type:"flex",justify:"center",align:"middle"}},s._l(s.avaterList,function(e,n){return a("el-col",{key:n,class:[s.active===n?"avater_active avater":"avater"],attrs:{span:4},nativeOn:{click:function(t){return s.selectAvater(e,n)}}},[a("el-avatar",{attrs:{size:"large",src:o("7584")("./"+e.name)}})],1)}),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:s.selectInfo}},[s._v("确 定")])],1)],1)],2)},[],!1,null,null,null);"function"==typeof s&&s(a);e.default=a.exports},"4b8a":function(t,e,n){"use strict";n.r(e);n("c5f6");var i=n("1a7c"),s={props:{height:{type:Number,default:200}},data:function(){return{list:[["微笑","撇嘴","色","发呆","得意","流泪","害羞","闭嘴"],["睡","大哭","尴尬","发怒","调皮","呲牙","惊讶","难过"]["傲慢"],["饥饿","困","惊恐","流汗","憨笑","大兵","奋斗","咒骂"],["疑问","嘘","晕","折磨","衰","骷髅","敲打","再见"],["擦汗","抠鼻","鼓掌","糗大了","坏笑","左哼哼","右哼哼","哈欠"],["鄙视","委屈","快哭了","阴险","亲亲","吓","可怜","菜刀"],["西瓜","啤酒","篮球","乒乓","咖啡","饭","猪头","玫瑰"],["凋谢","示爱","爱心","心碎","蛋糕","闪电","炸弹","刀"],["足球","瓢虫","便便","月亮","太阳","礼物","拥抱","强"],["弱","握手","胜利","抱拳","勾引","拳头","差劲","爱你"],["NO","OK","爱情","飞吻","跳跳","发抖","怄火","转圈"],["磕头","回头","跳绳","挥手","激动","街舞","左太极","右太极"]]}},methods:{clickHandler:function(t){var e="#".concat(t,";");this.$emit("emotion",e)}},components:{Emotion:i.default}},a=(n("5d15"),n("2877")),o=function(t){t.options.__source="src/views/demo/components/Emotion/index.vue"},r=Object(a.a)(s,function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",[i("div",{staticClass:"emotion-box",style:{height:n.height+"px"}},n._l(n.list,function(t,e){return i("div",{key:e,staticClass:"emotion-box-line"},n._l(t,function(e,t){return i("emotion",{key:t,staticClass:"emotion-item",nativeOn:{click:function(t){return n.clickHandler(e)}}},[n._v(n._s(e))])}),1)}),0)])},[],!1,null,"f85fa3f6",null);"function"==typeof o&&o(r);e.default=r.exports},"5d15":function(t,e,n){"use strict";var i=n("9aa0");n.n(i).a},7584:function(t,e,n){var i={"./boy.png":"980c","./girl.jpg":"8889","./jie.jpg":"ba43","./me.png":"89bc","./meng.jpg":"f97f","./tianxian.jpg":"8331","./tiao.png":"7d3f"};function s(t){var e=a(t);return n(e)}function a(t){if(n.o(i,t))return i[t];var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}s.keys=function(){return Object.keys(i)},s.resolve=a,(t.exports=s).id="7584"},"7d3f":function(t,e,n){t.exports=n.p+"img/tiao.3e4a67f9.png"},8331:function(t,e,n){t.exports=n.p+"img/tianxian.6c7b966e.jpg"},8889:function(t,e,n){t.exports=n.p+"img/girl.76ae5538.jpg"},"980c":function(t,e,n){t.exports=n.p+"img/boy.e3de3d45.png"},"9aa0":function(t,e,n){},ba43:function(t,e,n){t.exports=n.p+"img/jie.db3bc06c.jpg"},ba56:function(t,e,n){},d289:function(t,e,n){"use strict";var i=n("2677");n.n(i).a},e62d4:function(t,e,n){"use strict";var i=n("ba56");n.n(i).a},f97f:function(t,e,n){t.exports=n.p+"img/meng.ad6235f8.jpg"}}]);