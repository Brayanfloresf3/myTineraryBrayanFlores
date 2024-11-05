
import { ButtonSecundary } from './ButtonSecudary';

export function ModalActivities({ isOpen, onClose }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-96">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-3xl font-semibold">Activities</h2>
                    <button onClick={onClose} className="text-gray-500">X</button>
                </div>

                <p className="text-gray-500 mb-6 font-bold text-xl">Under Construction</p>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold">Comments</h3>
                    <div className="mt-4 flex flex-row">

                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full mr-3">
                            <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>

                        <input
                            type="text"
                            className="w-auto px-3 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Add a comment..."
                            
                        />
                    </div>
                    <p className="text-gray-400 text-lg mt-3">No comments yet</p>
                </div>

                <div className="flex justify-end">
                    <ButtonSecundary onClick={onClose} name="Close" />
                </div>
            </div>
        </div>
    );
}
