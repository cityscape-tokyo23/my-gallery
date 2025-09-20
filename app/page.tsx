export default function Home() {
  const works = [
    { src: "/sample1.jpg", title: "Morning Light", text: "初回テスト作品" },
    { src: "/sample2.jpg", title: "River Mist", text: "キャプション例" },
    { src: "/sample3.jpg", title: "Morning Light", text: "初回テスト作品" },
    { src: "/sample4.jpg", title: "River Mist", text: "キャプション例" },
    { src: "/sample5.jpg", title: "Morning Light", text: "初回テスト作品" },
    { src: "/sample6.jpg", title: "River Mist", text: "キャプション例" },
    { src: "/sample7.jpg", title: "Morning Light", text: "初回テスト作品" },
    { src: "/sample8.jpg", title: "River Mist", text: "キャプション例" },
    { src: "/sample9.jpg", title: "River Mist", text: "キャプション例" },
  ];
  return (
    <main style={{ maxWidth: 960, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 24 }}>My Exhibition Room</h1>
      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr 1fr" }}>
        {works.map((w) => (
          <figure key={w.src} style={{ margin: 0 }}>
            {/* public/ に画像を置いてね */}
            <img src={w.src} alt={w.title} style={{ width: "100%", display: "block" }} />
            <figcaption style={{ marginTop: 8 }}>
              <strong>{w.title}</strong><br />{w.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </main>
  );
}
