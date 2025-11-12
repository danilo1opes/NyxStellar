# 🪐 NyxStellar

> Explorador interativo de planetas com animações imersivas, construído com Framer Motion e React.

[![React](https://img.shields.io/badge/React-19.1.1-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Motion-12.23.24-ff69b4?style=flat&logo=framer)](https://motion.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.16-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

🌐 **[Visualizar o Projeto](https://nyxstellar.vercel.app/)**

> 💡 **OBS:** Para uma melhor experiência, recomendo utilizar o projeto em **desktop** para aproveitar todos os efeitos visuais e animações.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Destaques Técnicos](#-destaques-técnicos)
- [Autor](#-autor)

---

## 🎯 Sobre o Projeto

**NyxStellar** é uma experiência interativa espacial criada com o intuito de aprendizagem com Frame Motion:

- 🌌 Carrossel de planetas com órbitas animadas
- ✨ Campo de estrelas dinâmico com efeitos
- 🎨 Glows cósmicos que se adaptam a cor de cada planeta
- 📱 Suporte completo para gestos touch (swipe) no mobile
- ⌨️ Navegação por teclado (SEO - setas esquerda/direita)
- 🔄 Transições suaves e animações fluidas

O projeto foi desenvolvido como uma demonstração avançada das capacidades do **Framer Motion**, explorando animações, variantes complexas e otimizações de performance.

---

## ✨ Funcionalidades

### 🎨 Animações & Efeitos

- ▪️ Carrossel com anéis orbitais animados
- ▪️ Transições suaves entre planetas com `AnimatePresence`
- ▪️ Glows cósmicos dinâmicos adaptados à cor do planeta
- ▪️ Efeitos de hover e tap nos botões laterais
- ▪️ Animação de loading personalizada

### 🎮 Interatividade

- ▪️ Navegação por teclado (ArrowLeft/ArrowRight)
- ▪️ Suporte a touch (swipe) no mobile
- ▪️ Indicadores de posição (mobile)
- ▪️ Botões de navegação laterais (desktop)
- ▪️ Menu mobile responsivo com animações

### 📱 Responsividade

- ▪️ Design adaptativo para mobile, tablet e desktop
- ▪️ Anéis orbitais visíveis apenas em telas grandes (lg+)
- ▪️ Glows cósmicos desabilitados no mobile para performance
- ▪️ Tamanhos e espaçamentos responsivos

### ♿ Acessibilidade

- ▪️ ARIA labels em botões e regiões
- ▪️ Navegação por teclado completa
- ▪️ Focus indicators visíveis
- ▪️ Suporte a ESC para fechar menu mobile
- ▪️ Atributos semânticos (role, aria-expanded, etc.)

### ⚡ Performance

- ▪️ Preload de imagens dos planetas
- ▪️ Lazy loading de imagens laterais
- ▪️ Otimizações CSS (will-change, transform3d)
- ▪️ Debounce em mudanças de cor do glow
- ▪️ Conditional rendering para mobile/desktop

---

## 👨‍💻 Autor

**Danilo Lopes**

- GitHub: [@danilo1opes](https://github.com/danilo1opes)
- LinkedIn: [Danilo Lopes](https://linkedin.com/in/danilo1opes)

---

## 📄 Licença

Este projeto é publico, você pode visualizar e testar em seu dispositivo local.

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/danilo1opes">danilo1opes</a></p>
  <p>© 2025 NyxStellar • Todos os direitos reservados</p>
</div>
