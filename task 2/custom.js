
let showHideBtn= document.querySelector('#showhideExam')
let studentsTalbe= document.querySelector('#studentsTalbe')
let studentForm=document.querySelector('#addExam')


let students=[
    {name:'aya',class:1,age:15,degree:"A"},
    {name:'nouran',class:2,age:12,degree:"B"}
]
let tableHeaders=["id",'name','class',"age",'degree','actions']

let actions=[
    {txt:'delete',classes:'btn btn-danger m-1'},
    {txt:'edit',classes:'btn btn-warning m-1'},
]

showHideBtn.addEventListener('click',function(e){
    this.innerText=="show Exam form"? this.innerText="Hide Exam form" : this.innerText="show Exam form";
    document.querySelector('#addExam').classList.toggle("d-none")
})

function grade(degree){
    if(degree>85) Grade = "A"
    else if(degree>75) Grade = "B"
    else if(degree>65) Grade = "C"
    else if(degree>65) Grade = "D"
    else Grade = "F"
    return Grade
}
studentForm.addEventListener('submit',function(e){
    e.preventDefault()
    let student={
        name:this.elements.name.value,
        class:this.elements.class.value,
        age:this.elements.age.value,
        degree:grade(this.elements.degree.value)
    }
    students.push(student)
    this.reset()
    this.classList.toggle('d-none')
    showHideBtn.innerText = "show Exam form"

    showStudents()
})

let addElement = function(eletype,parent,txt='',classes=''){
    ele=document.createElement(eletype)
    if(txt!='') ele.innerText=txt
    if (classes!='') ele.classList=classes
    parent.appendChild(ele)
    return ele
}

let showStudents = function(){
    studentsTalbe.innerText=''
    students.forEach((student,i) => {
        tr=addElement('tr',studentsTalbe)
        // addElement('td',tr,i+1)
        tableHeaders.forEach(element=>{
            if(element=="id") txt=i+1
            else if(element=="actions") txt=""
            else txt=student[element]
            td = addElement('td',tr,txt)
        })
        actions.forEach(action=>{
            btn = addElement('button', td, action.txt, action.classes)
            btn.addEventListener('click',function(e){
               if(action.txt=='edit') editDegree(i)
                else if(action.txt=='delete') deleteStudent(i)})         
        })    
    });
}

function editDegree(index){
    let degree= Number(prompt('enter new degree'))
    students[index].degree = grade(degree)
    showStudents()
}

function deleteStudent(index){
    students.splice(index,1)
    showStudents()
}


showStudents()
