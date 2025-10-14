const input = document.querySelector("#favchap"); // HTML tags that has id need to have # before their name is inputted in the document.querySelector. 
const addChapterButton = document.querySelector("button");
const list = document.querySelector("#list");

function displayList(item) {
    const favchapList = document.createElement("li");
    favchapList.textContent = item;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');
    
    favchapList.append(deleteButton);  // adds a node to a node but not parent-child relationship
    list.appendChild(favchapList);

    deleteButton.addEventListener("click", function () {
        list.removeChild(favchapList);
        deleteChapter(favchapList.textContent);
        input.focus();  // .focus()  makes you not click the input again to type. After you click, it will automatically be there (The blinking line where you write.)
    });
    console.log('I typed the code though.')
}


let chaptersArray = getChapterList() || [];
chaptersArray.forEach((chapter) => {
    displayList(chapter);
});





addChapterButton.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    } 
});

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}




