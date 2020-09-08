<template>
	<div>
		<div class="is-top"><!-- 工具栏 -->
			<div class="gong-ju-lan">
				<h2 class="big-blog" @click="inputToll">文字</h2>
				<h2 class="big-blog" @click="textareaToll">文字2</h2>
				<h2 class="big-blog" @click="imgToll">图片</h2>
				<button class="bcd" @click="getTheBloghtmltext">保存文本域</button>
				<button class="bcd" @click="getTheBloghtml">获取</button>
				<button class="bcd" @click="editblog">编辑</button>
				<button class="bc" @click="huoquhtml">保存</button>
			</div>
			
			<div class="text-div" v-show="tool == 1">
				<button @click="textSizeAdd">大</button>
				<span v-bind:style="{fontSize:textSize + 'px',color:textcolor}">{{textSize}}</span>
				<button @click="textSizeSub">小</button>
				<button @click="textColor">红</button>
			</div>
			<div class="img-div" v-show="tool == 2">
				<div class="img-blog">
					<div class="img-flog-s">
						<div class="img-big-sim"><button @click="imgAdd">变宽</button></div>
						<div class="img-big-sim"><button @click="imgSub">变窄</button></div>
					</div>
					<div class="img-flog-s">
						<button @click="textandimgmovesizeAdd">宽度变化+</button>
						{{textandimgmovesize}}
						<button @click="textandimgmovesizeSub">宽度变化-</button>
					</div>
					<div class="img-flog-s">
						<div class="img-move">
							<button @click="imgmovesizeAdd">移动变化+</button>
							{{imgmovesize}}
							<button @click="imgmovesizeSub">移动变化-</button>
						</div>
						<div  class="img-move">
							<button @click="imgS">上</button>
							<button @click="imgX">下</button>
							<button @click="imgZ">左</button>
							<button @click="imgY">右</button>
						</div>
					</div>	
				</div>
			</div>
			<div class="img-div" v-show="tool == 3">
				<div>
					<div class="new-img-begin-div"><input class="new-img-begin-input"   type="file" @change="addphtimg()" ref="pubActiImg"></div>
					<div class="new-img-ok-div" ><img class="new-img-ok-div-img" :src="cover" /></div>
				</div>
				
				<div class="img-blog">
					<div class="img-flog-s">
						<div class="img-big-sim"><button @click="imgAdd">图大</button></div>
						<div class="img-big-sim"><button @click="imgSub">图小</button></div>
					</div>
					<div class="img-flog-s">
						<button @click="textandimgmovesizeAdd">框变大小+</button>
						{{textandimgmovesize}}
						<button @click="textandimgmovesizeSub">框变大小-</button>
					</div>
					<div class="img-flog-s">
						<div class="img-move">
							<button @click="imgmovesizeAdd">图移动大小+</button>
							{{imgmovesize}}
							<button @click="imgmovesizeSub">图移动大小-</button>
						</div>
						<div  class="img-move">
							<button @click="imgS">图上</button>
							<button @click="imgX">图下</button>
							<button @click="imgZ">图左</button>
							<button @click="imgY">图右</button>
						</div>
					</div>
					<div class="img-flog-s">
						<div class="img-opaque">
							<button @click="imgopaqueSizeAdd">图透明度大小+</button>
							{{imgopaqueSize}}
							<button @click="imgopaqueSizeSub">图透明度大小-</button>
						</div>
						<div class="img-opaque">
							<button @click="imgopaqueAdd">图透明+</button>
							<button @click="imgopaqueSub">图透明-</button>
						</div>
						
					</div>
					
				</div>
				
				
			</div>
			
			
			
			

		</div>
		
		<div id="save">
			<div id="isbotton" @click="touchstart" ref="isdiv"><!-- 编辑区 -->
			
			<!-- <input type="text" name="isinput" value="默认值" v-on:click.stop="maha" style="font-size: 28px; position: absolute; left: 222px; top: 222px; width: 100px; height: 100px;"> -->
			<!-- <input type="text" class="little-input"/> -->
			<!-- {{isOk}} -->
			<!-- <div v-for="(item , index) in isDivList">
				<input type="text" v-bind:class="{dasd:true}"/>
			</div> -->
			</div>
		</div>
		<button @click="heightAdd">加</button>
	</div>
