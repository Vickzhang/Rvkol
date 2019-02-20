var break_line = document.getElementById("text_desc_p");
var content = break_line.innerHTML;
break_line.innerHTML = content.replace(/。/g, "。<br>");


