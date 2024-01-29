const sideMenu = document.getElementById("sidmenu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("clodeIcon");
const submitBtn = document.getElementById("submit");
const form = document.querySelectorAll("form input");
const errorMsg = document.getElementById("errorMsg");
const succesMsg =document.getElementById("successContainer")

function hideErrorMsg() {
    errorMsg.style.opacity = "0";
}

menuBtn.addEventListener("click", drawMenu);
closeBtn.addEventListener("click", closeMenu);
submitBtn.addEventListener("click", checkValiation);


function drawMenu() {
    sideMenu.style.left = "0px";
}

function closeMenu() {
    sideMenu.style.left = "-800px";
}
function checkValiation() {
    let isValid = true;
    try {
        for (let i = 0; form.length; i++) {
            if (form[i].value === "") {
                isValid = false;
                console.log("enterd to this  if");

                let newValue = `Please fill your${form[i].name}`
                errorMsg.innerHTML = newValue;
                errorMsg.style.opacity = "1";
                break;
            }
        }
    } catch (error) {
        console.log(error);

    }


    if (isValid == true) {
        SendMail();
        for (let i = 0; i < form.length; i++) {
            form[i].value = "";

        }
    }
}

function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value



    }
    var servieceId = "service_b5jc4ha";
    var templateId = "template_fn0ix5d";
    emailjs.send(servieceId, templateId, params).then(res => {
        sendEmail();
    }).catch();
}

function sendEmail(){
    succesMsg.style.opacity="1";
    setTimeout(()=>{
        succesMsg.style.opacity="0";
    },3000)
}

