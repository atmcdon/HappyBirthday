// Listen for click events on the entire body of the page
// document.body.addEventListener('click', function (e) {
//   // Calculate click position relative to the window
//   var x = e.clientX / window.innerWidth;
//   var y = e.clientY / window.innerHeight;

//   // Trigger confetti at the click position
//   confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { x: x, y: y }
//   });
//   var flower = document.getElementById('flowerImage');
//   flower.classList.add('sprouted');

// });

document.getElementById('resetButton').addEventListener('click', function() {
  window.location.reload();
});


document.addEventListener('click', function (e) {

  if (e.target.matches('.ignore-clicks')) {
    return;
}


  // Define an array with the names of your flower images
  const flowerImages = ['4.5x/Asset3@4.5x.png',
                        '4.5x/Asset4@4.5x.png', 
                        '4.5x/Asset5@4.5x.png', 
                        '4.5x/Asset6@4.5x.png', 
                        '4.5x/Asset7@4.5x.png', 
                        '4.5x/Asset8@4.5x.png', 
                        '4.5x/Asset9@4.5x.png', 
                        '4.5x/Asset10@4.5x.png',
                        '4.5x/Asset11@4.5x.png', 
                        '4.5x/Asset12@4.5x.png', 
                        '4.5x/Asset13@4.5x.png', 
                        '4.5x/Asset14@4.5x.png', 
                        '4.5x/Asset15@4.5x.png', 
                        '4.5x/Asset16@4.5x.png',
                        '4.5x/Asset17@4.5x.png', 
                        '4.5x/Asset18@4.5x.png'];
  
  // Choose a random image from the array
  // const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];
  
  // Create a new image element for the flower
  // const flower = document.createElement('img');
  // flower.src = randomImage;
  // flower.style.position = 'absolute';
  // flower.style.width = '100px'; // Adjust as necessary
  // flower.style.top = `${e.pageY - 50}px`; // Adjust if needed to position correctly
  // flower.style.left = `${e.pageX - 50}px`; // Center the flower on the cursor
  
  // // Randomly flip the flower image
  // const flip = Math.random() > 0.5 ? 'scaleX(-1)' : '';
  // flower.style.transform = `translate(-50%, -50%) ${flip}`;
  // flower.style.transformOrigin = 'bottom';
  // flower.classList.add('flower', 'sprouted');
  // Selecting a random image from the array
  const shadowSrc = '4.5x/Asset20@4.5x.png'; // Path to your shadow image
    const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];


    const flip = Math.random() > 0.5 ? -1 : 1;
    const viewportHeight = window.innerHeight;
    const baseSize = 30; // Base size for flowers
    const sizeIncrease = (e.pageY / viewportHeight) * 50; // Size increases based on Y position
    const flowerSize = baseSize + sizeIncrease;
    const zIndex = Math.floor((e.pageY / viewportHeight) * 10) + 1; // Z-index based on Y position for depth

    // Create the shadow
    const shadow = document.createElement('img');
    shadow.src = shadowSrc;
    shadow.style.position = 'absolute';
    shadow.style.width = `${flowerSize + 10}px`; // Making the shadow slightly larger than the flower
    shadow.style.height = 'auto';
    shadow.style.top = `${e.pageY}px`;
    shadow.style.left = `${e.pageX}px`;
    shadow.style.transform = 'translate(-50%, -50%)'; // Adjust this to position the shadow correctly
    shadow.style.opacity = '20%';
    shadow.style.zIndex = zIndex - 1; // Shadow appears below the flower
    document.body.appendChild(shadow);

    // Create the flower
    const flower = document.createElement('img');
    flower.src = randomImage;
    flower.style.position = 'absolute';
    flower.style.width = `${flowerSize}px`;
    flower.style.height = 'auto';
    flower.style.top = `${e.pageY}px`;
    flower.style.left = `${e.pageX}px`;
    // flower.style.transform = `scaleX(${flip})`;

    // Assuming flipValue is either -1 (flipped) or 1 (not flipped)
    flower.style.setProperty('--scaleX', flip);

    flower.style.transformOrigin = '50% 100%';
    //flower.style.transform = `translate(-50%, -100%) ${flip}`;
    flower.style.zIndex = zIndex;
    flower.style.animation = `sprout 0.5s forwards, wave 6s infinite linear 0.5s`;
    
    document.body.appendChild(flower);
});





document.getElementById('birthdayButton').addEventListener('click', function (e) {
  // Toggle visibility of the birthday message
  var message = document.getElementById('birthdayMessage');
  message.classList.toggle('hidden');

  confetti({
          particleCount: 100,
          spread: 70
  });
  e.stopPropagation();

});
document.getElementById('generateFlowers').addEventListener('click', function() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const numberOfFlowers = 20; // Adjust the number of flowers as needed

  for (let i = 0; i < numberOfFlowers; i++) {
      // Calculate a random position within the viewport
      const x = Math.random() * viewportWidth;
      const y = Math.random() * viewportHeight;

      createFlowerAtPosition(x, y);
  }
});

function createFlowerAtPosition(x, y) {
  const flowerImages = [
      // Your flower images
  ];
  const shadowSrc = '4.5x/Asset19@4.5x.png'; // Path to your shadow image
  const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

  const flip = Math.random() > 0.5 ? 'scaleX(-1)' : '';
  const viewportHeight = window.innerHeight;
  const baseSize = 30; // Minimum size of the flower
  const sizeIncrease = (y / viewportHeight) * 50; // Increase size based on position
  const flowerSize = baseSize + sizeIncrease;
  const zIndex = Math.floor((y / viewportHeight) * 10) + 1;

  // Create and style the shadow
  const shadow = document.createElement('img');
  shadow.src = shadowSrc;
  shadow.style.position = 'absolute';
  shadow.style.width = `${flowerSize + 10}px`; // Shadow slightly larger than the flower
  shadow.style.height = 'auto';
  shadow.style.top = `${y - flowerSize / 2 + 10}px`; // Position shadow slightly lower than the flower
  shadow.style.left = `${x}px`;
  shadow.style.transform = 'translate(-50%, -50%)';
  shadow.style.zIndex = zIndex - 1; // Ensure shadow is below the flower

  // Create and style the flower
  const flower = document.createElement('img');
  flower.src = randomImage;
  flower.style.position = 'absolute';
  flower.style.width = `${flowerSize}px`;
  flower.style.height = 'auto';
  flower.style.top = `${y - flowerSize / 2}px`;
  flower.style.left = `${x}px`;
  flower.style.transform = `translate(-50%, -50%) ${flip}`;
  flower.style.zIndex = zIndex;
  flower.classList.add('flower', 'sprouted');

  // Add the shadow and flower to the body of the page
  document.body.appendChild(shadow);
  document.body.appendChild(flower);
}


