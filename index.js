document.addEventListener('DOMContentLoaded', ()=> {
    const body = document.querySelector('body');
    const elements = body.querySelectorAll('*');
    let targetsList = '';

    elements.forEach((element)=> {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            getTargetList(element);

        }, true);
    })

    const getTargetList = (element)=> {
        const tagName = `${element.tagName}`;
        const tagClass = `${element.getAttribute('class')}` !== String(null) ? `.${element.getAttribute('class')}` : '';

        targetsList += `${tagName}${tagClass}` + (element === event.target ? '' : ' > ');

        return targetsList.toLowerCase();
    }
})