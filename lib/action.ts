'use server'
import { writeFile } from "fs/promises";
import path from "path";
import {z} from "zod"

const UploadSChema =  z.object({
    title:  z.string().min(1),
    description: z.string().min(1),
    image : z
    .instanceof(File)
    .refine((File) => File.size > 0 , {message: "image is requiren"})
    .refine((File) => File.size === 0 || File.type.startsWith("image/"),{
        message : "only imagen are allowed"
    })
    .refine((file) => file.size < 4000000,{
        message : "imagen must less than 4mb"
    })

})



export const Creatdata = async ( prevState : unknown , formData : FormData) => {
    
    const fromobject = Object.fromEntries(formData.entries());
    
    const validatefile = UploadSChema.safeParse(fromobject);

if(!validatefile.success){
    return {
        error : validatefile.error.flatten().fieldErrors,
    }
}

 const file = formData.get("image");
const { title } = validatefile.data



    try {
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = file.name.replaceAll(" ","_")
        console.log(filename)

        await writeFile(
            path.join(process.cwd(), "public/assets/" + filename),
            buffer
        )
        return {massage : "Succes"}
    }catch(err){
        console.error('Erro dicont' , err)
        return {message : "gagal"};
            
            
        
    }
}



