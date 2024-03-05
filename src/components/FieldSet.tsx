// FieldSet.tsx

import { ReactElement } from 'react';

interface FieldSetProps {
  label?: string;
  children: ReactElement[];
}
export default function FieldSet({ label, children }: FieldSetProps) {
  return (
    <fieldset>
      {label && <legend>{label}</legend>}
      <div>{children}</div>
    </fieldset>
  );
}
