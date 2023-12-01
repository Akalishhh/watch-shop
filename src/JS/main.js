// modal
const modalTrrigger =  document.querySelector('.btn-create')
      modal = document.querySelector('.modal')
      modalClose = document.querySelector('.modal__close')

modalTrrigger.addEventListener('click' ,()=>{
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
})
modalClose.addEventListener('click' , ()=>{
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
})



let url = 'http://localhost:3000/praducts'
let products = document.querySelector('.product__cards')
let form = document.querySelector('form')

const getAllProducts = ()=>{
    fetch(url)
    .then((res)=> res.json())
    .then((res)=> {
        res.map((item=>{
           products.innerHTML += `
              <div class="product__card">
                 <img src="${item.image}" alt="Airpods">
                 <p class="product__card-title">${item.title}</p>
                 <p class="product__card-price">$${item.price}</p>
                 <p class="product__card-price">${item.memory}</p>
              <button class="product__btn">Buy</button>
              <button class="product__btn">change</button>
              <button data-id=${item.id}> </button>

       </div>  
           ` 
        }))
    })
    .catch((err)=> alert(err))
}
getAllProducts()

form.addEventListener('submit' , (e)=>{
    e.preventDefault()
    fetch(url , {
        method :"POST",
        headers : {
            "Content-type":"application/json"
        },
        body: JSON.stringify(
            {
                title:e.target[0].value,
                image :e.target[3].value,
                price:e.target[1].value,
                memory:e.target[2].value
            }
        )
    }).then((res)=> alert('успешно'))
    .catch((err)=> alert(err))
})
