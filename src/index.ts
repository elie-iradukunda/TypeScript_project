const title = document.querySelector('#title') as HTMLElement;
if (title) {
    title.textContent = 'Hello TypeScript by elie ❤️👋';
}

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true, 
        date: '27-03-2021'
    },
]

interface person{
    name:string,
    age:number,
    isPassed:boolean
}

const user:person={
    name:"elie",
    age:50,
    isPassed:true
}


let student:{name:string,age:number,isPasses:boolean};
student={
    name:"emmy",
    age:80,
    isPasses:true
}
console.log(`this student is called ${student.name} and is ${student.age} years old`);

console.log(user.age);


type Car={
    name:string,
    brand:string,
    model:number,
    isNew:boolean
}
const myCar:Car={
    name:"TOYOTA",
    brand:"cocola",
    model:2020,
    isNew:true
}

console.log(myCar.isNew)



const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    if (reviewTotalDisplay) {
        const icon = isLoyalty ? '▶️▶️' : '😒😒';
        reviewTotalDisplay.innerHTML = `Review total: ${value} | Last reviewed by ${reviewer} ${icon}`;
    }
}

if (reviews.length > 0) {
    showReviewTotal(reviews.length, reviews[1].name, reviews[1].loyaltyUser);
}


const you =  { 
    userName: "Elie", 
    isReturning: true 
}

function populateUser(userName:string,isReturning:boolean){
    if(isReturning){
        title.innerHTML="Welcome back " +userName + "🤣🤣";

    }
    else{
        title.innerHTML="Welcome";
    }
}

populateUser(you.userName,you.isReturning);




let inputs = document.getElementById('todo') as HTMLInputElement;
let button = document.getElementById('add') as HTMLButtonElement;
let lists = document.getElementsByClassName('list')[0] as HTMLUListElement;
let deleteButton=document.getElementById('delete') as HTMLButtonElement;
button.addEventListener("click", () => {

    if (inputs.value != "") {
        const newItem = document.createElement('li');
        newItem.textContent = inputs.value;
        lists.appendChild(newItem);
        inputs.value='';
    }
    else{
        alert("input not found");
    }
    

});



deleteButton.addEventListener("click", () => {
    const selectedItems = Array.from(lists.children)
        .filter(item => (item as HTMLElement).style.textDecoration === "line-through");
    selectedItems.forEach(item => {
        lists.removeChild(item);
    });
});
