import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

const AppointmentCard = ({ appointment, prescription }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={handleFlip}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <AnimatePresence initial={false} mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              className=" w-full h-full backface-hidden bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Upcoming Appointment</h3>
              <p className="text-lg mb-2"><span className="font-semibold text-blue-700">Date:</span> {appointment.date}</p>
              <p className="text-lg mb-2"><span className="font-semibold text-blue-700">Time:</span> {appointment.time}</p>
              <p className="text-lg mb-2"><span className="font-semibold text-blue-700">Doctor:</span> {appointment.doctor}</p>
              <p className="text-lg"><span className="font-semibold text-blue-700">Illness:</span> {appointment.illness}</p>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              className=" w-full h-full backface-hidden bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-lg"
              style={{ transform: 'rotateY(180deg)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-blue-800">Prescription:</h4>
              <ul className="list-disc list-inside text-lg text-blue-700">
                {prescription.map((med, index) => (
                  <li key={index} className="mb-2">{med}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Reports = () => {
  return (
    <>
    <div className="bg-white  bg-opacity-10 p-8 px-20 w-full ">
      {/* Header */}
      <header className="bg-white shadow-md p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <motion.div
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              AB
            </motion.div>
            <div>
              <h2 className="text-3xl font-bold text-blue-800">ABC Patient</h2>
              <p className="text-lg text-blue-600">Age: 35 | Gender: Male | Phone: (123) 456-7890</p>
            </div>
          </div>
          <div className="space-x-4">
            <motion.button
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
            <motion.button
              className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-600 transition shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-12 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Appointment Details */}
          <AppointmentCard
            appointment={{
              date: '2023-05-15',
              time: '10:00 AM',
              doctor: 'Dr. Jane Smith',
              illness: 'Regular Checkup'
            }}
            prescription={[
              'Medication A - 1 tablet daily',
              'Medication B - 2 tablets twice a day'
            ]}
          />

          {/* Appointment History */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-blue-800">Appointment History</h3>
            <ul className="space-y-6">
              {[
                { date: '2023-04-01', doctor: 'Dr. John Brown', illness: 'Flu' },
                { date: '2023-03-15', doctor: 'Dr. Sarah Johnson', illness: 'Annual Checkup' },
                { date: '2023-02-10', doctor: 'Dr. Mike Davis', illness: 'Sprained Ankle' }
              ].map((appointment, index) => (
                <motion.li
                  key={index}
                  className="border-b pb-4 last:border-b-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-lg"><span className="font-semibold text-blue-700">Date:</span> {appointment.date}</p>
                  <p className="text-lg"><span className="font-semibold text-blue-700">Doctor:</span> {appointment.doctor}</p>
                  <p className="text-lg"><span className="font-semibold text-blue-700">Illness:</span> {appointment.illness}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </div></>
  );
};

export default Reports;