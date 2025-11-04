
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={() => navigate('/')}
      whileHover={{ x: -4 }}
      className="mb-8 flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent transition-all duration-300 group"
    >
      <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      <span className="font-medium">Back to Dashboard</span>
    </motion.button>
  );
}
