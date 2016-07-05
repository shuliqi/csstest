var getDom = function  (id) {
	return document.getElementById(id);
}
var addEvent = function(id,event,fn){
	var el = getDom(id) || document;
	if (el.addEventListener) {
		el.addEventListener(event,fn,false);
	}
	else if(el.attachEvent){
		el.attachEvent('on' + event,fn);
	}
}
var index = 1 ;
var changeBgroud = function(){
	
	if (index < 8) {
	var oBgrud = getDom("background");
	oBgrud.style.background=  'images/beijing' + index + '.png';
	startMove(oBgrud, {opacity:100})
	index++;
	}
	else{
		index = 1;
	}
	
}

var timer = null;
timer = setInterval(changeBgroud,3000)
