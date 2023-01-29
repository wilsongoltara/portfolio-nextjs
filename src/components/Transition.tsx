import { ChildrenProps } from '@interfaces/interfaceProps';
import { motion } from 'framer-motion';

export default function Transition({children}: ChildrenProps) {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.45, ease: 'easeOut'}}
    >
      {children}
    </motion.div>
  );
}
