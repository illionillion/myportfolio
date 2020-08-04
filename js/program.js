const btn=document.getElementById('btn');

const bar=document.getElementById('sidebar');

btn.onclick=function movebar(){
  bar.classList.toggle('movebar');

  btn.classList.toggle('btnx');
}

document.getElementById('no1').onclick=function scrollToTop() {
  scrollTo(0, 0);
}

document.getElementById('no2').onclick=function scrollno2(){
  var element = document.getElementById('intro'); // 移動させたい位置の要素を取得
    var rect = element.getBoundingClientRect();
    var position = rect.top;    // 一番上からの位置を取得

  scrollTo(0, position);
 
}
document.getElementById('no3').onclick=function scrollno2(){
  var element = document.getElementById('skills'); // 移動させたい位置の要素を取得
    var rect = element.getBoundingClientRect();
    var position = rect.top;    // 一番上からの位置を取得

  scrollTo(0, position);
 
}
document.getElementById('no4').onclick=function scrollno2(){
  var element = document.getElementById('main'); // 移動させたい位置の要素を取得
    var rect = element.getBoundingClientRect();
    var position = rect.top;    // 一番上からの位置を取得

  scrollTo(0, position);
 
}



