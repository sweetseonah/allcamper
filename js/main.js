
   var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
        body = document.body;

    showRight.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuRight, 'cbp-spmenu-open' );
      disableOther( 'showRight' );
    };
    function disableOther( button ) {
      if( button !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
      }
    };


 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }



 const myPicker = new lightPick({
      field: document.getElementById('demo'),
      singleDate: false
});
