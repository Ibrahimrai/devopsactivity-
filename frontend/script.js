const fetchBtn = document.getElementById('fetchBtn');
const resultDiv = document.getElementById('result');

fetchBtn.addEventListener('click', async () => {
  resultDiv.innerHTML = 'Loading...';
  
  try {
    const response = await fetch('http://localhost:5000/api/users');
    const data = await response.json();
    
    let html = '<h3>Users:</h3><ul>';
    data.forEach(user => {
      html += `<li>${user.name} (ID: ${user.id})</li>`;
    });
    html += '</ul>';
    
    resultDiv.innerHTML = html;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});

// Fetch hello message on load
fetch('http://localhost:5000/api/hello')
  .then(res => res.json())
  .then(data => console.log(data.message))
  .catch(err => console.error('Error:', err));
