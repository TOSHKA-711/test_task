# My Next.js Project

This is a Next.js project with custom hooks (Axios, Alerts, etc.) and example pages for authentication flow (Login, Verification).

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-project.git
cd your-project
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env.local` file in the root of your project and add your API base URL and other secrets:

```env
NEXT_PUBLIC_API_BASE_URL=https://example.com/api
```
PUBLIC_API_KEY=https://tinytales.trendline.marketing/api
```
### 4. Run the development server
```bash
npm run dev
# or
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) to see your app.

---

## 📂 Project Structure
```
.
├── app/src             # Next.js app router pages
│   ├── dashboard/      # Dashboard pages
│   └── auth/           # Login, Verification pages
├── items/
│   ├── hooks/          # Custom hooks
│   │   ├── useAxios.js
│   │   ├── useAlert.js
│   └── components/     # Reusable UI components
├── public/             # Static assets (images, logo, etc.)
├── README.md
└── package.json
```

---

## 🔧 Custom Hooks

### useAxios
A reusable hook for API requests with Axios.

**Usage:**
```js
const { data, error, loading, refetch } = useAxios({
  url: "/auth/login",
  method: "POST",
  body: { email, password },
  autoFetch: false,
});
```

### useAlert
Shows success and error messages globally.

**Usage:**
```js
const { showSuccess, showError } = useAlert();

showSuccess("Login successful!");
showError("Invalid credentials");
```

---

## 🧪 Example Pages

### Login Page
- Calls login API.
- Stores token (if needed).
- Redirects to verification.

### register Page
- Calls login API.
- Stores token (if needed).
- Redirects to verification.

### Verification Page
- Input for 6-digit code.
- Verify button to continue.
- **Resend** button calls `resend-code` API.

---

## 📜 Scripts

```bash
npm run dev       # Run in development mode
npm run build     # Build for production
npm run start     # Run production build
```

---

## 🛠️ Tech Stack
- [Next.js 13+](https://nextjs.org/)
- [React](https://react.dev/)
- [Axios](https://axios-http.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📄 License
This project is licensed under the MIT License.
