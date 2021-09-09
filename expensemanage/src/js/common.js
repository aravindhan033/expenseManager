async function fetchData(){
    fetch('http://localhost:3000/sampledata/data.json')
   .then(response => {
       if (!response.ok) {
           throw new Error("HTTP error " + response.status);
       }
       return response.json();
   })
   .then(json => {
       //this.users = json;
       console.log(this);
   })
   .catch(function () {
       this.dataError = true;
   })
}