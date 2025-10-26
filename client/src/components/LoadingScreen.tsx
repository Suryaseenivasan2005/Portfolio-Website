import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const bootMessages = [
    '> Initializing system...',
    '> Loading modules...',
    '> Establishing connection...',
    '> Configuring environment...',
    '> Mounting components...',
    '> Optimizing performance...',
    '> Starting application...',
    '> System ready.',
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          <div className="max-w-2xl w-full px-4">
            {/* Terminal window */}
            <div className="bg-[#0a0a0a] border-2 border-[#00ff41]/30 rounded-lg overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-[#00ff41]/20">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-[#e5e5e5]/60 text-sm" style={{ fontFamily: 'monospace' }}>
                  surya@system:~
                </span>
              </div>

              {/* Terminal content */}
              <div className="p-6 space-y-2" style={{ fontFamily: 'monospace' }}>
                {bootMessages.slice(0, Math.floor((progress / 100) * bootMessages.length) + 1).map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="text-[#00ff41] text-sm"
                  >
                    {message}
                  </motion.div>
                ))}
                
                <motion.div
                  className="text-[#00ff41] text-sm"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  █
                </motion.div>

                {/* Progress bar */}
                <div className="pt-4">
                  <div className="flex justify-between text-xs text-[#e5e5e5]/60 mb-2">
                    <span>Loading...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#00ff41]/20">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#00ff41] to-[#00d9ff]"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                      }}
                    >
                      <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
