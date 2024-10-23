# Urgencias Veterinarias

Este proyecto es una aplicación web para la gestión de pacientes en una clínica veterinaria. Permite registrar, actualizar y eliminar pacientes, así como gestionar la lista de pacientes en atención.

Para ver el proyecto da click [aquí](https://macarenacavieres.github.io/vet-patients/)

## Funcionalidades

- **Formulario de Pacientes**: Permite ingresar los datos de un nuevo paciente, como nombre de la mascota, nombre del dueño, correo electrónico, fecha de ingreso y síntomas.
- **Listado de Pacientes**: Muestra la lista de pacientes registrados en el sistema.
- **Gestión de Pacientes**: Se puede editar y eliminar a los pacientes de la lista.
- **Notificaciones**: Se utilizan notificaciones para confirmar las acciones realizadas, como el registro, actualización o eliminación de pacientes.

## Tecnologías Utilizadas

- **React**: Librería principal para la construcción de la interfaz de usuario.
- **Zustand**: Para la gestión de estado de los pacientes.
- **React Hook Form**: Manejo de formularios de manera eficiente.
- **React Toastify**: Para mostrar notificaciones de éxito o error.
- **Tailwind CSS**: Para los estilos y diseño responsivo.

## Instalación

Sigue los siguientes pasos para correr el proyecto localmente:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/macarenacavieres/vet-patients.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd vet-patients
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm start
    ```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Uso

- Rellena el formulario con los datos del paciente.
- Los pacientes registrados aparecerán en la lista de "Pacientes en atención".
- Puedes actualizar o eliminar un paciente desde la lista.
- Recibirás notificaciones cuando se registren, actualicen o eliminen pacientes.

## Estructura del Proyecto

- **components**: Contiene los componentes principales de la aplicación como `FormPatients` y `PatientList`.
- **store**: Gestión de estado de los pacientes utilizando `Zustand`.
- **types**: Definición de tipos para los pacientes.

## Próximas Mejoras

- Implementación de autenticación para el acceso al sistema.
- Filtro de pacientes por estado (atendidos, en espera, etc).
- Mejora en la validación de formularios.

## Contribución

Si deseas contribuir al proyecto, siéntete libre de hacer un fork y enviar un pull request con tus mejoras o sugerencias.

## Desarrollo

Desarrollado por [Mcavieres](https://www.linkedin.com/in/macarena-cavieres-rubio/)
