var navstatus = 0;

function openNav() {
  if (!navstatus) {
    $('.maindive').css('width', '100%');
    $('li').css('display', 'block');
    navstatus = 1;
  } else {
    // add code here to handle the case when navstatus is not 0
  }
}