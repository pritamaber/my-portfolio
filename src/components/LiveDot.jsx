export default function LiveDot() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 30,
          right: 30,
          width: 15,
          height: 15,
          borderRadius: "50%",
          backgroundColor: "red",
          boxShadow: "0 0 8px 2px rgba(255, 0, 0, 0.7)",
          animation: "pulse 1.5s infinite",
          zIndex: 1000,
        }}
      ></div>
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.5);
              opacity: 0.5;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
