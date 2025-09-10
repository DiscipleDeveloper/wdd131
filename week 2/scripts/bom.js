const input = document.querySelector("#favchap"); // HTML tags that has id need to have # before their name is inputted in the document.querySelector. 
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");


addChapterButton.addEventListener("click", function () {
    if (input.value.trim !== "") {
        
        const favchapList = document.createElement("li");
        favchapList.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        favchapList.append(deleteButton);  // adds a node to a node but not parent-child relationship
        list.appendChild(favchapList);
        

        deleteButton.addEventListener("click", function () {
            list.removeChild(favchapList);

        });

        list.appendChild(favchapList);
        input.value = "";
        input.focus();  // .focus()  makes you not click the input again to type. After you click, it will automatically be there (The blinking line where you write.)
    } 
});
