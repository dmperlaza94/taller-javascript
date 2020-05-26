const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profession: 'periodista',
    //Mi nombre es María, tengo 34 años y soy periodista',
    shoowBio: function(){
        return 'Mi nombre es' + " " + this.name +  " " +'tengo'+ " " + this.age + 'y soy' + " "+ this.profession ;  
     }
      }
      alert (geekGirl1.shoowBio());
      
      const geekGirl2 = {
        name: 'Rocio',
        age: 25,
        profession: 'Actriz',
        shoowBio: function(){
            return 'Mi nombre es' + " " + this.name +  " " +'tengo'+ " " + this.age + 'y soy' + " "+ this.profession ;  
         }
          }
          alert (geekGirl2.shoowBio());