const Form = (): JSX.Element => {
  return (
    <>
      <div className="form__container">
        <div className="form__title-container">
          <h2 className="form__title">Inicio Sesión</h2>
        </div>
        <div className="form__data-container">
          <div className="form__username-container">
            <label htmlFor="username" className="form__username-label">
              Usuario
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Introduce tu usuario"
              required
            />
          </div>
          <div className="form__password-container">
            <label htmlFor="password" className="form__password-label">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
              required
            />
          </div>
          <div className="form__communitty-container">
            <label htmlFor="communitty" className="communitty">
              Comunidad
            </label>
            <input type="checkbox" name="communitty" id="communitty" />
          </div>
        </div>
        <button type="submit">Iniciar</button>
        <span>¿No estás registrado/a?</span>
        <a href="http://">Clica aquí</a>
      </div>
    </>
  );
};

export default Form;
