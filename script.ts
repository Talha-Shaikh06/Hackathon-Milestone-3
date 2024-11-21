// get refrence to the form and display area 

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//handling form submission

form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    //collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // generate resume content dynamically
    const resumeHTML = `
    <h2><br>Resume</b></h2>
    <h3><br> Personal Information</b></h3>
    <p><b>Name:</b>${name}<p>
    <p><b>Email:</b>${email}<p>
    <p><b>Phone:</b>${phone}<p>

    <h3>Education</h3>
    <p>${education}<p>

    <h3>Experiance</h3>
    <p>${experiance}<p>

    <h3>Skills</h3>
    <p>${skills}<p>
    `;

    // display generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else {
        console.error('Resume Display Element is Missing!');
    }

});