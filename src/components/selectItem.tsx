'use client'

import { useState } from 'react';
import StackIcon from 'tech-stack-icons';
import { cn } from '../lib/utils';
import { CheckIcon } from 'lucide-react';
import { ProjectTechnologiesIconType } from '../types';

type SelectItemProps = ProjectTechnologiesIconType & {
  setSelected?: (value: string, isChecked: boolean) => void
}

export function SelectItem({ icon, name, setSelected: checked }: SelectItemProps) {
  const [selected, setSelected] = useState(false)

  const spanClickHandler = () => {
    setSelected(s => !s)
    checked?.(name, !selected)
  }

  return (
    <div
      className={cn(
        'flex gap-6 items-center select-none cursor-pointer',
        'transition-transform duration-150 active:scale-95'
      )}
      onClick={spanClickHandler}
    >
      <i className={cn(
        'flex justify-center items-center',
        'size-5 border border-slate-500 rounded-[2px]',
        selected && 'bg-slate-500'
      )}>
        {selected && <CheckIcon className='size-3.5 text-white' />}
      </i>
      <div className='flex gap-2.5 items-center'>
        {
          typeof icon === 'string'
            ? <StackIcon name={icon} className='w-6' variant={selected ? 'dark' : 'grayscale'} />
            : (
              <i className='size-6'>
                {
                  selected
                    ? icon.selectedIcon
                    : icon.grayscaleIcon
                }
              </i>
            )
        }
        <p className='text-white'>{name}</p>
      </div>
    </div>
  );
}
