<template>
</template>

<script>
	window.tool = 0;	//所选工具,1:文字 2:文本域 3:图片
	window.nowid = '';  //当前选中id
	window.textSize= 24;//默认字体大小
	window.textColor= 'black';//默认字体颜色
	window.isX = 0;//x坐标
	window.isY = 0;//y坐标
	
	window.textNewId = ' ';//新inputid
	window.newimgid =  '';//新选择图片id
	window.imgopaque = 1;//图片透明度
	
		export default{
			tool,
			nowid,
			textSize,
			textColor,
			isX,
			isY,
			
			textNewId,
			newimgid,
			imgopaque,
			
	  }
</script>

<style>
</style>
