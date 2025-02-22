-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-01-2024 a las 05:01:03
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `controlactividades`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `idActividad` int(11) NOT NULL,
  `Nombre_Actividad` varchar(100) NOT NULL,
  `Descripcion` varchar(30) DEFAULT NULL,
  `Encargado` int(11) DEFAULT NULL,
  `Participante` int(11) DEFAULT NULL,
  `Estatus` varchar(50) DEFAULT NULL,
  `Fecha_de_inicio` date DEFAULT NULL,
  `Fecha_de_fin` date DEFAULT NULL,
  `Lugar` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`idActividad`, `Nombre_Actividad`, `Descripcion`, `Encargado`, `Participante`, `Estatus`, `Fecha_de_inicio`, `Fecha_de_fin`, `Lugar`) VALUES
(2, 'trabajo 1', 'finalizar front end\r\n', 1, 2, 'CANCELADA', '2023-08-03', '2023-08-05', '0'),
(3, 'Hacer el backend', 'Empeza a chambear\r\n\r\n', 1, 2, 'CANCELADA', '2023-08-17', '2023-08-11', '0'),
(4, 'Borrar el backend', 'Empeza a chambear', 1, 2, 'CANCELADA', '2023-08-17', '2023-08-11', '0'),
(5, 'Revision de proyecto', 'se revisa la tabla de activida', 1, 2, 'CANCELADA', '2023-07-19', '2023-07-27', '0'),
(7, 'UNIVERSIDAD', 'nadar', 1, 2, 'EN PROGRESO', '2023-08-12', '2023-08-26', '0'),
(8, 'INTEGRADORA', 'PONERME HACER EL FRONT END asi', 1, 2, 'EN PROGRESO', '2023-08-06', '2023-08-19', '0'),
(9, 'Sacar la basura', 'juntar y tirar basura', 3, 4, 'EN PROGRESO', '2023-08-18', '2023-08-31', '0'),
(10, 'Evalucion de Maquinaria', 'carros chidos', 3, 5, 'CANCELADA', '2023-08-09', '2023-08-27', '0'),
(11, 'hola', 'aegeg', 1, 2, 'EN PROGRESO', '2023-08-03', '2023-08-25', '0'),
(12, 'chambear', 'jalar un rato', 11, 4, 'EN PROGRESO', '2023-08-02', '2023-08-25', '0'),
(13, 'Jugar valorant', 'llegar a radiant', 12, 7, 'EN PROGRESO', '2023-08-02', '2023-08-24', '0'),
(14, 'acabar el login', 'dar mejor diseño', 3, 2, 'CANCELADA', '2023-08-03', '2023-08-25', '0'),
(15, 'Ir a natacion', 'Tengo clase de natacion con Om', 1, 13, 'CANCELADA', '2023-08-27', '2023-08-27', '0'),
(16, 'exponer', 'trabajo de forma', 13, 2, 'CANCELADA', '2023-08-05', '2023-08-18', '0'),
(18, 'estudiantes', 'uabjksz', 15, 2, 'CANCELADA', '2023-08-25', '2023-08-31', '0'),
(19, 'UNIVERSIDAD', ':)', 15, 17, 'CANCELADA', '2023-10-26', '2023-08-26', '0'),
(20, 'Cocinar', 'Hacer spaguetti', 3, 2, 'CANCELADA', '2023-12-05', '2023-12-05', '0'),
(21, 'Cocinar', 'Hacer spaguetti', 3, 4, 'PENDIENTE', '2023-11-30', '2023-12-21', '0'),
(22, 'Proyecto Iot', 'Terminar Node red', 15, 19, 'EN PROGRESO', '2023-11-30', '2023-12-05', '0'),
(23, 'Hacer ejercicio', 'Hacer pesas', 3, 4, 'EN PROGRESO', '2024-01-17', '2024-01-19', 'Universidad Tecnológica'),
(24, 'Tarea 1', '', 1, 19, 'PENDIENTE', '2024-01-18', '2024-01-19', 'Avenida Norte, Universidad Tecnológica'),
(25, 'Tarea 1.1', '', 3, 2, 'EN PROGRESO', '2024-01-18', '2024-01-20', ' Universidad Tecnológica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `encargado`
--

CREATE TABLE `encargado` (
  `idActividad` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estatus`
--

CREATE TABLE `estatus` (
  `nombreEstatus` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estatus`
--

INSERT INTO `estatus` (`nombreEstatus`) VALUES
('ATRASADA'),
('CANCELADA'),
('EN PROGRESO'),
('PENDIENTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participante`
--

CREATE TABLE `participante` (
  `idActividad` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `nombreRol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`nombreRol`) VALUES
('ENCARGADO'),
('PARTICIPANTE');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contrasena` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `nombreRol` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `nombre`, `correo`, `contrasena`, `telefono`, `nombreRol`) VALUES
(1, 'Christian', 'dragonhight@gmail.com', '123456789', '218153528', 'ENCARGADO'),
(2, 'Brayan', 'brayandaniel993@gmail.com', '456789', '234567', 'PARTICIPANTE'),
(3, 'Mildred', 'mildred@gmail.com', '123456', '4182388786', 'ENCARGADO'),
(4, 'Armando', 'armanditopro@gmail.com', '12345678', '2141412414', 'PARTICIPANTE'),
(10, 'claudio', 'claudio@gmail.com', '1234', '225325', 'PARTICIPANTE'),
(15, 'Jesus', 'jesus@gmail.com', '1234', '4181235434', 'ENCARGADO'),
(18, 'papa', 'papa@gmail.com', '12345', '4182388786', 'ENCARGADO'),
(19, 'Marcos', 'marquionti@gmail.com', '12345', '4686861392', 'PARTICIPANTE');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`idActividad`),
  ADD KEY `FK_Encargado` (`Encargado`),
  ADD KEY `FK_Participante` (`Participante`),
  ADD KEY `FK_Estatus` (`Estatus`);

--
-- Indices de la tabla `encargado`
--
ALTER TABLE `encargado`
  ADD KEY `FK_idAct_Encargado` (`idActividad`),
  ADD KEY `FK_idUser_Encargado` (`idUsuario`);

--
-- Indices de la tabla `estatus`
--
ALTER TABLE `estatus`
  ADD PRIMARY KEY (`nombreEstatus`);

--
-- Indices de la tabla `participante`
--
ALTER TABLE `participante`
  ADD KEY `FK_idAct_Participante` (`idActividad`),
  ADD KEY `FK_idUser_Participante` (`idUsuario`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`nombreRol`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD KEY `FK_idRol` (`nombreRol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `idActividad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `FK_Estatus` FOREIGN KEY (`Estatus`) REFERENCES `estatus` (`nombreEstatus`);

--
-- Filtros para la tabla `encargado`
--
ALTER TABLE `encargado`
  ADD CONSTRAINT `FK_idAct_Encargado` FOREIGN KEY (`idActividad`) REFERENCES `actividades` (`idActividad`),
  ADD CONSTRAINT `FK_idUser_Encargado` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `participante`
--
ALTER TABLE `participante`
  ADD CONSTRAINT `FK_idAct_Participante` FOREIGN KEY (`idActividad`) REFERENCES `actividades` (`idActividad`),
  ADD CONSTRAINT `FK_idUser_Participante` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_idRol` FOREIGN KEY (`nombreRol`) REFERENCES `roles` (`nombreRol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
