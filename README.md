# My Vue.js Application

This is a Vue.js web application with a custom login page and logic.

## Project Structure

```
my-vue-app
├── public
│   └── index.html          # Main HTML file
├── src
│   ├── assets              # Static assets (images, fonts, styles)
│   ├── components
│   │   └── Login.vue       # Login component
│   ├── views
│   │   └── LoginPage.vue    # Login page view
│   ├── router
│   │   └── index.js        # Vue Router setup
│   ├── store
│   │   └── index.js        # Vuex store setup
│   ├── App.vue             # Root Vue component
│   ├── main.js             # Entry point of the application
│   └── logic
│       └── customLogin.js  # Custom login logic
├── package.json            # npm configuration file
├── README.md               # Project documentation
└── vue.config.js           # Vue CLI configuration
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd my-vue-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run serve
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:8080`.

## Usage Guidelines

- Navigate to the login page to authenticate users.
- The application uses Vue Router for navigation and Vuex for state management.
- Custom login logic is implemented in `src/logic/customLogin.js`.

## License

This project is licensed under the MIT License.