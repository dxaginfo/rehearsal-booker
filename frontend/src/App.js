import React from 'react';
function App() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 20 }}>
      <h2>Rehearsal Booker</h2>
      <form>
        <label>Email<br /><input type="email" /></label><br />
        <label>Password<br /><input type="password" /></label><br />
        <button>Login</button>
      </form>
      <hr />
      <h3>Upcoming Rehearsals</h3>
      <ul>
        {/* Render rehearsal list here */}
      </ul>
    </div>
  );
}
export default App;