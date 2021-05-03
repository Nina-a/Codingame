var inputs: string[] = readline().split(' ');
const W: number = parseInt(inputs[0]);
const H: number = parseInt(inputs[1]);

const lines = [];
for (let ligne = 0; ligne < H; ligne++) {
    lines.push(readline());
}

for (let colonne = 0; colonne < W; colonne = colonne + 3) {
    let caseDepart = lines[0][colonne];
    let colonneDepart = colonne;
    for (let ligne = 0; ligne < H; ligne++) {
        var schema = lines[ligne][colonne];
        var schemaPrecedent = lines[ligne][colonne-1];
        var schemaSuivant = lines[ligne][colonne+1];
        switch (schema){
            case "|":
            if( "-" == schemaPrecedent ){
                colonne = colonne - 3;
                break;
            }
            if( "-" == schemaSuivant){
                colonne = colonne + 3;
                break;
            }
            break;
        }
    }
    colonne = colonneDepart;
    const result = caseDepart.concat(schema)
    console.log(result);
}