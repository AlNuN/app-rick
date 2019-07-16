let request = new XMLHttpRequest()


function fillBody(page){

  if(page < 1){
  page = 1
  }else if (page > 25){
  page = 25}

  request.open('GET', 'https://rickandmortyapi.com/api/character/?page=' + page)

  document.getElementById('lista').innerHTML = ''

  request.onreadystatechange = () => {
    if(request.readyState == 4 && request.status == 200){
      let objJSON = JSON.parse(request.responseText)

      for(let i in objJSON.results){

        // Create the content

        let item = objJSON.results[i]
  
        let ulHtml = document.getElementById('lista')
  
        // Creating elements
  
        let listItem = document.createElement('li')
        listItem.className = 'list-group-item'
  
        let divMedia = document.createElement('div')
        if (window.innerWidth > 768){
          divMedia.className = 'media'
        } else {
          divMedia.className = 'media d-inline-block'
        }
  
        let img = document.createElement('img')
        img.className = 'align-self-center'
        img.src = item.image
  
        let divText = document.createElement('div')
        divText.className = 'media-body ml-3 align-self-center'
        divText.style = 'font-size: 1.2em'
  
        let div1 = document.createElement('div')
        div1.innerHTML = 'Name: ' + item.name
        
        let div2 = document.createElement('div')
        div2.innerHTML = 'Id: ' + item.id
  
        let div3 = document.createElement('div')
        div3.innerHTML = 'Status: ' + item.status
  
        let div4 = document.createElement('div')
        div4.innerHTML = 'Species: ' + item.species
  
        let div5 = document.createElement('div')
        div5.innerHTML = 'Gender: ' + item.gender
  
  
        // Adding Elements
        divText.appendChild(div1)
        divText.appendChild(div2)
        divText.appendChild(div3)
        divText.appendChild(div4)
        divText.appendChild(div5)
        divMedia.appendChild(img)
        divMedia.appendChild(divText)
        listItem.appendChild(divMedia)
        ulHtml.appendChild(listItem)
      }

    // Creating pagination buttons
    
      let ulPagination = document.getElementById('paginator')

      ulPagination.innerHTML = ''

      // First and previous pages

      let liFirst = document.createElement('li')
      liFirst.className = 'page-item'
      liFirst.innerHTML = '<a class="page-link" onclick="fillBody('+ 1 +')" tabindex="-1"><i class="fas fa-angle-double-left"></i><span class="sr-only">First</span> </a>'
      ulPagination.appendChild(liFirst)

      let liPrev = document.createElement('li')
      liPrev.className = 'page-item'
      liPrev.innerHTML = '<a class="page-link" onclick="fillBody('+ (page - 1) +')" tabindex="-1"><i class="fas fa-angle-left"></i><span class="sr-only">Back</span> </a>'

      ulPagination.appendChild(liPrev)


      // Numbered buttons

      if(page - 2 > 0){
        let liMinus2 = document.createElement('li')
        liMinus2.innerHTML = '<a class="page-link" onclick="fillBody(' + (page - 2) +')" tabindex="-1"> <span><strong>' + (page - 2) + '</strong></span> </a>' 
        liMinus2.className = 'page-item'
        ulPagination.appendChild(liMinus2)
      }

      if(page - 1 > 0){
        let liMinus1 = document.createElement('li')
        liMinus1.innerHTML = '<a class="page-link" onclick="fillBody(' + (page - 1) +')" tabindex="-1"> <span><strong>' + (page - 1) + '</strong></span> </a>' 
        liMinus1.className = 'page-item'
        ulPagination.appendChild(liMinus1)
      }

      let liatual = document.createElement('li')
      liatual.innerHTML = '<a class="page-link" onclick="fillBody(' + page +')"> <span><strong>' + page + '</strong></span> </a>' 
      liatual.className = 'page-item active'
      ulPagination.appendChild(liatual)


      if(page + 1 < 26){
        let liPlus1 = document.createElement('li')
        liPlus1.innerHTML = '<a class="page-link" onclick="fillBody(' + (page + 1) +')" tabindex="-1"> <span><strong>' + (page + 1) + '</strong></span> </a>' 
        liPlus1.className = 'page-item'
        ulPagination.appendChild(liPlus1)
      }

      if(page + 2 < 26){
        let liPlus2 = document.createElement('li')
        liPlus2.innerHTML = '<a class="page-link" onclick="fillBody(' + (page + 2) +')" tabindex="-1"> <span><strong>' + (page + 2) + '</strong></span> </a>' 
        liPlus2.className = 'page-item'
        ulPagination.appendChild(liPlus2)
      }

      // Next and last

      let liNext = document.createElement('li')
      liNext.className = 'page-item'
      liNext.innerHTML = '<a class="page-link" onclick="fillBody('+ (page + 1) +')" tabindex="-1"><i class="fas fa-angle-right"></i><span class="sr-only">Foward</span> </a>'
      ulPagination.appendChild(liNext)

      let liLast = document.createElement('li')
      liLast.className = 'page-item'
      liLast.innerHTML = '<a class="page-link" onclick="fillBody('+ 25 +')" tabindex="-1"><i class="fas fa-angle-double-right"></i><span class="sr-only">Last</span> </a>'
      ulPagination.appendChild(liLast)

    }
  }

  request.send()

}

if(document.getElementById('lista').innerHTML == ''){
    fillBody(1)
} else {console.log('deu ruim')}

