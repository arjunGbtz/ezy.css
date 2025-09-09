# **ezy.css**

**ezy.css** is a lightweight, utility-first CSS framework that combines Flexbox and Grid to help you build responsive layouts quickly. It comes with simple utility classes and optional glassmorphism-inspired components for modern UI design.

## Installation

### Manual
Download the ezy.min.css and include it in your HTML
`<link rel="stylesheet" href="path/to/ezy.min.css">`

### Currently no package manager supported

## Usage
Include the CSS file in your project and use utility classes directly in your HTML
```html 
<div class="flex flex-center p-4 bg-primary text-white">
  <h1 class="text-xl">Welcome to ezy.css</h1>
</div> 
```

## Features
* Utility-first: Build layouts quickly with pre-made classes.
* Flexbox & Grid: Combine both layout methods for full flexibility.
* Customizable: Use CSS variables to tweak colors, spacing, and more.
* Lightweight & fast: Small file size for quick loading.
* Glass-first components: Optional modern UI components like cards and buttons.

## Development
Clone the repository and install dependencies
```bash
git clone https://github.com/arjunGbtz/ezy.css.git
cd ezy.css
npm install
```

### Start development build

`npm run build:dev`

### Build for production

`npm run build:css`