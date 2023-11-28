export default function ErrorMessage(props) {
  const { message } = props;

  return (
    <div style={{ height: '20px', color: 'red' }}>
      {message}
    </div>
  );
}
