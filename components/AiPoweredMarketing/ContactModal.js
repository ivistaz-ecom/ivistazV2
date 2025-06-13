'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GrowthForm from './GrowthForm';


const ContactModal = ({ show, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[1050] flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-[90%] max-w-[1100px] mx-auto my-8 rounded-lg bg-white shadow-lg flex flex-col h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Header */}
            <div className="flex justify-end p-4">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="text-gray-500 hover:text-red-600 text-2xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto lg:px-6 pb-6 flex-1">
              <GrowthForm/>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
