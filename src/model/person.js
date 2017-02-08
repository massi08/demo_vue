class Person{

  constructor(id, firstName="", lastName="", profession=""){
    this.state = {
      id : id,
      firstName: firstName,
      lastName: lastName,
      profession: profession
    }
  }

  setProfession(profession){
    this.state.profession = profession
  }

  setFirsName(firstName){
    this.state.firstName = firstName
  }

  setLastName(lastName){
    this.state.lastName = lastName
  }
}
