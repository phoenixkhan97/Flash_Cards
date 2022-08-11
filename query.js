const {Card, Library, User, sequelize} = require('./models')
const stringify = require('../utils')

const getUserById = async () =>{
    const user = await User.findAll({
        
    })
    try{

    } catch(error){
        console.log(error)
    }
}

const getCardById = async () =>{

    try{

    } catch(error){
        console.log(error)
    }
}

const createCard = async () =>{

    try{

    } catch(error){
        console.log(error)
    }
}

const updateCard = async () =>{

    try{

    } catch(error){
        console.log(error)
    }
}

const deleteCard = async () =>{

    try{

    } catch(error){
        console.log(error)
    }
}


const main = async()=>{
    try{
    //await

}catch(error){
    console.log(error)
}finally{
    sequelize.close()
}
}

main()