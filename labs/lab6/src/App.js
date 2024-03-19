import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my portfolio!!!</h1>
        <h2>Krutik Chaudhary</h2>
        
        <div class="summary">
          <h3>Summary</h3>
          <p>Enthusiastic and committed Bachelor of Computer Science student at Dalhousie University with a strong foundation in
            software development, data structures, and database management. Experienced in a customer service role, enhancing
            customer satisfaction and managing financial transactions with attention to detail. Proficient in Java, SQL, HTML, CSS,
            and JavaScript, and familiar with various development and collaboration tools. Currently seeking to enhance my skills
            and knowledge by applying for Internship opportunities. Available for 4-8 months starting from May 2024.</p>
        </div>

        <div class="education">
        <h3>Education</h3>
        <h4>Bachelor of Computer Science</h4>
        <p>• Relevant coursework: Data Structures and Algorithms, Software Development, Database Management Systems, Object Oriented Programming, Introduction to Computer Systems, Introduction to Probability and Statistics, Matrix Theory
        & Linear Algebra</p>
        </div>

        <h3>TECHNICAL SKILLS</h3>
        <div class="skills-grid">
        <div class="skill-category">
          <h4>Programming Languages: </h4>
          <p>Java, SQL, HTML, CSS, JavaScript</p>
        </div>
        <div class="skill-category">
          <h4>Developer Tools: </h4>
          <p>Git, IntelliJ, VS Code, Android Studio, Eclipse</p>
        </div>
        <div class="skill-category">
          <h4>Testing Skills: </h4>
          <p>JUnit, Regression testing</p>
        </div>
        <div class="skill-category">
          <h4>Collaboration Tools: </h4>
          <p>Jira, Confluence, Teams, Microsoft 365</p>
        </div>
      </div>
        
      <div class="experience">
        <h3>PROJECT EXPERIENCE</h3>
          <h4>Whatsapp Clone: Java, Android Studio, Firebase</h4>
            <p>• Engineered a WhatsApp Clone App with real-time messaging using Firebase Realtime Database</p>
            <p>• Applied MVVM design pattern for enhanced code readability and maintainability.</p>
          
          <h4>ChemAR: HTML, CSS, JavaScript</h4>
            <p>• Collaborated in an Agile-Scrum environment using Jira and Confluence to develop a web-based project.</p>
            <p>• Conducted regression tests to validate website functionality, ensuring a robust user experience.</p>

          <h4>JUnit Testing: Java, JUnit</h4>
            <p>• Emphasized adherence to SOLID principles for improved code architecture and maintainability in the CSCI 2134
            Software Development class.</p>
            <p>• Contributed effectively to group labs focused on testing, reviewing, debugging, and documentation.</p>  
        <h3>WORK EXPERIENCE</h3>
          <h4> Customer Service Representative</h4>
            <p>• Boosted customer satisfaction through effective problem-solving and communication.</p>
            <p>• Managed transactions with precision, demonstrating organizational skills and attention to detail.</p>
            <p>• Worked effectively in a fast-paced team environment.</p>
      </div>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This Webpage was developed using React
        </a>
      </header>
    </div>
  );
}

export default App;
