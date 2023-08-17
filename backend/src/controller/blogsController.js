const blogDB=require("../model/blogDB")

//Create Blog Post
exports.createBlog = async (req, res) => {
    try {
        let reqBody = req.body;
        const data = await blogDB.create(reqBody);
        res.status(200).json({ status: "Success", data: data });
    } catch (err) {
        res.status(400).json({ status: "Fail", data: err });
    }
};

//Read Blog Post

/*exports.ReadBlogPost=async (req,res)=>{
    try{
        blogDB.find((err,data)=>{
            if(err){
                res.status(404).json({ status: "Not Found", data: err });
            }else {
                res.status(200).json({ status: "Success", data: data });
            }
        })
    }catch (e) {
        res.status(400).json({ status: "Fail", data: e });
    }
}*/

exports.ReadBlogPost = async (req, res) => {
    try {
        const data = await blogDB.find();

        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};

/*exports.updateBlog=async (req,res)=>{
    try {
        let id=req.params.id;
        let query={_id:id}
        let reqBody=req.body
        const data=await blogDB.updateOne(query,reqBody)
        res.status(200).json({ status: "Success", data: data });
    }catch (err){
        res.status(400).json({ status: "Fail", data: err });
    }
}*/

//Update Blog Post
exports.UpdateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const reqBody = req.body;

        const data = await blogDB.updateOne(query,reqBody);
        if (data.nModified === 0) {
            res.status(404).json({ status: "fail", message: "Product not found" });
        } else {
            res.status(200).json({ status: "success", data: data });
        }
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};

//Delete Blog Post

exports.DeleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };

        const data = await blogDB.deleteOne(query);

        if (data.deletedCount === 0) {
            res.status(404).json({ status: "fail", message: "Blog not found" });
        } else {
            res.status(200).json({ status: "success", data: data });
        }
    } catch (err) {
        res.status(400).json({ status: "fail", data: err });
    }
};
