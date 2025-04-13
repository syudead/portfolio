# ✨ Personal Portfolio ✨

[https://portfolio.rainyflow.net](http://portfolio.rainyflow.net)

---

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

---

## 🚀 Development Flow

```mermaid
graph LR
    A[Local Development] -->|yarn dev| B[Development Server]
    A -->|yarn build| C[Build]
    C -->|git push| D[GitHub Repository]
    D -->|GitHub Actions| E[GitHub Pages]
    E -->|Deploy| F[Published Site]
    
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px
```