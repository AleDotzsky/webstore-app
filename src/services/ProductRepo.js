import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';

export const GetDbProducts = async (searchVal) => {
    let filteredProducts = [];
    if(searchVal === ""){
        const queryDb = await getDocs(collection(db, "products"));
        queryDb.forEach((doc) => {
            filteredProducts.push({id: doc.id, data: doc.data()});
        });
        return(filteredProducts); 
    }else{
        const queryDb = await getDocs(collection(db, "products"));
        queryDb.forEach((doc) => {
            if(doc.data().name.toLowerCase().includes(searchVal.toLowerCase())){
                filteredProducts.push({id: doc.id, data: doc.data()});
            }
        });
        return(filteredProducts);
    }
}

export const GetDbSingleProduct = async (productId) => {
    const docRef = doc(db, "products", productId.toString());
    const queryDb = await getDoc(docRef);
    if(queryDb.exists()){
        return queryDb.data();
    } else {
        console.log("Error, cant find document.")
    }
}
