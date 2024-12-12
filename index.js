console.clear()
let k = 0
let n = Math.trunc(Math.random()*12)
let data = document.querySelector ("input")
function guess(){
  k++
  if (k == 3){
    setTimeout(
      ()=>alert("You lose!"),
      600
    )
    document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Bq4xl_Zh4DzG3EHg-p2T75luaHQmQR59Ow&s)"
  }
  else if(data.value==n){
    setTimeout(
      ()=>alert("You Win!"),
      600
    )
    document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_1280.jpg)"
  }
  else if(data.value<n){
    setTimeout(
      ()=>alert("Загадане число більше"),
      600
    )
    document.body.style.backgroundImage = "url(https://vdomadobre.info/wp-content/uploads/2023/11/osin_kartinki_2.jpg)"
  }
  else if(data.value>n){
    setTimeout(
      ()=>alert("Загадане число менше"),
      600
    )
    document.body.style.backgroundImage = "url(https://s00.yaplakal.com/pics/pics_original/9/6/9/19542969.jpg)"
  }
  console.log(n)
}
