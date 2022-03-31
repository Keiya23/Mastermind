const Mastermind = {
    // Déclaration des attributs à utiliser
    nbCouleur: 6,
    nbLignes: 12,
    nbColumns: 4,
    solutAleatoire: ["green", "blue", "orange", "red", "yellow", "purple"].sort(() => 0.5 - Math.random()).slice(0, 4),
    solutProposee: [],
    ligne: 1,
    colonne: 1,
    // Méthode qui apelle une nouvelle partie appelant le dessin du plateau

    newGame: function () {
        this.dessinerPlateau();
        console.log(this.solutAleatoire)
    },

    dessinerPlateau: function () {
        plateau = document.getElementById('plateau');
        plateau.innerHTML = '';

        for (i = this.nbLignes; i > 0; i--) {
            ligne = document.createElement('tr');
            ligne.id = 'turn-' + i;
            cellule = document.createElement('td');
            cellule.innerHTML = i;
            cellule.style.width = '40px';

            ligne.appendChild(cellule);

            for (j = 1; j <= this.nbColumns; j++) {
                cellule = document.createElement('td');
                cellule.innerHTML = '';
                cellule.id = 'turn-' + i + '-' + j;
                cellule.style.width = '40px';
                ligne.appendChild(cellule);
            }

            for (k=1;k <= this.nbColumns;k++) {
                bienMal = document.createElement('td');
                bienMal.innerHTML = '';
                bienMal.id = 'bienmal-' + i + '-'+k;
                bienMal.style.width = '40px';
                ligne.appendChild(bienMal);
            }

            plateau.appendChild(ligne);
        }
    },
// 6 méthodes qui pourraient être probablement condensés en une seule ...
    jouerBouleVerte: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {
                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/1.gif alt='hello'/>`
                this.solutProposee.push("green");
                this.colonne++;
            } else {
                this.colonne = 1
                this.ligne++;
            }
        }
    },

    jouerBouleBleue: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {

                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/2.gif alt='hello'/>`
                this.solutProposee.push("blue");
                this.colonne++;
            } else {
                this.colonne = 1
                this.ligne++;

            }
        }
    },

    jouerBouleOrange: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {
                // addEventListener('click', couleurBoule, false);
                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/3.gif alt='hello'/>`
                this.solutProposee.push("orange");
                this.colonne++;
            } else {
                this.colonne = 1
                this.ligne++;

            }
        }
    },

    jouerBouleRouge: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {
                // addEventListener('click', couleurBoule, false);
                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/4.gif alt='hello'/>`
                this.solutProposee.push("red");
                this.colonne++;
            } else {
                this.colonne = 1
                this.ligne++;

            }
        }
    },

    jouerBouleJaune: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {
                // addEventListener('click', couleurBoule, false);
                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/5.gif alt='hello'/>`
                this.solutProposee.push("yellow");
                this.colonne++;
            } else {
                this.colonne = 1
                this.ligne++;

            }
        }
    },

    jouerBouleViolet: function () {
        if (this.ligne <= 12) {
            if (this.colonne <= 4) {
                // addEventListener('click', couleurBoule, false);
                let colorerCase = document.getElementById('turn-' + this.ligne + '-' + this.colonne + '');
                colorerCase.innerHTML = `<img src=images/6.gif alt='hello'/>`
                this.solutProposee.push("purple");
                this.colonne++;
                
            } else {
                this.colonne = 1
                this.ligne++;

            }

        }
    },
 // méthode valider me retournant le nombre de bien et mal placés et les placent dans le tableau
    valider: function () {
        console.log(this.solutAleatoire);
        console.log(this.solutProposee);
        let compteurBienPlace = 0;
        let compteurMalPlace = 0;
        let caseBienMal;

        for (i = 0; i < this.nbColumns; i++) {
            if (this.solutAleatoire[i] == this.solutProposee[i]) {
                compteurBienPlace++;
            }
            if ((this.solutProposee.includes(this.solutAleatoire[i])) && this.solutAleatoire[i] != this.solutProposee[i]) {
                compteurMalPlace++;
            }
        }
        
        if (compteurBienPlace == 0 && compteurMalPlace == 0) {
            console.log('Aucune bonne solution');
        } else {
            console.log('Vous avez '+compteurBienPlace+" bien placés et "+compteurMalPlace+" mal placés.");
            
            for (j=1;j<=compteurBienPlace;j++) {
                caseBienMal = document.getElementById('bienmal-'+this.ligne+'-'+(j));
                caseBienMal.innerHTML = `<img src=images/bp.gif alt='hello'/>`                 
            }

            for (i=1;i<=compteurMalPlace;i++) {
                caseBienMal = document.getElementById('bienmal-'+this.ligne+'-'+(i+compteurBienPlace));
                caseBienMal.innerHTML = `<img src=images/bc.gif alt='hello'/>`
            }
        }
        if (compteurBienPlace == 4 ) {
            alert('Vous avez gagné !!!')
        } else if (this.ligne==12) {
            alert('Vous avez perdu !!!')
        }
        
        this.solutProposee = [];
        }
}

Mastermind.newGame();
