/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs: string[] = readline().split(' ');
 const W: number = parseInt(inputs[0]); // number of columns.
 const H: number = parseInt(inputs[1]); // number of rows.
 let type: string;
 let parcours = new Array<Array<string>>();
 for (let i = 0; i < H; i++) {
     var LINE: string = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
     console.error("line " + LINE);
     let plop = LINE.split(" ");
     console.error("plop "+plop);
     parcours.push(plop);
 }
 
 const EX: number = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).
 // game loop
 while (true) {
     var inputs: string[] = readline().split(' ');
     
     const XI: number = parseInt(inputs[0]);
     const YI: number = parseInt(inputs[1]);
     const POS: string = inputs[2];
     let type_case = parseInt(parcours[YI][XI]);
     console.error("type_case " + type_case);
     console.error(XI,YI,POS);
     switch(type_case){
        case 3:
             var X = XI;
             var Y = YI +1;
         break;
         case 11:
             var X = XI + 1;
             var Y = YI;
         break;
         case 2:
             if (POS === "LEFT"){
                 var X = XI + 1;
                 var Y = YI; 
             }else{
                 var X =XI - 1;
                 var Y = YI;
             }
         break;
         case 10:
             var X = XI - 1;
             var Y= YI;
         break;
         case 13:
             var X = XI;
             var Y = YI + 1;
         break;
     }
 
     // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
     console.log(X, Y);
 }