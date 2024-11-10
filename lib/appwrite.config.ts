import { Client, Databases } from "appwrite";


const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!)
    .setProject(process.env.PROJECT_ID!);  

const database = new Databases(client); 
export { database }; 

 
  