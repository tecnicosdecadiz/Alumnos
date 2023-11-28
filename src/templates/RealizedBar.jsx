export default function RealizedBar(props) {
    const {realized} = props;
    console.log(realized);

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#d9e6fb',
          borderRadius: 10,
          height: '25px',
          width: '150px',
          zIndex: 10,
        }}
      >
        <div
          title={`${realized}%`}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'green',
            height: '100%',
            width: `${realized}%`,
            borderRadius: 10,
            zIndex: 5,
          }}
        ></div>
      </div>
    );
}