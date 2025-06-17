export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">CONTACT US</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>+1 (844) 326-4000</p>
              <p>Email us</p>
              <p>Mon-Fri 9am-3pm PT</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">CUSTOMER</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Start a Return</p>
              <p>Return Policy</p>
              <p>FAQ</p>
              <p>Catalogs and Mailers</p>
              <p>About Group Gifting</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">COMPANY</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>About Us</p>
              <p>Sustainability</p>
              <p>Discover Revive</p>
              <p>Careers</p>
              <p>Privacy Policy</p>
              <p>Terms</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get the latest new from us</h3>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By signing up, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-500">HGV ©2024, All Rights Reserved.</p>
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-blue-600 rounded"></div>
            <div className="w-6 h-6 bg-pink-500 rounded"></div>
            <div className="w-6 h-6 bg-black rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}