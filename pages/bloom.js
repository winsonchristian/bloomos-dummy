import { useState } from "react";

export default function BloomOSPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleClick = () => {
    if (nama.trim() === "") {
      setPesan("Masukkan namamu dulu, ya!");
    } else {
      setPesan(`🌿 Selamat datang, ${nama}! Ini adalah BloomOS, tempat semua konten bertumbuh.`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🌿 BloomOS</h1>
      <p>Selamat datang, Irvinne dan Operator Bloom!</p>
      <p>Di sinilah konten Catha Lab bertumbuh dan disusun 🌱✨</p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Coba interaksi kecil yuk:</h3>
      <input
        type="text"
        placeholder="Masukkan namamu..."
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
