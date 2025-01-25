document.getElementById("generate-resume").addEventListener("click", generateResume);
document.getElementById("print-resume").addEventListener("click", () => {
    window.print();
  });
  
  function generateResume(event) {
    event.preventDefault();
      
    const photoInput = document.getElementById("photo");
    let photoUrl = "";
    if (photoInput.files[0]) {
      photoUrl = URL.createObjectURL(photoInput.files[0]);
    }
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;  // Corrected this line
  
    const preview = document.getElementById("resume-preview");
    preview.innerHTML = `
          <div class='sidebar'>
              <img src="${photoUrl}" alt="User Photo">
              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>  <!-- Fixed the bold tag -->
              <p><strong>Email:</strong> ${email}</p>  <!-- Fixed the bold tag -->
              <p><strong>Number:</strong> ${number}</p>  <!-- Fixed the bold tag -->
              <p><strong>Summary:</strong> ${summary}</p>  <!-- Fixed the bold tag -->
              <p><strong>Education:</strong> ${education}</p>  <!-- Fixed the bold tag -->
              <p><strong>Experience:</strong> ${experience}</p>  <!-- Fixed the bold tag -->
              <p><strong>Skills:</strong> ${skills}</p>  <!-- Fixed the bold tag -->
          </div>
      `;
  }
  