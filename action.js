function showChatList(){
	var h=100;
	var el1=document.getElementById("listchat");
	var el2=document.getElementById("head");
	if (el1.style.visibility=="visible"){
		el1.style.visibility="hidden"; el2.style.bottom="0px";
	} else {
		el1.style.visibility="visible"; el1.style.height=el2.style.bottom=h+"px";
	}
}
function expandChat(name){
	var h=200;
	var el1=document.getElementById("echead");
	var el2=document.getElementById("eclist");
	var el3=document.getElementById("expandchat");
	el1.innerHTML=name+" (online)<div id=\"close\" onclick=\"closeExpandChat()\">x</div>";
	el3.style.visibility="visible";
	el3.style.right="215px";
	el1.style.bottom=el2.style.height=h+"px";
}
function closeExpandChat(){
	document.getElementById("expandchat").style.visibility="hidden";
}
