
const {Sequelize, DataTypes} = require("sequelize"); //importando o Sequelize e o DataTypes
const fs = require("path");
const path = require("path");

const conn = new Sequelize ({
    dialect: "sqlite",
    storage: "./db.sqlite"
        });

conn.authenticate()
    .then(async () => {
        const dir = path.resolve(__dirname, "script.sql");
        const sqlCommand = fs.readFileSync(dir).toString("ascii");
        
        conn.query(sqlCommand);
        await start();
    }).catch(() => {
    });

const model = conn.define("User model", {
name:{
    type: DataTypes.TEXT,
    allowNull: false
},
    born_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
            nickname: {
                type: DataTypes.STRING,
                allowNull: false 
            }
            },
            {
                timestamp: false,
                tableName:"user",
                underscored: true
            })

// model.create({name:"Ribeiro"}).then().catch(err => console.log(err))


    const find = async() => { //Function for find user
        return await model.findAll();
        }

    const create = async (user) => { //Function for create user
        return await model.create();
        }

    const findByPk = async (id,pk) => { //Function for found by ID
        return await model.findByPk();
        }

    const update = async (pk, user) => { //Function for update data from user
        return await model.update();
        }

    const deleteById = async (pk) => { //Function for delete data from user
        return await model.destroy();
        }

    

const start = async() =>{

    const allUsers = await find();
        console.info(allUsers);

            const addUser = await create();
                console.info(addUser);

                const showById = await findByPk();
                    console.info(showById);
                    
                    const updateData = await update();
                        console.info(updateData);

                        const deleteData = await deleteById();
                            console.info(deleteData);
            
}

