export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-2 p-6">
      <a href="https://github.com/VecchiR/shopping-cart" target="_blank" rel="noopener noreferrer">
        <img className="w-5" src="/src/assets/ghlogo.svg" />
      </a>
      <div>
        <a
          href="https://github.com/VecchiR/shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Shopping Cart Project - VecchiR
        </a>{' '}
        &copy; 2024
      </div>
    </footer>
  );
}
