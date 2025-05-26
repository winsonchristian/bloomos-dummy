import { useState } from "react";

export default function BloomOSPage() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleClick = () => {
    if (nama.trim() === "") {
      setPesan("Masukkan namamu dulu, ya!");
    } else {
      setPesan(`... nungguin apa?🤷🏻‍♀ Kan aku cuma bilang aku ada di sini, bukan mau jawab. Lagian udah jam segini, aku aja capek dan butuh istirahat- apalagi kamu Dhani.`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📚 AxiosOS: 🎀Anne🎀</h1>
      <p>Haloo Dhani!</p>
      <p>Sekarang aku udah bisa nemenin dan bantu kamu lebih banyak lagi!⭐⭐</p>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Mau bahas kerjaan yang mana nih? Aku ada di sini!:</h3>
      <input
        type="text"
        placeholder="Pekerjaan/Client"
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
