const userDetail = require('./user.module');

const createUser =async (req,res)=>{
    const userData = new userDetail({
        name:    req.body.name,
        emailId:  req.body.emailId,
        userId:  req.body.userId,
        userName:  req.body.userName,
        userPassword :  req.body.userPassword,
        userPic:           req.body.userPic
        
    });

    userData.save((err,data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }
    })
}

let getUserById = async(req,res)=>{
    console.log(req.params)
    userDetail.find({userId:req.params.id}).then(data => res.status(200).send(data))
    .catch(err => res.status(404)).send(err)
}

let updateById = async(req,res)=>{(
    userDetail.findOneAndUpdate({userId :req.params.id},{$set:{name : req.body.name,emailId:req.body.emailId,userName: req.body.userName}},(err,data)=>{
       if(data) res.status(201).send(data)
       else res.status(500).send(err) 
    }))
    }
    
    let deleteById = async(req,res)=>{
        userDetail.findOneAndDelete({userId:req.params.id}).then(data => res.send({message:'deleted successfuly'})).catch(err => res.send(err))
    }

module.exports = {createUser,getUserById,updateById,deleteById}