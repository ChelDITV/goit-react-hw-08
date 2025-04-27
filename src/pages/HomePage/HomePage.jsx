const HomePage = () => {
  return (
    <>
      <section>
        <h1>Welcome to Contact Book 📖✨</h1>

        <p>
          <strong>Contact Book</strong> is your personal space to organize and
          secure your most important contacts.
        </p>

        <p>
          This application was crafted with a passion for speed, convenience,
          and reliability. Developed as part of the final project for the{" "}
          <strong>React + Redux Toolkit</strong> module at <strong>GoIT</strong>
          .
        </p>

        <h2>🚀 What you can do here:</h2>
        <ul>
          <li>🔐 Register and log in securely using JWT authentication</li>
          <li>📚 Maintain your own private contact list</li>
          <li>🔎 Quickly search contacts by name or phone number</li>
          <li>✏️ Add, edit, and delete contacts easily</li>
          <li>🔔 Get instant success notifications via Toast messages</li>
          <li>♻️ Automatically restore your session after page reload</li>
        </ul>

        <h2>🛠 Technologies Used:</h2>
        <ul>
          <li>⚡ Vite — for lightning-fast project setup and development</li>
          <li>⚛️ React — for building powerful user interfaces</li>
          <li>🛠 Redux Toolkit — for efficient state management</li>
          <li>🧭 React Router — for seamless page navigation</li>
          <li>📝 Formik — for managing forms effortlessly</li>
          <li>🎨 CSS Modules — for clean and modular styling</li>
          <li>🔔 React Hot Toast — for beautiful user notifications</li>
          <li>💾 Redux Persist — for keeping the user logged in</li>
          <li>🛡 JWT — for secure API authentication</li>
        </ul>

        <p
          style={{ marginTop: "20px", textAlign: "center", fontWeight: "bold" }}
        >
          📞 Start organizing your contacts today — register or log in now!
        </p>
      </section>
    </>
  );
};

export default HomePage;
