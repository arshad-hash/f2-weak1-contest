const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((a,b)=>{
        if(data[b].profession==="developer")
        {
            console.log(data[b]);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
   let ndata= {
        name:prompt("type Name"),
        age:prompt("type age"),
        profession: prompt("type profession"),

    }
    data.push(ndata);
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for (let i = data.length - 1; i >= 0; i--) {
        if (data[i].profession === "admin") {
            data.splice(i, 1);
        }
    }
    console.log(data);
    
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray=[
        {name:"ram",
         age:30,
        profession:"clerk" ,}
    ]
    let newArray=data.concat(dummyArray);
    console.log(newArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = 0;

    data.forEach(person => {
        totalAge +=parseInt(person.age) ;
    });
    console.log(totalAge/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let count=0;
    for(let i=0; i<data.length ; i++)
    {
        if(data[i].age>25)
        {
            count++;
        }
    }
    if(count>0){
        console.log("yes there is atleast one person abover age")
    } 
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    //creating a set new 
    const sValues=new Set();
    for (let obj of data)
    {
        let value= obj.profession;
        if(sValues.has(value))
        {continue ;}
        else{
            sValues.add(value);
        }
    }
    console.log(sValues);
  }
  
  // 8. Sort by Age
  function sortByAge() {
   data.sort((a,b)=>a.age-b.age);
   console.log(data);
    
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach((a,b)=>{
        if(a.name==="john")
        {
            a.profession="manager";
            
        } 
    }) 
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developer=0;
    let admin=0;
    data.forEach((a,b)=>{
        if(a.profession==="developer")
        {
            developer++
           
        }
        if(a.profession==="admin")
        {
            admin++;
            
        }
      
    }) ;
    console.log("there is "+admin+" no of admin");
    console.log("there is "+developer+" no of developer");

  }
 