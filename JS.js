$(document).ready(function() {
});



var Linked = {
 FONTCOLOR:function (color) {
   document.getElementById("TCC_TEXT").style.color = color;
 },
 MODEFONTCOLOR:function (color) {
   document.getElementById("PAGEmodeCHANGE").style.color = color;
 },
 MODEBGCOLOR:function (color) {
 document.getElementById("PAGEmodeCHANGE").style.backgroundColor = color;
 },
 FONTSIZE:function (size) {
   document.getElementById("FONTsizeCHANGE").style.fontSize = size;
 },
 }

function TextToAlert() {
const textBox = document.getElementById("TXTbox").value;
 if (textBox == ""){
   alert("내용을 입력하세요")
 } else {
   alert(textBox)
   textBox == ""
 }
}

function TextColorChange(self) {
 if (self.value === '색 바꾸기') {
   Linked.FONTCOLOR('#e85743');
   self.value = 'RETURN';
 } else {
   Linked.FONTCOLOR('black');
   self.value = "색 바꾸기";
 }
}

function PageModeChange(self) {
 if (self.value === '다크모드') {
   Linked.MODEFONTCOLOR('white');
   Linked.MODEBGCOLOR('#5c5c5c');
   self.value = '컬러모드';
 } else {
   Linked.MODEFONTCOLOR('black');
   Linked.MODEBGCOLOR('#9be88b');
   self.value = "다크모드";
 }
}

function FontSizeChange(self) {
 if (self.value === '폰트 키우기') {
   Linked.FONTSIZE('25px');
   self.value = '폰트 줄이기';
 } else {
   Linked.FONTSIZE('');
   self.value = "폰트 키우기";
 }
}
