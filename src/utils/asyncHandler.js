const asyncHandler = (requestHandler) =>{
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next(err));
    }
}




















// using try catch block
// This is a middleware function that will handle all the async functions in the routes. It will catch any error that occurs in the async function and send a response to the client with the error message. This will help us to avoid writing try-catch blocks in every async function.
/*
const asyncHandler = (fn) => async(req,res,next) => {
    try{
        await fn(req,res,next);
    }catch(err){
        res.status(err.code || 500).json({
            success: false,
            message: err.message || "Something went wrong"
        });
    }
}
*/
