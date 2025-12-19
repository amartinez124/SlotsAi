'use client';

interface MicrophoneButtonProps {
  isListening: boolean;
  isSupported: boolean;
  onClick: () => void;
  interimTranscript?: string;
}

export function MicrophoneButton({
  isListening,
  isSupported,
  onClick,
  interimTranscript,
}: MicrophoneButtonProps) {
  if (!isSupported) {
    return null;
  }

  return (
    <div className="relative flex items-center gap-3">
      {/* Microphone/Stop Button */}
      <button
        onClick={onClick}
        className={`
          flex items-center justify-center
          w-12 h-12 rounded-full
          transition-all duration-200
          ${isListening 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-blue-500 hover:bg-blue-600'
          }
          text-white shadow-lg hover:shadow-xl
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isListening ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
        `}
        title={isListening ? 'Stop recording' : 'Start voice input'}
        type="button"
        aria-label={isListening ? 'Stop recording' : 'Start voice input'}
      >
        {isListening ? (
          // Stop icon
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <rect x="5" y="5" width="10" height="10" rx="1" />
          </svg>
        ) : (
          // Microphone icon
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" 
            />
          </svg>
        )}
      </button>

      {/* Interim Transcript Tooltip */}
      {isListening && interimTranscript && (
        <div className="absolute bottom-full mb-2 left-0 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg max-w-md overflow-hidden text-ellipsis whitespace-nowrap">
          {interimTranscript}
          <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
        </div>
      )}
    </div>
  );
}
