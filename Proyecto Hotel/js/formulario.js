function ValidarFormuComentario() {
    var apagar = document.getElementById('enviar-1');
    if (document.getElementById('nombre').value.length==0 || document.getElementById('comentario').value.length==0) {
        event.preventDefault();
        alertify.alert("Rellene todos los espacios");
        return false;
    }else{
        (function() {
            emailjs.init('user_HiB0yTwl1oFKo3hy31gY0');
        })();
        const btn = document.getElementById('enviar-1');
    
        document.getElementById('Fcomentario').addEventListener('submit', function (event) {
            event.preventDefault();
            btn.value = 'Enviando...';
    
            const serviceID = 'default_service';
            const templateID = 'template_qj57val';
    
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Enviado';
                }, (err) => {
                btn.value = 'Enviado';
                alert(JSON.stringify(err));
                });
            });
        alertify.success('Comentario enviado');
        apagar.setAttribute('disabled', 'true');
        return false;
    }   
}   
function ValidarFormuCurso() {
    var apagar = document.getElementById('enviar-2');
    let valida = document.getElementById('correo').value.indexOf('@');
    if (valida==-1) {
        event.preventDefault();
        alertify.alert("Escriba un correo");
        return false;
    }else{
        (function() {
            emailjs.init('user_HiB0yTwl1oFKo3hy31gY0');
        })();
        const btn = document.getElementById('enviar-2');

        document.getElementById('Fcorreo').addEventListener('submit', function(event) {
        event.preventDefault();
        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_2e6dm5p';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
            btn.value = 'Enviado';
            }, (err) => {
            btn.value = 'Enviado';
            alert(JSON.stringify(err));
            });
        });
        alertify.success('Correo enviado');
        apagar.setAttribute('disabled', 'true');
        return false;
    }
}