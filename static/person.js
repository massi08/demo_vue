class Persons {

    constructor() {
        this.state = []
    }

    addPerson(id, firstName = "", lastName = "", profession = "") {
        let person = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            profession: profession
        }
        this.state.push(person)
    }

    getPersonById(id){
      for(var i= 0; i<this.state.length; i++){
        if(this.state[i].id === id){
          return this.state[i]
        }
      }
    }
}

let persons_store = new Persons()

persons_store.addPerson(0, "Massinissa", "Bouneffa", "Web Developper")
persons_store.addPerson(1, "Fanuel", "Abebe", "Chomeur")
persons_store.addPerson(2, "Mahmoud", "Ayssami", "Back-End")

