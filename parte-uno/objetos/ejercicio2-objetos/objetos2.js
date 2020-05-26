const geekGirl1 = {
    name: 'Susana',
    age: 34,
    distance: 50,
    run: function (){
       return "estoy corriendo";
    },
    runMarathon: function(){
        return 'Estoy corriendo un maratón de' + " " + this.distance +  " " +'kilómetros'

    } 
}
    console.log(geekGirl1.runMarathon());
