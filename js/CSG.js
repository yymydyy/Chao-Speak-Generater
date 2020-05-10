function encode(letter){
    var base_table=['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','/'];
    var code='';
    var i,j;
    var ascii=[0];
    letter=escape(letter);
    for(i=0;i<letter.length;i++){
        ascii[i]=letter[i].charCodeAt();
    }
    for(i=0,j=0;i<letter.length*2-1;i+=2,j++){
        code+=base_table[ascii[j]>>4];
        code+=base_table[ascii[j]&0xf];
    }
    document.getElementById("output").innerHTML=code;
    if(letter!=''){
        document.getElementById("copy").style.display="inline-block";
    }
    document.getElementById('finish-copy').style.display="none";
}

function decode(code){
    var base_table=['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','/'];
    var table=new Array(128).fill(0);
    var letter='';
    var i,j;
    var ascii=[0];
    var ascii_table=[0];
    for(i=0;i<base_table.length;i++){
        ascii_table[i]=base_table[i].charCodeAt();
    }
    for(i=0;i<base_table.length;i++){
        table[ascii_table[i]-1]=i;
    }
    for(i=0;i<code.length;i++){
        ascii[i]=code[i].charCodeAt();
    }
    for(i=0,j=0;j<code.length/2;i+=2,j++){
        letter+=String.fromCharCode(table[ascii[i]-1]<<4|table[ascii[i+1]-1]);
    }
    if(letter==String.fromCharCode(0)){
        letter=escape("无法解码!");
        document.getElementById("copy").style.display="none";
    }
    else if(code==''){
        document.getElementById("copy").style.display="none";
    }
    else{
        document.getElementById("copy").style.display="inline-block";
    }
    letter=unescape(letter);
    document.getElementById("output").innerHTML=letter;//unescape(letter);
    document.getElementById('finish-copy').style.display="none";
}