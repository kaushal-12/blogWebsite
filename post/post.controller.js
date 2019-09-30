const postDetail = require('./post.module');

const createBlog =async (req,res)=>{
    const postData = new postDetail({
        post:    req.body.post,
        postId:  req.body.postId,

        post_title:  req.body.post_title,
        author:  req.body.author,
        author_userId:  req.body.author_userId,
       
        like:           req.body.like,
        picture_name:   req.body.picture_name
    });

    postData.save((err,data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }
    })
}

let getBlogById = async(req,res)=>{
    console.log(req.params)
    postDetail.find({postId:req.params.id}).then(data => res.status(200).send(data))
    .catch(err => res.status(404)).send(err)
}
let putById = async(req,res)=>{(
postDetail.findOneAndUpdate({postId :req.params.id},{$set:{post : req.body.post,author:req.body.author}},(err,data)=>{
   if(data) res.status(201).send(data)
   else res.status(500).send(err) 
}))
}

let deleteById = async(req,res)=>{
    postDetail.findOneAndDelete({postId:req.params.id}).then(data => res.send({message:'deleted successfuly'})).catch(err => res.send(err))
}
module.exports = {createBlog,getBlogById,putById,deleteById }