const Location = require('../schemas/Location');

const createLocation = async(req, res)=>{
    try{
        const { 
        lat,
        lng,
        creator,
        } = req.body;
        const location = await Location.create( {
            lat,
            lng,
            creator,
        });
        res.status(201).json({data:location});
    }catch(err){
        res.status(500).json({err})
    }
};

const getAllLocation = async(req, res) =>{
try{
const locations = await Location.find();
!locations.length? res.status(200).json({msg:"No such Location in DB"}):
res.status(200).json({data:locations});
}catch(err){
res.status(500).json({err})
}
};

const getOneLocation = async(req, res)=>{
    try{
        const { id } = req.params;
        const location = await Location.findById(id);
        location? res.status(200).json({data:location}):
        res.status(404).json({msg: 'No such Location'})
    }catch(err){
        res.status(500).json({err})
    }
};

const updateLocation = async(req, res)=>{
    try{const { id } = req.params;
    const {
        lat,
        lng,
        creator,
    } = req.body;
   
    const location = await Location.findByIdAndUpdate(
        id,
        {
            lat,
            lng,
            creator,
        },
        {
            new: true
        }
        );
    location? res.status(200).json({msg:'Location updated successfully', data: location}):
    res.status(404).json({msg: 'No such Location'})
    }catch(err){
        res.status(500).json({err})
}
};

const deleteOneLocation = async(req, res)=>{
    try{const { id } = req.params;
    const location  = await Location.findByIdAndDelete(id);
    location? res.status(200).json({msg:'Location deleted', data: location}):
    res.status(404).json({msg: 'No such Location'})
    }catch(err){
        res.status(500).json({err})
    }
};

module.exports = {
    createLocation,
    getAllLocation,
    getOneLocation,
    updateLocation,
    deleteOneLocation,
};