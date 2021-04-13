/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // Largeur du batiment
var H = parseInt(inputs[1]); // Hauteur du batiment
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);
var v=0;
var h=0;
console.error('N '+ N);
console.error('hauteur ' + H);
console.error('largeur ' + W);
var m = 1;
var i=0;
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    
    if (Math.abs(H - Y0) > 5 || Math.abs(W - X0))
    {m = 10}

    if ((Y0 + m > H )||( X0 + m > W ))
    {m = 1}
    
   //for (i=0; i<N; i++)
    {
        if (H>= 2 && W>=2)
        {
        console.error('hauteur ' + H);
        console.error('largeur ' + W);
        }
        else
        {m = 1;
        n = 1;}
        
        if ((Y0 + m > H )||( X0 + m > W ))
        {m = 1;
        n = 1;}
        
    switch (bombDir)
    {case 'U':
        h = Y0 - m;
        break;
        
    case 'UR':
        v = X0 + n;
        h = Y0 - m;
        break;
    
    case 'R':
        v = X0 + n;
        break;
        
    case 'DR':
        v = X0 + n;
        h = Y0 + m;
        break;
        
    case 'D':
        h = Y0 + m;
        break;
        
    case 'DL':
        h = Y0 + n;
        v = X0 - m;
        break;
        
    case 'L':
        v = X0 - m;
        break;
        
    case 'UL':
        v = X0 - m;
        h = Y0 - n;
        break;
    }
    X0 = v;
    Y0 = h;
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // the location of the next window Batman should jump to.
    console.log(v,h);
    }
}
