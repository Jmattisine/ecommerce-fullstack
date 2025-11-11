export default function Home() {
  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <div>
          <span className="badge">🍕 Pizzería</span>
          <h1>Bienvenido a la pizzería</h1>
          <p className="subtle">
            Masa crujiente, ingredientes frescos y combos para todos los gustos.
          </p>
          <div className="cta">
            <button className="btn btn-primary">Ver menú</button>
            <button className="btn btn-ghost">Promociones</button>
          </div>
        </div>
        <div className="pill" aria-hidden="true">🔥 2x1 Viernes · 🍰 Postre gratis en pedidos +$20.000</div>
      </section>

      {/* PROMOCIONES DESTACADAS */}
      <section className="mt-24">
        <h2 className="section-title">Promos destacadas</h2>
        <p className="subtle">Aprovecha estas combinaciones favoritas de la casa.</p>

        <div className="grid grid-cols mt-24" style={{marginTop: 16}}>
          {/* Card 1 */}
          <article className="card">
            <div className="card-media" role="img" aria-label="Pizza Margarita">
              <span style={{fontSize: 64}}>🍕</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Margarita Clásica</h3>
              <p className="card-desc">Tomate, mozzarella y albahaca fresca.</p>
              <div className="card-row">
                <span className="card-price">$7.990</span>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="card">
            <div className="card-media" role="img" aria-label="Pizza Pepperoni">
              <span style={{fontSize: 64}}>🌶️</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Pepperoni Picante</h3>
              <p className="card-desc">Doble pepperoni y toque de ají.</p>
              <div className="card-row">
                <span className="card-price">$8.990</span>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="card">
            <div className="card-media" role="img" aria-label="Pizza Vegetariana">
              <span style={{fontSize: 64}}>🥦</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">Veggie Garden</h3>
              <p className="card-desc">Pimientos, champiñón, aceitunas y más.</p>
              <div className="card-row">
                <span className="card-price">$8.490</span>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </article>

          {/* Card 4 */}
          <article className="card">
            <div className="card-media" role="img" aria-label="Cuatro Quesos">
              <span style={{fontSize: 64}}>🧀</span>
            </div>
            <div className="card-body">
              <h3 className="card-title">4 Quesos</h3>
              <p className="card-desc">Mozzarella, gorgonzola, parmesano y gouda.</p>
              <div className="card-row">
                <span className="card-price">$9.490</span>
                <button className="btn btn-primary">Agregar</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="mt-24">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols" style={{marginTop: 8}}>
          <article className="card">
            <div className="card-body">
              <h3 className="card-title">⏱️ Entrega rápida</h3>
              <p className="card-desc">En tu puerta en menos de 30 minutos*.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3 className="card-title">🥗 Ingredientes frescos</h3>
              <p className="card-desc">Seleccionados a diario por nuestro equipo.</p>
            </div>
          </article>
          <article className="card">
            <div className="card-body">
              <h3 className="card-title">💳 Pagos seguros</h3>
              <p className="card-desc">Aceptamos tarjetas, transferencias y más.</p>
            </div>
          </article>
        </div>
      </section>

      {/* NEWSLETTER / CONTACTO SIMPLE */}
      <section className="mt-24">
        <h2 className="section-title">Recibe ofertas y novedades</h2>
        <form className="form" onSubmit={(e)=>e.preventDefault()}>
          <label className="sr-only" htmlFor="email-news">Correo electrónico</label>
          <input id="email-news" type="email" className="input" placeholder="tu@correo.com" required />
          <button className="btn btn-dark" type="submit">Suscribirme</button>
        </form>
        <p className="subtle" style={{marginTop:8}}>Promociones semanales. Puedes darte de baja cuando quieras.</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Pizzería — Todos los derechos reservados.
      </footer>
    </div>
  );
}
