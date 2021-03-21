
      const name1 = document.driverRegForm.fname;
      const name2= document.driverRegForm.lname;
      const  gender1= document.driverRegForm.gender;
      const date1 = document.driverRegForm.date;
      const nin1 = document.driverRegForm.nin;
      const residence = document.driverRegForm.dresidence;
      const Incidences = document.driverRegForm.pincidences;
      /** Validating first name so that it starts with a capital letter, can not be left empty, has more than 1 character and less than 51 characters.
      An alert will be thrown incase any of the validations is violated and the field will be highted with red borders.
      */
      const nameFunction = () => {
      const min = 2;
      const max = 50;
      const letters = /^[A-Z]+[a-zA-Z]*$/
      if (name1.value === '') {
      alert('please fill in the first name');
      name1.style.border = '2px solid red';
      name1.focus();
      } else {
      if (name1.value.length < min) {
      name1.focus();
      name1.style.border = '2px solid red';
      alert('The first name must be more than 1 character!');
      }else{
      if(name1.value.length>max){
      name1.focus();
      name1.style.border = '2px solid red'
      } else {
      if (!name1.value.match(letters)) {
      name1.focus();
      name1.style.border = '2px solid red';
      alert('The first name must start with a capital letter.');
      return false;
      } // Ensures only alphabetical characters are fill-in.
      return true;
      } // Ensures the name field has more than 3 characters.
      return true;
      } // checks if the name field is empty!
      return true;
      };
      }
      // for last name
      const nameFunction1 = () => {
      const min = 2;
      const max = 50;
      const letters = /^[A-Z]+[a-zA-Z]*$/
      if (name2.value === '') {
      alert('please fill in the last name!');
      name2.style.border = '2px solid red';
      name2.focus();
      }else {
      if (name2.value.length < min) {
      name2.focus();
      name2.style.border = '2px solid red';
      alert('The last name must be more than 1 character!');
      }else{
      if(name2.value.length>max){
      name2.focus();
      name2.style.border = '2px solid red'
      }else{
      if (!name2.value.match(letters)) {
      name2.focus();
      name2.style.border = '2px solid red';
      alert('The last name must start with a capital letter.');
      return false;
      } // Ensures only alphabetical characters are fill-in.
      return true;
      } // Ensures the name field has more than 3 characters.
      return true;
      } // checks if the name field is empty!
      return true;
      }
      }
      const residenceFunction = () => {
      if (residence.value === '') {
      residence.style.border = '2px solid red';
      alert('Please include driver residence');
      residence.focus();
      } else {
      return true;
      } //  Ensure residence field is not empty.
      return true;
      };
      const valueDate = ()=>{
      if(date1.value === ''){
      date1.style.border= '2px solid red';
      alert('date is empty,please fill it');
      date1.focus();
      }else{
      return true;
      }
      return true
      };
      const validation = () => {
      nameFunction();
      nameFunction1();
      residenceFunction();
      valueDate();
      };
      document.driverRegForm.addEventListener('submit', validation); // Watches the validity of data filled in.
    