function drawProgressBar(time, max){
	if(time<=max){
		ctx.beginPath();
		ctx.lineWidth=SCALE*8;
		ctx.strokeStyle="#f2579a";
		ctx.moveTo(SCALE*320, SCALE*17);
		ctx.lineTo(SCALE*(320+time/max*200), SCALE*17);
		ctx.stroke();

		ctx.beginPath();
		ctx.moveTo(SCALE*(320+time/max*200), SCALE*17);
		ctx.lineTo(SCALE*520, SCALE*17);
		ctx.strokeStyle="#393939";
		ctx.stroke();
	}else{
		ctx.lineWidth=SCALE*8;
		
		ctx.beginPath();
		ctx.moveTo(SCALE*320, SCALE*17);
		ctx.lineTo(SCALE*520, SCALE*17);
		ctx.strokeStyle="#f2579a";
		ctx.stroke();
	}
	
	ctx.lineWidth=SCALE;
}