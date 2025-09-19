import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
   server: {
    port: 5173, // Keep the port configuration
    host: '0.0.0.0', // Set the host address to listen on all interfaces
     allowedHosts: [
      "e349da6ae001.ngrok-free.app"
    ]
  },

})