</template>
 
<script>
	import axios from 'axios';
	import {getTheBlog} from '../network/blog.js';
	import {Newline} from '../store/inputNewline.js';
	// import BScroll from './bscroll';
	// import bian from '../store/bian.vue';
	export default {
		data(){
			return {
				tool: window.tool,	//所选工具 
				textarea:'',
				isX: 0,//x坐标
				isY: 0,//y坐标
				// isDivList: [1,2],
				isclassname: 0,//生成classname的后缀值
				// isindex:200,
				textSize:window.textSize,//字体默认大小
				textcolor:window.textColor,//字体默认颜色
				cover:null,//图片
				newimgid:'',//图片id
				imgopaqueSize:0.1,//图片透明频度
				imgmovesize:1,//图片移动大小频度
				textandimgmovesize:1,//文本域和图片移动大小频度
				savehtml:null,
				pm:document.body.clientWidth,//屏幕宽
			}
		},
		 created(){
			console.log(this.pm); 
		 },
		methods:{
			editblog(){
				this.$router.push('editblog');
			},
			huoquhtml(){
				// console.log(document.getElementById("isbotton").Element);
				// console.log(document.getElementById("isbotton").innerHTML);
				// console.log(document.getElementById("isbotton").outerHTML);
				// console.log(getDocumentElementById("isbotton"));
				// console.log(this.$refs.isdiv.innerHTML); 
				console.log(this.$refs.isdiv);
				// console.log(this.$refs.isdiv.Element); 
				// var save = this.$refs.isdiv;
				// console.log(save);
				// console.log(String(save));
				axios({
					method:"post",
					url:"http://maha-pc:8086/maha_blog/servlet/save_the_changes",
					headers: {
						"Content-Type": "multipart/form-data"
					 },
					withCredentials:true,
					data:document.getElementById("isbotton").innerHTML
					}).then((res)=>{
						console.log(res);
				    });
			},
			getTheBloghtml(){
				console.log('1');
				getTheBlog().then(res =>{
					console.log('2');
					console.log(res);
					console.log('3');
				})
			},
			getTheBloghtmltext(){//保存文本域的编辑
				document.getElementById(window.nowid).innerHTML = document.getElementById(window.nowid).value.replace(/[\r\n]/g,"maha");
			},
			addphtimg(){ 
			  var that=this
			  //注意这里要使用that保存this，不然下方调用f.onload的时候会出现问题
			  // console.log(this.$refs.pubActiImg.files)
			
			  //获取名字 后缀
			  var last_len=this.$refs.pubActiImg.files[0].name.lastIndexOf(".");
			  var len = this.$refs.pubActiImg.files[0].name.length;
			  //后缀  无点
			  var pathf = this.$refs.pubActiImg.files[0].name.substring(last_len+1,len);
			  //名字
			  var pathfs = this.$refs.pubActiImg.files[0].name.substring(0,last_len);
			
			  // this.activity.coverName = pathfs;
			  // this.activity.coverAfter = pathf;
			
			  var f = new FileReader()
			  f.readAsDataURL(this.$refs.pubActiImg.files[0])
			  f.onload=function(){
			    that.cover=f.result;
			    console.log(f.result);
			    // that.pic=f.result;
			  }
			  this.isImgYin = true;
			},
			touchstart(e){
				window.isX = e.pageX;
				window.isY = e.pageY;  
				if(window.tool == 1){//input输入
					var input = document.createElement('input');
					input.setAttribute('type' , 'text');//设置input类型
					input.setAttribute('name' , window.isX);//保存x坐标
					input.setAttribute('value' , '');//设置input value
					input.setAttribute('onfocus' , 'autofocus');
					var textnewid = Math.random().toString(36).slice(-3);
					window.nowid = textnewid;
					input.setAttribute('id' , textnewid);//设置id
					input.setAttribute('onclick' , 	`
						javascript:event.stopPropagation();
						this.focus();
						if(this.value == ''){
							this.style.width = '0px';
						}
						
						this.style.border = '0px';
						window.nowid = this.id;
						window.isY = Number(this.style.top.split('px')[0]);
					`);//阻止事件冒泡
				    input.setAttribute('onkeyup' , `
						this.style.width='10px';
						this.style.width = this.scrollWidth + 'px';
						window.nowid = this.id;
						document.getElementById(window.nowid).setAttribute('value',this.value);
					`);
					input.style = "border:solid red 1px;font-size: "+window.textSize+"px; color:"+window.textColor+"; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;background-color:transparent;height: "+window.textSize+"px;"//设置样式
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(input, bo.lastChild);
				}
				if(window.tool == 2){//文本域输入
					var textarea = document.createElement('textarea');
					var textnewid = Math.random().toString(36).slice(-3);
					window.nowid = textnewid;
					textarea.setAttribute('id' , textnewid);//设置id
					textarea.setAttribute('value' , ' ');//
					textarea.setAttribute('rows' , 2);//默认刚开始两行
					textarea.setAttribute('name' , window.isX);//保存x坐标
					textarea.setAttribute('wrap' , 'physical');//
				
					textarea.setAttribute('onclick' , 	`
						javascript:event.stopPropagation();
						window.nowid = this.id;
					`);//阻止事件冒泡
					textarea.setAttribute('onkeyup' , `
					// document.getElementById(window.nowid).innerHTML = document.getElementById(window.nowid).value;
					//1 上面可能没必要
					//2 没实现自动高度
					this.rows = 6;
					`);
					
					textarea.style = "WORD-BREAK:break-all;border:solid red 1px;font-size: "+window.textSize+"px; color:"+window.textColor+"; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;background-color:transparent;width:200px"//设置样式
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(textarea, bo.lastChild);
				}
				if(window.tool == 3){//编辑图片
					console.log('img');
					var img = document.createElement('img');
					img.setAttribute('src' , this.cover);//将上传的图片给img
					// img.setAttribute('width' , '400px');//默认宽
					// this.newimgid = Math.random().toString(36).slice(-3);//生成随机id
					// window.newimgid = Math.random().toString(36).slice(-3);//生成随机id
					// console.log(this.newimgid);
					var textnewid = Math.random().toString(36).slice(-3);
					window.nowid = textnewid;
					img.setAttribute('id' , textnewid);//设置id
					img.setAttribute('onclick' , "javascript:event.stopPropagation();window.nowid = this.id;");//阻止事件冒泡
					img.style = "opacity: 1;"+"border:1px solid red;width:80px; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;";//设置样式
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(img, bo.lastChild);
					// this.newimg = document.getElementById('isbotton');
				}
				if(window.tool == 8){
					console.log('ok');
					var div = document.createElement('div');//生成新div
					div.setAttribute('onclick' , "javascript:event.stopPropagation();");//阻止事件冒泡
					div.innerHTML = '666';//div内内容
					// div.className = "video-" + this.isclassname;//设置div的classname
					div.style = "font-size: 10px;position: absolute;left: 333px;top: 333px;width: 100px;height: 100px;border:1px solid red;"
					 
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(div, bo.lastChild);
				}	
			},
			inputToll(){//当前工具为input编辑
				window.tool = 1;
				this.tool = 1;
			},
			textareaToll(){//当前工具为文本域编辑
				window.tool = 2;
				this.tool = 2;
			},
			imgToll(){//当前工具为图片编辑
				window.tool = 3;
				this.tool = 3;
			},
			maha(){
				console.log('触发了马哈')
			},
			textSizeAdd(){//让新
				this.textSize++;
				window.textSize++;
			},
			textSizeSub(){//让新的字体
				this.textSize--;
				window.textSize--;
			},
			textColor(){
				window.textColor = 'red'; 
				this.textcolor = 'red';
				document.getElementById(window.nowid).style.color = window.textColor;
				// console.log(document.getElementById(window.newimgid));
			},
			imgAdd(){
				console.log(document.getElementById(window.nowid).style.width.match(/(\S*)px/)[1]);
				// document.getElementById(window.newimgid).style.width="200px";
				document.getElementById(window.nowid).style.width=String(Number(document.getElementById(window.nowid).style.width.match(/(\S*)px/)[1])+this.textandimgmovesize)+"px";
			},
			imgSub(){
				document.getElementById(window.nowid).style.width=String(Number(document.getElementById(window.nowid).style.width.match(/(\S*)px/)[1])-this.textandimgmovesize)+"px";
			},
			imgS(){
				document.getElementById(window.nowid).style.top=String(Number(document.getElementById(window.nowid).style.top.match(/(\S*)px/)[1])-this.imgmovesize)+"px";
			},
			imgX(){
				// var a =this.imgmovesize;
				document.getElementById(window.nowid).style.top=String(Number(document.getElementById(window.nowid).style.top.match(/(\S*)px/)[1])+this.imgmovesize)+"px";
			},
			imgZ(){
				document.getElementById(window.nowid).style.left=String(Number(document.getElementById(window.nowid).style.left.match(/(\S*)px/)[1])-this.imgmovesize)+"px";
			},
			imgY(){
				document.getElementById(window.nowid).style.left=String(Number(document.getElementById(window.nowid).style.left.match(/(\S*)px/)[1])+this.imgmovesize)+"px";
			},
			imgopaqueAdd(){
				document.getElementById(window.nowid).style.opacity=Number(document.getElementById(window.nowid).style.opacity)-this.imgopaqueSize;
			},
			imgopaqueSub(){
				document.getElementById(window.nowid).style.opacity=Number(document.getElementById(window.nowid).style.opacity)+this.imgopaqueSize;
			},
			imgmovesizeAdd(){
				this.imgmovesize++;
			},
			imgmovesizeSub(){
				this.imgmovesize--;
			},
			textandimgmovesizeAdd(){
				this.textandimgmovesize++;
			},
			textandimgmovesizeSub(){
				this.textandimgmovesize--;
			},
			imgopaqueSizeAdd(){
				this.imgopaqueSize = this.imgopaqueSize + 0.1;
			},
			imgopaqueSizeSub(){
				this.imgopaqueSize = this.imgopaqueSize + 0.1;
			},
			heightAdd(){
				
			}
		}
	} 
