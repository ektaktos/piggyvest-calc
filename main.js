var y = document.getElementById('menu-overlay');
var z = document.getElementById('menu-icon');
function openmenu(){
  z.style.display = 'none';
  document.documentElement.style.overflow = 'hidden';
  document.body.scroll = 'no';
  y.style.display = 'block';
}

function closemenu(){
  y.style.display = 'none';
  z.style.display = 'block';
  document.documentElement.style.overflow = 'scroll';
  document.body.scroll = 'yes';
}

function separator(num){
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

function calculateProfit(){
  var principal = parseInt(document.getElementById('amount').value);
  var duration = parseInt(document.getElementById('duration').value);
  if (!principal || !duration) {
    document.getElementById('totalAmount').innerHTML = 0;
    return
  }
  // 13% per annum for safelock
  // 1.083% per month for safelock
  var perMonth = (13/12)/100;
  var interest = (perMonth * principal * duration);
  var total = Math.abs((interest + principal).toFixed(2));
  console.log(interest)
  console.log(total)
  total = separator(total)
  document.getElementById('totalAmount').innerHTML = total;
}