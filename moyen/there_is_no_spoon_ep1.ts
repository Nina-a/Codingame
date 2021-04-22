/**
 * Don't let the machines win. You are humanity's last hope...
 **/

 const width: number = parseInt(readline()); // the number of cells on the X axis
 const height: number = parseInt(readline()); // the number of cells on the Y axis
 console.error(width);
 console.error(height);
 let str: string;
 let grilleX = new Array<Array<number>>();
 let grilleY =  new Array<Array<number>>();
 
 let grille = new Array<Array<string>>();
 for (let i = 0; i < height; i++) {
     const line: string = readline(); // width characters, each either 0 or .
     grille[i] = new Array<string>();
     for (let j = 0; j < width; j++){
         let cellule = line.charAt(j);
         grille[i].push(cellule);
      }
  }
 for (let numeroLigne = 0; numeroLigne < height; numeroLigne++) {
     grilleX[numeroLigne] = new Array<number>();
     for (let numeroColonne = 0; numeroColonne < width; numeroColonne++) {
         let cellule = grille[numeroLigne][numeroColonne];
         if (cellule === '0') {
             grilleX[numeroLigne].push(numeroColonne);
         }
     }
     console.error(grilleX);
 }
 for (let numeroColonne = 0; numeroColonne < width; numeroColonne++) {
     grilleY[numeroColonne] = new Array<number>();
     for (let numeroLigne = 0; numeroLigne < height; numeroLigne++) {
         let cellule = grille[numeroLigne][numeroColonne]
         if (cellule === '0') {
             grilleY[numeroColonne].push(numeroLigne);   
         }
     }
     console.error(grilleY);
 }
 //console.error("grilleX " +grilleX);
 //console.error("grilleY " +grilleY);
 
 for (let numeroLigne = 0; numeroLigne < height; numeroLigne++) {
     //console.error("i " + numeroLigne);
     for (let numeroColonne = 0; numeroColonne < grilleX[numeroLigne].length; numeroColonne++) {
         let x2: number; let y2: number; let x3: number; let y3: number;
 
         const x1 = grilleX[numeroLigne][numeroColonne];
         const y1 = numeroLigne;
         const noeudEnDerniereColonne = numeroColonne + 1 === grilleX[numeroLigne].length;
         const noeudEnDerniereLigne = numeroLigne + 1 === grilleY[numeroColonne].length;
 
         if (noeudEnDerniereColonne) {
             x2 = -1;
             y2 = -1;
         } else {
             x2 = grilleX[numeroLigne][numeroColonne + 1];
             y2 = numeroLigne;
         }
         //console.error(x2, y2);
         if (noeudEnDerniereLigne || y1 >= grilleY[numeroColonne].length) {
             x3 = -1;
             y3 = -1;
         } else {
             y3 = grilleY[numeroColonne][numeroLigne + 1];
             x3 = y3 !== -1 ? x1 : -1;
         }
         //console.error(x1, y1, x2, y2, x3, y3)
         console.log(x1, y1, x2, y2, x3, y3);
     }
 }
 // Write an action using console.log()
 // To debug: console.error('Debug messages...');
 
 
 // Three coordinates: a node, its right neighbor, its bottom neighbor