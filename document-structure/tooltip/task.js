const tool = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

tool.forEach(item => {
    tooltip.className = 'tooltip';
    item.append(tooltip);

    item.addEventListener('click', (event) => {
 
        const {top, left} = item.getBoundingClientRect();
        
        if (tooltip.textContent === event.currentTarget.title) { 
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.textContent = event.currentTarget.title; 
            tooltip.setAttribute('style', `left: ${left}px; top: ${top + 25}px;`)
            tooltip.classList.add('tooltip_active');
        }

        event.preventDefault(); 
    })
});