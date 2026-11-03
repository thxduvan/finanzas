create database finanzas_db;
use finanzas_db;
create table categorias(
id_categoria int auto_increment primary key,
nombre varchar(50) not null
);
insert into categorias(nombre) values
("comida"),("salud"),("servicios"),("salario");
create table movimientos(
id_movimiento int auto_increment primary key,
monto decimal(10,2) not null,
fecha date not null,
id_categoria int not null,
foreign key (id_categoria) references categorias(id_categoria)
);
insert into movimientos(monto,fecha,id_categoria) values
(250000.00, '2026-10-01', 4), -- Salario
(60000.00, '2026-10-05', 1), -- Comida
(120000.00, '2026-10-10', 3), -- Servicios
(45000.00, '2026-10-15', 2); -- Salud