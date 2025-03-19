const asyncHandler= require ('express-async-handler')


// @desc   Get Goals
// @route  GET /api/goals
// access  private 
const getGoals= asyncHandler(req,res)=>{
    res.status(200).json({message:"Get goals"});
}
// @desc   Set Goal
// @route  POST /api/goals
// access  private 
const setGoal= asyncHandler(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text field")
    }
    console.log(req.body);
    res.status(200).json({message:"Set goals"})
}
// @desc   Update Goal
// @route  PUT /api/goals/:id
// access  private 
const updateGoal= asyncHandler(req,res)=>{
    res.status(200).json({message:`Update goal ${req.params.id}`})
}
// @desc   Delete Goal
// @route  DELETE /api/goals/:id
// access  private 
const deleteGoal= asyncHandler(req,res)=>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}