const imgContainer = document.getElementById('img');


document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        imgContainer.classList.remove('active')
        document.querySelectorAll('.text').forEach(ele => ele.classList.remove('active'))
    }, 1500)
})