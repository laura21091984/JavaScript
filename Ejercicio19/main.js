// Al hacer click sobre el botón de Guardar salta un alert
documento.querySelector ( ".save" ) . addEventListener ( "clic" ,  saveData );

function  saveData ( )  {
  alert ( 'Se han guardado los datos' );
};

// Al quitar el foco del input cambia de color
const  inputName  =  documento . querySelector ( " .nombre " );

inputName.addEventListener ( 'foco' ,  changeColorFocus );
function  changeColorFocus ( )  {
  inputName . estilo . backgroundColor  =  '# fff666';
};

inputName.addEventListener ( 'focusout' ,  changeColorNoFocus );
function  changeColorNoFocus ( )  {
  inputName.estilo.backgroundColor  =  '# 9999FF';
};

// Si la letra que pulsemos es vocal lo pintaremos de rojo y de verde si es consonante
const  inputRandom  =  documento . querySelector ( '.random' );

inputRandom.addEventListener ( 'pulsación de tecla' ,  checkLetter ) ;
function  checkLetter ( evento ) {
  const  currentLetter  =  evento . cual ;
  if  ( currentLetter  ===  97  ||  currentLetter  ===  101  ||  currentLetter  ===  105  ||  currentLetter  ===  111  ||  currentLetter  ===  117 )  {
    inputRandom . estilo . color  =  '# a8323e' ;
  }  más  {
    inputRandom . estilo . color  =  '# 32a836' ;
  }
} ;
