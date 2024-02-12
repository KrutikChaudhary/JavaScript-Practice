function displayFormData(){
    const form = document.getElementById('displayData');
    const formData = document.getElementById('indexDataID');

    let formIndividualData = '';
    for (let i = 0; i < form.elements.length - 1; i++) {
        const element = form.elements[i];
        if (element.type !== 'button') {
            if(element.name !== 'gender'){
                formIndividualData += `${element.name}: ${element.type === 'radio' ? (element.checked ? 'Yes' : 'No') : element.value}<br>`;
            }
            else{
                formIndividualData += `${ (element.checked ?` ${element.name}: ${element.value} <br>`: '')}`;
            }
        }
    }

    formData.innerHTML = formIndividualData;
}


//  ANSWERS TO THE QUESTION

//  1) THE JOB OF PREVENTDEFAULT IS TO STOP THE PAGE FROM RELOADING WHEN A BUTTON OR A FORM IS CLICKED. THIS HELPS THE PAGE WEB DEVELOPMENT FOR CONTROLING USER 
    // INTERACTION AND CREAT ING CUSTOMIZED BEHAVIOUR

    // 2)  event.preventDefault(); 
    // IS THE LINE THAT STOPS THE WEB PAGE FROM LOSING DATA AND HELP IT TO KEEP PREVIOIUS DATA ON THE WEBPAGE, ADD THIS LINE JUST AFTER CALLING AN EVENT OR SUBMITTING A FORM