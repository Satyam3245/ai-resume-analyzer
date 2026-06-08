"use client";

export default function InfoSection(){
    return <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-4 rounded-lg bg-blue-400 border border-gray-300">
            <div className="text-2xl mb-1">📄</div>
            <p className="text-sm text-gray-600">Upload PDF</p>
        </div>

        <div className="p-4 rounded-lg bg-blue-400 border border-gray-300">
            <div className="text-2xl mb-1">💬</div>
            <p className="text-sm text-gray-600">Ask Questions</p>
        </div>

        <div className="p-4 rounded-lg bg-blue-400 border border-gray-300">
            <div className="text-2xl mb-1">✨</div>
            <p className="text-sm text-white">Get Answers</p>
        </div>
    </div>
}