const containers=document.querySelectorAll('.container');

containers.forEach(container=>{
    const icon =container.querySelector('.fa-solid')
    const answer=container.querySelector('.answer')

    container.addEventListener('click',()=>{
        // icon.classList.toggle('active')
        // answer.classList.toggle('active')
        if(icon.classList.contains('active')){
            icon.classList.remove('active')
            answer.style.maxHeight=null
        }
        else {
            icon.classList.add('active')
            answer.style.maxHeight=answer.scrollHeight+ 'rem';
        }
    })
})