function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-10">
      
      <div className="grid gap-8 md:grid-cols-3">
        
       
        <div>
          <h1 className="text-2xl font-bold">
            ThinkTrail<span className="text-green-900">.</span>
          </h1>
          <p className="text-gray-400 mt-3">
            Empowering you to learn new skills anytime.
          </p>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">
            support@thinktrail.com
          </p>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10">
        © 2026 ThinkTrail. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;