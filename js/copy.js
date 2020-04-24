function copy(){
    var temp=document.createElement("input");
    document.body.appendChild(temp);
    temp.value=document.getElementById("output").innerHTML;
    temp.select();
    document.execCommand("copy");
    temp.blur();
    document.body.removeChild(temp);
    document.getElementById('finish-copy').style.display="inline-block";
}