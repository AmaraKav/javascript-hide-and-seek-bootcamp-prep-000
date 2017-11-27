function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
  var select = document.querySelector('.ranked-list');
  for(var i = 0; i < select.length; i++){
    var children = select[i].innerHTML;
    for(var x = 0; x < children.length; x++){
      var children[x].innerHTML = parseInt(children[x].innerHTML) + n;
    }
  }
}