</script>
 
<style>
	/* .cx{
		border: 1px red solid;
		width: 100px;
		height: 44px;
	} */
	.gong-ju-lan {
		border: 1px green solid;
	}
	
	.big-blog {
		display: inline;
		margin-left: 20px;
		/* margin-top: 80px; */
		/* margin-bottom: 80px; */
		/* width: 400px; */
		border: 1px solid red;
	}
	.text-div {
		border: 1px solid black;
		height: 70px;
	}
	
	.img-div {
		border: 1px solid black;
		height: 70px;
	}
	
	.new-img-begin-div {
		border: 1px solid red;
		width: 70px;
		height: 70px;
		float: left;
	}
	
	.new-img-begin-input {
		width: 70px;
		height: 70px;
	}
	.new-img-ok-div-img {
		height: 70px;
		border: 1px solid black;
		
	}
	
	.new-img-ok-div {
		float: left;
	}
	
	.img-blog {
		
	}
	
	.img-flog-s {
		margin-left: 14px;
		float: left;
	}
	
	.img-big-sim {
		margin-top: 8px;
	}
	
	.img-move {
		/* float: left; */
		margin-top: 8px;
	}
	
	.img-opaque {
		margin-top: 8px;
	}
	
	.bc {
		/* margin-left: -20px; */
		/* margin-right: 20px;
		 */
		float: right;
		font-size: 20px;
	}
	.dasd{
		width: 50%;
		background-color: #FF0000;
	}
	.little-input {
		font-size: 10px;
		position: absolute;
		left: 100px;
		top: 100px;
		width: 10px;
		height: 10px;
		border: 1px red solid;
	}
	
	.is-top {
		width: 100%;
		height: 20%;
		border: red 1px solid;
	}
	
	#isbotton {
		/* position: relative; */
		width: 100%;
		height: 900px;
		border:green 1px solid;
	}
</style>
