import { useState } from 'react';
import { Briefcase, User, Calendar, Clock, ChevronDown } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    doctorType: '',
    doctorName: '',
    date: '',
    time: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Checking doctor availability...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
          Book Your Appointment
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* First Row - Doctor Type and Name */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {/* Doctor Type */}
            <div className="w-5/12 min-w-72">
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 text-sm mb-1">Doctor</label>
                  <select
                    value={formData.doctorType}
                    onChange={(e) => setFormData({...formData, doctorType: e.target.value})}
                    className="w-full text-gray-700 text-lg font-medium bg-transparent border-none outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Type</option>
                    <option value="general">General Physician</option>
                    <option value="cardiologist">Cardiologist</option>
                    <option value="dermatologist">Dermatologist</option>
                    <option value="pediatrician">Pediatrician</option>
                    <option value="orthopedic">Orthopedic</option>
                    <option value="neurologist">Neurologist</option>
                  </select>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Doctor Name */}
            <div className="w-5/12 min-w-72">
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 text-sm mb-1">Doctor</label>
                  <select
                    value={formData.doctorName}
                    onChange={(e) => setFormData({...formData, doctorName: e.target.value})}
                    className="w-full text-gray-700 text-lg font-medium bg-transparent border-none outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Name</option>
                    <option value="dr-smith">Dr. Sarah Smith</option>
                    <option value="dr-johnson">Dr. Michael Johnson</option>
                    <option value="dr-williams">Dr. Emily Williams</option>
                    <option value="dr-brown">Dr. James Brown</option>
                    <option value="dr-davis">Dr. Lisa Davis</option>
                  </select>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Second Row - Date and Time */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {/* Date */}
            <div className="w-5/12 min-w-72">
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 text-sm mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full text-gray-700 text-lg font-medium bg-transparent border-none outline-none cursor-pointer"
                  />
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Time */}
            <div className="w-5/12 min-w-72">
              <div className="flex items-center gap-4 p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-400 transition-all cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-400 text-sm mb-1">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full text-gray-700 text-lg font-medium bg-transparent border-none outline-none cursor-pointer appearance-none"
                  >
                    <option value="">Select Time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white text-xl font-semibold px-12 py-5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Check Doctor Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}