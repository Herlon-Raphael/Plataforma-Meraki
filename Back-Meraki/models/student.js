class Student {
  constructor(
     id,
    uid,    
    firstName,
    lastName,
    cpf,
    cep,
    street,
    homeNumber,
    complement,
    telephone,
    eMail,
    status
  ) {
    this.id = id;
    this.uid = uid;   
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
    this.cep = cep;
    this.street = street;
    this.homeNumber = homeNumber;
    this.complement = complement;
    this.telephone = telephone;
    this.eMail = eMail;
    this.status = status;
  }
}

module.exports = Student;
