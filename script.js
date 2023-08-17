const form=document.getElementById("registrationForm");
const displayData=document.getElementById("displayData");
form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const profilePhoto=form.profilePhoto.files[0];
    const reader=new FileReader();
    reader.onload=function(e){
    const data=`
    <h3>Registered Information</h3>
    <img src="${e.target.result}" alt="Profile Photo">
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    `;
    displayData.innerHTML=data;
    };
    reader.readAsDataURL(profilePhoto)
});