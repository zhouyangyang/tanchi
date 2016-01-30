window.onload=function(){
   
	var RIGHT=39,LEFT=37,DOWN=40,UP=38,
	    defaultDirection=RIGHT,
        snake=[{x:0,y:0},{x:0,y:1},{x:0,y:2}],
        isInsnake=function(m,n){
		   	 for(var k=0;k<snake.length;k++){
		   	 	if(snake[k].x==m&&snake[k].y==n){
		   	 		return true;
		   	 	}
		   	 }
   	    return  false;
        };
    var kaiguan=false;
    var timeid;
    var start=document.getElementById("start");
    var over=document.getElementById("over");
    var again=document.getElementById("again");
   // 食物放置的函数
	    dropfood=function(){
		  if(snake.length==5){
		  	clearInterval(timeid);
		  	over.style.display="block";
		  	
		  	over.innerHTML='你赢了!<div id="again">重新开始</div>';
		  	     again=document.getElementById("again");
		  	     console.dir(again);
		  	     again.onclick=function(){
		                console.log(1);
		                location.reload();
	             }
		  	    return null;}
				var a=Math.floor(Math.random()*10),

				b=Math.floor(Math.random()*10),
		        id= a+"-"+b;
		        // 当蛇的数据占满整个页面的时候会陷入死循环；
		        	while(isInsnake(a,b)){
		        		 a=Math.floor(Math.random()*10);
				        b=Math.floor(Math.random()*10);
		        	 }
		        
		        id=document.getElementById(a+"-"+b);
		         id.innerHTML='<img class="se" src="./img/2.png">'; 
		         // id.style.backgroundColor="green";
		         return {x:a,y:b};
	    },
	    food=dropfood(),
     zou=function(dir){
	  	if(Math.abs(dir-defaultDirection)==2){
	  		return null;
	  	}  
	  	if(dir!=undefined){
         defaultDirection=dir;
	  	}
	 	var last=snake.length-1;
	 	var newhead;	 	  
	 	if(defaultDirection==RIGHT){
	 	newhead={x:snake[last].x,y:snake[last].y+1};
        }
        if(defaultDirection==LEFT){
	 	newhead={x:snake[last].x,y:snake[last].y-1};
        }
        if(defaultDirection==DOWN){
	 	newhead={x:snake[last].x+1,y:snake[last].y};
        }
        if(defaultDirection==UP){
	 	newhead={x:snake[last].x-1,y:snake[last].y};
        }
        if(newhead.x>9||newhead.x<0||newhead.y<0||newhead.y>9){
        	over.style.display="block";
        	clearInterval(timeid);
        	return null;
        }
        if(isInsnake(newhead.x,newhead.y)){
               over.style.display="block";
        	clearInterval(timeid);
               return null;
        }
        snake.push(newhead);
        if(newhead.x==food.x&&newhead.y==food.y){            
             var tmp=document.getElementById(food.x+"-"+food.y);
             tmp.style.backgroundColor="rgb(0, 207, 255)";
             tmp.innerHTML="";
             food=dropfood();
             return null;
        }         
        weiba=snake.shift();        
        var t=document.getElementById(weiba.x+"-"+weiba.y);
        t.style.background="none";      
        var n=document.getElementById(newhead.x+"-"+newhead.y);
        n.style.backgroundColor="rgb(0, 207, 255)";
              
        // return null;        
	 };
    (function(){
		for(var i=0;i<snake.length;i++){
			 id=document.getElementById(snake[i].x+"-"+snake[i].y);
			id.style.backgroundColor="rgb(0, 207, 255)";
		}
    })(); 	
    
	

// ===============================================================
   // ====================瞎练习
	// var dianming=function(){
	// 	var x=Math.random();
	// 	var y=Math.random();
	// 	while(x==2&&y==0){
	// 		x=Math.random();
	// 	    y=Math.random();
	// 	}
	// }

	// var arr =[{x:0,y:0},{x:0,y:1},{x:0,y:2}];
	// var fn=function(){
 //         arr.shift();
 //         var a=arr.[length-1].x;
 //         var b=arr.[length-1].y;
 //          arr.push({x:a,y:b});
	// }
	again.onclick=function(){
		console.log(1);
		 location.reload();
	}
	console.dir(again);
    start.onclick=function(){
    	if(kaiguan==false){
    		start.innerHTML="暂停";
    		kaiguan=true;
    		timeid=setInterval(zou ,1000);
    	}else{
            clearInterval(timeid);
            kaiguan=false;
            start.innerHTML="开始游戏";
    	}
    }
	
	document.onkeydown=function(e){
		var d=e.keyCode;
		if(d==LEFT||d==RIGHT||d==UP||d==DOWN){ 
            if(kaiguan==true){
               zou(d);	
            }            
		}  
	};
	
		// if(e.keycode==38){
		// 	zou("up");
		// }
		// if(e.keycode==40){
		// 	zou("down");
		// }
		// if(e.keycode==37){
		// 	zou("left");
		// }
		// if(e.keycode==39){
		// 	zou("right");
		// }
		// var t=setInterval(aa,1000){
		// 	clearInterval(t);
		// }
		

	 // aa();
	
}