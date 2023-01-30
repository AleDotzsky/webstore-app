import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';

const GetDbProducts = async (searchVal) => {
    let filteredProducts = [];
    if(searchVal === ""){
        const queryDb = await getDocs(collection(db, "products"));
        queryDb.forEach((doc) => {
            //console.log(doc.id, " => ", doc.data());
            filteredProducts.push(doc.data());
        });
        return(filteredProducts); 
    }else{
        const queryDb = await getDocs(collection(db, "products"));
        queryDb.forEach((doc) => {
            if(doc.data().name.includes(searchVal)){
                filteredProducts.push(doc.data());
            }
        });
        return(filteredProducts);
    }
    
}

export default GetDbProducts;