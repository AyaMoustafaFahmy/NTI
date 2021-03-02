
let showHideBtn= document.querySelector('#showhide')
let customersTalbe= document.querySelector('#customersTalbe')
let customerForm=document.querySelector('#addCustomer')

let customers=[
    {name:'aya',balance:1000},
    {name:'nouran',balance:500}
]
let tableHeaders=["id",'name','balance','actions']

let actions=[
    {txt:'delete',classes:'btn btn-danger m-1'},
    {txt:'edit',classes:'btn btn-warning m-1'},
    {txt:'addbalance',classes:'btn btn-info m-1'},
    {txt:'withdraw',classes:'btn btn-primary m-1'}
]

showHideBtn.addEventListener('click',function(e){
    console.log(e.target)
    this.innerText=="show form"? this.innerText="hide form" : this.innerText="show form";
    document.querySelector('#addCustomer').classList.toggle("d-none")
})

customerForm.addEventListener('submit',function(e){
    e.preventDefault()
    let customer={
        name:this.elements.name.value,
        balance:this.elements.balance.value
    }
    customers.push(customer)
    this.reset()
    this.classList.toggle('d-none')
    showHideBtn.innerText = "show form"

    showCustomers()
})

let addElement = function(eletype,parent,txt='',classes=''){
    ele=document.createElement(eletype)
    if(txt!='') ele.innerText=txt
    if (classes!='') ele.classList=classes
    parent.appendChild(ele)
    return ele
}

let showCustomers = function(){
    customersTalbe.innerText=''
    customers.forEach((customer,i) => {
        tr=addElement('tr',customersTalbe)
        // addElement('td',tr,i+1)
        tableHeaders.forEach(element=>{
            if(element=="id") txt=i+1
            else if(element=="actions") txt=""
            else txt=customer[element]
            td = addElement('td',tr,txt)
        })
        actions.forEach(action=>{
            btn = addElement('button', td, action.txt, action.classes)
            btn.addEventListener('click',function(e){
               if(action.txt=='edit') editCustomer(i)
                else if(action.txt=='delete') deleteCustomer(i)
                else if(action.txt=='add    balance') balanceCustomer(i)
                else if(action.txt=='withdraw') withdrawCustomer(i) })         
        })    
    });
}

function editCustomer(index){
    let name= prompt('enter new name')
    customers[index].name = name
    showCustomers()
}

function deleteCustomer(index){
    customers.splice(index,1)
    showCustomers()
}
function balanceCustomer(index){
    let newBal = Number(prompt('enter balance'))
    customers[index].balance += newBal
    showCustomers()
}
function withdrawCustomer(index){
    let newBal = Number(prompt('enter balance'))
    customers[index].balance -= newBal
    showCustomers()
    
}

showCustomers()
