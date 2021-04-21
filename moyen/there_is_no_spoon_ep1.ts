/**
 * Don't let the machines win. You are humanity's last hope...
 **/

 const width: number = parseInt(readline()); // the number of cells on the X axis
 const height: number = parseInt(readline()); // the number of cells on the Y axis
 let str: string;
 let grille = new Array<Array<string>>();
 for (let i = 0; i < height; i++) {
     const line: string = readline(); // width characters, each either 0 or .
     grille[i] = new Array<string>();
     for (let j = 0; j < width; j++){
         let cellule = line.charAt(j);
         grille[i].push(cellule);
     }
 }
 console.error(grille);
 for (let i = 0; i < height; i++){
     for (let j = 0; j < width; j++){
         let noeuds: string = grille[i][j];
         console.error(noeuds);
         if (noeuds === '0'){
             let x1: number, y1: number, x2: number, y2: number, x3: number, y3: number;
             x1 = i;
             y1 = j;
             if ( j + 1 === width){
                 x2 = -1;
                 y2 = -1;
             }else{
                 x2 = grille[i][j+1] !== '0' ? -1 : j+1;
                 y2 = grille[i][j+1] !== '0' ? -1 : i;}
             if ( i + 1 === height){
                 x3 = -1;
                 y3 = -1;
             }else{
                 x3 = grille[i+1][j] !== '0' ? -1 : j;
                 y3 = grille[i+1][j] !== '0' ? -1 : i+1;
             }
             console.log(x1, y1, x2, y2, x3, y3)
         }
     }
 
 }
 // Write an action using console.log()
 // To debug: console.error('Debug messages...');
 
 
 // Three coordinates: a node, its right neighbor, its bottom neighbor
 