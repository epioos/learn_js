const container = document.querySelector('.conatiner');
document.body.onload = createCircles;

function createCircles() {
    const dragCircle = document.createElement('div');
    const goalCircle = document.createElement('div');
    const [randSizeDrag, randSizeGoal] = randomSizes();
    const [randCoordinateOne, randCoordinateTwo, randCoordinateThree, randCoordinateFour] = randomPosition();

    dragCircle.classList.add('circle');
    goalCircle.classList.add('move_to');

    dragCircle.style.height = `${randSizeDrag}px`;
    dragCircle.style.width = `${randSizeDrag}px`;
    dragCircle.style.left = `${randCoordinateOne}px`;
    dragCircle.style.top = `${randCoordinateTwo}px`;

    goalCircle.style.height = `${randSizeGoal}px`;
    goalCircle.style.width = `${randSizeGoal}px`;
    goalCircle.style.left = `${randCoordinateThree}px`;
    goalCircle.style.top = `${randCoordinateFour}px`;

    container.appendChild(goalCircle);
    container.appendChild(dragCircle);

    function checkForCollision() {
        let distX = parseInt(dragCircle.style.left) - parseInt(goalCircle.style.left);
        let distY = parseInt(dragCircle.style.top) - parseInt(goalCircle.style.top);
        let distance = Math.sqrt(distX * distX + distY * distY);
        const sumOfRadii = (parseInt(goalCircle.style.height) + parseInt(dragCircle.style.height)) / 2;
        if (distance <= sumOfRadii){
            container.innerHTML = '';
            const winContent =  document.createTextNode('You won - reload for new game!');
            container.appendChild(winContent);
        }
    }
    
    function mousemove({movementX, movementY}) {
        let dragableItem = window.getComputedStyle(dragCircle)
        let currentLeft = parseInt(dragableItem.left);
        let currentTop = parseInt(dragableItem.top);
        dragCircle.style.left = `${currentLeft + movementX}px`;
        dragCircle.style.top = `${currentTop + movementY}px`;
        checkForCollision();
    }
    
    dragCircle.addEventListener('mousedown',()=>{
       dragCircle.addEventListener('mousemove', mousemove);
    });
    document.addEventListener('mouseup', ()=>{
        dragCircle.removeEventListener('mousemove', mousemove);
    });


}

function randomSizes() {
    const randSizeOne = Math.floor(Math.random() * (200 - 20)) + 20;
    const randSizeTwo = randSizeOne + 10;
    return [randSizeOne, randSizeTwo];
}

function randomPosition() {
    const randCoordinateOne = Math.floor(Math.random() * (200 - 10)) + 10;
    const randCoordinateTwo = Math.floor(Math.random() * (1000 - 10)) + 10;
    const randCoordinateThree = Math.floor(Math.random() * (200 - 10)) + 10;
    const randCoordinateFour = Math.floor(Math.random() * (1000 - 10)) + 10;
    return [randCoordinateOne, randCoordinateTwo, randCoordinateThree, randCoordinateFour];
}