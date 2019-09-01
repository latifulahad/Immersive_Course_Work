
function Student(first, last) {
    this.first = first;
    this.last = last;
    this.courses = [];
}

Student.prototype.name = function() {
    console.log(`${this.first} ${this.last}`);
};

Student.prototype.enroll = function(corseObj) {
    if(this.courses.some(cls => cls.conflictsW(corseObj))) {
        return "Cannot enroll, classes collide!";
    } else {
        this.courses.push(corseObj);
        
        if (!corseObj.enrolledsStuds.includes(this)) {
            corseObj.enrolledsStuds.push(this);
        }
    }

};

Student.prototype.courseLoad = function () {
    let ans = {};

    this.courses.forEach(crs => {
        ans[crs.department] = ans[crs.department] || 0 ;
        ans[crs.department] += crs.credits;
    });

    return ans;
};

function Course(name, department, credits, days, tBlk) {
    this.name = name;
    this.department = department;
    this.credits = credits;
    this.days = days;
    this.tBlk = tBlk;
    this.enrolledsStuds = [];
};

Course.prototype.addStudent = function (stu) {
    this.enrolledsStuds.push(stu);
};

Course.prototype.conflictsW = function (otrCls) {
    if(this.tBlk !== otrCls.tBlk ) { return false; }

    return this.days.some(day => otrCls.days.includes(day) )
};

//TESTS vvv
const sabit = new Student("Latiful", "Ahad");
const javaS = new Course("JavaScript", "Front-End", 4, ["Thur", "Tue"], 1);
const ruby = new Course("Ruby", "Back-End", 4, ["Mon"], 1);
const html = new Course("HTML", "Front-End", 3, ["Tue"], 1);
sabit.enroll(javaS)
// sabit.enroll(html)
// console.log(html.conflictsW(javaS)) //WORKS

// console.log(sabit)
// console.log(javaS)
// console.log(sabit.courses) //WORKS
// console.log(sabit.courseLoad()) //WORKS
// let a = sabit.courseLoad();
// console.log(a['Front-End']) 
// console.log(javaS.enrolledsStuds)
