
import { doc, query, orderBy, limit, startAt, where, getDocs, collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";


const db = getFirestore();

export async function AddCatergroyItem(data) {

    const { category_name } = data;
    const userId = localStorage.getItem("userid");

    let addData = await addDoc(collection(db, "category"), {
        "category_name": category_name,
    });

    return addData;
}
export async function AddCatergroyExpenseItem(data) {
    const { amount,category_id ,reason} = data;
    const userId = localStorage.getItem("userid");
    const userName = localStorage.getItem("username");

    let newExpenseItemData={
        expense_added_time: new Date().getTime(),
        expense_addedby_id: userId,
        expense_addedby_name: userName,
        expense_amount: amount,
        expense_category:category_id,
        expense_reason: reason,
    }

    let addData = await addDoc(collection(db, "expense_list"), newExpenseItemData);

    return {id:addData.id,...newExpenseItemData};
}
export async function GetAllCategory() {
    let resultData = [];
    const querySnapshot = await getDocs(collection(db, "category"));
    querySnapshot.forEach((doc) => {
        let cat = doc.data();
        cat.id = doc.id
        resultData.push(cat);
    });

    return resultData;
}

export async function GetCategoryExpense(index, category_id) {
    let resultData = [];
    const expenseQuery = query(collection(db, "expense_list"), where("expense_category", "==", category_id), orderBy("expense_added_time","desc"), startAt(index), limit(25))
    const querySnapshot = await getDocs(expenseQuery);
    querySnapshot.forEach((doc) => {
        let cat = doc.data();
        cat.id = doc.id
        resultData.push(cat);
    });


    return resultData;
}