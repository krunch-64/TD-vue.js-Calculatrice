let app = new Vue({
    el: ".parent",
    data: {
        result: "0",
        check: "",
    },
    methods: {
        // la fonction print permet d'afficher les opérations faite par l'utilisateur et la conditions permet de savoir si il faut afficher un zéro 
        print(nb) {
            if (this.result == "0") {
                this.result = ""
                this.result += nb
            }
            else {
                this.result += nb
            }
        },
        clearResult() {
            this.result = "0"
        },
        // eval permet de donner le résultat de l'opération affichée 
        giveResult() {
            this.result = eval(this.result).toString()
        },
        // la fonction ratio divise le result par 100 et convertie en string 
        ratio() {
            this.result = (this.result/100).toString()
        },
        // la fonction verif permet de ne pas écrire le même symbole   
        verif: function(o) {
            if(this.check !== o) {
                this.result = "" + this.result + o;
                this.check = o;
            }
        },
        // la fonction changeRelatif permet de changer le signe 
        changeRelatif() {
            this.result = this.result*(-1)
        }
    }
})