// function showImage() {
//   const fruit = document.getElementById("fruit-select").value;

//   const imageContainer = document.getElementById("image-container");

//   imageContainer.innerHTML = "";

//   if (fruit) {
//     const img = document.createElement("img");

//     img.src = "${fruit).jpg";

//     img.alt = fruit;

//     imageContainer.appendChild(img);
//   }
// }


function showImage() {
    const fruit = document.getElementById("fruit-select").value;
    const imageContainer = document.getElementById("image-container");

    // Clear any previous image
    imageContainer.innerHTML = "";

    // Use dummy images for demonstration purposes
    const images = {
        cherry: "https://www.shutterstock.com/image-vector/cherry-cartoon-style-on-white-600nw-2471628365.jpg",
        apple: "https://www.shutterstock.com/image-photo/red-apple-isolated-on-white-260nw-1727544364.jpg",
        banana: "https://img.freepik.com/free-vector/simple-isolated-banana_1308-125007.jpg"
    };

    if (fruit) {
        const img = document.createElement("img");
        img.src = images[fruit];  // Set the image based on the selected fruit
        img.alt = fruit;
        imageContainer.appendChild(img);  // Append the image to the container
    }
}

