const item = []

function addItem(){
    const itemName = document.querySelector("#item").value

 if (itemName === "") {Add commentMore actions
        alert("Não é possível adicionar um item em branco!")
        return
    }


    const item = {
        name: itemName,
        checked: false
    }

    item.push(item)

    document.querySelector("#item").value = ""

showItemList
}

function showItemList(){
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""
  items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))
    showItemList.map((item, index)=> {
     sectionList.innerHTML += `
   <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox" onClick="checkItem('${item.name}')">
                      <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}"> onClick="checkItem('${item.name}')"${item.name}</label>
                </div>
                    
                <button>
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button>
            </div>
            `
    })
}


function removeItem(itemName) {
 const divWarning = document.querySelector(".warning")
    const itemIndex = items.findIndex((item) => item.name === itemName)
 divWarning.classList.remove("hide-warning")
    if (itemIndex !== -1) {
         setTimeout(() => { 
      divWarning.classList.add("hide-warning")}
 4000) }
   


  showItemsList()
  }


  function checkItem(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)
    items.checked = !item.checked
  }
      items[itemIndex].checked = !items[itemIndex].checked



      Add commentMore actions

function addHideWarningClass() {
    document.querySelector(".warning").classList.add("hide-warning")
}