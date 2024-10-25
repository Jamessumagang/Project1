function validateForm() {
    const title = document.getElementById("title").value.trim();
    const content = document.getElementById("content").value.trim();
    const maxLength = 300;

    if (title === "") {
        alert("Title cannot be empty.");
        return false;
    }
    if (content === "") {
        alert("Content cannot be empty.");
        return false;
    }
    if (content.length > maxLength) {
        alert(`Content cannot exceed ${maxLength} characters.`);
        return false;
    }
    if (/\s/.test(content)) {
        alert("Content cannot contain spaces.");
        return false;
    }
    alert("Journal entry submitted successfully!");
    return true;
    
}

document.addEventListener("DOMContentLoaded", function() {
    const datetimeInput = document.getElementById("datetime");
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");

    function addActiveColor() {
        contentInput.classList.add("active-color");
        titleInput.classList.add("active-color");
    }

    function removeActiveColor() {
        contentInput.classList.remove("active-color");
        titleInput.classList.remove("active-color");
    }


    contentInput.addEventListener("focus", addActiveColor);
    contentInput.addEventListener("blur", removeActiveColor);

    titleInput.addEventListener("focus", addActiveColor);
    titleInput.addEventListener("blur", removeActiveColor);

    datetimeInput.addEventListener("focus", function() {
        datetimeInput.classList.add("active-color");
        addActiveColor();
    });
    datetimeInput.addEventListener("blur", function() {
        datetimeInput.classList.remove("active-color");
        removeActiveColor();
    });
});
