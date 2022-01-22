alert("helooo");

function checkBoxCheck() {
    // Get the checkbox
    var checkBox1 = document.getElementById("1");
    var checkBox2 = document.getElementById("2");
    var checkBox3 = document.getElementById("3");
    var numberOfMovies;
    // If the checkbox is checked, change numberOfMovies
    if (checkBox1.checked == true){
      numberOfMovies=1;
    } else if (checkBox2.checked == true){
        numberOfMovies=2;
    } else if (checkBox3.checked == true){
        numberOfMovies=3;
    }
  }

  if(document.getElementById('next').clicked==true){
      alert("numberOfMovies");
  }