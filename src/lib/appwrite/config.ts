import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: '65f6b20ec387ec1680e1',//import.meta.env.VITE_APPWRITE_URL,
  projectId: 'https://cloud.appwrite.io/v1',//import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: '65f703a9d6ccf2d74d2d',//import.meta.env.VITE_APPWRITE_DATABASE_ID,
  storageId: '65f703194e2810e729af',//import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId:'65f704a14c52e7ae1f35',// import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
  postCollectionId:'65f7048ad5dc094e4618',// import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
  savesCollectionId:'65f704b8ec0b34cd7f50',// import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
