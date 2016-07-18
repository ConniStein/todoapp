// vnkfdjndvsjnbeakjdkl
//AAAAAAAAAAAAAAAHHHHHHHHHHHHH
//NO ENTIENDO

(function(){

  var nuevaTarea = document.querySelector( '#tareaNueva' ),
      form = document.querySelector( 'form' ),
      addTarea = document.querySelector( '#agregarTarea' );
    
  form.addEventListener( 'submit', function( blankSpace ) {
    var text = addTarea.value;
    if ( text !== '' ) {
      nuevaTarea.innerHTML += '<li>' + text + '</li>';
      addTarea.value = '';
      addTarea.focus();
    }
    blankSpace.preventDefault();
  }, false);

  todo.addEventListener( 'click', function( blankSpace ) {
    var tarea = blankSpace.target;
    if ( tarea.tagName === 'LI' ) {
      if ( tarea.classList.contains( 'done' ) ) {
        tarea.parentNode.removeChild( t );
      } else {  
        tarea.classList.add( 'done' );
      }
    };
    blankSpace.preventDefault();
  }, false);

})();