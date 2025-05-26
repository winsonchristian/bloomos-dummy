export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🌱 BloomOS Dummy</h1>
      <p>Selamat datang di sistem dummy OS Catha Lab.</p>
      <p>Silakan ketik pesan di bawah (belum terhubung ke GPT ya):</p>
      <textarea rows="4" cols="50" placeholder="Tulis pesanmu di sini..." />
      <br />
      <button onClick={() => alert('Halo, ini respon dummy dari BloomOS!')}>
        Kirim
      </button>
    </div>
  );
}