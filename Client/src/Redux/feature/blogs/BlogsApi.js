import PublicAxios from "../../../components/publicAxios";


export const getblogs=async(tags,search)=>{
 let queryString=tags.length ? `tags_like=${tags.join(',')}` :"";
 if(search!==""){
  queryString+=`${queryString ?"&" :""}q=${search}`;
 }
 try{
  const response=await PublicAxios.get(`/blogs/?${queryString}`);
 
  return response.data;
 }catch (error){
  console.log(error);
 }
}