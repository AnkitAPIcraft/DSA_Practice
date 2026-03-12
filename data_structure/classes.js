class Student {
    constructor(first, last, grade) {
        this.first = first;
        this.last = last;
        this.grade = grade;
        this.total = []
    }

    fullName() {
        return `my name is ${this.first} ${this.last}`
    }

    calculation(num) {
       return this.total.push(num)
    }

    avarageSum() {
        let sum  = this.total.reduce((a, b) => a + b)
        return sum/this.total.length
    }
    // static function are like a utility function, they can not be implemented on instanciated class.
    static EnrollStudents() {
        return "Students Enrolled"
    }
}

let firstStudent = new Student("ankit", "sharma", 1)

firstStudent.calculation(4)
firstStudent.calculation(8)
console.log(firstStudent);
console.log(firstStudent.total);
console.log(firstStudent.avarageSum());
// console.log(firstStudent.EnrollStudents()); It will not work
console.log(Student.EnrollStudents());

