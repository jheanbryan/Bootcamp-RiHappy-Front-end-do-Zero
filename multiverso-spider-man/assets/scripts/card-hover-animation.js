function handleMouseEnter() {
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
};

function handleMouseLeave() {
    this.classList.remove('s-card--hovered');
    document.body.id = ``;
};
`
`
const addEventsToCards = () => {
    const cardElements = document.querySelectorAll('.s-card');

    cardElements.forEach((card) => {
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
    
}

document.addEventListener('DOMContentLoaded', addEventsToCards)