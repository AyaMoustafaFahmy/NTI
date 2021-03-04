const fs =require("fs")

const readfile = function(){
    try{
        customers = JSON.parse(fs.readFileSync("customers.json").toString())
    }
    catch(e){
        customers=[]
    }
    return customers
}

const writefile = function(customers){
    fs.writeFileSync("customers.json",JSON.stringify(customers))
}


customers=[]
const addCustomer = function(customer){
    console.log(customer)
    customers=readfile()
    customers.push(customer)
    writefile(customers)
}
const showCustomer = function(){
    customers=readfile()
    // console.table(customers)
    customers.forEach(customer=>{
        // console.table(customer)
        console.log(`customer number:${customer.id} name:${customer.name} balance:${customer.balance}`)
    })
}

const addBalance = function(customerID,newBalance){
    let customers = readfile()
    index = customers.findIndex(customer =>{
        console.log(customer.id == customerID)
        if(customer.id == customerID)
            oldBalance=customer.balance
            // console.log(oldBalance)
            return true
    })
    if (index == -1) console.log('customer not found')
    else{
        let balance= JSON.stringify(Number(newBalance.balance) + Number(oldBalance))  /////////////
        newBalance={id:newBalance.id ,name:newBalance.name,balance:balance} //////////////
        console.log(newBalance)
        customers[index] = newBalance
        writefile(customers)
        console.log("edited")

    }
}

// const getbalance = function(customerID){
//     let customers = readfile()
//     index = customers.findIndex(customer=>{
//         return customer.id=customerID
//     })
    
// }
const deleteCustomer = function(customerID){
    let customers=readfile()
    // console.log(customers)
    index = customers.findIndex(customer =>{
        return customer.id == customerID
    })
    // console.log(index)
    if (index == -1 ) return console.log("customer not found")
    else{
    customers.splice(index,1)
    console.log(customers)
    writefile(customers)
    }
}
module.exports={addCustomer,showCustomer,addBalance,deleteCustomer}


// customers=[
//     {id:"1",name:"aya",balance:"1000"}
// ]
// fs.writeFileSync("customers.json",JSON.stringify(customers))
// const data = fs.readFileSync("customers.json")
// console.log(JSON.parse(data.toString()))

