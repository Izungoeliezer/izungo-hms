@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600&display=swap");

body {
  @apply bg-paper text-ink font-sans;
}

.card {
  @apply bg-white border border-clinical-100 rounded-md p-6 shadow-sm;
}

.btn-primary {
  @apply bg-clinical-600 hover:bg-clinical-700 text-white font-medium px-4 py-2 rounded-sm transition-colors;
}

.input {
  @apply w-full border border-clinical-100 rounded-sm px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-clinical-400;
}
