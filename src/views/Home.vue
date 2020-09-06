<template>
	<div>
		<div class="is-top"><!-- 工具栏 -->
			<div class="gong-ju-lan">
				<!-- <div class="cx"></div> -->
				<h2 class="big-blog" @click="WenZiGongJu">文字</h2>
				<h2 class="big-blog" @click="WenZiGongJu2">文字2</h2>
				<h2 class="big-blog" @click="ImgGongJu">图片</h2>
				<button class="bcd" @click="getTheBloghtml">获取</button>
				<button class="bcd" @click="bianji">编辑</button>
				
				<button class="bc" @click="huoquhtml">保存</button>
			</div>
			<div class="text-div" v-show="gongju == 2">
				<button @click="textAdd">大</button>
				<span v-bind:style="{fontSize:textSize + 'px',color:textcolor}">{{textSize}}</span>
				<button @click="textSub">小</button>
				<button @click="textColor">红</button>
			</div>
			
			<div class="img-div" v-show="gongju == 3 || gongju == 4">
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
				gongju: 0,	//默认0, 1:div
				
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
				savehtml:null,
				pm:document.body.clientWidth,//屏幕宽
			}
		},
		 created(){
			console.log(this.pm); 
		 },
		methods:{
			bianji(){
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
				console.log('点击了');
				console.log(this.gongju);
				// console.log(e.offsetX + ' ' + e.offsetY);
				// console.log(e.layerX + ' ' + e.layerY);
				// console.log(e.screenX + ' ' + e.screenY);
				console.log(e.pageX + ' ' + e.pageY);
				window.isX = e.pageX;
				window.isY = e.pageY;  
				if(this.gongju == 1){
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
				if(this.gongju == 2){ 
					console.log('第一次')
					var input = document.createElement('input');
					input.setAttribute('type' , 'text');//设置input类型
					input.setAttribute('name' , window.isX);//保存y坐标
					// input.setAttribute('name' , 'isinput');//设置input name
					input.setAttribute('value' , '');//设置input value
					input.setAttribute('onfocus' , 'autofocus');
					var textnewid = Math.random().toString(36).slice(-3);
					window.textNewId = textnewid;
					input.setAttribute('id' , textnewid);//设置id
					input.setAttribute('onclick' , 	`
						javascript:event.stopPropagation();
						this.focus();
						if(this.value == ''){
							this.style.width = '0px';
						}
						this.style.border = '0px';
						window.newimgid = this.id;
					`);//阻止事件冒泡
					// input.setAttribute('onclick' , "javascript:console.log('666');");//阻止事件冒泡
					// input.setAttribute('onKeyDown' , "this.style.width = '0px';console.log(this.scrollWidth);");//阻止事件冒泡
					// input.setAttribute('width' , '0px');//设置input类型
					// input.setAttribute('onKeyDown' , 'if(this.value.length>this.size)this.size=this.value.length+2;');//设置input value
					// input.setAttribute('onKeyDown' , "this.style.width='10px';this.style.width = this.scrollWidth+28 + 'px'");
				    	// input.setAttribute('onKeyDown' , "console.log('1  '+this.value);this.style.width='0px';if(this.value == '1313'){this.style.width = '0px';}else{console.log('2  '+this.value.length);this.style.width = this.scrollWidth+28 + 'px';console.log('3  '+this.value.length);}console.log('4  '+this.value.length);");
				    input.setAttribute('onkeyup' , `
						
						console.log(window.textSize);
						console.log('maha');
						this.style.width='10px';
						this.style.width = this.scrollWidth + 'px';
						window.newimgid = this.id;
						document.getElementById(window.newimgid).setAttribute('value',this.value);
						console.log(Number(this.style.width.split('px')[0])+Number(this.name));
						console.log(this.name); 
						if(Number(this.style.width.split('px')[0])+Number(this.name) + 20 >document.body.clientWidth){
							// console.log('大了大了');
							// Newline();
						}
					`);


					input.style = "border:solid red 1px;font-size: "+window.textSize+"px; color:"+window.textColor+"; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;background-color:transparent;height: "+window.textSize+"px;"//设置样式
					 
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(input, bo.lastChild);
				}
				if(this.gongju == 3){
					// window.imgopaque = this.imgopaque;
					console.log('img');
					var img = document.createElement('img');
					img.setAttribute('src' , this.cover);//将上传的图片给img
					// img.setAttribute('width' , '400px');//默认宽
					// this.newimgid = Math.random().toString(36).slice(-3);//生成随机id
					// window.newimgid = Math.random().toString(36).slice(-3);//生成随机id
					// console.log(this.newimgid);
					img.setAttribute('id' , Math.random().toString(36).slice(-3));//设置id
					img.setAttribute('onclick' , "javascript:event.stopPropagation();window.newimgid = this.id;");//阻止事件冒泡
					img.style = "opacity: 1;"+"border:1px solid red;width:80px; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;";//设置样式
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(img, bo.lastChild);
					// this.newimg = document.getElementById('isbotton');
				}
				if(this.gongju == 4){
					console.log('12123');
					var textarea = document.createElement('textarea');
					var textnewid = Math.random().toString(36).slice(-3);
					window.newimgid = textnewid;
					textarea.setAttribute('id' , textnewid);//设置id
					textarea.setAttribute('onclick' , 	`
						javascript:event.stopPropagation();
						
					`);//阻止事件冒泡
					textarea.style = "border:solid red 1px;font-size: "+window.textSize+"px; color:"+window.textColor+"; position: absolute;left: " + window.isX+ "px;top: " + window.isY +"px;background-color:transparent;width:200px;"//设置样式
					var bo = document.getElementById('isbotton'); //获取 父 对象.
					//将div动态插入到父对象中
					bo.insertBefore(textarea, bo.lastChild);
				}
			},
			WenZiGongJu(){
				this.gongju = 2;
			},
			WenZiGongJu2(){
				this.gongju = 4;
			},
			ImgGongJu(){
				this.gongju = 3;
			},
			maha(){
				console.log('触发了马哈')
			},
			textAdd(){
				this.textSize++;
				// this.Bian.textSize++;
				window.textSize++;
			},
			textSub(){
				this.textSize--;
				// this.Bian.textSize--;
				window.textSize--;
			},
			textColor(){
				window.textColor = 'red'; 
				this.textcolor = 'red';
				document.getElementById(window.newimgid).style.color = window.textColor;
				// console.log(document.getElementById(window.newimgid));
			},
			imgAdd(){
				console.log(document.getElementById(window.newimgid).style.width.match(/(\S*)px/)[1]);
				// document.getElementById(window.newimgid).style.width="200px";
				document.getElementById(window.newimgid).style.width=String(Number(document.getElementById(window.newimgid).style.width.match(/(\S*)px/)[1])+1)+"px";
			},
			imgSub(){
				document.getElementById(window.newimgid).style.width=String(Number(document.getElementById(window.newimgid).style.width.match(/(\S*)px/)[1])-1)+"px";
			},
			imgS(){
				document.getElementById(window.newimgid).style.top=String(Number(document.getElementById(window.newimgid).style.top.match(/(\S*)px/)[1])-this.imgmovesize)+"px";
			},
			imgX(){
				// var a =this.imgmovesize;
				document.getElementById(window.newimgid).style.top=String(Number(document.getElementById(window.newimgid).style.top.match(/(\S*)px/)[1])+this.imgmovesize)+"px";
			},
			imgZ(){
				document.getElementById(window.newimgid).style.left=String(Number(document.getElementById(window.newimgid).style.left.match(/(\S*)px/)[1])-this.imgmovesize)+"px";
			},
			imgY(){
				document.getElementById(window.newimgid).style.left=String(Number(document.getElementById(window.newimgid).style.left.match(/(\S*)px/)[1])+this.imgmovesize)+"px";
			},
			imgopaqueAdd(){
				document.getElementById(window.newimgid).style.opacity=Number(document.getElementById(window.newimgid).style.opacity)-this.imgopaqueSize;
			},
			imgopaqueSub(){
				document.getElementById(window.newimgid).style.opacity=Number(document.getElementById(window.newimgid).style.opacity)+this.imgopaqueSize;
			},
			imgmovesizeAdd(){
				this.imgmovesize++;
			},
			imgmovesizeSub(){
				this.imgmovesize--;
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
