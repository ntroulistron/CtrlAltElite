let index = 0; // The current index of the visible team member

function slide(direction) {
    const slider = document.querySelector('.team-slider');
    const members = document.querySelectorAll('.team-member');
    
    // Calculate the new index position
    index = (index + direction + members.length) % members.length;

    // Apply the transform to the slider
    slider.style.transform = `translateX(-${index * slider.offsetWidth}px)`;
}
