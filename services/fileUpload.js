// Firebase storage import
import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid"; // importing services

// File upload function
export const uploadImage = async (file, folderName) => {
  if (file == null) {
    return null;
  }

  if (typeof file === "string") {
    return file;
  }

  // const file = file[0];
  const storageRef = ref(storage, `${folderName}/${file.name + uuidv4()}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};

// Upload multiple images
export const uploadAllImages = async (files, folderName) => {
  const urls = [];
  return Promise.all(
    files.map(async (file) => {
      const url = await uploadImage(file, folderName);
      urls.push(url);
    })
  ).then(() => {
    return urls;
  });
};

export const uploadMultipleImages = async (files, folderName) => {
  const urls = [];
  return Promise.all(
    files.map(async (file) => {
      if (file == null || file === "" || file?.length == 0) {
        urls.push("");
      } else if (typeof file === "string") {
        urls.push(file);
      } else {
        const storageRef = ref(
          storage,
          `${folderName}/${file.name + uuidv4()}`
        );
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        urls.push(url);
      }
    })
  ).then(() => {
    return urls;
  });
};
