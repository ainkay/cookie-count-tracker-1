document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null; // Convert to number
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If the cookie exists, increment the value
  if (count !== null) {
    count++;
  } else {
    // 3. If the cookie does not exist, create it and set the value to 1
    count = 1;
  }

  // 4. Update the cookie with the new count value
  setCookie('count', count, 7); // Cookie expires in 7 days

  // 5. Display the count on the webpage
  document.body.innerHTML = `<h2>Page Load Count: ${count}</h2>`;
});
