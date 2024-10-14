import axios from "axios"
import { NextResponse } from "next/server"


export const GET=async(request)=>{
    const { searchParams } = new URL(request.url);
    const userName = searchParams.get("userName");

    
const res=await axios.get(`https://api.github.com/users/${userName}`)
console.log(res)
return NextResponse.json({data:res.data,message:"Data fetch successfully"})
}


export const GETContrubution=async(request)=>{
    const res=await axios.get(`https://github.com/hemantbaaz?action=show&controller=profiles&tab=contributions&user_id=hemantbaaz`)
console.log(res)
return NextResponse.json({data:res.data,message:"Data fetch successfully"})
}
