function displayFormData(){
    const form = document.getElementById('displayData');
    const formData = document.getElementById('indexDataID');

    let formIndividualData = '';
    for (let i = 0; i < form.elements.length - 1; i++) {
        const element = form.elements[i];
        if (element.type !== 'button') {
            formIndividualData += `${element.name}: ${element.type === 'radio' ? (element.checked ? 'Yes' : 'No') : element.value}<br>`;
        }
    }

    formData.innerHTML = formIndividualData;
}