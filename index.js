const express=require("express")
const app=express()
const {open}=require("sqlite")
const sqlite3=require('sqlite3')
const path=require('path')

const dpPath=path.join(__dirname, "product.db")
let db=null

const initializeDbandServer=async()=>{
    try{
        db=await open{
            filename:dbPath,
            driver:sqlite3.Database
        }
        app.listen(3000)=>{
            console.log("check initialize: https//localhost:3000")
        }
    }catch(e){
        console.log(e.error)
        process.exit(1)
    }
}
initializeDbandServer()
app.post('/product/', (request, response)=>{
    const productDetails=request.body

    const {productId, quantity, operation}=productDetails

    const writeQuery=`
    INSERT INTO product
    (product_id, quantity,operation )
    VALUES ('${productId}', '${quantity}','${operation}')    
    `
    const addProducts=db.run(writeQuery);


})
