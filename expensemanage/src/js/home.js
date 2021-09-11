
import { doc,getDocs, collection ,addDoc} from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { useDispatch } from 'react-redux'

const db = getFirestore();

export async function AddCatergroyItem(data){
    
    const {catergory_name}=data;
    const userId=localStorage.getItem("userid");
    
    let addData=await addDoc( collection(db, "category"),  {
        "catergory_name": catergory_name,        
      });

    return addData;
}

export async function GetAllCategory(){
    let resultData=[];
    const querySnapshot = await getDocs(collection(db, "category"));
    const dispatch = useDispatch()
    querySnapshot.forEach((doc) => {
        let cat=doc.data();
        cat.id=doc.id
        resultData.push(cat);  
    });
    
    dispatch({ type: 'category/addAll', payload: resultData })   

    return resultData;
}