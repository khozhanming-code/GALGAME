🌫️ The Fog of Huinan (回南天的雾)
A short, psychological suspense visual novel built entirely from scratch using HTML, CSS, and Vanilla JavaScript.

📖 Synopsis
In March, the southern town is hit by the "Huinan Tian" (Return of the South Wind) – a period of extreme humidity and dense, white fog. Lu Huai, a high school senior preparing for exams, rents a room in the old Haitang Apartment (Room 404).

Just as the fog thickens, his childhood friend and class beauty, Lin Xiaoqing, starts bringing him homemade dinner every evening. However, strange occurrences begin to unfold. The food smells faintly of rust and damp earth, she misremembers shared childhood memories, and a diary in the drawer contains a chilling warning: "Don't open the door. She is not Xiaoqing. The real Xiaoqing died three days ago."

✨ Features
Custom Built Engine: A fully functional visual novel engine written in pure JavaScript without relying on Ren'Py or Unity.

Dual Narrative Interpretation: The same dialogue and actions can be interpreted as either a supernatural imitation or a terrifying yandere obsession.

Save & Load System: Fully functional multiple-slot save/load system using browser localStorage.

Dynamic Audio: Smooth BGM fading transitions using the Web Audio API.

Ending Gallery: An unlockable gallery to track your progress across 4 different endings.

Responsive Design: Optimized for both desktop and mobile browsers.

🎮 How to Play
Since the game uses modern JavaScript features and fetches local assets (images and audio), it must be run on a local server. Opening index.html directly as a file (file://) will block audio and asset loading due to browser security policies.

Option 1: VS Code (Recommended)
Open the project folder in VS Code.

Install the Live Server extension.

Right-click on index.html and select "Open with Live Server".

Option 2: Using Python
If you have Python installed, open your terminal in the project directory and run:

bash
python -m http.server 8000
Then visit http://localhost:8000 in your browser.

Option 3: Using XAMPP
Move the project folder into your xampp/htdocs/ directory.

Start the Apache module in the XAMPP Control Panel.

Visit http://localhost/galgame/huinan/index.html in your browser.

📂 Project Structure
text
huinan/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # UI styling, animations, and responsive layouts
├── js/
│   ├── state.js        # Global state management (variables, settings)
│   ├── story.js        # The entire game script and branching logic
│   └── engine.js       # Core engine (rendering, audio, save/load, UI)
└── assets/
    ├── audio/          # BGM and SFX (.mp3)
    ├── bg/             # Backgrounds and Title Screen (.png)
    ├── cg/             # Event CGs (.png)
    └── char/           # Character sprites (.png)
🎨 Credits & Assets
Engine & Script: Developed from scratch.

Character Sprites & Backgrounds: Generated via AI and edited by the developer.

Audio: Royalty-free music and sound effects.

Fonts: Source Han Sans / Microsoft YaHei.

📜 License
This is a personal indie project. All original code and writing belong to the developer. Please do not redistribute the assets without permission.

