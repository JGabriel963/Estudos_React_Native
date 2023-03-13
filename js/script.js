const btnGerador = document.getElementById('generate');
const ispinIcon = document.querySelector('.spinner')
const res = document.getElementById('result')

btnGerador.addEventListener('click', function () {
    res.classList.add('checked');
    ispinIcon.classList.add('spin')
    document.querySelector('#result > span').textContent = "Carregando...";


    setTimeout(() => {
        res.classList.remove('checked');
        const min = parseInt(document.getElementById('min').value)
        const max = parseInt(document.getElementById('max').value)

        let result = Math.floor(Math.random() * (max - min + 1)) + min;

        if (isNaN(result)) {
            document.querySelector('#result > span').textContent = "Preencha todos os campos!";
        } else {
        document.querySelector('#result > span').textContent = result;
        }
    }, 5000)
 
})