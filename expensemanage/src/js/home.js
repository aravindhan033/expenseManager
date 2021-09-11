
import { doc,query,orderBy,limit,startAt,where,getDocs, collection ,addDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";


const db = getFirestore();

export async function AddCatergroyItem(data){
    
    const {category_name}=data;
    const userId=localStorage.getItem("userid");
    
    let addData=await addDoc( collection(db, "category"),  {
        "category_name": category_name,        
      });

    return addData;
}

export async function GetAllCategory(){
    let resultData=[];
    const querySnapshot = await getDocs(collection(db, "category"));
    
    querySnapshot.forEach((doc) => {
        let cat=doc.data();
        cat.id=doc.id
        resultData.push(cat);  
    });

    return resultData; 
}

export async function GetCategoryExpense(index,category_id){
    let resultData=[];
    const expenseQuery=query(collection(db, "expense_list"),where("expense_category","==",category_id),orderBy("expense_added_time"),startAt(index),limit(25))
    expenseQuery.forEach((doc) => {
        let cat=doc.data();
        cat.id=doc.id
        resultData.push(cat);  
    });

    return resultData; 
}