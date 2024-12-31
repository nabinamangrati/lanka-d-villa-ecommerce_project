'use client';

import { useState, useRef, useEffect } from "react";

export default function PrivateEvent() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your inquiry has been submitted!");
    setShowForm(false);
  };

  // Close form when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="container mx-auto px-4 py-8 text-center max-w-2xl">
      <h1 className="text-3xl font-bold text-green-700 mb-4">BOOK AN EVENT</h1>
      <div className="space-y-2 mb-6">
        <p className="text-gray-600">To book an event, please note that we require a</p>
        <p className="text-gray-600 font-bold">minimum of 20 guests.</p>
        <p className="text-gray-600">If you're interested in proceeding or would like more information,</p>
        <p className="text-gray-600">simply fill out the form below, and we'll get back to you as soon as possible.</p>
        <p className="text-gray-600">Should you not hear from us within a reasonable time,</p>
        <p className="text-gray-600">feel free to reach out to us directly at</p>
        <p className="text-gray-600 font-bold">78396297 or 21980469865.</p>
        <p className="text-gray-600">We're always here to help and make your event planning experience</p>
        <p className="text-gray-600">seamless and enjoyable!</p>
      </div>
      <button 
        onClick={handleButtonClick}
        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
      >
        Inquire Now
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div 
            ref={formRef} 
            className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">Event Inquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                <input type="text" id="name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input type="email" id="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input type="tel" id="phone" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-700">Event Type</label>
                <select 
                  id="event-type" 
                  name="event-type" 
                  required 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                >
                  <option value="" className="text-gray-500">Select Event Type</option>
                  <option value="wedding" className="text-gray-900">Wedding</option>
                  <option value="birthday" className="text-gray-900">Birthday</option>
                  <option value="corporate" className="text-gray-900">Corporate Event</option>
                  <option value="private-dinner" className="text-gray-900">Private Dinner</option>
                  <option value="anniversary" className="text-gray-900">Anniversary</option>
                  <option value="others" className="text-gray-900">Others</option>
                </select>
              </div>
              <div>
                <label htmlFor="event-date" className="block text-sm font-medium text-gray-700">Event Date</label>
                <input type="date" id="event-date" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
                <input type="number" id="guests" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50" />
              </div>
              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-gray-700">Special Requests</label>
                <textarea 
                  id="special-requests" 
                  placeholder="Any special requests or dietary restrictions"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button 
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300"
                >
                  Submit Inquiry
                </button>
                <button 
                  type="button"
                  onClick={handleCloseForm}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
