(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a9429aa2"],{"11e9":function(e,a,c){var d=c("52a7"),n=c("4630"),r=c("6821"),i=c("6a99"),t=c("69a8"),h=c("c69a"),m=Object.getOwnPropertyDescriptor;a.f=c("9e1e")?m:function(e,a){if(e=r(e),a=i(a,!0),h)try{return m(e,a)}catch(c){}if(t(e,a))return n(!d.f.call(e,a),e[a])}},"5dbc":function(e,a,c){var d=c("d3f4"),n=c("8b97").set;e.exports=function(e,a,c){var r,i=a.constructor;return i!==c&&"function"==typeof i&&(r=i.prototype)!==c.prototype&&d(r)&&n&&n(e,r),e}},"7f7f":function(e,a,c){var d=c("86cc").f,n=Function.prototype,r=/^\s*function ([^ (]*)/,i="name";i in n||c("9e1e")&&d(n,i,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},"89d0":function(e,a,c){"use strict";var d=c("abdb"),n=c.n(d);n.a},"8b97":function(e,a,c){var d=c("d3f4"),n=c("cb7c"),r=function(e,a){if(n(e),!d(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,a,d){try{d=c("9b43")(Function.call,c("11e9").f(Object.prototype,"__proto__").set,2),d(e,[]),a=!(e instanceof Array)}catch(n){a=!0}return function(e,c){return r(e,c),a?e.__proto__=c:d(e,c),e}}({},!1):void 0),check:r}},9093:function(e,a,c){var d=c("ce10"),n=c("e11e").concat("length","prototype");a.f=Object.getOwnPropertyNames||function(e){return d(e,n)}},"9ed5":function(e,a,c){},aa77:function(e,a,c){var d=c("5ca1"),n=c("be13"),r=c("79e5"),i=c("fdef"),t="["+i+"]",h="​",m=RegExp("^"+t+t+"*"),o=RegExp(t+t+"*$"),k=function(e,a,c){var n={},t=r((function(){return!!i[e]()||h[e]()!=h})),m=n[e]=t?a(_):i[e];c&&(n[c]=m),d(d.P+d.F*t,"String",n)},_=k.trim=function(e,a){return e=String(n(e)),1&a&&(e=e.replace(m,"")),2&a&&(e=e.replace(o,"")),e};e.exports=k},abdb:function(e,a,c){},bf6a:function(e,a,c){"use strict";c.r(a);var d=function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("div",[c("h1",[e._v("创建地域模板")]),c("div",[c("SetPostFreeArea",{ref:"areaComponnet"})],1),c("div",[c("el-form",{ref:"tplForm",attrs:{model:e.tplForm,rules:e.rules}},[c("el-form-item",{attrs:{prop:"name"}},[e._v("模板名称："),c("el-input",{model:{value:e.tplForm.name,callback:function(a){e.$set(e.tplForm,"name",a)},expression:"tplForm.name"}})],1),c("el-button",{attrs:{type:"primary",loading:e.tplForm.submitBtnLoading},on:{click:function(a){return e.submitForm("tplForm")}}},[e._v("立即保存")]),c("el-button",{on:{click:function(a){return e.resetForm("tplForm")}}},[e._v("重置")])],1)],1)])},n=[],r=(c("7f7f"),c("1bab")),i=function(){var e=this,a=e.$createElement,c=e._self._c||a;return c("div",[c("el-row",{staticClass:"el-row"},[c("el-switch",{attrs:{"active-text":"全选","inactive-text":"全不选"},on:{change:e.checkAllArea},model:{value:e.checkAll,callback:function(a){e.checkAll=a},expression:"checkAll"}})],1),e._l(e.cityOptionsArea,(function(a,d){return[c("el-row",{staticClass:"el-row"},[c("el-col",{attrs:{span:6}},[c("el-checkbox",{attrs:{label:a.area},on:{change:function(c){return e.handleZoneChange(a)}},model:{value:a.checked,callback:function(c){e.$set(a,"checked",c)},expression:"item.checked"}})],1),c("el-col",{attrs:{span:18}},e._l(a.prov,(function(a){return c("div",{staticStyle:{display:"inline-block",padding:"0px 10px"}},[c("el-checkbox",{attrs:{label:a},on:{change:function(c){return e.handleCheckedProvChange(a)}},model:{value:a.checked,callback:function(c){e.$set(a,"checked",c)},expression:"p.checked"}},[e._v(e._s(a.name)+" "+e._s(e.getCheckedCityNum(a.city,1))+"   ")]),a.city?c("el-popover",{attrs:{placement:"bottom",title:a.name+e.getCheckedCityNum(a.city,1),width:"300",trigger:"click"}},[e._l(a.city,(function(d){return c("div",{staticStyle:{width:"30%",display:"inline-block",overflow:"hidden"}},[c("el-checkbox",{attrs:{label:d.name},on:{change:function(c){return e.updateCheckedCity(a)}},model:{value:d.checked,callback:function(a){e.$set(d,"checked",a)},expression:"city.checked"}})],1)})),c("el-button",{attrs:{slot:"reference",size:"medium",icon:"el-icon-caret-bottom",type:"text"},slot:"reference"})],2):e._e()],1)})),0)],1)]}))],2)},t=[],h=(c("c5f6"),[{area:"华北",prov:[{area_id:19,name:"北京",checked:!0},{area_id:461,name:"天津",checked:!0},{area_id:125,name:"河北",checked:!0,city:[{area_id:126,name:"保定",checked:!0},{area_id:129,name:"沧州",checked:!0},{area_id:132,name:"承德",checked:!0},{area_id:133,name:"邯郸",checked:!0},{area_id:134,name:"衡水",checked:!0},{area_id:135,name:"廊坊",checked:!0},{area_id:137,name:"秦皇岛",checked:!0},{area_id:138,name:"石家庄",checked:!0},{area_id:140,name:"唐山",checked:!0},{area_id:141,name:"邢台",checked:!0},{area_id:144,name:"张家口",checked:!0}]},{area_id:393,name:"山西",checked:!0,city:[{area_id:394,name:"长治",checked:!0},{area_id:395,name:"大同",checked:!0},{area_id:396,name:"晋城",checked:!0},{area_id:398,name:"临汾",checked:!0},{area_id:401,name:"朔州",checked:!0},{area_id:402,name:"太原",checked:!0},{area_id:403,name:"忻州",checked:!0},{area_id:404,name:"阳泉",checked:!0},{area_id:405,name:"运城",checked:!0},{area_id:597,name:"晋中",checked:!0},{area_id:598,name:"吕梁",checked:!0}]},{area_id:333,name:"内蒙古",checked:!0,city:[{area_id:321,name:"呼伦贝尔",checked:!0},{area_id:328,name:"阿拉善",checked:!0},{area_id:336,name:"包头",checked:!0},{area_id:337,name:"赤峰",checked:!0},{area_id:339,name:"呼和浩特",checked:!0},{area_id:344,name:"通辽",checked:!0},{area_id:346,name:"乌海",checked:!0},{area_id:586,name:"鄂尔多斯",checked:!0},{area_id:587,name:"乌兰察布",checked:!0},{area_id:588,name:"巴彦淖尔",checked:!0},{area_id:589,name:"兴安盟",checked:!0},{area_id:590,name:"锡林郭勒",checked:!0}]}],checked:!0},{area:"东北",prov:[{area_id:294,name:"辽宁",checked:!0,city:[{area_id:295,name:"鞍山",checked:!0},{area_id:297,name:"本溪",checked:!0},{area_id:298,name:"朝阳",checked:!0},{area_id:300,name:"大连",checked:!0},{area_id:303,name:"丹东",checked:!0},{area_id:304,name:"抚顺",checked:!0},{area_id:305,name:"阜新",checked:!0},{area_id:306,name:"葫芦岛",checked:!0},{area_id:308,name:"锦州",checked:!0},{area_id:309,name:"辽阳",checked:!0},{area_id:310,name:"盘锦",checked:!0},{area_id:311,name:"沈阳",checked:!0},{area_id:312,name:"铁岭",checked:!0},{area_id:314,name:"营口",checked:!0}]},{area_id:234,name:"吉林",checked:!0,city:[{area_id:235,name:"白城",checked:!0},{area_id:237,name:"白山",checked:!0},{area_id:238,name:"长春",checked:!0},{area_id:239,name:"吉林",checked:!0},{area_id:241,name:"辽源",checked:!0},{area_id:242,name:"四平",checked:!0},{area_id:244,name:"松原",checked:!0},{area_id:246,name:"通化",checked:!0},{area_id:249,name:"延边朝鲜族自治州",checked:!0}]},{area_id:165,name:"黑龙江",checked:!0,city:[{area_id:166,name:"大庆",checked:!0},{area_id:167,name:"哈尔滨",checked:!0},{area_id:169,name:"鹤岗",checked:!0},{area_id:170,name:"黑河",checked:!0},{area_id:173,name:"鸡西",checked:!0},{area_id:174,name:"佳木斯",checked:!0},{area_id:176,name:"牡丹江",checked:!0},{area_id:178,name:"七台河",checked:!0},{area_id:179,name:"齐齐哈尔",checked:!0},{area_id:180,name:"双鸭山",checked:!0},{area_id:181,name:"绥化",checked:!0},{area_id:183,name:"伊春",checked:!0},{area_id:622,name:"大兴安岭",checked:!0}]}],checked:!0},{area:"华东",prov:[{area_id:417,name:"上海",checked:!0},{area_id:255,name:"江苏",checked:!0,city:[{area_id:256,name:"常州",checked:!0},{area_id:257,name:"淮安",checked:!0},{area_id:259,name:"连云港",checked:!0},{area_id:260,name:"南京",checked:!0},{area_id:261,name:"南通",checked:!0},{area_id:262,name:"苏州",checked:!0},{area_id:265,name:"宿迁",checked:!0},{area_id:266,name:"泰州",checked:!0},{area_id:269,name:"无锡",checked:!0},{area_id:272,name:"徐州",checked:!0},{area_id:273,name:"盐城",checked:!0},{area_id:275,name:"扬州",checked:!0},{area_id:277,name:"镇江",checked:!0}]},{area_id:508,name:"浙江",checked:!0,city:[{area_id:509,name:"杭州",checked:!0},{area_id:511,name:"湖州",checked:!0},{area_id:512,name:"嘉兴",checked:!0},{area_id:514,name:"金华",checked:!0},{area_id:518,name:"丽水",checked:!0},{area_id:519,name:"宁波",checked:!0},{area_id:522,name:"绍兴",checked:!0},{area_id:523,name:"台州",checked:!0},{area_id:526,name:"温州",checked:!0},{area_id:528,name:"舟山",checked:!0},{area_id:529,name:"衢州",checked:!0}]},{area_id:39,name:"福建",checked:!0,city:[{area_id:40,name:"福州",checked:!0},{area_id:41,name:"龙岩",checked:!0},{area_id:42,name:"南平",checked:!0},{area_id:44,name:"宁德",checked:!0},{area_id:45,name:"莆田",checked:!0},{area_id:46,name:"泉州",checked:!0},{area_id:48,name:"三明",checked:!0},{area_id:50,name:"厦门",checked:!0},{area_id:51,name:"漳州",checked:!0}]},{area_id:1,name:"安徽",checked:!0,city:[{area_id:2,name:"安庆",checked:!0},{area_id:3,name:"蚌埠",checked:!0},{area_id:4,name:"巢湖",checked:!0},{area_id:5,name:"池州",checked:!0},{area_id:6,name:"滁州",checked:!0},{area_id:7,name:"阜阳",checked:!0},{area_id:8,name:"合肥",checked:!0},{area_id:9,name:"淮北",checked:!0},{area_id:10,name:"淮南",checked:!0},{area_id:11,name:"黄山",checked:!0},{area_id:12,name:"六安",checked:!0},{area_id:13,name:"马鞍山",checked:!0},{area_id:14,name:"宿州",checked:!0},{area_id:15,name:"铜陵",checked:!0},{area_id:16,name:"芜湖",checked:!0},{area_id:17,name:"宣城",checked:!0},{area_id:18,name:"亳州",checked:!0}]},{area_id:368,name:"山东",checked:!0,city:[{area_id:369,name:"滨州",checked:!0},{area_id:370,name:"德州",checked:!0},{area_id:371,name:"东营",checked:!0},{area_id:372,name:"菏泽",checked:!0},{area_id:373,name:"济南",checked:!0},{area_id:374,name:"济宁",checked:!0},{area_id:376,name:"莱芜",checked:!0},{area_id:377,name:"聊城",checked:!0},{area_id:379,name:"临沂",checked:!0},{area_id:380,name:"青岛",checked:!0},{area_id:381,name:"日照",checked:!0},{area_id:382,name:"泰安",checked:!0},{area_id:384,name:"威海",checked:!0},{area_id:386,name:"潍坊",checked:!0},{area_id:389,name:"烟台",checked:!0},{area_id:390,name:"枣庄",checked:!0},{area_id:392,name:"淄博",checked:!0}]}],checked:!0},{area:"华中",prov:[{area_id:145,name:"河南",checked:!0,city:[{area_id:146,name:"安阳",checked:!0},{area_id:147,name:"鹤壁",checked:!0},{area_id:148,name:"焦作",checked:!0},{area_id:149,name:"开封",checked:!0},{area_id:150,name:"洛阳",checked:!0},{area_id:151,name:"南阳",checked:!0},{area_id:152,name:"平顶山",checked:!0},{area_id:153,name:"三门峡",checked:!0},{area_id:155,name:"商丘",checked:!0},{area_id:156,name:"新乡",checked:!0},{area_id:157,name:"信阳",checked:!0},{area_id:159,name:"许昌",checked:!0},{area_id:160,name:"郑州",checked:!0},{area_id:161,name:"周口",checked:!0},{area_id:162,name:"驻马店",checked:!0},{area_id:163,name:"漯河",checked:!0},{area_id:164,name:"濮阳",checked:!0},{area_id:621,name:"济源",checked:!0}]},{area_id:184,name:"湖北",checked:!0,city:[{area_id:185,name:"鄂州",checked:!0},{area_id:186,name:"恩施",checked:!0},{area_id:188,name:"黄冈",checked:!0},{area_id:191,name:"黄石",checked:!0},{area_id:192,name:"荆门",checked:!0},{area_id:193,name:"荆州",checked:!0},{area_id:196,name:"十堰",checked:!0},{area_id:198,name:"随州",checked:!0},{area_id:199,name:"天门",checked:!0},{area_id:200,name:"武汉",checked:!0},{area_id:202,name:"仙桃",checked:!0},{area_id:203,name:"咸宁",checked:!0},{area_id:205,name:"襄樊",checked:!0},{area_id:207,name:"孝感",checked:!0},{area_id:210,name:"宜昌",checked:!0},{area_id:623,name:"潜江",checked:!0},{area_id:624,name:"神农架",checked:!0}]},{area_id:212,name:"湖南",checked:!0,city:[{area_id:213,name:"常德",checked:!0},{area_id:214,name:"长沙",checked:!0},{area_id:215,name:"郴州",checked:!0},{area_id:216,name:"衡阳",checked:!0},{area_id:218,name:"怀化",checked:!0},{area_id:220,name:"娄底",checked:!0},{area_id:223,name:"邵阳",checked:!0},{area_id:224,name:"湘潭",checked:!0},{area_id:227,name:"益阳",checked:!0},{area_id:228,name:"永州",checked:!0},{area_id:230,name:"岳阳",checked:!0},{area_id:232,name:"张家界",checked:!0},{area_id:233,name:"株洲",checked:!0},{area_id:585,name:"湘西",checked:!0}]},{area_id:279,name:"江西",checked:!0,city:[{area_id:280,name:"抚州",checked:!0},{area_id:282,name:"赣州",checked:!0},{area_id:283,name:"吉安",checked:!0},{area_id:285,name:"景德镇",checked:!0},{area_id:286,name:"九江",checked:!0},{area_id:288,name:"南昌",checked:!0},{area_id:289,name:"萍乡",checked:!0},{area_id:290,name:"上饶",checked:!0},{area_id:291,name:"新余",checked:!0},{area_id:292,name:"宜春",checked:!0},{area_id:293,name:"鹰潭",checked:!0}]}],checked:!0},{area:"其他地区",prov:[{area_id:578,name:"中国台湾",checked:!1},{area_id:599,name:"中国香港",checked:!1},{area_id:576,name:"中国澳门",checked:!1},{area_id:574,name:"国外",checked:!1}],checked:!1}]),m={props:{act_index:{type:Number}},data:function(){return{checkAll:!1,OptionsArea:h,cityOptionsArea:h,isIndeterminate:!0}},methods:{handleZoneChange:function(e){for(var a=0;a<e.prov.length;a++)e.prov[a].checked=e.checked,this.handleCheckedProvChange(e.prov[a])},handleCheckedProvChange:function(e){if(e.city)for(var a=0;a<e.city.length;a++)e.city[a].checked=e.checked},checkAllArea:function(){for(var e in this.cityOptionsArea)console.log(this.cityOptionsArea[e]),this.cityOptionsArea[e].checked=this.checkAll,this.handleZoneChange(this.cityOptionsArea[e])},savePostFreeArea:function(){this.dialogTableVisible=!1,console.log(this.cityOptionsAreaChecked),this.$emit("savePostFreeArea",this.cityOptionsAreaChecked)},getCheckedCityNum:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=0;if(e){for(var d=0;d<e.length;d++)e[d].checked&&c++;return a?"("+c+")":c}return""},updateCheckedCity:function(e){e.city&&(console.log(this.getCheckedCityNum(e.city),e.city.length),this.getCheckedCityNum(e.city)!=e.city.length?e.checked=!1:e.checked=!0)}},mounted:function(){}},o=m,k=(c("89d0"),c("2877")),_=Object(k["a"])(o,i,t,!1,null,"46ed48b5",null),s=_.exports,l=c("4328"),u=c.n(l),p={data:function(){return{area_ids:[],param:[],tplForm:{id:0,name:"",submitBtnLoading:!1},rules:{name:[{required:!0,message:"请输入模板名称",trigger:"blur"},{min:2,max:15,message:"长度在 2 到 15 个字符",trigger:"blur"}]}}},components:{SetPostFreeArea:s},watch:{$route:"loadTpl"},beforeRouteUpdate:function(e,a,c){c(),this.loadTpl(0)},methods:{submitForm:function(e){var a=this;this.tplForm.submitBtnLoading=!0,this.$refs[e].validate((function(e){if(!e)return!1;console.log(e);var c={area_data:a.$refs.areaComponnet.cityOptionsArea,name:a.tplForm.name,id:a.tplForm.id};Object(r["a"])({url:"/subway/SaveAreaTpl",method:"post",data:u.a.stringify(c)}).then((function(e){console.log(e),a.$message({showClose:!0,message:"保存成功",type:"success"}),a.$router.push({path:"/bat/areaApply"})}))})),this.tplForm.submitBtnLoading=!1},resetForm:function(e){this.$refs[e].resetFields()},loadTpl:function(){var e=this;this.$route.query.id?Object(r["a"])({url:"/subway/GetAreaTpl",method:"get",params:{id:this.$route.query.id}}).then((function(a){console.log(a),e.$refs.areaComponnet.cityOptionsArea=JSON.parse(a.data.source_data),e.tplForm.id=e.$route.query.id,e.$set(e.tplForm,"name",a.data.tpl_name)})):(this.$refs.areaComponnet.cityOptionsArea=this.$refs.areaComponnet.OptionsArea,this.tplForm.id=0,this.tplForm.name="")}},mounted:function(){this.param=this.$route.query.id,this.$route.query.id&&this.loadTpl()}},f=p,y=(c("fb05"),Object(k["a"])(f,d,n,!1,null,null,null));a["default"]=y.exports},c5f6:function(e,a,c){"use strict";var d=c("7726"),n=c("69a8"),r=c("2d95"),i=c("5dbc"),t=c("6a99"),h=c("79e5"),m=c("9093").f,o=c("11e9").f,k=c("86cc").f,_=c("aa77").trim,s="Number",l=d[s],u=l,p=l.prototype,f=r(c("2aeb")(p))==s,y="trim"in String.prototype,b=function(e){var a=t(e,!1);if("string"==typeof a&&a.length>2){a=y?a.trim():_(a,3);var c,d,n,r=a.charCodeAt(0);if(43===r||45===r){if(c=a.charCodeAt(2),88===c||120===c)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:d=2,n=49;break;case 79:case 111:d=8,n=55;break;default:return+a}for(var i,h=a.slice(2),m=0,o=h.length;m<o;m++)if(i=h.charCodeAt(m),i<48||i>n)return NaN;return parseInt(h,d)}}return+a};if(!l(" 0o1")||!l("0b1")||l("+0x1")){l=function(e){var a=arguments.length<1?0:e,c=this;return c instanceof l&&(f?h((function(){p.valueOf.call(c)})):r(c)!=s)?i(new u(b(a)),c,l):b(a)};for(var v,g=c("9e1e")?m(u):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),A=0;g.length>A;A++)n(u,v=g[A])&&!n(l,v)&&k(l,v,o(u,v));l.prototype=p,p.constructor=l,c("2aba")(d,s,l)}},fb05:function(e,a,c){"use strict";var d=c("9ed5"),n=c.n(d);n.a},fdef:function(e,a){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-a9429aa2.ac7df30b.js.map