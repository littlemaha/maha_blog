import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import bian from './store/bian.vue';
Vue.prototype.Bian = bian;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

		document.onkeydown =isis;
		function isis(){
			console.log('触发了');
		}
		
		 document.onkeydown = keydown;
        function keydown(e) 

        {
			console.log("kais")
			
			console.log("jieshu");
			
			console.log(e.pageY);
			console.log('按下');
           var currKey=0,e=e||event; 
		   
		   

           currKey=e.keyCode||e.which||e.charCode;//支持IE、FF 
			if(Number(document.getElementById(window.newimgid).style.width.split('px')[0])+window.isX + 20 >document.body.clientWidth  && currKey != 8){
				document.getElementById(window.newimgid).onfocus = 666;
				// document.getElementById(window.newimgid).setAttribute('onfocus' , 'this.blur();');
				addinput2();
				document.getElementById(window.textNewId).focus();
				// isis();
			}
           if (currKey == 13){
			   // console.log("回车");
			   // if(document.getElementById(window.newimgid).innerHTML == ''){
				  // document.getElementById(window.newimgid).innerHTML=document.getElementById(window.newimgid).innerHTML+"maha";
			   // }else{
				   
				  //  console.log(document.getElementById(window.newimgid).innerHTML);
				  //  console.log(document.getElementById(window.newimgid).innerHTML.substr(document.getElementById(window.newimgid).innerHTML.length-4));
				  //  if(document.getElementById(window.newimgid).innerHTML.substr(document.getElementById(window.newimgid).innerHTML.length-4)=="maha"){
					 //   document.getElementById(window.newimgid).innerHTML=document.getElementById(window.newimgid).innerHTML+"maha";
					 //   console.log(document.getElementById(window.newimgid).innerHTML);
				  //  }else{
					   
				  //  }
			   // }
			   // document.getElementById(window.newimgid).innerHTML=document.getElementById(window.newimgid).innerHTML+"maha";
				// addinput2();
           } else {
			   // document.getElementById(window.newimgid).innerHTML = 
		   }

        }
		
		
		function addinput2(){
			console.log('回车');
			var input = document.createElement('input');
			input.setAttribute('type' , 'text');//设置input类型
			input.setAttribute('name' , window.isX);//设置input类型
			// input.setAttribute('name' , 'isinput');//设置input name
			input.setAttribute('value' , '');//设置input value
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
				console.log('A'); 
				console.log(Number(this.style.width.split('px')[0])+Number(this.name) + 20); 
				console.log('B'); 
				if(Number(this.style.width.split('px')[0])+18 + 20 >document.body.clientWidth){
					console.log('大了')
					// isis();
				}
			`);
			
			
			input.style = "border:solid red 1px;font-size: "+window.textSize+"px; color:"+window.textColor+"; position: absolute;left: " + 18+ "px;top: " + (window.isY + window.textSize) +"px;background-color:transparent;height: "+window.textSize+"px;"//设置样式
			 
			var bo = document.getElementById('isbotton'); //获取 父 对象.
			//将div动态插入到父对象中
			bo.insertBefore(input, bo.lastChild);
			window.isX = 18;
			window.isY = window.isY + window.textSize;
			// if(event){
			
			//     e.returnValue = false; 
			
			// }else{                    
			
			//     e.preventDefault();
			
			// }          
			
			// document.getElementById("<%=btnRegister.ClientID %>").click();
			
		}
