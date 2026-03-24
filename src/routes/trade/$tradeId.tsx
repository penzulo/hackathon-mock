import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { TRADE_DEFS } from '../../lib/tradeDefs';
import { TradeTemplate } from '../../components/trades/TradeTemplate';

export const Route = createFileRoute('/trade/$tradeId')({
  component: TradePage,
});

function TradePage() {
  const { tradeId } = Route.useParams();
  const navigate = useNavigate();

  const tradeDef = TRADE_DEFS[tradeId];

  if (!tradeDef) {
    return (
      <div style={{ padding: '48px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🤔</div>
        <div style={{ fontSize: 18, fontWeight: 700 }}>Trade not found: {tradeId}</div>
        <button
          className="btn btn-primary"
          style={{ marginTop: 24 }}
          onClick={() => navigate({ to: '/trades' })}
        >
          ← Back to trades
        </button>
      </div>
    );
  }

  return (
    <TradeTemplate
      trade={tradeDef}
      onDone={() => navigate({ to: '/quotes' })}
      onBack={() => navigate({ to: '/trades' })}
    />
  );
}
