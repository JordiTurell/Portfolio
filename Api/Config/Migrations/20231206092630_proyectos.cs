using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Config.Migrations
{
    /// <inheritdoc />
    public partial class proyectos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Proyecto",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    title = table.Column<string>(type: "text", nullable: true),
                    description = table.Column<string>(type: "text", nullable: true),
                    gohst = table.Column<bool>(type: "boolean", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proyecto", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProyectosImagenes",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    idproyecto = table.Column<Guid>(type: "uuid", nullable: false),
                    imagen = table.Column<byte[]>(type: "bytea", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProyectosImagenes", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "ProyectoSkills",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    idproyecto = table.Column<Guid>(type: "uuid", nullable: false),
                    idskill = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProyectoSkills", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Proyecto");

            migrationBuilder.DropTable(
                name: "ProyectosImagenes");

            migrationBuilder.DropTable(
                name: "ProyectoSkills");
        }
    }
}
