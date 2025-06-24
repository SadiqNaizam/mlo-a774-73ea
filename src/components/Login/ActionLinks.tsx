import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionLinksProps {
  className?: string;
}

const ActionLinks: React.FC<ActionLinksProps> = ({ className }) => {
  return (
    <p className={cn('text-center text-sm text-secondary-text', className)}>
      {"Don't have an account?"}{' '}
      <Button
        variant="link"
        className="p-0 h-auto text-primary hover:text-primary/90"
      >
        SignUp
      </Button>
    </p>
  );
};

export default ActionLinks;
