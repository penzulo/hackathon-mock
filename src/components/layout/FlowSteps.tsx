import { T } from '../../lib/theme';

interface FlowStepsProps {
  steps: string[];
  current: number; // 0-indexed
  accentColor?: string;
}

export function FlowSteps({ steps, current, accentColor = T.blue }: FlowStepsProps) {
  return (
    <div className="flow-header">
      <div className="flow-steps">
        {steps.map((label, i) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`fstep${i < current ? ' done' : i === current ? ' active' : ''}`}>
              <div
                className="fstep-num"
                style={
                  i <= current
                    ? { background: accentColor, borderColor: accentColor, color: 'white' }
                    : {}
                }
              >
                {i < current ? '✓' : i + 1}
              </div>
              <span style={{ whiteSpace: 'nowrap' }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`fstep-line${i < current ? ' done' : ''}`}
                style={i < current ? { background: accentColor } : {}}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
