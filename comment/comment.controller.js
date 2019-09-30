const commentDetail = require('./comment.model');

const createComment=async (req,res)=>{
    const commentData = new commentDetail({
        comment:    req.body.comment,
        date:  req.body.date,
        commentedBy:  req.body.commentedBy,
        comment_byId:  req.body.comment_byId,
        comment_like:  req.body.comment_like,
         post_Id:      req.body.post_Id
    });

    commentData.save((err,data)=>{
        if(err) throw err;
        else{
            res.send(data);
        }
    })
}
let getCommentById = async(req,res)=>{
    console.log(req.params)
    commentDetail.find({comment_byId:req.params.id}).then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
}
let putBycommentId = async(req,res)=>{(
    commentDetail.findOneAndUpdate({comment_byId : req.params.id},{$set:{comment: req.body.comment,commentedBy:req.body.commentedBy}},(err,data)=>{
       if(data) res.status(201).send(data)
       else res.status(500).send(err) 
    }))
    }
    let deleteByCommentId = async(req,res)=>{
        commentDetail.findOneAndDelete({comment_byId:req.params.id}).then(data => res.send({message:'deleted successfuly'})).catch(err => res.send(err))
    }


module.exports = {createComment,getCommentById,putBycommentId,deleteByCommentId} 