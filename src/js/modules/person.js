export default class Person {
    constructor(name,age){
        this.name=name
        this.age =age
    }

    getDataPerson(){
        return `Hey ${this.name}, ${this.age} years old`
    }
}
