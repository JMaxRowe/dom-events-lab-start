// ? Task 1
// When the button with the id of "toggle" is clicked, you should toggle a class of "pulse" on the circle div. 
// * Hint 1: If you have added the class correctly, you should see the circle turn red, and it should pulse.
// * Hint 2: When you click the button again, it should go back to being an outline of a circle.

const toggleButton = document.querySelector("#toggle");
const circleDiv = document.querySelector(".circle")

const toggle = () => {
    circleDiv.classList.toggle("pulse")
}

toggleButton.addEventListener("click", toggle)



// ? Task 2
// Add a 'change' event listener to the "cities" select element
// When a city is selected, the value of the selected city option should be inserted into the "city" span element

const cityList = document.querySelector("#cities")
const citySpan = document.querySelector("#city")

const insertCity = () => {
    citySpan.textContent = cityList.value
}

cityList.addEventListener("change", insertCity)



//  ? Task 3
// Part One: Add event listeners to each of the divs with the class of "name", so that when you hover over that div, the name inside that div appears inside the span with the id of "current".

// Part Two: Add event listeners to each of the divs with the class of "name", so that when the mouse leaves any of the divs, the span with the id of "current" is empty.

const nameIs = document.querySelectorAll(".name")
const currentName = document.querySelector("#current")

const nameAppear = (e) => {
    currentName.textContent = e.target.textContent;
}
const nameRemove = () => {
    currentName.textContent = "";
}
nameIs.forEach(nameElement => {
    nameElement.addEventListener("mouseover", nameAppear);
    nameElement.addEventListener ("mouseleave", nameRemove);
})




// ? Task 4
// Add a "submit" event listener to the form with the id of "subscribe"
// When the form is submitted, add a class of "submitted" to the button inside the form.
// You should also update the innerHTML of the button to be "Submitted!".
// * Hint 1: If you have added the class correctly, you should see that the button has an opacity of 0.8. 
// * Hint 2: You will need to prevent the default behaviour of the form in order to stop the page from refreshing before the changes are made.

const submitForm = document.querySelector("#subscribe");
const submitButton = document.querySelector(".submit")

submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    submitButton.classList.add("submitted")
    submitButton.textContent = "Submitted!"
})


// ? BONUS Task 5
// Add an event listener to the window, so that when the user scrolls, you check whether or not the scrollY property of the window is greater than 40. 
// If it is greater than 40, add the class "fadeOutUp" to the <h1> tag. 
// If it is less than 40, remove the class "fadeOutUp" from the <h1> tag. 
// * Hint: As you scroll, you should see the <h1> tag fade out. If you scroll back down, it will reappear.

const h1 = document.querySelector("h1")

window.addEventListener("scroll", () => {
    if (window.scrollY > 40){
    h1.classList.add("animated", "fadeOutUp")
}
else if (window.scrollY < 40) {
    h1.classList.remove("animated", "fadeOutUp")
}})
