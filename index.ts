const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

//function to generate the resume
if (resumeForm && resumeOutput ){
    resumeForm.addEventListener('submit',(event)=>{
        event.preventDefault();

        const name=(document.getElementById('name') as HTMLInputElement).value;
        const email=(document.getElementById('email') as HTMLInputElement).value;
        const phone=(document.getElementById('phone') as HTMLInputElement).value;
        const education=(document.getElementById('education') as HTMLInputElement).value;
        const experience=(document.getElementById('experience') as HTMLInputElement).value;
        const skills=(document.getElementById('skills') as HTMLInputElement).value;
        const description=(document.getElementById('description') as HTMLInputElement).value;

        //generate HTML for the resume
        const resumeHTML =`
        <h2>Generated Resume</h2>
        <p><strong>name:</strong>${name}</p>
        <p><strong>email:</strong>${email}</p>
        <p><strong>phone:</strong>${phone}</p>
        <p><strong>education:</strong>${education}</p>
        <p><strong>experience:</strong>${experience}</p>
        <p><strong>skills:</strong>${skills}</p>
        <p><strong>description:</strong>${description}</p>
        
        `;
        resumeOutput.innerHTML=resumeHTML
    });
}else{
         console.log(`Form or Output div no found in the DOM`);
}


