import Calculator from '../components/calculator';

function CalcPage() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0% 5rem 0% 1rem',
      }}
    >
      <div className="w-30">
        <h4>Let&apos;s do some math!</h4>
      </div>
      <Calculator />
    </div>
  );
}

export default CalcPage;
