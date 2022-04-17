function hideEmail(email) { 
    let hiddenEmail = "";
    for (i = 0; i < email.length; i++) {
      if (i > 2 && i< email.indexOf("@") ) {
        hiddenEmail += ".";
      } else {
        hiddenEmail += email[i];
      }
    }
    return hiddenEmail;
  }
  console.log(hideEmail("kimia.goudarzi81@gmail.com"));