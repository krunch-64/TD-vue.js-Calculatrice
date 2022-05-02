let app = new Vue({
    el: ".parent",
    data: {
        result: "0",
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
            console.log(this.result)
        },
        clearResult() {
            this.result = "0"
        },
        // eval permet de donner le résultat de l'opération affichée 
        giveResult() {
            this.result = eval(this.result)
        },
        ratio() {
            this.result = (this.result/100).toString()
        }
    }
})