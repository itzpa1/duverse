import { StarsIcon } from 'lucide-react';
import { Fragment } from 'react';
const words = [
  "PYQs🗒️",
  "Notes📒",
  "Readings📚",
  "Solved PYQs📝",
  "Assignments📑",
  "Gossips🗣️",
  "Events💃",
  "Competition💪",
  "Knowlwdge🧠",
  "One Day⏱️",
]

export const TapeSection = () => {
  return (
    <div className='py-16 overflow-x-clip'>
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1'>
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {
                  words.map(word => (
                    <div key={word} className='inline-flex gap-4 text-center '>
                      <span className='text-gray-900 uppercase font-extrabold text-sm '>{word}</span>
                      <StarsIcon className="size-6 text-gray-900 -rotate-12" fill='#101828' strokeWidth={0} />
                    </div>
                  ))
                }</Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
