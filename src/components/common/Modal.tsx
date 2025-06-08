import React from 'react';

type ModalType = 'info' | 'success' | 'error' | 'confirm';

interface ModalProps {
  isOpen: boolean;
  message: string;
  type?: ModalType;
  onClose: () => void;
  onConfirm?: () => void;
}

export default function Modal({ isOpen, message, type = 'info', onClose, onConfirm }: ModalProps) {
  if (!isOpen) return null;

  const bgColor = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
    confirm: 'bg-yellow-500',
  }[type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center">
        <p className="mb-4 text-gray-800">{message}</p>
        {type === 'confirm' ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={onConfirm}
              className={`${bgColor} text-white px-4 py-2 rounded`}
            >
              ยืนยัน 444
            </button>
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
            >
              ยกเลิก
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className={`${bgColor} hover:opacity-90 text-white px-4 py-2 rounded`}
          >
            ปิดหน้าต่าง
          </button>
        )}
      </div>
    </div>
  );
}