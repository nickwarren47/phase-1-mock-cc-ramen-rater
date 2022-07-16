// // write your code here
// const ramenMenu = document.querySelector("#ramen-menu")
// const ramenDetails = document.querySelector("#ramen-detail")
// const ramenImage = document.querySelector(".detail-image")
// const ramenName = document.querySelector(".name")
// const restaurant = document.querySelector(".restaurant")
// const rating = document.querySelector("#rating-display")
// const comment = document.querySelector("#comment-display")

// fetch("http://localhost:3000/ramens")
//     .then(response => response.json())
//     .then(data => data.forEach(renderData))

// //adding photos of ramen from array onto the website

// function renderData (object){
//     const image = document.createElement("img")
//     image.src = object.image
//     // console.log(image)
//     ramenMenu.append(image)


// // Click on an image from the #ramen-menu div and see all the 
// // info about that ramen displayed inside the #ramen-detail div
//     function matchingImages(){
//         ramenName.textContent = object.name
//         ramenImage.src = object.image
//         restaurant.textContent = object.restaurant
//         rating.textContent = object.rating
//         comment.textContent = object.comment
//     }
//     image.addEventListener("click", matchingImages)
// }


// // Create a new ramen after submitting the new-ramen form. The new ramen should 
// // be added to the#ramen-menu div. The new ramen does 
// // not need to persist; in other words, if you refresh the page, it's okay that 
// // the new ramen is no longer on the page.

// document.querySelector('#new-ramen').addEventListener('submit', createNewRamen)

// function createNewRamen(e){
//     e.preventDefault()
//     // console.log(e.target.new-comment.value)
//     //Adds new ramen to file
//     const addedRamen = {
//         name: e.target.name.value,
//         restaurant: e.target.restaurant.value,
//         image: e.target.image.value,
//         rating: e.target.rating.value,
//         comment: e.target['new-comment'].value,
//     }
//     fetch("http://localhost:3000/ramens", {
//         method: 'POST',
//         headers: {
//             'Content-Type':'application/json'
//         },
//         body: JSON.stringify(addedRamen)
//     }) 
//     .then(res => res.json())
//     .then(json => renderData(json))
// }



/*
See all ramen images in the div with the id of ramen-menu. 
When the page loads, request the data from the server to get 
all the ramen objects. Then, display the image for each of the 
ramen using an img tag inside the #ramen-menu div.
*/
const ramenImage = document.querySelector('.detail-image');
const ramenName = document.querySelector('.name');
const restaurant = document.querySelector('.restaurant');
const rating = document.querySelector('#rating-display');
const comment = document.querySelector('#comment-display');
const ramenMenu = document.querySelector('#ramen-menu')

const getRamenInfo = () => {
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => data.forEach(getRamenPhotos))
}

// adding images to the top of the screen
function getRamenPhotos(object){
    const ramenPhotos = document.createElement('img');
    ramenPhotos.src = object.image;
    ramenMenu.append(ramenPhotos);
    
    /*Click on an image from the #ramen-menu div and see all the 
    info about that ramen displayed inside the #ramen-detail div
    and where it says insert comment here and insert rating here.
    */
    function displayRamen (){
        ramenImage.src = object.image;
        ramenName.textContent = object.name;
        restaurant.textContent = object.restaurant;
        rating.textContent = object.rating;
        comment.textContent = object.comment;
    }
    ramenPhotos.addEventListener('click', displayRamen);
}
getRamenInfo();

/*
Create a new ramen after submitting the new-ramen form. 
The new ramen should be added to the#ramen-menu div. 
The new ramen does not need to persist; in other words, 
if you refresh the page, it's okay that the new ramen 
is no longer on the page.
*/


    const newRamenForm = document.querySelector('#new-ramen')
    newRamenForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const addsNewRamen = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value,
        }
        fetch('http://localhost:3000/ramens', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(addsNewRamen)
        })
        .then(res => res.json())
        .then(json => getRamenPhotos(json))
    })

createNewRamen();

