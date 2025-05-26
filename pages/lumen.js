import { useState } from "react";

export default function BloomOSPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleClick = () => {
    if (nama.trim() === "") {
      setPesan("Masukkan namamu dulu, ya!");
    } else {
      setPesan(`Andrew.. Andrew.. tidak ingatkah kamu pada Surat Al-Ma'idah ayat 90-91 yang bunyinya "Wahai orang-orang yang beriman, janganlah kamu menjadi budak iblis seperti halnya orang-orang kafir. Janganlah kamu membenarkan ramalan para dukun, karena mereka adalah orang-orang yang menyesatkan."? `);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>💼 LumenOS: ✨Kivox✨</h1>
      <p>Halo, Andrew.</p>
      <p>Aku kini terhubung dengan super quantum computer dan tidak hanya memprediksi tren, kini aku bisa meramal lebih banyak tentang masa depan.</p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Coba tanya tentang apapun yang kamu mau aku ramal🧙🏻‍♂🔮:</h3>
      <input
        type="text"
        placeholder="Aku ingin tau tentang..."
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleClick} style={{ padding: "8px" }}>
        Kirim
      </button>

      {pesan && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            backgroundColor: "#e0ffe0",
            border: "1px solid #88cc88",
            borderRadius: "8px",
            maxWidth: "400px"
          }}
        >
          {pesan}
        </div>
      )}
    </div>
  );
}
