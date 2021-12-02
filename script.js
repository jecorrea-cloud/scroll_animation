//Generate an array of boxes
const boxes = document.querySelectorAll(".box");

//Add the event when the user is scrolling
window.addEventListener("scroll", checkBoxes);

// This function call triggers checkBoxes when the page loads
checkBoxes();

function checkBoxes() {
  // To check where we want the boxes to show
  // console.log(window.innerHeight / 5 * 4)

  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // Get the top of the box with .getBoundingClientRect
    // The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTop = box.getBoundingClientRect().top;

    //   Check if the top of the box is less than the triggered bottom

    boxTop < triggerBottom
      ? box.classList.add("show")
      : box.classList.remove("show");
  });
}
