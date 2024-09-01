document.addEventListener('DOMContentLoaded', ()=> {
    const elements = document.body.querySelectorAll('*');
    const link= document.querySelector('a');
    const searchForm = document.getElementById('search');
    let breadcrumbsList = '';

    function initEvents() {
        // Получение хлебных крошек (Задание 1)

        elements.forEach((element)=> {
            element.addEventListener('click', (event) => {
                onElementClick(event, element);
            }, true);
        });

        // Открытие формы (Задание 2)

        link.addEventListener('click', (event)=> {
            onLinkClick(event);
        });
    }

    function onLinkClick(event) {
        searchForm.removeAttribute('hidden');
    }

    function onElementClick(event, element) {
        event.preventDefault();

        formBreadcrumbsList(element, event);

        if (element === event.target) {
            getBreadcrumbsList();

            breadcrumbsList = '';
        }
    }

    function getBreadcrumbsList() {
        console.log(breadcrumbsList.toLowerCase())
        return breadcrumbsList.toLowerCase();
    }

    function formBreadcrumbsList(element, event){
        const tagName = `${element.tagName}`;
        const tagClass = element.getAttribute('class') ?? '';
        const dot = tagClass ? '.' : '';

        breadcrumbsList += `${tagName}${dot}${tagClass}`  + (element === event.target ? '' : ' > ');
    }

    initEvents();
})