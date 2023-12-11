var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
    } else {
      pos+=1; 
      elem.style.top = pos + 'px'; 
      elem.style.left =pos + 'px'; 
    }
  }
}