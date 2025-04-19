docker run --rm \
  -v "$(pwd):/usr/src" \
  -w /usr/src \
  sonarsource/sonar-scanner-cli sonar-scanner

🔐 Cómo obtener sonar.login (token personal)
✅ 1. Abre SonarQube en tu navegador

http://<IP_PUBLICA_EC2>:9000

Iniciá sesión con:

    Usuario: admin

    Contraseña: admin
    (Si es la primera vez, te pedirá cambiarla)

✅ 2. Ve a "My Account"

    En la esquina superior derecha, hacé clic en tu nombre o el ícono de usuario.

    Luego seleccioná "My Account" o "Mi cuenta".

✅ 3. Ir a la pestaña "Security" o "Tokens"

    Dentro de tu cuenta, buscá la pestaña "Security".

    Ahí vas a ver un campo para crear un nuevo token.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.