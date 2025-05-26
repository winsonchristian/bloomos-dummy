import { useState } from "react";

export default function BloomOSPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleClick = () => {
    if (nama.trim() === "") {
      setPesan("Masukkan namamu dulu, ya!");
    } else {
      setPesan(`Gajadi deh Irvinne, tanyanya besok aja. Lagi gak mood 🥱😴`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🌿 BloomOS: ✨Flo✨</h1>
      <p>Selamat datang, Irvinne!👋🏻😭</p>
      <p>Bjirrr, sekarang Flo udah punya badan baru yang bisa nemenin Irvinne terus lho! 💪🏻💃🏻</p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Coba tanya apa aja soal kerjaan biar Flo jawab sinii:</h3>
      <input
        type="text"
        placeholder="Tanya apa sembarang"
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
