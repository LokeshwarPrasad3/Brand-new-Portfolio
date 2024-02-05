import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="bg-slate-900 text-white p-8 font-overpass">
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <img
              src="./images/lokeshwar.jpg"
              alt="Profile"
              className="rounded-full mx-auto mb-4"
              style={{ width: "150px", height: "150px" }}
            />
            <h1 className="text-3xl font-bold mb-2">
              LOKESHWAR PRASAD DEWANGAN
            </h1>
            <p>
              Email:{" "}
              <a href="mailto:lokeshwar.prasad.cse@gmail.com">
                lokeshwar.prasad.cse@gmail.com
              </a>{" "}
              | GitHub: <a href="your-github-link">GitHub-Link</a> | Phone:
              (+91) 7879431869
            </p>
            <a className="text-blue-400 shadow-sm shadow-gray-500" href="./data/Resume-of-Lokeshwar-Prasad.pdf">Download Resume</a>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">EDUCATION</h2>
            <ul className="list-disc list-inside">
              <li>X (CG BOARD) Govt. High School Charmudiya - 93.3% (2019)</li>
              <li>
                XII (CG BOARD) Govt. Prayas Residential School Bilaspur - 96.6%
                (2021)
              </li>
              <li>
                B.Tech CSE | 5th Sem | Chhattisgarh Swami Vivekanand Technical
                University - 9.3 CGPA (current)
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">IMPORTANT LINKS</h2>
            <p>
              Coding Profile: <a href="your-codingninja-link">CodingNinjas</a> |
              Leetcode: <a href="your-leetcode-link">Leetcode</a> |
              Geeksforgeeks: <a href="your-geeksforgeeks-link">Geeksforgeeks</a>
            </p>
            <p>
              Portfolio with JS Projects:{" "}
              <a href="your-portfolio-link">Portfolio-with-JS-Projects</a> |
              Linkedin Profile:{" "}
              <a href="your-linkedin-link">Linkedin-Profile</a>
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">PROJECTS</h2>
            <p>
              <strong>REAL-TIME-CHAT-WEBAPP</strong> | Oct 2023 | Live-Link:{" "}
              <a href="your-live-link">Live-Link</a> | GitHub-Link:{" "}
              <a href="your-github-link">GitHub-Link</a>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Implemented user to user chat and group chat features with admin
                controls.
              </li>
              <li>
                Typing indicators for live conversations, Notification alerts
                for new messages.
              </li>
              <li>
                Technology used: React, TalwindCSS, Node.js, Express.js,
                Socket.io, MongoDB, bcrypt hashing, JWT
              </li>
            </ul>
            <br />

            <p>
              <strong>ATTENDENCE SYSTEM WEBAPP</strong> | Oct 2023 |
              GitHub-Link: <a href="your-github-link">GitHub-Link</a>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Transformed offline attendance to secure online system with
                role-based access control.
              </li>
              <li>
                Students can view attendance, teachers can take attendance, HOD
                monitor all attendance records.
              </li>
              <li>
                Technology used: React, TalwindCSS, Express.js, MongoDB, bcrypt
                hashing, JWT, MaterialUI
              </li>
            </ul>
            <br />
            <p>
              <strong>SMART CANTEEN (College Group Project)</strong> | Dec 2022
              | MyCreativeDesign-Link:{" "}
              <a href="your-design-link">MyCreativeDesign-Link</a> |
              WebApp-Link: <a href="your-webapp-link">WebApp-Link</a>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Generate dynamic web page using DB.</li>
              <li>
                Technology used: React, Bootstrap, Node.js, Express.js,
                Socket.io, MongoDB.
              </li>
              <li>Working on Data & showed analysis.</li>
            </ul>

            <p>
              <br />
              <strong>WEATHER APP using API (openweathermap.org)</strong> | Mar
              2023 | GitHub-Link: <a href="your-github-link">GitHub-Link</a> |
              Web-Link: <a href="your-web-link">Web-Link</a>
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                Users can enter a location of their choice to get the realtime
                weather details using an API.
              </li>
              <li>
                Technology used: HTML, CSS, JavaScript, Node.js, HBS, Express.js
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">EXPERIENCE</h2>
            <p>
              <strong>Freelancing Web technology</strong> | 2023 – Present
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Dewangan Rabbit Farming (MERN WebApp)</strong> | Ongoing
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">TECHNICAL SKILLS</h2>
            <p>
              <strong>Programming Language:</strong> C, C++, Java, Javascript,
              Python
            </p>
            <p>
              <strong>Web Technologies:</strong> HTML, CSS, Talwind, JS, React,
              TypeScript, Node.js, Express.js
            </p>
            <p>
              <strong>DATABASE:</strong> MongoDB, MySql
            </p>
            <p>
              <strong>Version Control System:</strong> Git and Github
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">ACHIEVEMENTS</h2>
            <p>
              Winner College Aavishkar Software Based Program 2023
              (SMART-CANTEEN)
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">ADDITIONAL SKILLS</h2>
            <p>Team Management | Problem Solving</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default AboutPage;
