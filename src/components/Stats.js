export default function Stats() {

  const stats = [
    { number: "1500+", title: "Students" },
    { number: "80+", title: "Courses" },
    { number: "35+", title: "Teachers" },
    { number: "98%", title: "Success Rate" },
  ];

  return (
    <section className="stats-section">

      <h2>Our Achievements</h2>

      <div className="stats-grid">

        {stats.map((item, index) => (
          <div className="stat-card" key={index}>

            <h1>{item.number}</h1>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
}