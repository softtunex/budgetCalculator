
// const Icon = document.querySelector("#icon");
// const Demo = document.querySelector(".greenBody");
// const Value= document.getElementById('value').value;

// let arr=[]
//  const incomeBody=`<div class="incomeBody-body">
//                 <p>Website project</p>
//                 <div class="del">
//                 <p class="green">+2,500.00</p>
//                 <lord-icon
//                 src="https://cdn.lordicon.com/qjwkduhc.json"
//                 trigger="hover"
//                 style="width:30px;height:30px;cursor: pointer;margin-left: 1rem;">
//             </lord-icon>
//         </div>
//         </div>`
// Icon.onclick= ()=> {
//     Demo.innerHTML = incomeBody
    
// }

let budgetController=(()=>{
    function Expense(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }
    function Income(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }
    
    const data ={
        allItems:{
            inc:[],
            dec:[]
        },
        total:{
            inc:0,
            dec:0
        }
    };

    // return{
    //     addItem: (type,des,val)=>{
    //         var newItem,ID;
    //         const dataEl=data.allItems[type]
    //         if(dataEl.length>0) ID= dataEl[dataEl.length-1].id+1
    //         else ID=0;
    //         if(type==="inc") newItem = new Expense(ID,des,val)
    //         else if(type==="dec") newItem = new Income(ID,des,val)

    //         data.allItems[type].push(newItem)
    //         return newItem
    //     },
    //     testing:()=>{
    //         console.log(data)
    //     }
    // }

})()

let UIController=(()=>{
    // const type= document.querySelector(".addType").value
    return{

        getInput:()=>{
            return{
                Type:document.querySelector(".addType").value,
                Desc:document.querySelector(".desc").value,
                Value:parseFloat(document.querySelector(".value").value)
            }
        },
        budCal:(type,Desc,Value)=>{
            if(Desc=="" || isNaN(Value)){
                alert("Fields should not be empty")
            }
            else{
            if(type==="inc"){
            var incomeBody=`
            <div class="incomeBody-body">
            <p>${Desc}</p>
            <div class="del">
            <p class="green">${Value}</p>
            <lord-icon class="delBtn"
            src="https://cdn.lordicon.com/qjwkduhc.json"
            trigger="hover"
            style="width:30px;height:30px;cursor: pointer;margin-left: 1rem;">
            </lord-icon>
            </div>
            </div>`
            const Demo = document.querySelector(".greenBody");
        Demo.insertAdjacentHTML('afterbegin',incomeBody)
        }else{
            var incomeBody=`
            <div class="expensesBody-body">
            <p>${Desc}</p>
            <div class="expense">
            <p class="red">- ${Value}</p>
            <button>23%</button>
            </div>
            
            </div>` 
            const Demo = document.querySelector(".redBody");
            Demo.insertAdjacentHTML('afterbegin',incomeBody)
        }
    }
        },

        clearInput:()=>{

                var field = document.querySelectorAll(".desc" + "," + ".value")
                var arrField =Array.prototype.slice.call(field)
                arrField.forEach(element => {
                    element.value=""
                });
        }
    }
    //some code
})()

let mainController=((budget,Ui)=>{
    const Allinit=()=>{
    const Icon= document.querySelector("#icon")
    
    
    Icon.addEventListener("click",addValue)
    
    document.addEventListener("keypress",(event)=>{
        if(event.key=="Enter"){
            addValue()
        }
    })
}


function addValue(){
        let input = Ui.getInput()
        console.log(Ui.getInput());
        console.log(Ui.clearInput());
        // let newItem= budget.addItem(input.Type,input.Desc,input.Value)

        Ui.budCal(input.Type,input.Desc,input.Value)

    }
    
return{
    
    init:()=>{
        Allinit()
        
    }
}
})(budgetController,UIController)

mainController.init()