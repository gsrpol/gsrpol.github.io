function get_all_resource() { // получаем данные

  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(data => {
      const tableBody = document.getElementById('commentsTable').getElementsByTagName('tbody')[0];
      data.forEach(comment => {
          const row = tableBody.insertRow();
          row.insertCell(0).textContent = comment.id;
          row.insertCell(1).textContent = comment.name;
          row.insertCell(2).textContent = comment.email;
          row.insertCell(3).textContent = comment.body;
      });
  })
  .catch(error => console.error('Ошибка:', error));
}

get_all_resource();

document.getElementById('toggleButton1').addEventListener('click', function() {
    const photo = document.getElementById('photo1');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton2').addEventListener('click', function() {
    const photo = document.getElementById('photo2');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none'; 
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton3').addEventListener('click', function() {
    const photo = document.getElementById('photo3');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none'; 
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton4').addEventListener('click', function() {
    const photo = document.getElementById('photo4');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});

document.getElementById('toggleButton5').addEventListener('click', function() {
    const photo = document.getElementById('photo5');
    
    if (photo.style.display === 'none') {
        photo.style.display = 'block';
        this.textContent = 'Скрыть фотографию';
    } else {
        photo.style.display = 'none';
        this.textContent = 'Показать фотографию';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.getElementById("back-to-top");
   
    window.addEventListener("scroll", function () {

      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });
   
    backToTop.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
