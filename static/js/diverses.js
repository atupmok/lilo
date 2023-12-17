/*
 JavaScript - diverses
*/


//Bilder vergrößern

function fenster(a)
	{
	var win;
	win = window.open (a,"fenster","dependent=yes,hotkeys=no,menubar=no,toolbar=no,height=600,width=600,left=10,top=10,resizable=yes,scrollbars=yes");
	win.document.focus();
	}

//
function DreiFrames(URI1,F1,URI2,F2,URI3,F3) {
  Frame1=eval("parent."+F1);
  Frame2=eval("parent."+F2);
  Frame3=eval("parent."+F3);
  Frame1.location.href = URI1;
  Frame2.location.href = URI2;
  Frame3.location.href = URI3;
}
//...