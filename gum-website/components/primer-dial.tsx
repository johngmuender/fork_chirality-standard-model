'use client';
import { useId } from 'react';
import { Slider } from '@/components/ui/slider';

/** A labelled slider with a live readout, the primer exhibits' one control. */
export function Dial({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const id = useId();
  return (
    <div className="primer-dial">
      <label id={id} className="foundation-slider-label">
        {label} <output aria-live="off">{display}</output>
      </label>
      <Slider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(v) => onChange(Array.isArray(v) ? v[0] : v)}
        aria-labelledby={id}
      />
    </div>
  );
}

export function Readouts({
  items,
  live = true,
}: {
  items: [string, string][];
  live?: boolean;
}) {
  return (
    <div className="pitch-readouts" aria-live={live ? 'polite' : 'off'}>
      {items.map(([label, value]) => (
        <span key={label}>
          {label}
          <strong>{value}</strong>
        </span>
      ))}
    </div>
  );
}

export function sci(n: number, digits = 1) {
  if (n === 0) return '0';
  const exponent = Math.floor(Math.log10(Math.abs(n)));
  const mantissa = n / 10 ** exponent;
  return (
    mantissa.toFixed(digits) +
    '×10' +
    String(exponent)
      .replace(/-/g, '⁻')
      .replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)])
  );
}
