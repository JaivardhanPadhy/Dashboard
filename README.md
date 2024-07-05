# React Admin Dashboard App 
  ![Shoppy](https://i.ibb.co/W6g39w3/image.png)

<div align="center">
   <img src="https://img.shields.io/badge/-Vite-black?style=for-the-badge&logoColor=white&logo=vite&color=646CFF" alt="vite" />
   <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
   <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
</div>


## <a name="table">Table of Contents</a>

1.  [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3.  [Features](#features)
4. [Quick Start](#quick-start)
5.  [Snippets](#snippets)
6. [Links](#links)
7. [Contributing](#contributing)
8. [Contact](#contact)

## <a name="introduction"> Introduction</a>

Welcome to the React Dashboard Application! This project is a robust and comprehensive dashboard template built with React, designed to serve as a foundation for your web applications. It includes essential features such as theming, tables, charts, a calendar, a Kanban board, and much more, all aimed at providing a seamless and interactive user experience.

## <a name="tech-stack">Tech Stack</a>
- Vite
- React.js
- Tailwind CSS
- Syncfusion

## <a name="features"> Features</a>

1. Theming: Easily switch between different themes to customize the appearance of your dashboard.
2. Responsive Tables: Manage and display large sets of data with ease using our advanced table components.
3. Dynamic Charts: Visualize your data through a variety of chart types powered by popular charting libraries.
4. Interactive Calendar: Keep track of important dates and events with our fully-featured calendar component.
5. Kanban Board: Organize and manage tasks efficiently using the intuitive Kanban board

## <a name="quick-start"> Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
  <br>

**Cloning the Repository**

```bash
git clone https://github.com/JaivardhanPadhy/Dashboard.gi
```
**Navigate to the project directory**
```bash
cd Dashboard
```

**Install the project dependencies using npm**

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets"> Snippets</a>

<details>
<summary><code>.vscode/App.css</code></summary>

```css
@import url('https://cdn.syncfusion.com/ej2/material.css');

.sidebar {
  box-shadow: rgb(113 122 131 / 11%) 0px 7px 30px 0px;
}
.nav-item,
.navbar {
  z-index: 10000;
}
@media  screen and (max-width:800px) {
  .sidebar{
    z-index: 10000000;
  }
}

.e-dlg-center-center, .e-quick-popup-wrapper.e-device{
  z-index: 1000000 !important;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(216, 216, 216);
  border-radius: 40px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}

/* color-picker style  */

 #preview {
  background: transparent
    url('https://ej2.syncfusion.com/react/demos/src/color-picker/images/pen.png')
    no-repeat;
  display: inline-block;
  height: 80px;
  margin: 10px 0;
  min-width: 300px;
  max-width: 600px;
  background-color: #008000;
}

.e-input-group:not(.e-float-icon-left), .e-input-group.e-success:not(.e-float-icon-left), .e-input-group.e-warning:not(.e-float-icon-left), .e-input-group.e-error:not(.e-float-icon-left), .e-input-group.e-control-wrapper:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-success:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-warning:not(.e-float-icon-left), .e-input-group.e-control-wrapper.e-error:not(.e-float-icon-left){
  border: none;
}
```

</details>

<details>
<summary><code>index.jsx(Components)</code></summary>

```javascript
export { default as Button } from './Button';
export { default as ThemeSettings } from './ThemeSettings';
export { default as Sidebar } from './Sidebar';
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as Cart } from './Cart';
export { default as Chat } from './Chat';
export { default as Notification } from './Notification';
export { default as UserProfile } from './UserProfile';
export { default as SparkLine } from './Charts/SparkLine';
export { default as LineChart } from './Charts/LineChart';
export { default as Stacked } from './Charts/Stacked';
export { default as Pie } from './Charts/Pie';
export { default as ChartsHeader } from './ChartsHeader';
export { default as Header } from './Header';
```

</details>

<details>
<summary><code>index.css</code></summary>

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

body {
    margin: 0;
    padding:0;
    font-family: "Open Sans", sans-serif;
}

@tailwind base;
@tailwind components;
@tailwind utilities;
```

</details>

<details>
<summary><code>index.jsx(Pages)</code></summary>

```javascript
export { default as Ecommerce } from './Ecommerce';
export { default as Kanban } from './Kanban';
export { default as Orders } from './Orders';
export { default as Employees } from './Employees';
export { default as Editor } from './Editor';
export { default as Customers } from './Customers';
export { default as ColorPicker } from './ColorPicker';
export { default as Calendar } from './Calendar';
export { default as Area } from './Charts/Area';
export { default as Bar } from './Charts/Bar';
export { default as ColorMapping } from './Charts/ColorMapping';
export { default as Financial } from './Charts/Financial';
export { default as Line } from './Charts/Line';
export { default as Pie } from './Charts/Pie';
export { default as Pyramid } from './Charts/Pyramid';
export { default as Stacked } from './Charts/Stacked';
```

</details>

<details>
<summary><code>package.json</code></summary>

```json
{
  "name": "project_syncfusion_dashboard",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@syncfusion/ej2": "^19.4.48",
    "@syncfusion/ej2-react-calendars": "^19.4.48",
    "@syncfusion/ej2-react-charts": "^19.4.50",
    "@syncfusion/ej2-react-dropdowns": "^19.4.52",
    "@syncfusion/ej2-react-grids": "^19.4.50",
    "@syncfusion/ej2-react-inputs": "^19.4.52",
    "@syncfusion/ej2-react-kanban": "^19.4.48",
    "@syncfusion/ej2-react-popups": "^19.4.52",
    "@syncfusion/ej2-react-richtexteditor": "^19.4.50",
    "@syncfusion/ej2-react-schedule": "^19.4.50",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.6",
    "tailwindcss": "^3.0.19"
  }
}
```

</details>

<details>
<summary><code>components/Sparkline.jsx</code></summary>

```javascript

import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
```

</details>

## <a name="links">Links</a>

- [Saas Podcast Platform](https://github.com/JaivardhanPadhy/Saas-Podcast-Platform)
- [Brainwave-AI](https://github.com/JaivardhanPadhy/Brainwave-AI)
- [Video-Conferencing Website](https://github.com/JaivardhanPadhy/VideoConferencing-Website)


## <a name="contributing"> Contributing</a>
We welcome contributions to the Saas-Podcast-Platform! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Follow these steps to contribute:

1.Fork the repository.
   - Create a new branch
     ``` bash
     git checkout -b feature-branch
     ```

2.Make your changes.
   - Commit your changes 
       ```  bash
       git commit -m 'Add some feature'
       ```

3.Push to the branch (git push origin feature-branch).
   - Open a pull request.

## <a name="contact"> Contact</a>
For any questions or inquiries, please contact us at theofficialjaivp@gmail.com.
