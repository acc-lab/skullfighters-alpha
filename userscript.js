function userscript(){
	if(document.getElementById("userscript")===null){
		function newNode(type, id, style){
			let node=document.createElement(type);
			node.setAttribute("ID",id);
			node.setAttribute("STYLE",style);

			return node;
		}

		body=document.getElementById("navbar");

		div_userscript=newNode("DIV","userscript",`
			position: relative;
			
			width: 500px;
			height: 100px;
			
			left: 50%;
			transform: translateX(-250px);
			top: -20px;
			
			background-color: #BBA385;
			
			border-radius: 5px;
			
			z-index: 1000;
			
			opacity: 0.5;
		`);

		//four mode autospawner
			div_button1=newNode("DIV","four-mode-autospawner",`
				position: relative;

				width: 70px;
				height: 70px;

				left: 50%;
				top: 50%;

				transform: translate(-35px, -35px);

				background-color: #FFFFFF;

				border-radius: 5px;

				z-index: 1200;

				opacity: 0.5;
			`);

			div_button1.setAttribute("ONMOUSEOVER", "this.style.backgroundColor='#D3D3D3'");
			div_button1.setAttribute("ONMOUSEOUT", "this.style.backgroundColor='#FFFFFF'");

			div_button1.setAttribute("ONCLICK", "MODE=0;setInterval(function(){MODE+=1; if(MODE%4==1){new_skull(0, 400, skeleton_walking, 1, 1000, 1000);}else if(MODE%4==2){new_skull(0, 400, skeleton_shield_walking, 1, 1000, 1000);}else if(MODE%4==3){new_skull(x=0, y=400, func_=skeleton_bow_walking_func(0,function(lead_l, lead_r){let dir=this.dir;new_arrow(this.x+16*dir, this.y-22, this.team, 13*dir, -5, 0.2*dir, 0.2, 4);	new_arrow(this.x+16*dir, this.y-22, this.team, 12*dir, -4, 0.2*dir, 0.2, 4);new_arrow(this.x+16*dir, this.y-22, this.team, 11*dir, -3, 0.2*dir, 0.2, 4);new_arrow(this.x+16*dir, this.y-22, this.team, 10*dir, -2, 0.2*dir, 0.2, 4);new_arrow(this.x+16*dir, this.y-22, this.team, 9*dir, -1, 0.2*dir, 0.2, 4);new_arrow(this.x+16*dir, this.y-22, this.team, 8*dir, 0, 0.2*dir, 0.2, 4);}), 1, 1000);}else{new_skull(0, 400, skeleton_police_walking_func(-50), 1, 1000, 1000);} }, 3000);");
	
		//level skipper
			div_button2=newNode("DIV","level-skipper",`
				position: relative;

				width: 70px;
				height: 70px;

				left: 50%;
				top: 50%;

				transform: translate(45px, -105px);

				background-color: #FFFFFF;

				border-radius: 5px;

				z-index: 1200;

				opacity: 0.5;
			`);

			div_button2.setAttribute("ONMOUSEOVER", "this.style.backgroundColor='#D3D3D3'");
			div_button2.setAttribute("ONMOUSEOUT", "this.style.backgroundColor='#FFFFFF'");

			div_button2.setAttribute("ONCLICK", "wave+=1; timing=0; skulls=[]; max_timing=maxTiming(wave);");

		//base defense
			div_button3=newNode("DIV","base-defense",`
				position: relative;

				width: 70px;
				height: 70px;

				left: 50%;
				top: 50%;

				transform: translate(125px, -175px);

				background-color: #FFFFFF;

				border-radius: 5px;

				z-index: 1200;

				opacity: 0.5;
			`);

			div_button3.setAttribute("ONMOUSEOVER", "this.style.backgroundColor='#D3D3D3'");
			div_button3.setAttribute("ONMOUSEOUT", "this.style.backgroundColor='#FFFFFF'");

			div_button3.setAttribute("ONCLICK", "var tickkk=1,end_tick=4; setInterval(function(){tickkk+=1;var a=900,b=9092103;for (var i=0;i<skulls.length;i++){if (skulls[i].x<a&&skulls[i].team==2){a=skulls[i].x;b=skulls[i].health}};if(a<450&&tickkk==1&&b>15){new_bullet(50,375,1,a/5,(a/25)/25),5,0};if(tickkk==end_tick){tickkk=0}},30)");

		//army of bow
			div_button4=newNode("DIV","army-of-bow",`
				position: relative;

				width: 70px;
				height: 70px;

				left: 50%;
				top: 50%;

				transform: translate(-115px, -245px);

				background-color: #FFFFFF;

				border-radius: 5px;

				z-index: 1200;

				opacity: 0.5;
			`);

			div_button4.setAttribute("ONMOUSEOVER", "this.style.backgroundColor='#D3D3D3'");
			div_button4.setAttribute("ONMOUSEOUT", "this.style.backgroundColor='#FFFFFF'");

			div_button4.setAttribute("ONCLICK", "var TOTAL=0; setInterval(function(){TOTAL+=1; if(TOTAL<=5){new_skull(x=0, y=400,func_=skeleton_bow_walking_func(0,function(lead_l, lead_r){let damage=8;new_arrow(this.x+16*this.dir, this.y-22, this.team, 18*this.dir, -3.6, 0.36*this.dir, 0.36, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 10*this.dir, -2, 0.2*this.dir, 0.2, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 11*this.dir, -2.2, 0.22*this.dir, 0.22, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 12*this.dir, -2.4, 0.24*this.dir, 0.24, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 13*this.dir, -2.6, 0.26*this.dir, 0.26, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 14*this.dir, -2.8, 0.28*this.dir, 0.28, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 15*this.dir, -3, 0.3*this.dir, 0.3, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 16*this.dir, -3.2, 0.32*this.dir, 0.32, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 17*this.dir, -3.4, 0.34*this.dir, 0.34, damage); new_arrow(this.x+16*this.dir, this.y-22, this.team, 20*this.dir, -4, 0.4*this.dir, 0.4, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 19*this.dir, -3.8, 0.38*this.dir, 0.38, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 21*this.dir, -4.2, 0.42*this.dir, 0.42, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 22*this.dir, -4.4, 0.44*this.dir, 0.44, damage);new_arrow(this.x+16*this.dir, this.y-22, this.team, 23*this.dir, -4.6, 0.46*this.dir, 0.46, damage);}),1,1500);}else{clearInterval();}},1000);");

		//army of police
			div_button5=newNode("DIV","army-of-police",`
				position: relative;

				width: 70px;
				height: 70px;

				left: 50%;
				top: 50%;

				transform: translate(-195px, -315px);

				background-color: #FFFFFF;

				border-radius: 5px;

				z-index: 1200;

				opacity: 0.5;
			`);

			div_button5.setAttribute("ONMOUSEOVER", "this.style.backgroundColor='#D3D3D3'");
			div_button5.setAttribute("ONMOUSEOUT", "this.style.backgroundColor='#FFFFFF'");

			div_button5.setAttribute("ONCLICK", "var TOTAL2=0; setInterval(function(){TOTAL2+=1; if(TOTAL2<=5){new_skull(0, 400, skeleton_police_walking_func(-50, function(lead_l, lead_r){new_bullet(this.x+25*this.dir, this.y-23, this.team, this.dir*25, 0, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-22, this.team, this.dir*25, 0.1, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-22, this.team, this.dir*25, 0.2, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-22, this.team, this.dir*25, 0.3, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-24, this.team, this.dir*25, -0.1, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-24, this.team, this.dir*25, -0.2, this.dir*0.2, 0.05, 30);new_bullet(this.x+25*this.dir, this.y-24, this.team, this.dir*25, -0.3, this.dir*0.2, 0.05, 30);}), 1, 1000, 1000);}else{clearInterval();}},1000);");

		div_userscript.appendChild(div_button1);
		div_userscript.appendChild(div_button2);
		div_userscript.appendChild(div_button3);
		div_userscript.appendChild(div_button4);
		div_userscript.appendChild(div_button5);


		div_userscript.setAttribute("ONMOUSEOVER", "this.style.opacity=0.9;");
		div_userscript.setAttribute("ONMOUSEOUT", "this.style.opacity=0.5;");

		body.appendChild(div_userscript);
	}else{
		document.getElementById("userscript").remove();
	}
}