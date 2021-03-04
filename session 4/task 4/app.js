const yargs = require("yargs");
const myMethods = require('./customer')


yargs.command({
    command:"addCustomer",
    describe:"add new customer",
    builder:{
        id:{type:"string",demandOption:true},
        name:{type:"string",demandOption:true},
        balance:{type:"string",demandOption:true}
    },
    handler:function(argv){
        console.log(`add customer , ${argv}`)
        let customers={id:argv.id ,name:argv.name,balance:argv.balance}
        myMethods.addCustomer(customers)
    }
})

yargs.command({
    command:"customerData",
    describe:"show customer data",
    handler:function(){
        myMethods.showCustomer()
    }
})

yargs.command({
    command:"addBalance",
    describe:"add customer balance",
    builder:{
        id:{type:"string",demandOption:true},
        name:{type:"string",demandOption:true},
        addbalance:{type:"string",demandOption:true},
    },
    handler:function(argv){

        let customers={id:argv.id ,name:argv.name,balance:argv.addbalance}
        // console.log(customers)
        myMethods.addBalance(customers.id,customers)
    }
})

yargs.command({
    command:"delete",
    describe:"delete customer data",
    builder:{
        id:{type:"string",demandOption:true},
    },
    handler:function(argv){
        myMethods.deleteCustomer(argv.id)}
})
yargs.argv