import firestoreDatabase from "..//firebase_config.js";
import {collection,addDoc,getDocs,query,where} from "firebase/firestore";
import CryptoJS from "crypto-js";
export const  CreateUser=async(payload)=>{
    try{ 

    //check if user alreday exists using email
     const qry=query(collection(firestoreDatabase,"users"),where("email","==",payload.email));
     const querySnapshot=await getDocs(qry);
     if(querySnapshot.size>0)
     {
        throw new Error("user already exists");
     }
     //hash password
     const hashedpassword=CryptoJS.AES.encrypt(
      payload.password,
      "sheyjobs-lite"
     ).toString();
      payload.password=hashedpassword;
        const docRef=collection(firestoreDatabase,"users");
        await addDoc(docRef,payload);
        return{
            success: true,
            message:"user created successfully",
        };
    }
    catch(error){
        return error;
    }

};
export const LoginUser = async (payload)=>{
  try {
    const qry=query(collection(firestoreDatabase,"users"),where("email","==",payload.email)
    );
   const userSnapshots=await getDocs(qry);
   if(userSnapshots.size===0)
   {throw new Error("User does not exist");
   }
   //decrypt password
   const user=userSnapshots.docs[0].data();
   const bytes=CryptoJS.AES.decrypt(user.password,"sheyjobs-lite");
   const originalPassword=bytes.toString(CryptoJS.enc.Utf8);

   if(originalPassword!==payload.password)
   {throw new Error("Incorrect Password");}

   return{
    success:true,
    message:"User logged in successfully",
    data:user,

   };


  }
  catch(error){
    return error;
  }

};