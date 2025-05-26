import { useState } from "react";

export default function BloomOSPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleClick = () => {
    if (nama.trim() === "") {
      setPesan("Masukkan namamu dulu, ya!");
    } else {
      setPesan(`Halah jawaban wong kalahan 🤧😴`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎨 VividOS: ⚡Vyse⚡</h1>
      <p>Welcome back, Reza!</p>
      <p>Aku sekarang udah lebih gacor dan bisa nemenin kamu terus!🦾</p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Coba mulai dengan kasih tau aku apa yang kamu rasakan saat ini?:</h3>
      <input
        type="text"
        placeholder="Aku lagi ngerasa.."
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
