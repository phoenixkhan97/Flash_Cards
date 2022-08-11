const {Card, Library, User, sequelize} = require('../models')


const getUserById = async () =>{

    try{
        const users = await User.findAll({
            include:[{
                model:User,
                as:'user',
                attrubutes:['id', 'username']
            }]
        })
        res.send(users)
    } catch(error){
        console.log(error)
    }
}

const main = async()=>{
    try{
    await getUserById()

}catch(error){
    console.log(error)
}finally{
    sequelize.close()
}
}

main()