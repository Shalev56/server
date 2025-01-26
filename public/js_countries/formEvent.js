export const decalreFormEvent = (_doApi) => {
  let id_form = document.querySelector("#id_form");
  id_form.addEventListener("submit",(e) => {
    e.preventDefault();

    let dataBody = {
      name: document.querySelector("#id_name").value,
      capital: document.querySelector("#id_capital").value,
      pop: document.querySelector("#id_pop").value,
      img: document.querySelector("#id_img").value,
    }

    console.log(dataBody);
    addNewCountry(dataBody,_doApi);
  })
}


const addNewCountry = async(_bodyData,_doApi) => {
  let myUrl = "https://server-ha2l.onrender.com/countries"
  try{
    let resp = await axios({
      url:myUrl,
      // שיטת השיגור אם פוסט, פוט או דיליט
      method:"POST",
      // הבאדי שנרצה לשלוח
      data:JSON.stringify(_bodyData),
      // כדי שהשרת יבין שזה ג'ייסון
      headers:{
        'x-api-key': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzZjE2Mzk1ZWNlODg1Yjc3YWU5YzQiLCJpYXQiOjE3Mzc5MTg1NTksImV4cCI6MTczNzkyMjE1OX0.Bn8xkrG8yJh8SCkfqaR31uy9UR7MmzBurLBLWwExaN4',
        'content-type': "application/json"
      }
    })  
    // אם הצלחנו אנחנו יודעים שנקבל איי די 
    if(resp.data._id){
      alert("Country added");
      _doApi();
      // לקרוא מחדש לדו איי פי איי שנמצא בקובץ אפ
    }
    else{
      alert("there problem , try again")
    }
  }
  catch(err){
    console.log(err);
    alert("There problem, come back later")
  }
}