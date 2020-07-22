var x=view.size.width;
var y=view.size.height;
var x1=x/2;
var y1=y/2;
var circ;
var d;

var cir=new Path.Circle(new Point(x1,y1), 30);
function onKeyDown(event) {
	

if(event.key=="right")
{
if(cir.position.x<view.size.width)
{

  cir.position.x=  cir.position.x+12;
}
else
{
	cir.position.x=cir.position.x-cir.position.x;
}
}
if(event.key=="left")
{
	if(cir.position.x>0)
	{
	  cir.position.x=  cir.position.x-12;
	}
	else
	{
		cir.position.x=view.size.width;
	}
}
if(event.key=="up")
{
	if(cir.position.y>0)
	{
	  cir.position.y=  cir.position.y-12;
	}
	else
	{
		cir.position.y=view.size.height;
	}
	  
}
if(event.key=="down")
{
	if(cir.position.y<view.size.height)
	{
		
	  cir.position.y=  cir.position.y+12;
	}
	else
	{
		cir.position.y=0;
	}
}

if(event.key=="space")
	{
		circ=new Path.Circle(new Point(cir.position), 15);
		circ.fillColor="purple";
		destination=new Point(view.size.width+50,circ.position.y+50);
		c=1;
	}

   
	   


	
		
	}
	
	var c=0;
var destination;
var text = new PointText({
	point: view.center,
	justification: 'center',
	fontSize: 30,
	fillColor: 'white'
});
var destinatio = Point.random() * view.size;
		
function onFrame(event)
{
	var vector = destinatio - text.position;
	
	// We add 1/30th of the vector to the position property
	// of the text item, to move it in the direction of the
	// destination point:
	text.position += vector / 30;
	
	// Set the content of the text item to be the length of the vector.
	// I.e. the distance it has to travel still:
	text.content = Math.round(vector.length);
	
	// If the distance between the path and the destination is less
	// than 5, we define a new random point in the view to move the
	// path to:
	if (vector.length < 5) {
		destinatio = Point.random() * view.size;
	}

	
	if(c==1)
	{

	var vector = destination - circ.position;
	
	// We add 1/30th of the vector to the position property
	// of the text item, to move it in the direction of the
	// destination point:
	circ.position += vector / 8;
	
if(Math.abs(circ.position.x-text.position.x)<8)
{
	alert(text.content);
}
	
	// Set the content of the text item to be the length of the vector.
	// I.e. the distance it has to travel still:
	
	
	// If the distance between the path and the destination is less
	// than 5, we define a new random point in the view to move the
	// path to:
}
}






cir.fillColor="orange";


