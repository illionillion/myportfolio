const btn=document.getElementById('btn');

const bar=document.getElementById('sidebar');

btn.onclick=function movebar(){
  bar.classList.toggle('movebar');

  btn.classList.toggle('btnx');
}