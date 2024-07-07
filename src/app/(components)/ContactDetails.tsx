// components/ContactDetails.tsx

const ContactDetails: React.FC = () => {
    return (
      <div className="max-w-md mx-auto my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Details</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500" />
          </div>
          {/* Add more fields as needed */}
          <div className="mt-6 flex justify-between">
            <a href="/personal" className="py-2 px-6 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition duration-300">
              Back
            </a>
            <a href="/student" className="py-2 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300">
              Next
            </a>
          </div>
        </form>
      </div>
    );
  };
  
  export default ContactDetails;
  