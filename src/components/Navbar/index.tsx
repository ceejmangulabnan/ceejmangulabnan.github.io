const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-white text-black'>
      <h1>
        <a href="">siju</a>
      </h1>
      <nav>
        <ul className='flex gap-3'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
