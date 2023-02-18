import homeImage from "@/assets/images/home.png";

export function Home() {
  return (
    <div
      style={{
        // display: "grid",
        // gridTemplateColumns: "repeat(2, 1fr)",
        width: "100%",
        // height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          minWidth: "400px",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          height: "100vh",
        }}
      >
        <h3
          style={{
            fontWeight: 800,
            lineHeight: "50px",
            fontSize: "3.3rem",
            margin: 0,
          }}
        >
          Bem-vindo de novo
        </h3>
        <h6 style={{ marginTop: "6%", marginBottom: "6%", fontSize: "1.5rem" }}>
          Identifique-se para encontrar sua música favorita
        </h6>
        <button
          style={{
            border: "none",
            backgroundColor: "#1DB954",
            width: "328px",
            height: "52px",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#FFFFFF",
            fontSize: "1.3rem",
            fontWeight: 700,
          }}
        >
          Iniciar sessão
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "60%",
        }}
      />
    </div>
  );
}
