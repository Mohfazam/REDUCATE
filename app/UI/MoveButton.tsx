interface MoveButtonProps {
  direction: 'left' | 'right';
}

export const MoveButton = ({ direction }: MoveButtonProps) => {
  const isRight = direction === 'right';

  return (
    <div
      className="w-0 h-0 mt-[2px]"
      style={{
        borderTop: '6px solid transparent',
        borderBottom: '6px solid transparent',
        ...(isRight
          ? { borderLeft: '12px solid #62B4FF' }
          : { borderRight: '12px solid #62B4FF' }),
      }}
    />
  );
};
