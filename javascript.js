function closeFaq() {
try{
faqWin.close();
} catch(e){}
}

function openFaq(id){
faqWin=window.open("","faq","width=350,height=540");
faqWin.document.write("<html><title>お答えします</title><body>");
faqWin.document.write('<link href="style.css" rel="stylesheet" type="text/css" media="all" />');
faqWin.document.write('<body>');
faqWin.document.write(document.getElementById(id).innerHTML);
faqWin.document.write('<input type="button" value="閉じる" onclick="window.close();" /><span class="white">(親ウィンドウクリックで自動的に閉じます)</span></body></html>');
faqWin.document.close();
}
window.onfocus=function() {
closeFaq();
}
window.onload=function() {
var f1=window.location.href.split('/');
switch(f1[f1.length-1]) {
case 'saisei.html':
document.getElementById('button_saisei').style.background='url(images/button/button_01a.gif)';
document.getElementById('button_saisei').style.backgroundRepeat='';
break;
case 'sinchiku.html':
document.getElementById('button_sinchiku').style.background='url(images/button/button_02a.gif)';
document.getElementById('button_sinchiku').style.backgroundRepeat='';
break;
case 'pol.html':
document.getElementById('button_pol').style.background='url(images/button/button_03a.gif)';
document.getElementById('button_pol').style.backgroundRepeat='';
break;
case 'sendmail.php':
document.getElementById('button_sendmail').style.background='url(images/button/button_04a.gif)';
document.getElementById('button_sendmail').style.backgroundRepeat='';
break;
case 'aboutus.html':
document.getElementById('button_aboutus').style.background='url(images/button/button_05a.gif)';
document.getElementById('button_aboutus').style.backgroundRepeat='';
break;
}
}

var flashSrc='';
function openMovie(fileName){
try {
document.getElementById("top_flash").style.display="none";
} catch(e) {}
window.open("playMovie.php?s="+fileName,"movie","width=670,height=540,scrollbars=no,location=no,menubar=no");
}
function openOptionalMovie(fileName){
try {
document.getElementById("top_flash").style.display="none";
} catch(e) {}
fileName=encodeURIComponent(fileName);
window.open(scriptDir+"playOptionalMovie.php?s="+fileName,"movie","width=670,height=540,scrollbars=no,location=no,menubar=no");
}
function startSwf() {
try{
faqWin.close();
document.getElementById("top_flash").style.display="block";
} catch(e){}
}
function closeMovie() {
window.opener.document.getElementById("top_flash").style.display="block";
try{
window.close();
window.opener.document.getElementById("top_flash").style.display="block";
} catch(e){}
}
function changeBackground(id,f){
switch(f){
case 1:
document.getElementById(id).style.backgroundImage="url(img/button/button_act.gif)";
break;
default:
document.getElementById(id).style.backgroundImage="url(img/button/button.gif)";
}
}
window.onload=function() {
if (!flashSrc) {
try {
var s=window.location.pathname;
var ss=s.split('/');
s=ss[ss.length-1];
s = s.replace('.html','');
s = s.replace('.php','');
document.getElementById('top_flash').innerHTML='<object data="playDemo.swf?srcFile='+s+'" type="application/x-shockwave-flash" class="contents_flash"><param name="movie" value="playDemo.swf?srcFile='+s+'" /><param name="quality" value="high" /><param name="play" value="true" /><embed src="playDemo.swf?srcFile='+s+'" class="contents_flash" /></object>';
} catch(e) {}
} else {
try {
document.getElementById('top_flash').innerHTML='<object data="'+scriptDir+'playOptional.swf?srcFile='+flashSrc+'" type="application/x-shockwave-flash" class="contents_flash"><param name="movie" value="playOptional.swf?srcFile='+flashSrc+'" /><param name="quality" value="high" /><param name="play" value="true" /><embed src="playOptional.swf?srcFile='+flashSrc+'" class="contents_flash" /></object>';
} catch(e){}
}
}