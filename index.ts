Here’s a simple TypeScript React application with Tailwind CSS styling for a "Hello World" dashboard.

### Step 1: Setup the Project

First, create a new React project with TypeScript support and Tailwind CSS. You can use the following command:

```bash
npx create-react-app react-1 --template typescript
cd react-1
```

### Step 2: Install Tailwind CSS

Next, install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind

Update the `tailwind.config.js` file to enable purge for production builds:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Add Tailwind Directives

Update your `src/index.css` file to include Tailwind's base, components, and utilities:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Create the Hello World Component

Now, create a simple `HelloWorld.tsx` component in the `src` directory:

```tsx
// src/HelloWorld.tsx

import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
    </div>
  );
};

export default HelloWorld;
```

### Step 6: Update the App Component

Replace the contents of the `src/App.tsx` file with the following code:

```tsx
// src/App.tsx

import React from 'react';
import HelloWorld from './HelloWorld';

const App: React.FC = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}

export default App;
```

### Step 7: Run the Application

Finally, run your application:

```bash
npm start
```

### Final Structure

Your project structure should look like this:

```
react-1/
├── node