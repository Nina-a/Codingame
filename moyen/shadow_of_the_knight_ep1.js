/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 var W = parseInt(inputs[0]); // Largeur du batiment
 var H = parseInt(inputs[1]); // Hauteur du batiment
 var N = parseInt(readline()); // nombre max de tour avant la fin du jeu.
 var inputs = readline().split(' ');
 var X0 = parseInt(inputs[0]);//position de départ de Batman en abscisse
 var Y0 = parseInt(inputs[1]);// position de départ de Batman en ordonnées
 //var v=0;
 //var h=0;
 console.error('N ' + N);
 console.error('hauteur ' + H);
 console.error('largeur ' + W);
 var deplacement_vertical;
 var deplacement_horizontal;
 var X = 0;
 var Y = 0;
 var xMin = 0;
 var xMax = W;
 var yMin = 0;
 var yMax = H;
 var contientU;
 var contientD;
 var contientL;
 var contientR;
 // game loop
 
 while (true) {
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
     console.error(bombDir, xMin, xMax, yMin, yMax);
     contientU = bombDir.indexOf('U');
     contientD = bombDir.indexOf('D');
     contientL = bombDir.indexOf('L');
     contientR = bombDir.indexOf('R');
     deplacement_horizontal = 0;
     deplacement_vertical = 0;
 
     if (contientU != -1) {
         deplacement_vertical = Math.ceil((Y0 - yMin) / 2);
         Y = Y0 - deplacement_vertical;
         yMax = Y0;
     };
     if (contientD != -1){
         deplacement_vertical = Math.floor((yMax - Y0) / 2);
         Y = Y0 + deplacement_vertical;
         yMin = Y0;
     };
     if (contientR != -1){
         deplacement_horizontal = Math.floor((xMax - X0) / 2);
         X = X0 + deplacement_horizontal;
         xMin = X0;
     };
     if (contientL != -1) {
         deplacement_horizontal = Math.ceil((X0 - xMin) / 2);
         X = X0 - deplacement_horizontal;
         xMax = X0;
     };
 
     X0 = X;
     Y0 = Y;
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
     // the location of the next window Batman should jump to.
     console.log(X, Y);
 }
