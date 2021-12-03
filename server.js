const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const connect = ()=>{
    return mongoose.connect("mongodb://localhost:27017/entertainment")    
};

const moviesSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    movie_name: {type: String, required: true},
    movie_genre: {type: String, required: true},
    production_year:{type: Number, required: true},
    budget:{type: Number, required: true},
},{
    versionKey: false
});

const movies = mongoose.model("movie",moviesSchema);
/** to see all the movies */
app.get("/", async (req, res) => {
    const user = await movies.find({}).lean().exec();
    //console.log(user);
    res.status(200).json({ user });
})


/**To add new movies details in the list */
app.post("/movies", async (req, res)=>{
    try{const user = await movies.create(req.body);
    
    return res.status(201).send({user});
}catch(err){
return res.status(500).send({status:err.message});
    }
})

/**to update any movies in the list */
app.patch("/movies/:id", async (req, res)=>{
     try{const up_movie = await movies.findByIdAndUpdate(req.params.id,req.body,{
         new: true,
     }).lean().exec()

     return res.status(200).send({status:up_movie});
    }catch(err){
        return res.status(500).send({status:err.message});
    }

})


/** to delete movie */
app.delete("/movies/:id", async(req, res)=>{
    try{const movie = await movies.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({movie});
}catch(err){
    return res.status(500).send({status:err.message});
}
})

const start = async ()=>{
    await connect();
    app.listen(2230,()=>{
        console.log('listening on port 2230');
    });
};

start();

