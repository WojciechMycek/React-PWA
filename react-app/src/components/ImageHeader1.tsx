function ImageHeader1() {
  return (
    <div
      style={{
        border: "3px solid #d4af7f",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src="/images/header1.jpeg"
        alt="Nagłówek 2"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default ImageHeader1;
