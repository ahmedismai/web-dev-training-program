class School{
    constructor(name,level,numberOfStudents){
        this._name = name
        this._level = level
        this._numberOfStudents = numberOfStudents
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(num){
        if (typeof num === 'number') {
            this._numberOfStudents=num
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts(){
        console.log(`SCHOOL ${this._name} educates ${this._numberOfStudents} OF STUDENTS students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomIndex]
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }

  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      return this._sportsTeams;
    }
  }


const lorraineHansbury = new PrimarySchool('lorraineHansbury', 514 ,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()

console.log(School.pickSubstituteTeacher([
    'Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'
]))

const alSmith = new HighSchool('Al E. Smith' , 415 , ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
console.log(alSmith.sportsTeams)